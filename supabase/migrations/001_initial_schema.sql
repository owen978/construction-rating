-- ============================================
-- Construction Rating - Initial Database Schema
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- REGIONS
-- ============================================
create table public.regions (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  company_count int default 0,
  created_at timestamptz default now()
);

alter table public.regions enable row level security;
create policy "Regions are viewable by everyone" on public.regions for select using (true);

-- Seed regions
insert into public.regions (slug, name) values
  ('east-anglia', 'East Anglia'),
  ('east-midlands', 'East Midlands'),
  ('greater-london', 'Greater London'),
  ('north-east-england', 'North East England'),
  ('north-west-england', 'North West England'),
  ('north-wales', 'North Wales'),
  ('south-wales', 'South Wales'),
  ('south-east-england', 'South East England'),
  ('south-west-england', 'South West England'),
  ('west-midlands', 'West Midlands'),
  ('yorkshire-humberside', 'Yorkshire & Humberside'),
  ('scotland', 'Scotland'),
  ('northern-ireland', 'Northern Ireland'),
  ('uk-wide', 'UK Wide');

-- ============================================
-- COMPANIES
-- ============================================
create table public.companies (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  logo_url text,
  website text,
  phone text,
  address text,
  region text,
  category text check (category in ('main_contractor', 'house_developer', 'private_developer', 'government')),
  companies_house_number text,
  founded_year int,
  employee_count text,
  revenue_bracket text,
  -- AI-generated content
  ai_summary text,
  ai_risk_analysis text,
  ai_payment_analysis text,
  ai_review_summary text,
  -- Aggregated ratings
  avg_payment_reliability numeric(3,2),
  avg_communication numeric(3,2),
  avg_site_management numeric(3,2),
  avg_health_and_safety numeric(3,2),
  avg_overall numeric(3,2),
  review_count int default 0,
  would_work_again_pct numeric(5,2),
  is_verified boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index idx_companies_slug on public.companies(slug);
create index idx_companies_region on public.companies(region);
create index idx_companies_category on public.companies(category);
create index idx_companies_avg_overall on public.companies(avg_overall desc nulls last);
create index idx_companies_review_count on public.companies(review_count desc);
create index idx_companies_name_trgm on public.companies using gin (name gin_trgm_ops);

alter table public.companies enable row level security;

-- Everyone can view basic company info
create policy "Companies are viewable by everyone" on public.companies
  for select using (true);

-- Only admins can insert/update/delete (via service role)
create policy "Service role can manage companies" on public.companies
  for all using (auth.role() = 'service_role');

-- ============================================
-- PROFILES (extends Supabase Auth)
-- ============================================
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  display_name text,
  trade text,
  company_name text,
  region text,
  is_verified boolean default false,
  review_count int default 0,
  reputation_score int default 0,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

-- Auto-create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- REVIEWS
-- ============================================
create table public.reviews (
  id uuid primary key default uuid_generate_v4(),
  company_id uuid not null references public.companies(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid,
  payment_reliability int not null check (payment_reliability between 1 and 5),
  communication int not null check (communication between 1 and 5),
  site_management int not null check (site_management between 1 and 5),
  health_and_safety int not null check (health_and_safety between 1 and 5),
  would_work_again boolean not null,
  review_title text,
  review_text text not null,
  your_trade text,
  relationship text check (relationship in ('subcontractor', 'supplier', 'employee', 'client')),
  project_value_bracket text,
  is_verified boolean default false,
  is_anonymous boolean default false,
  helpful_count int default 0,
  created_at timestamptz default now()
);

create index idx_reviews_company on public.reviews(company_id);
create index idx_reviews_user on public.reviews(user_id);
create index idx_reviews_created on public.reviews(created_at desc);

alter table public.reviews enable row level security;

-- Everyone can view reviews
create policy "Reviews are viewable by everyone" on public.reviews
  for select using (true);

-- Logged-in users can create reviews
create policy "Authenticated users can create reviews" on public.reviews
  for insert with check (auth.uid() = user_id);

-- Users can update their own reviews
create policy "Users can update own reviews" on public.reviews
  for update using (auth.uid() = user_id);

-- ============================================
-- REVIEW AGGREGATION TRIGGER
-- ============================================
create or replace function public.update_company_ratings()
returns trigger as $$
declare
  company_record record;
begin
  -- Calculate aggregated ratings for the affected company
  select
    coalesce(avg(payment_reliability), 0) as avg_pr,
    coalesce(avg(communication), 0) as avg_comm,
    coalesce(avg(site_management), 0) as avg_sm,
    coalesce(avg(health_and_safety), 0) as avg_hs,
    coalesce(avg((payment_reliability + communication + site_management + health_and_safety) / 4.0), 0) as avg_all,
    count(*) as cnt,
    coalesce(
      round(count(*) filter (where would_work_again = true) * 100.0 / nullif(count(*), 0), 1),
      0
    ) as wwa_pct
  into company_record
  from public.reviews
  where company_id = coalesce(new.company_id, old.company_id);

  update public.companies set
    avg_payment_reliability = round(company_record.avg_pr, 2),
    avg_communication = round(company_record.avg_comm, 2),
    avg_site_management = round(company_record.avg_sm, 2),
    avg_health_and_safety = round(company_record.avg_hs, 2),
    avg_overall = round(company_record.avg_all, 2),
    review_count = company_record.cnt,
    would_work_again_pct = company_record.wwa_pct,
    updated_at = now()
  where id = coalesce(new.company_id, old.company_id);

  -- Also update the reviewer's profile review count
  if tg_op = 'INSERT' then
    update public.profiles set
      review_count = review_count + 1,
      reputation_score = reputation_score + 10
    where id = new.user_id;
  end if;

  return coalesce(new, old);
end;
$$ language plpgsql security definer;

create trigger on_review_change
  after insert or update or delete on public.reviews
  for each row execute function public.update_company_ratings();

-- ============================================
-- PROJECTS
-- ============================================
create table public.projects (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  name text not null,
  description text,
  company_id uuid not null references public.companies(id) on delete cascade,
  region text,
  project_type text check (project_type in ('residential', 'commercial', 'infrastructure', 'mixed')),
  status text check (status in ('planning', 'in_progress', 'completed')),
  value_bracket text,
  start_date date,
  completion_date date,
  address text,
  lat numeric,
  lng numeric,
  ai_summary text,
  review_count int default 0,
  created_at timestamptz default now()
);

create index idx_projects_company on public.projects(company_id);
create index idx_projects_slug on public.projects(slug);

alter table public.projects enable row level security;

create policy "Projects are viewable by everyone" on public.projects
  for select using (true);

create policy "Service role can manage projects" on public.projects
  for all using (auth.role() = 'service_role');

-- Add foreign key from reviews to projects now that projects table exists
alter table public.reviews
  add constraint fk_reviews_project
  foreign key (project_id) references public.projects(id) on delete set null;

-- ============================================
-- BLOG POSTS
-- ============================================
create table public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  content text not null,
  excerpt text,
  category text,
  featured_image_url text,
  is_published boolean default false,
  author text,
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  published_at timestamptz
);

create index idx_blog_slug on public.blog_posts(slug);
create index idx_blog_published on public.blog_posts(is_published, published_at desc);

alter table public.blog_posts enable row level security;

create policy "Published posts are viewable by everyone" on public.blog_posts
  for select using (is_published = true);

create policy "Service role can manage posts" on public.blog_posts
  for all using (auth.role() = 'service_role');

-- ============================================
-- LEAD EVENTS
-- ============================================
create table public.lead_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete set null,
  email text,
  event_type text not null check (event_type in ('signup', 'review_posted', 'report_viewed', 'cta_clicked')),
  source_page text,
  cta_type text check (cta_type in ('copilot', 'newbuild', 'ghl_whitelabel', 'consulting', null)),
  synced_to_ghl boolean default false,
  created_at timestamptz default now()
);

create index idx_lead_events_user on public.lead_events(user_id);
create index idx_lead_events_synced on public.lead_events(synced_to_ghl) where synced_to_ghl = false;

alter table public.lead_events enable row level security;

-- Only service role can read/write lead events
create policy "Service role can manage lead events" on public.lead_events
  for all using (auth.role() = 'service_role');

-- Logged in users can insert their own lead events
create policy "Users can create own lead events" on public.lead_events
  for insert with check (auth.uid() = user_id);

-- ============================================
-- HELPER: Enable trigram extension for search
-- ============================================
create extension if not exists pg_trgm;
