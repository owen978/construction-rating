-- Auto-generated import from WordPress/MyListing data
-- 113 companies

BEGIN;

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'kier-group',
  'Kier Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Cover-Image-1.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'amey-plc',
  'Amey PLC',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Cover-Image-3.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'isg',
  'ISG Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Cover-Image-4.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'keller-group-plc',
  'Keller Group plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Cover-Image-5.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mace',
  'Mace',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Cover-Image-7.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'pp-builders',
  'P&P Builders',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/34.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'midgard-ltd',
  'Midgard Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/40.jpg',
  NULL,
  NULL,
  'greater-london',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bellway',
  'Bellway',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/41.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'cairn-homes',
  'Cairn Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/62.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'barnwood-limited',
  'Barnwood Limited',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/64.jpg',
  NULL,
  NULL,
  'south-west-england',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'balfour-beatty-plc',
  'Balfour Beatty PLC',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Untitled-design-1.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'm-group-services',
  'M Group Services',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'vaughan-construction',
  'Vaughan Construction Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-1.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'tarmac',
  'Tarmac',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-2.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'carter-lauren-construction',
  'Carter Lauren Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-4.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'hale-construction-jg-hale',
  'Hale Construction / JG Hale',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-5.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'lcb-construction',
  'LCB Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-6.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bray-slaughter-ltd',
  'Bray & Slaughter Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-7.jpg',
  NULL,
  NULL,
  'south-west-england',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'morganstone-ltd',
  'Morganstone Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-8.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'willis-construction-ltd',
  'Willis Construction Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-9.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'encon-construction',
  'Encon Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-10.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'galliard-homes',
  'Galliard Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-11.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'ecoworld-london',
  'EcoWorld London',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-13.jpg',
  NULL,
  NULL,
  'greater-london',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'toureen-group',
  'Toureen Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-14.jpg',
  NULL,
  NULL,
  'greater-london',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'higgins-group',
  'Higgins Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-15.jpg',
  NULL,
  NULL,
  'greater-london',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bugler-developments',
  'Bugler Developments',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-16.jpg',
  NULL,
  NULL,
  'greater-london',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mulalley-co',
  'Mulalley & Co',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-17.jpg',
  NULL,
  NULL,
  NULL,
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'laing-orourke',
  'Laing O''Rourke',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-18.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'glenman-corporation-ltd',
  'Glenman Corporation Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-19.jpg',
  NULL,
  NULL,
  'greater-london',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'vistry-group-2',
  'Vistry Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-45.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'story-homes',
  'Story Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-50.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'pa-contract-services-ltd',
  'PA Contract Services Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/PA-Copy-of-Untitled-Design.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'morgan-sindall',
  'Morgan Sindall',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-37.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'wates-group',
  'Wates Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Cover-Image-8.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'watkin-jones-sons',
  'Watkin Jones & Sons',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-23.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'united-living',
  'United Living',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/3.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'tide-construction-limited',
  'Tide Construction Limited',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-20.jpg',
  NULL,
  NULL,
  'greater-london',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'lendlease-europe',
  'Lendlease Europe',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/8.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'hill-holdings',
  'Hill Holdings',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-38.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'barratt-developments',
  'Barratt Developments',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-44.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'red-construction-group',
  'Red Construction Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/01/Balfour-Beatty-12.jpg',
  NULL,
  NULL,
  'greater-london',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'keepmoat-homes',
  'Keepmoat Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/24.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'taylor-wimpey',
  'Taylor Wimpey',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-43.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'persimmon',
  'Persimmon',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-42.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'berkeley-group',
  'Berkeley Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-41.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'redrow-homes',
  'Redrow Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/43.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'countryside-properties',
  'Countryside Properties',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-40.jpg',
  NULL,
  NULL,
  'uk-wide',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bloor-homes',
  'Bloor Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/45.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'cala-homes',
  'Cala Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/46.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'miller-homes',
  'Miller Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/47.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'crest-nicholson',
  'Crest Nicholson',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-39.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'avant-homes',
  'Avant Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/49.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mj-gleeson-group',
  'MJ Gleeson Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-36.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mccarthy-stone',
  'McCarthy Stone',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-35.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'morris-homes',
  'Morris Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-34.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'st-modwen-homes',
  'St Modwen Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-33.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'telford-homes',
  'Telford Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-32.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'london-square',
  'London Square',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-31.jpg',
  NULL,
  NULL,
  'greater-london',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'wain-group',
  'Wain Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/56.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'fairview-holdings',
  'Fairview Holdings',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-30.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'springfield-properties',
  'Springfield Properties',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-29.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'weston-group',
  'Weston Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-28.jpg',
  NULL,
  NULL,
  'uk-wide',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'city-country',
  'City & Country',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-21.jpg',
  NULL,
  NULL,
  'uk-wide',
  'private_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'beacon-hill-group',
  'Beacon Hill Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-27.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bovis-homes',
  'Bovis Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/63.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'harron-homes',
  'Harron Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-26.jpg',
  NULL,
  NULL,
  'east-midlands',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'abbey-developments',
  'Abbey Developments',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-25.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'emerson-developments',
  'Emerson Developments',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-24.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'strata-homes',
  'Strata Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/68.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'churchill-retirement',
  'Churchill Retirement',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-22.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bewley-homes',
  'Bewley Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/70.jpg',
  NULL,
  NULL,
  NULL,
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'croudace-homes',
  'Croudace Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-46.jpg',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mount-anvil',
  'Mount Anvil',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-47.jpg',
  NULL,
  NULL,
  'greater-london',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'anwyl-group',
  'Anwyl Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-48.jpg',
  NULL,
  NULL,
  'north-wales',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'hopkins-homes',
  'Hopkins Homes',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2023/11/Balfour-Beatty-49.jpg',
  NULL,
  NULL,
  'east-anglia',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'homeserve-plc',
  'Homeserve Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/76.png',
  NULL,
  NULL,
  'uk-wide',
  'house_developer'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'j-murphy-sons-ltd',
  'J Murphy & Sons Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/77.png',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'skanska-uk-plc',
  'Skanska UK Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/78.png',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'vinci-plc',
  'Vinci Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/79.png',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bowmer-kirkland-ltd',
  'Bowmer & Kirkland Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/80.png',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'volkerwessels-uk-ltd',
  'VolkerWessels UK Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/81.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'costain-group-plc',
  'Costain Group Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/82.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'willmott-dixon-holdings-ltd',
  'Willmott Dixon Holdings Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/84.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bam-nuttall-ltd',
  'Bam Nuttall Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/85.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'sir-robert-mcalpine',
  'Sir Robert McAlpine',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/86.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'john-graham-holdings-ltd',
  'John Graham Holdings Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/87.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bam-construct-uk-ltd',
  'Bam Construct UK Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/88.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mears-group-plc',
  'Mears Group Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/89.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'equans',
  'Equans',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/02/90.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'multiplex-construction-europe-ltd',
  'Multiplex Construction Europe Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/91.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'renew-holdings-plc',
  'Renew Holdings Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/92.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'winvic-group-ltd',
  'Winvic Group Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/93.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'robertson-group',
  'Robertson Group',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/94.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mclaren-construction-group-plc',
  'McLaren Construction Group Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/95.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'mclaughlin-harvey-ltd',
  'McLaughlin & Harvey Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/96.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'hill-partnerships-ltd',
  'Hill Partnerships Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/97.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'bouygues-u-k-ltd',
  'Bouygues (U.K.) Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/98.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'ardmore-construction-ltd',
  'Ardmore Construction Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/99.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'john-sisk-son-ltd',
  'John Sisk & Son Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/100.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'keltbray-group-ltd',
  'Keltbray Group Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/101.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'caddick-group-plc',
  'Caddick Group Plc',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/102.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'tilbury-douglas-construction-ltd',
  'Tilbury Douglas Construction Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/103.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'carey-group-ltd',
  'Carey Group Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/104.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'seddon-group-ltd',
  'Seddon Group Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/105.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'jones-bros',
  'Jones Bros',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/106.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'speller-metcalfe',
  'Speller Metcalfe',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/107.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'andrew-scott',
  'Andrew Scott',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/108.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'sweet-projects',
  'Sweet Projects',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/109.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'wynne-construction',
  'Wynne Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/113.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'john-weaver-contractors',
  'John Weaver Contractors',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/111.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'brenig-construction',
  'Brenig Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/112.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'beard-construction',
  'Beard Construction',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/114.jpg',
  NULL,
  NULL,
  'uk-wide',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)
VALUES (
  'b-e-c-t-building-contractors-ltd',
  'B E C T Building Contractors Ltd',
  NULL,
  'https://constructionrating.co.uk/wp-content/uploads/2024/03/115.jpg',
  NULL,
  NULL,
  'south-wales',
  'main_contractor'
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),
  region = COALESCE(EXCLUDED.region, companies.region),
  category = COALESCE(EXCLUDED.category, companies.category);

-- Update region company counts
UPDATE regions SET company_count = (
  SELECT COUNT(*) FROM companies WHERE companies.region = regions.slug
);

COMMIT;