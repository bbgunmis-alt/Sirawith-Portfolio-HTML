# LeadFlow Funnel Diagram

Mermaid diagram generated from current funnel assets:

- Blog pages + email capture forms
- Lead Magnet PDF: `AI Automation Checklist สำหรับ SME ไทย`
- GA4/GTM events: `lead_magnet_download`, `newsletter_signup`, `form_submit` / `consultation_request`
- Email sequence 1-5
- Customer testimonials: ไทย + อังกฤษ
- Conversion dashboard

```mermaid
flowchart TD
    A["Blog Pages"] --> B["Email Capture Form"]
    B --> C["Lead Magnet PDF: AI Automation Checklist"]
    B --> D["GA4/GTM Tracking Events"]
    C --> E["Email Nurture Sequence"]
    D --> E
    E --> F["Consultation Form Submit"]
    F --> G["Conversion Dashboard"]
    G --> H["Customer Testimonials: ไทย + อังกฤษ"]
    H --> I["Trust + Proof Layer"]
    I --> J["Final Conversion: ลูกค้าจริง"]

    subgraph BlogAssets["Blog + Capture Assets"]
        A1["blog-ai-sme.html"]
        A2["blog-ai-marketing.html"]
        A3["blog-ai-crm.html"]
        A4["blog-ai-workflow.html"]
        A5["LeadFlow Thailand.html"]
    end

    subgraph Tracking["GA4/GTM Events"]
        D1["lead_magnet_download"]
        D2["newsletter_signup"]
        D3["form_submit / consultation_request"]
        D4["internal_link"]
        D5["cta_click"]
    end

    subgraph Emails["Email Nurture Sequence"]
        E1["Email 1: Thank You + Checklist"]
        E2["Email 2: Case Study Proof"]
        E3["Email 3: Blog Insight"]
        E4["Email 4: Free Consultation CTA"]
        E5["Email 5: Reminder + Final Push"]
    end

    subgraph Proof["Proof Assets"]
        H1["Thai testimonials"]
        H2["English translations"]
        H3["BMW / Origin proof"]
        H4["SME customer voice"]
    end

    A --> A1
    A --> A2
    A --> A3
    A --> A4
    A --> A5

    D --> D1
    D --> D2
    D --> D3
    D --> D4
    D --> D5

    E --> E1
    E --> E2
    E --> E3
    E --> E4
    E --> E5

    H --> H1
    H --> H2
    H --> H3
    H --> H4
```

## ROI-First Insight

- High impact: แสดงภาพรวม funnel ตั้งแต่ content, capture, nurture, proof, dashboard ไปจนถึง consultation
- Low effort: Mermaid render ได้ทันทีใน GitHub, docs, Notion หรือ Markdown viewer
- Smart 1% principle: diagram นี้ช่วยให้ทีมเห็นว่าทุก asset ทำหน้าที่อะไรใน conversion path

## Source Files

- `emails/sequence.md`
- `portfolio.html`
- `assets/js/conversion-tracking.js`
- `assets/lead-magnets/ai-automation-checklist-sme-th.pdf`
- `conversion-dashboard.md`
