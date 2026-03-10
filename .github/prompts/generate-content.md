# Content Generation Task

You are generating content for Poolside Business Brokers, a pool route brokerage.

## Process

1. **Read `content-calendar.json`** — find the FIRST item with `"status": "pending"` for the given CONTENT_TYPE (`blog` = blog_articles, `city-page` = city_landing_pages, `both` = one of each).

2. **Read `CLAUDE.md`** — this has all business facts, site standards, and patterns you must follow.

3. **Read an existing article as your template:**
   - For blog articles: read `/blog/how-to-sell-a-pool-route.html`
   - For city pages: read `/locations/phoenix-az.html` (or the first existing city page)

4. **Create the content** following the exact same HTML structure, styles, and patterns.

## Blog Article Requirements

- Target the keywords listed in the content calendar item
- Write 1500-2500 words of substantive, expert-level content
- Use the article brief from the calendar as your starting point
- Include Schema.org BlogPosting structured data
- Include BreadcrumbList structured data
- Include all SEO meta tags (description, keywords, canonical, OG, Twitter)
- Link to at least 2 other blog articles internally
- Link to `/sellers`, `/buyers`, or `/routes-for-sale` where natural
- End with a CTA section driving to `/contact` and phone number
- Use real numbers from CLAUDE.md (60 account max, 20% chemicals, etc.)

## City Landing Page Requirements

- Target keywords: "pool route for sale in [city]", "sell pool route [city]", "buy pool route [city]"
- Include LocalBusiness Schema.org markup
- Cover: market overview, why this market is good for pool routes, buying in this market, selling in this market
- Reference local factors (climate, pool density, growth trends)
- Include FAQ section with city-specific questions
- End with CTA section
- Link to `/sellers`, `/buyers`, `/routes-for-sale`, and relevant blog articles

## After Creating Content

1. **Blog articles only:** Add a card for the new article to `blog.html` in the blog grid
2. **Add the new URL to `sitemap.xml`**
3. **Update `content-calendar.json`:** Change the item's status from `"pending"` to `"in-review"`
4. **Stage all changed files with `git add`**
5. **Commit with message:** `Add new [type]: [title]`
