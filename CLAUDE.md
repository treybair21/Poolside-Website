# Poolside Business Brokers Website

## About the Business
Poolside Business Brokers is a sell-side advisory firm for pool service businesses (pool routes). We charge an industry-low 12% commission and serve all 50 states. We have transacted over 1,500 pool service accounts. Phone: (512) 693-7086.

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
