# Conversion Dashboard Setup

## Data Source

Use Google Looker Studio with the GA4 property connected to this site.

Required GA4 events from the website:

- `page_view`
- `cta_click`
- `form_submit`
- `internal_link`
- `newsletter_signup`
- `lead_magnet_download`

The site now sends these custom events through `assets/js/conversion-tracking.js`. If `gtag` exists, events go directly to GA4. If `gtag` is loaded through Google Tag Manager, events are also pushed into `dataLayer`.

## Funnel Chart

Create a funnel chart with these steps:

1. Page Views
   - Metric: Event count
   - Filter: `event_name = page_view`
   - Page split: Portfolio, Blog, Case Studies

2. CTA Clicks
   - Metric: Event count
   - Filter: `event_name = cta_click`

3. Form Submissions
   - Metric: Event count
   - Filter: `event_name = form_submit`

4. Leads
   - Metric: Event count
   - Filter: `event_name = form_submit`
   - Landing/form page: LeadFlow Thailand or Portfolio Contact form

5. Lead Magnet Downloads
   - Metric: Event count
   - Filter: `event_name = lead_magnet_download`
   - Lead magnet: AI Automation Checklist สำหรับ SME ไทย

## KPI Cards

Add these calculated fields in Looker Studio:

```text
CTR = CTA Clicks / Page Views
Form Conversion Rate = Form Submissions / CTA Clicks
Lead Conversion Rate = Leads / Sessions
```

Recommended cards:

- Users
- Sessions
- Page Views
- CTA Clicks
- Form Submissions
- Newsletter Signups
- Lead Magnet Downloads
- CTR
- Form Conversion Rate
- Lead Conversion Rate

## Segmentation Controls

Add filters for:

- Device category: Desktop, Mobile, Tablet
- Session source / medium: Organic, Direct, Referral, Social
- Page group: Portfolio, Blog, Case Studies, LeadFlow

## GA4 Custom Dimensions

Register these GA4 event-scoped custom dimensions so Looker Studio can segment cleanly:

- `page_group`
- `cta_text`
- `cta_href`
- `link_text`
- `link_url`
- `form_id`
- `form_name`
- `form_destination`

## Validation Checklist

1. Open GA4 DebugView.
2. Visit `portfolio.html`, `blog-ai-sme.html`, both case study pages, and `LeadFlow Thailand.html`.
3. Click one CTA on each page.
4. Submit a test form.
5. Confirm these events appear: `cta_click`, `internal_link`, `form_submit`.
6. Submit a newsletter test email and confirm `newsletter_signup`.
7. Submit a checklist download test email and confirm `lead_magnet_download`.
8. Build the Looker Studio funnel only after GA4 receives events.

## Final Looker Studio Settings

- Data source: GA4 property for `bbgunmis-alt.github.io/Sirawith-Portfolio-HTML`
- Main funnel: Page Views -> CTA Clicks -> Form Submissions -> Leads
- Primary dimensions: `page_group`, device category, session source / medium
- Date range: Last 28 days by default
- Comparison: Previous period
