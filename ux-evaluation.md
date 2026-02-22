# UX & Usability Evaluation: idhotyoga.com

**Date:** 2026-02-22
**Site:** https://www.idhotyoga.com/
**Platform:** Wix (Thunderbolt renderer)
**Business:** ID Hot Yoga -- multi-location hot yoga studios in NYC + East Hampton

---

## Executive Summary

ID Hot Yoga's website suffers from platform-imposed performance constraints (Wix), inconsistent branding, a disorganized information architecture, and a fragmented booking flow. The issues below are ranked by estimated impact on conversion (turning a visitor into a paying student) and retention (keeping existing students engaged with the studio).

---

## Improvements Ranked by Impact

### 1. FIX THE BOOKING & SCHEDULING FLOW (Critical -- Revenue Impact)

**Problem:** There is no embedded class schedule visible on the main website. The schedule page loads content entirely via client-side JavaScript, meaning it renders slowly and can fail on poor connections. For a yoga studio, the schedule *is* the product -- if a potential student can't quickly see when classes are and book one, they leave.

**Evidence:**
- The `/schedule` page returned zero static content; all schedule data is dynamically injected post-load.
- No clear "Book a Class" CTA is visible in the initial HTML payload on any page.
- Booking appears to rely on a third-party integration (likely MindBody or similar) loaded asynchronously.

**Recommendations:**
- Add a persistent, high-contrast "Book a Class" button in the fixed header/nav bar visible on every page, especially on mobile.
- Server-render (or at minimum pre-render) the next 24-48 hours of classes on the homepage so users see immediate scheduling content without waiting for JavaScript.
- Reduce the number of taps/clicks to book: the ideal mobile flow is Homepage -> Tap "Book" -> Select class -> Confirm. Currently the path is unclear and likely 4+ steps.

---

### 2. FIX BRAND CONFUSION & IDENTITY INCONSISTENCY (High -- Trust Impact)

**Problem:** The site references at least three different brand names, which erodes trust and confuses search/social discovery:
- **"ID Hot Yoga"** -- primary brand on the website
- **"IDHY"** -- abbreviated reference in metadata
- **"Fierce Grace NYC"** -- the Instagram handle linked from the site is `@fiercegracenyc`

**Evidence:**
- The Instagram link on every page goes to `https://www.instagram.com/fiercegracenyc/` -- a completely different brand name.
- Structured data references both "ID Hot Yoga" and the Fierce Grace handle.

**Recommendations:**
- Align the Instagram handle with the business name (e.g., `@idhotyoga` or `@idhotyoganyc`).
- Remove all "Fierce Grace" references unless there's a deliberate co-branding strategy explained to the user (e.g., "formerly Fierce Grace NYC").
- Use "ID Hot Yoga" consistently across all pages, metadata, social profiles, and structured data.

---

### 3. IMPROVE MOBILE PERFORMANCE (High -- Bounce Rate Impact)

**Problem:** Wix sites are notoriously heavy on mobile. The site loads extensive JavaScript bundles, CSS, analytics scripts (two separate GA4 properties: `G-L37PEJZK2N` and `G-8BL9Q3T9ZJ`), consent management, and security hardening -- all before any content renders. Typical Wix mobile Lighthouse scores are in the 30-50 range (out of 100). For a local business where the majority of traffic comes from mobile (people searching "hot yoga near me" on their phones), this is a conversion killer.

**Evidence:**
- Duplicate GA4 tracking codes suggest misconfiguration adding unnecessary payload.
- Wix's Thunderbolt framework requires heavy JS initialization before any content appears.
- No service worker is registered (service worker registration is explicitly blocked), eliminating any caching benefits for repeat visitors.
- General Wix mobile performance data shows LCP (Largest Contentful Paint) of 8-9 seconds on simulated mobile connections.

**Recommendations:**
- Remove the duplicate GA4 property (consolidate to one).
- Audit and remove any unused Wix apps/integrations that add JavaScript weight.
- Enable lazy loading for all below-the-fold images and sections.
- If long-term, consider migrating off Wix to a lighter platform (Next.js, Squarespace, or even WordPress) for dramatically better mobile Core Web Vitals.
- At minimum, ensure all images are served in WebP/AVIF format and appropriately sized for mobile viewports.

---

### 4. CLEAN UP INFORMATION ARCHITECTURE & URL STRUCTURE (High -- SEO & Usability Impact)

**Problem:** The sitemap reveals a disorganized page structure with orphaned pages, duplicate content, and unprofessional URL slugs.

**Evidence from sitemap:**
| URL Slug | Issue |
|---|---|
| `/copie-de-breathwork-soundbath` | French Wix artifact ("copie de" = "copy of") -- an accidental duplicate page left public |
| `/copie-de-home` | Another duplicate/draft page indexed by Google |
| `/oldretreats` | Stale content that should be redirected or removed |
| `/januarypromo` | Expired seasonal promo page (it's February 2026) still live |
| `/sacredskincarepopup` | One-off event page cluttering the site structure |
| `/idoidchallenge` | Unclear naming; no context from the URL |
| `/events-1` | Wix auto-generated slug (the `-1` suffix indicates a naming collision) |
| `/slowburnhotmatpilates` | No word separation; hard to read and bad for SEO |

**Recommendations:**
- Delete or redirect all `/copie-de-*` pages immediately -- these are draft artifacts that damage credibility.
- Redirect `/oldretreats` to `/retreats`.
- Remove or archive expired promo pages (`/januarypromo`).
- Rename `/events-1` to `/events` or `/workshops`.
- Use hyphens in URL slugs: `/slow-burn-hot-mat-pilates` instead of `/slowburnhotmatpilates`.
- Establish a clear top-level navigation: Home | Classes | Schedule | Pricing | Locations | Events | Teacher Training.

---

### 5. SIMPLIFY & CLARIFY PRICING PRESENTATION (Medium-High -- Conversion Impact)

**Problem:** Pricing is location-dependent, with different trial class rates per location (e.g., $15 with code WELCOME15 at LES, $20 with code WELCOME20 at Nomad, $25 standard trial). This multi-tier, multi-location pricing with promo codes creates cognitive load and friction -- especially on mobile where users want a quick answer to "how much does it cost?"

**Evidence:**
- Different promo codes per location (WELCOME15, WELCOME20).
- Membership options vary by location (monthly autopay not available in East Hampton).
- Pricing page content is entirely JavaScript-rendered with no static fallback.

**Recommendations:**
- Show a clear pricing comparison table that is location-aware (auto-detect or let user pick location first, then show relevant pricing only).
- Eliminate per-location promo codes; standardize one introductory offer (e.g., "First Class $15 at any location").
- Lead with the lowest-commitment option ("Try a class for $15") prominently on every page.
- Make the pricing page content statically rendered so it's visible immediately, even on slow connections.

---

### 6. ADD A CLEAR NEW STUDENT ONBOARDING PATH (Medium -- Acquisition Impact)

**Problem:** There is no dedicated "New Students" or "First Time?" page. For hot yoga especially, first-timers have questions: What to wear? How hot is it? Do I need to bring a mat? What if I feel dizzy? Studios that address these concerns proactively convert more trial visitors.

**Evidence:**
- The sitemap contains no `/new-students`, `/first-time`, or `/faq` page.
- Yelp reviews mention the studio "can feel very intimidating and not necessarily beginner friendly."

**Recommendations:**
- Create a prominent "New? Start Here" or "Your First Class" page linked from the main navigation.
- Include: what to expect, what to bring/wear, hydration tips, heat acclimation advice, studio etiquette, and a direct "Book Your First Class" CTA at the bottom.
- Address the intimidation factor head-on with inclusive language and imagery.

---

### 7. IMPROVE LOCATION DISCOVERY & MULTI-STUDIO UX (Medium -- Local SEO & Wayfinding)

**Problem:** The site serves 5 locations (LES, Nomad, FiDi, Harlem, East Hampton) but the homepage defaults to showing Nomad's information (172 Allen St is actually LES, but metadata references Nomad). Users need to quickly find *their* nearest studio, its schedule, and pricing.

**Evidence:**
- Page title references "Nomad, NY" but the structured data address is 172 Allen St (Lower East Side).
- The `/locations` page content is entirely JavaScript-rendered.
- No geolocation-based studio suggestion.

**Recommendations:**
- Implement a location selector/switcher prominently in the header (e.g., a dropdown: "LES | Nomad | FiDi | Harlem | East Hampton").
- Once a location is selected, persist that choice across pages so schedule, pricing, and contact info are contextually relevant.
- Ensure each location has its own landing page with unique structured data for local SEO.
- Fix the homepage metadata to either be location-neutral or dynamically match the selected studio.

---

### 8. IMPROVE MOBILE NAVIGATION & HEADER (Medium -- Mobile UX)

**Problem:** On a Wix mobile site, the hamburger menu is standard but often buries critical actions. For a yoga studio, the two most important mobile actions are "View Schedule" and "Book a Class" -- these should never be hidden behind a hamburger menu.

**Recommendations:**
- Use a sticky bottom navigation bar on mobile with 3-4 key actions: Schedule | Book | Pricing | More.
- Keep the hamburger menu for secondary pages (About, Teacher Training, Retreats, etc.).
- Ensure tap targets are at least 44x44px (Apple's minimum) and have adequate spacing.
- Test the full booking flow on actual devices (iPhone SE, mid-range Android) to ensure it completes without errors.

---

### 9. ADD SOCIAL PROOF & TRUST SIGNALS (Medium -- Conversion Impact)

**Problem:** The site lacks visible social proof elements. With 188+ Yelp reviews for the LES location alone and strong ClassPass ratings, this is an untapped asset.

**Recommendations:**
- Add a testimonials section to the homepage featuring 3-5 rotating student quotes.
- Display aggregate ratings (e.g., "4.8 stars on Yelp, 200+ reviews").
- Feature instructor bios with photos -- the human element builds trust and differentiates from competitors.
- Highlight the LGBTQ-owned and women-owned business credentials, which are noted on Yelp but not on the website.

---

### 10. FIX ACCESSIBILITY GAPS (Medium -- Compliance & Inclusivity)

**Problem:** Wix sites often have accessibility deficiencies. Based on the HTML structure observed:

**Likely issues:**
- Heavy reliance on JavaScript means screen readers may not see content at all if JS fails.
- CSS class names are obfuscated (`.xTjc1A`, `.IOfTmr`), suggesting auto-generated markup that may lack semantic HTML elements.
- No visible skip-navigation links.
- Image alt text quality is unknown but often poor on Wix sites without manual attention.

**Recommendations:**
- Run a WAVE or axe accessibility audit and fix all critical/serious issues.
- Ensure all images have descriptive alt text.
- Add proper heading hierarchy (h1 -> h2 -> h3) on every page.
- Ensure color contrast meets WCAG 2.1 AA standards (especially important for any text overlaid on yoga studio photos).
- Add skip-to-content links for keyboard navigation.

---

### 11. CONSOLIDATE & REMOVE STALE CONTENT (Low-Medium -- Maintenance & Credibility)

**Problem:** Multiple pages exist for past events, old promotions, and draft artifacts that create a cluttered, unmaintained impression.

**Pages to address:**
- `/oldretreats` -- redirect to `/retreats`
- `/januarypromo` -- remove or redirect to `/pricing`
- `/sacredskincarepopup` -- archive or remove
- `/braincancerawarenessmonth` -- keep if relevant, otherwise archive
- `/copie-de-*` pages -- delete immediately
- `/200hteachertraining` -- consolidate with `/teachertraining`

**Recommendations:**
- Implement a content governance process: review all pages quarterly.
- Set expiration reminders for promotional pages.
- Use 301 redirects for removed pages rather than letting them 404.

---

### 12. IMPROVE SEO METADATA CONSISTENCY (Low -- Organic Traffic Impact)

**Problem:** Page titles reference "Nomad, NY" generically even for location-specific pages. Meta descriptions likely repeat across pages due to Wix defaults.

**Recommendations:**
- Write unique title tags and meta descriptions for every page.
- Include location-specific keywords for each studio page.
- Ensure Open Graph and Twitter Card metadata are set for social sharing.
- Fix the duplicate GA4 property IDs to get clean analytics data.

---

## Summary Priority Matrix

| Priority | Issue | Impact Area |
|---|---|---|
| P0 | Booking/scheduling flow | Revenue |
| P0 | Brand confusion (Fierce Grace vs ID Hot Yoga) | Trust |
| P1 | Mobile performance | Bounce rate |
| P1 | URL structure & dead pages | SEO, credibility |
| P1 | Pricing clarity | Conversion |
| P2 | New student onboarding page | Acquisition |
| P2 | Multi-location UX | Local SEO, wayfinding |
| P2 | Mobile navigation | Mobile usability |
| P2 | Social proof & trust signals | Conversion |
| P2 | Accessibility | Compliance, inclusivity |
| P3 | Stale content cleanup | Maintenance |
| P3 | SEO metadata | Organic traffic |
