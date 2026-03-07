#!/usr/bin/env python3
"""
Import scraped WordPress listings into Supabase.
Generates SQL that can be run in the Supabase SQL editor,
or uses the Supabase REST API directly.
"""

import json
import os
import urllib.request
import urllib.error

# Config
DATA_FILE = "/Users/owenh/construction-rating/data/wordpress-listings.json"
SQL_FILE = "/Users/owenh/construction-rating/data/import-companies.sql"
SUPABASE_URL = "https://awllmkwnwtvjnxaljdjx.supabase.co"
SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bGxta3dud3R2am54YWxqZGp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjgwNTAzNCwiZXhwIjoyMDg4MzgxMDM0fQ.94c_IG-bosbMgrcKwFst1m9boebRa2Zl55KB9xzTYsg"

# Region slug mapping (WordPress -> Supabase)
# Supabase regions: east-anglia, east-midlands, greater-london, north-east-england,
# north-west-england, north-wales, south-wales, south-east-england, south-west-england,
# west-midlands, yorkshire-humberside, scotland, northern-ireland, uk-wide
REGION_MAP = {
    'uk': 'uk-wide',
    'london': 'greater-london',
    'greater-london': 'greater-london',
    'south-east-england': 'south-east-england',
    'south-west-england': 'south-west-england',
    'east-anglia': 'east-anglia',
    'east-midlands': 'east-midlands',
    'west-midlands': 'west-midlands',
    'north-west-england': 'north-west-england',
    'yorkshire-humberside': 'yorkshire-humberside',
    'north-wales': 'north-wales',
    'south-wales': 'south-wales',
}

# Category mapping (DB constraint: main_contractor, house_developer, private_developer, government)
CATEGORY_MAP = {
    'house-developer': 'house_developer',
    'main-contractor': 'main_contractor',
    'private-developer': 'private_developer',
    'government': 'government',
}

# Known project listings (not companies) - these have project-specific names
PROJECT_PREFIXES = ['st-modwen-glan-l']  # St Modwen project pages


def sql_escape(s):
    """Escape a string for SQL."""
    if s is None:
        return 'NULL'
    return "'" + s.replace("'", "''") + "'"


def determine_category(listing):
    """Determine the primary category for a listing.
    Since our scraper captured all page categories, we need to
    use the listing_type and other heuristics.
    DB constraint values: main_contractor, house_developer, private_developer, government"""
    name = listing['name'].lower()
    listing_type = listing.get('listing_type', '')

    # Known house developers / homebuilders
    house_keywords = ['homes', 'home', 'housing', 'retirement', 'wimpey', 'persimmon',
                       'bellway', 'barratt', 'redrow', 'bloor', 'cala', 'miller',
                       'crest nicholson', 'avant', 'gleeson', 'mccarthy', 'morris',
                       'modwen homes', 'telford homes', 'keepmoat', 'bovis', 'harron',
                       'strata', 'bewley', 'croudace', 'mount anvil', 'anwyl',
                       'hopkins', 'vistry', 'story', 'abbey dev', 'emerson dev',
                       'wain', 'fairview', 'springfield', 'london square', 'beacon hill',
                       'cairn']
    if any(x in name for x in house_keywords):
        return 'house_developer'

    # Known private developers
    private_keywords = ['developments', 'properties', 'ecoworld', 'galliard',
                         'countryside', 'city & country', 'weston group',
                         'bugler', 'higgins']
    if any(x in name for x in private_keywords):
        return 'private_developer'

    # Everything else is likely a main contractor
    return 'main_contractor'


def is_project(listing):
    """Check if this listing is a project rather than a company."""
    slug = listing['slug']
    name = listing['name'].lower()

    # Check for project-like patterns
    for prefix in PROJECT_PREFIXES:
        if slug.startswith(prefix):
            return True

    # Check for "Phase" in name (likely a project)
    if 'phase' in name:
        return True

    return False


def main():
    # Load scraped data
    with open(DATA_FILE) as f:
        listings = json.load(f)

    print(f"Loaded {len(listings)} listings")

    # Separate companies from projects
    companies = []
    projects = []
    seen_slugs = set()

    for listing in listings:
        if is_project(listing):
            projects.append(listing)
            continue

        # Deduplicate by slug
        if listing['slug'] in seen_slugs:
            continue
        seen_slugs.add(listing['slug'])
        companies.append(listing)

    print(f"Companies: {len(companies)}")
    print(f"Projects: {len(projects)}")

    # Build SQL
    sql_lines = []
    sql_lines.append("-- Auto-generated import from WordPress/MyListing data")
    sql_lines.append(f"-- {len(companies)} companies")
    sql_lines.append("")
    sql_lines.append("BEGIN;")
    sql_lines.append("")

    for company in companies:
        # Determine region (use first non-UK region, or UK)
        region = None
        for r in company.get('regions', []):
            mapped = REGION_MAP.get(r)
            if mapped and mapped != 'uk-wide':
                region = mapped
                break
        if not region and company.get('regions'):
            region = REGION_MAP.get(company['regions'][0], 'uk-wide')

        category = determine_category(company)
        name = company['name']
        slug = company['slug']
        description = company.get('description') or None
        website = company.get('website') or None
        phone = company.get('phone') or None
        cover = company.get('cover_image') or None

        # Clean cover image (skip template placeholders)
        if cover and '{{' in cover:
            cover = None

        sql_lines.append(f"INSERT INTO companies (slug, name, description, logo_url, website, phone, region, category)")
        sql_lines.append(f"VALUES (")
        sql_lines.append(f"  {sql_escape(slug)},")
        sql_lines.append(f"  {sql_escape(name)},")
        sql_lines.append(f"  {sql_escape(description)},")
        sql_lines.append(f"  {sql_escape(cover)},")  # Using cover as logo for now
        sql_lines.append(f"  {sql_escape(website)},")
        sql_lines.append(f"  {sql_escape(phone)},")
        sql_lines.append(f"  {sql_escape(region)},")
        sql_lines.append(f"  {sql_escape(category)}")
        sql_lines.append(f") ON CONFLICT (slug) DO UPDATE SET")
        sql_lines.append(f"  name = EXCLUDED.name,")
        sql_lines.append(f"  logo_url = COALESCE(EXCLUDED.logo_url, companies.logo_url),")
        sql_lines.append(f"  region = COALESCE(EXCLUDED.region, companies.region),")
        sql_lines.append(f"  category = COALESCE(EXCLUDED.category, companies.category);")
        sql_lines.append("")

    # Update region counts
    sql_lines.append("-- Update region company counts")
    sql_lines.append("UPDATE regions SET company_count = (")
    sql_lines.append("  SELECT COUNT(*) FROM companies WHERE companies.region = regions.slug")
    sql_lines.append(");")
    sql_lines.append("")

    sql_lines.append("COMMIT;")

    # Write SQL file
    os.makedirs(os.path.dirname(SQL_FILE), exist_ok=True)
    with open(SQL_FILE, 'w') as f:
        f.write('\n'.join(sql_lines))

    print(f"\nSQL written to: {SQL_FILE}")

    # Now also try to import directly via Supabase REST API
    print("\n--- Importing via Supabase REST API ---")

    success = 0
    errors = 0

    for company in companies:
        # Determine region
        region = None
        for r in company.get('regions', []):
            mapped = REGION_MAP.get(r)
            if mapped and mapped != 'uk-wide':
                region = mapped
                break
        if not region and company.get('regions'):
            region = REGION_MAP.get(company['regions'][0], 'uk-wide')

        category = determine_category(company)
        cover = company.get('cover_image') or None
        if cover and '{{' in cover:
            cover = None

        payload = {
            'slug': company['slug'],
            'name': company['name'],
            'description': company.get('description') or None,
            'logo_url': cover,
            'website': company.get('website') or None,
            'phone': company.get('phone') or None,
            'region': region,
            'category': category,
        }

        # Remove None values
        payload = {k: v for k, v in payload.items() if v is not None}

        data = json.dumps(payload).encode('utf-8')

        req = urllib.request.Request(
            f"{SUPABASE_URL}/rest/v1/companies",
            data=data,
            headers={
                'Content-Type': 'application/json',
                'apikey': SUPABASE_SERVICE_KEY,
                'Authorization': f'Bearer {SUPABASE_SERVICE_KEY}',
                'Prefer': 'resolution=merge-duplicates',
            },
            method='POST'
        )

        try:
            with urllib.request.urlopen(req, timeout=10) as response:
                success += 1
                if success % 20 == 0:
                    print(f"  Imported {success}/{len(companies)}...")
        except urllib.error.HTTPError as e:
            body = e.read().decode()
            errors += 1
            if errors <= 5:
                print(f"  Error importing {company['name']}: {e.code} - {body[:200]}")

    print(f"\nImport complete: {success} success, {errors} errors out of {len(companies)} companies")

    # Now handle projects (link to parent company where possible)
    if projects:
        print(f"\n--- Projects to link later ---")
        for p in projects:
            print(f"  {p['name']} (slug: {p['slug']}, regions: {p.get('regions',[])})")


if __name__ == '__main__':
    main()
