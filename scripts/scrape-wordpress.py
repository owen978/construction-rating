#!/usr/bin/env python3
"""
Scrape all company listings from the old WordPress/MyListing site
via the staging URL (occmj26rze.wpdns.site) and save as JSON.
"""

import json
import re
import time
import urllib.request
import urllib.error
from html import unescape

BASE_URL = "https://occmj26rze.wpdns.site"
SITEMAP_URL = f"{BASE_URL}/job_listing-sitemap.xml"
OUTPUT_FILE = "/Users/owenh/construction-rating/data/wordpress-listings.json"


def fetch(url, retries=3):
    """Fetch a URL with retries."""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0 (compatible; MigrationBot/1.0)'
            })
            with urllib.request.urlopen(req, timeout=30) as response:
                return response.read().decode('utf-8', errors='replace')
        except Exception as e:
            if attempt < retries - 1:
                print(f"  Retry {attempt+1} for {url}: {e}")
                time.sleep(2)
            else:
                print(f"  FAILED: {url}: {e}")
                return None


def clean(text):
    """Clean HTML tags and whitespace."""
    if not text:
        return ""
    text = re.sub(r'<[^>]+>', ' ', text)
    text = unescape(text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def get_listing_urls():
    """Get all listing URLs from the sitemap."""
    print("Fetching sitemap...")
    xml = fetch(SITEMAP_URL)
    if not xml:
        return []
    urls = re.findall(r'<loc>(.*?)</loc>', xml)
    # Convert constructionrating.co.uk URLs to wpdns.site
    converted = []
    for url in urls:
        if '/listings/' in url and url.endswith('/listings/'):
            continue  # Skip the index page
        new_url = url.replace('https://constructionrating.co.uk', BASE_URL)
        new_url = new_url.replace('https://www.constructionrating.co.uk', BASE_URL)
        converted.append((new_url, url))
    print(f"Found {len(converted)} listings")
    return converted


def extract_listing(html, original_url):
    """Extract structured data from a listing page."""
    data = {}

    # Slug from URL
    slug_match = re.findall(r'/listing/([^/]+)/?$', original_url)
    data['slug'] = slug_match[0] if slug_match else ''
    data['original_url'] = original_url

    # Post ID
    post_id = re.findall(r'postid-(\d+)', html)
    data['wp_post_id'] = int(post_id[0]) if post_id else None

    # Company name from h1
    h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
    data['name'] = clean(h1[0]) if h1 else ''

    # Listing type from body class
    listing_types = re.findall(r'type-(company[a-zA-Z0-9_-]*)', html)
    data['listing_type'] = listing_types[0] if listing_types else 'company'

    # Category
    # Look in the profile header area for the primary category
    body_cats = re.findall(r'single-job_listing.*?type-([a-zA-Z0-9_-]+)', html)

    # Categories from the listing card itself (first one is usually primary)
    cat_links = re.findall(r'<a[^>]*href=["\']https?://(?:www\.)?constructionrating\.co\.uk/category/([^"\'\/]+)', html)
    data['categories'] = list(dict.fromkeys(cat_links))  # Deduplicate preserving order

    # Description
    desc_patterns = [
        r'block-field-job_description.*?<div[^>]*class=["\']block-body["\'][^>]*>(.*?)</div>',
        r'listing-description["\'][^>]*>(.*?)</div>',
        r'class=["\']job-description["\'][^>]*>(.*?)</div>',
    ]
    for pattern in desc_patterns:
        desc_match = re.findall(pattern, html, re.DOTALL)
        if desc_match:
            data['description'] = clean(desc_match[0])
            break
    else:
        data['description'] = ''

    # Location
    loc_patterns = [
        r'block-field-job_location.*?<div[^>]*class=["\']block-body["\'][^>]*>(.*?)</div>',
        r'listing-location["\'][^>]*>(.*?)</div>',
    ]
    for pattern in loc_patterns:
        loc_match = re.findall(pattern, html, re.DOTALL)
        if loc_match:
            data['location'] = clean(loc_match[0])
            break
    else:
        data['location'] = ''

    # Regions
    region_links = re.findall(r'href=["\']https?://(?:www\.)?constructionrating\.co\.uk/region/([^"\'\/]+)', html)
    data['regions'] = list(dict.fromkeys(region_links))

    # Cover image
    cover = re.findall(r'profile-cover.*?background-image:\s*url\(["\']?([^"\')\s]+)', html, re.DOTALL)
    data['cover_image'] = cover[0] if cover else ''

    # Logo image
    logo = re.findall(r'listing-logo.*?(?:src|background-image[^>]*url\()["\']?([^"\')\s>]+)', html, re.DOTALL)
    data['logo'] = logo[0] if logo else ''

    # Company name tag (alternative name field)
    company_name_tag = re.findall(r'href=["\']https?://(?:www\.)?constructionrating\.co\.uk/company-name/([^"\'\/]+)', html)
    data['company_name_tags'] = list(dict.fromkeys(company_name_tag))

    # Website URL
    website = re.findall(r'block-field-job_website.*?href=["\']([^"\']+)', html, re.DOTALL)
    if not website:
        website = re.findall(r'listing-website.*?href=["\']([^"\']+)', html, re.DOTALL)
    data['website'] = website[0] if website else ''

    # Phone
    phone = re.findall(r'block-field-job_phone.*?href=["\']tel:([^"\']+)', html, re.DOTALL)
    data['phone'] = clean(phone[0]) if phone else ''

    # Email
    email = re.findall(r'block-field-job_email.*?href=["\']mailto:([^"\']+)', html, re.DOTALL)
    data['email'] = clean(email[0]) if email else ''

    # Tags
    tags = re.findall(r'href=["\']https?://(?:www\.)?constructionrating\.co\.uk/case27_job_listing_tags/([^"\'\/]+)', html)
    data['tags'] = list(dict.fromkeys(tags))

    # Tagline
    tagline = re.findall(r'profile-tagline["\'][^>]*>(.*?)</', html, re.DOTALL)
    data['tagline'] = clean(tagline[0]) if tagline else ''

    return data


def main():
    import os
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)

    listing_urls = get_listing_urls()

    listings = []
    for i, (url, original_url) in enumerate(listing_urls):
        print(f"[{i+1}/{len(listing_urls)}] Scraping: {original_url.split('/listing/')[-1].rstrip('/')}")
        html = fetch(url)
        if html:
            data = extract_listing(html, original_url)
            listings.append(data)
            print(f"  ✓ {data['name']} ({', '.join(data['categories'][:2]) or 'no category'})")
        else:
            print(f"  ✗ Failed to fetch")

        # Be polite - small delay between requests
        if i < len(listing_urls) - 1:
            time.sleep(0.3)

    # Save to JSON
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(listings, f, indent=2, ensure_ascii=False)

    print(f"\n{'='*60}")
    print(f"Scraped {len(listings)} listings")
    print(f"Saved to: {OUTPUT_FILE}")

    # Summary stats
    with_desc = sum(1 for l in listings if l['description'])
    with_cover = sum(1 for l in listings if l['cover_image'])
    with_cats = sum(1 for l in listings if l['categories'])
    with_regions = sum(1 for l in listings if l['regions'])
    print(f"  With description: {with_desc}")
    print(f"  With cover image: {with_cover}")
    print(f"  With categories: {with_cats}")
    print(f"  With regions: {with_regions}")

    # List categories
    all_cats = set()
    for l in listings:
        all_cats.update(l['categories'])
    print(f"  Categories: {all_cats}")


if __name__ == '__main__':
    main()
