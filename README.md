# BijecBet Website

Marketing site built with React, Vite, and Tailwind.

## Waitlist backend (Supabase)

The waitlist form writes directly to a Supabase table named `waitlist`.

Required environment variables:

```bash
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Expected table columns:
- `email` (text, unique recommended)
- `source` (text)
- `created_at` (timestamp with default recommended)

Recommended RLS policy:
- allow `INSERT` for anonymous users
- block `SELECT` for anonymous users

## Analytics events

When `VITE_GA_MEASUREMENT_ID` is set, the app tracks:
- `hero_cta_click`
- `waitlist_submit_success`
- `faq_expand`

## Launch readiness checklist

- Verify waitlist submission success and error states in both hero and final CTA forms.
- Confirm duplicate emails return the "already on the waitlist" message.
- Check responsive rendering on mobile and desktop breakpoints.
- Validate social previews (Open Graph and Twitter image/title/description).
- Configure production domain and SSL in your deployment provider.
- Deployed with Cloudflare