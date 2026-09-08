# Poolside Business Brokers Website

## About the Business
Poolside Business Brokers is a sell-side advisory firm for pool service businesses (pool routes), run as a team led by Tara. We charge an industry-low 12% commission and serve all 50 states. Phone: (512) 693-7016. In content, refer to Tara by name; refer to the rest of the team collectively ("as a team," "our team") without naming or specifying anyone else.

IMPORTANT — do not conflate these two numbers:
- **1,500+ accounts** is the founders' *personal* operating history: combined, they've bought and sold over 1,500 accounts running their own separate pool service companies, before ever brokering a deal for someone else. Use this for founder/operator-credibility content (About page, bios, "why trust our valuations").
- **300+ accounts** is the actual number of accounts sold *through the brokerage* (Poolside Business Brokers) for clients. Use this for brokerage track-record claims (e.g. "accounts brokered/sold," homepage trust stats, track-record page).
Never write "we've transacted/brokered/sold 1,500+ accounts" — that overstates the brokerage's own track record. If a sentence is about the founders' expertise/background, use 1,500+ and describe it as personal operating experience. If it's about the brokerage's results, use 300+.

## Key Business Facts (use these in all content)
- Pool routes sell for **10-12x monthly service revenue**
- A solo operator (single pooler) can handle **up to 60 accounts max**
- Chemical costs are **~20% of revenue**
- Vehicle costs are **13-15% of revenue** (gas is a real factor)
- Net profit margins for well-run owner-operated routes: **50-55%**
- We charge **12% commission** (industry-low, competitors charge 15-20%)
- We have a network of **25+ vetted, high-intent buyers**
- Most routes receive qualified offers within **2 weeks of listing**
- Typical close timeline: **4-6 weeks** from listing

## Google Business Profile / Reviews
- Google Business Profile link: https://share.google/nUfty4U4LkNZjhjBB
- This is linked in `sameAs` in the LocalBusiness schema on `index.html` and every page in `/locations/`
- Current rating/count (as of 2026-09-08): **5.0 stars, 6 reviews**. This number is hardcoded in THREE places that must always match each other exactly, or the review markup can be seen as inconsistent/self-serving by Google:
  1. `index.html` — the `aggregateRating` block in the LocalBusiness schema
  2. `index.html` — the visible "Google rating badge" under the hero CTAs (`.google-rating-badge`)
  3. Nowhere else currently displays the number, but if it's added elsewhere it must match too
- **When the review count changes, update both the schema and the visible badge on `index.html` together** — never update one without the other.

## Website Structure
- Static HTML site hosted at poolsidebrokers.com
- Shared header/footer loaded via `common.js` (placeholder divs)
- Styles in `styles.css`, blog article styles in `blog-article.css`
- Blog articles live in `/blog/` directory
- City landing pages live in `/locations/` directory
- All pages include Google Analytics (G-8V7FH38J0R)
- All pages include Schema.org structured data
- Sitemap at `sitemap.xml` — update when adding new pages

## Content Standards
- Every page needs: meta description, keywords, canonical URL, OG tags, Twitter card, Schema.org structured data, Google Analytics
- Use `'Playfair Display'` for headings, `'Inter'` for body text
- Internal links should point to `/sellers`, `/buyers`, `/routes-for-sale`, `/contact`, `/blog`, and other blog articles
- Every article ends with a CTA section (navy background) driving to `/contact` or phone
- favicon at `favicon.ico`, use `../favicon.ico` for subdirectory pages
- Blog articles use `../styles.css` and `../blog-article.css`
- Blog articles use `../common.js`

## When Creating New Blog Articles
1. Create the HTML file in `/blog/`
2. Add the article card to `blog.html` index page
3. Add the URL to `sitemap.xml`
4. Follow the exact same HTML structure as existing articles (see `/blog/how-to-sell-a-pool-route.html` as template)

## When Creating New City Landing Pages
1. Create the HTML file in `/locations/`
2. Add the URL to `sitemap.xml`
3. Include LocalBusiness Schema.org markup
4. Link to `/sellers`, `/buyers`, `/routes-for-sale`
5. Target keywords: "pool route for sale in [city]", "sell pool route [city]", "buy pool route [city]"
