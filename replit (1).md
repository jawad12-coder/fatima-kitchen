# Fatima's Kitchen Website

A premium, modern 2026-level restaurant website for Fatima's Kitchen (Home-Chef) — a home-style Pakistani restaurant in Rawalpindi, Pakistan. Features a full digital menu with WhatsApp ordering, AI-generated food imagery, a built-in chatbot, customer reviews, and a complete operations manual.

## Run & Operate

- `pnpm --filter @workspace/fatimas-kitchen run dev` — run the frontend (port 20195, served at /)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Tailwind CSS v4
- Routing: wouter
- Animations: framer-motion
- State: React Context + localStorage (cart)
- Icons: lucide-react + react-icons
- SEO: react-helmet-async
- UI components: shadcn/ui

## Where things live

- `artifacts/fatimas-kitchen/` — the main website artifact
- `artifacts/fatimas-kitchen/src/data/menu.ts` — ALL menu items and prices (edit here to update menu)
- `artifacts/fatimas-kitchen/src/context/CartContext.tsx` — cart state management
- `artifacts/fatimas-kitchen/src/components/Navigation.tsx` — top navbar
- `artifacts/fatimas-kitchen/src/components/ChatBot.tsx` — floating AI chatbot (rule-based, no API key)
- `artifacts/fatimas-kitchen/src/components/OperationsManual.tsx` — slide-out operations manual
- `artifacts/fatimas-kitchen/src/components/Footer.tsx` — shared footer
- `artifacts/fatimas-kitchen/src/pages/Home.tsx` — homepage with hero, reviews, popular items
- `artifacts/fatimas-kitchen/src/pages/Menu.tsx` — full menu with search/filter
- `artifacts/fatimas-kitchen/src/pages/Cart.tsx` — cart + WhatsApp checkout
- `artifacts/fatimas-kitchen/src/pages/About.tsx` — story, location, FAQ
- `artifacts/fatimas-kitchen/index.html` — SEO meta tags, JSON-LD schema
- `artifacts/fatimas-kitchen/public/robots.txt` — SEO crawl config
- `artifacts/fatimas-kitchen/public/sitemap.xml` — SEO sitemap
- `attached_assets/generated_images/` — AI-generated food photography

## Architecture decisions

- Frontend-only SPA: orders go via WhatsApp (no backend required for v1)
- Cart persisted in localStorage so it survives page refreshes
- Chatbot is fully rule-based (no API key needed) — trained on business data
- Dark-only theme (midnight #0d1117 + orange #ff6b35 accent + gold highlights)
- All food images are AI-generated and stored in attached_assets/generated_images/

## Product

- Homepage with hero, featured dishes, customer reviews, WhatsApp CTA
- Full menu page (50+ items) with category filter tabs and search
- Shopping cart with quantity controls and WhatsApp checkout
- About page with story, Google Maps location, FAQ accordion
- Floating chatbot for customer queries (menu, prices, hours, ordering)
- Operations manual drawer (in footer) for non-technical staff

## Business Details

- Name: Fatima's Kitchen (Home-Chef)
- Phone/WhatsApp: +92 307 5161533 | wa.me/923075161533
- Address: Al Farooq Street, House # CB1265 Fawaz Lane, Awan St, Shalley Valley, Rawalpindi, 46000, Pakistan
- Hours: Open Daily, Closes at 12:00 AM
- Facebook: facebook.com/fatimakitchen728
- Website: www.fatimakitchen.com

## User preferences

- Premium dark theme with glassmorphism — no light mode
- WhatsApp-first ordering (no payment gateway in v1)
- All text must be in English
- No emojis in UI

## Gotchas

- react-helmet-async has a peer dep warning for React 19 — ignore it, works fine
- Google Font import MUST be the very first line of index.css before all other imports
- To update menu prices: edit src/data/menu.ts MENU_ITEMS array only
- To update WhatsApp number: search for "923075161533" across the codebase

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
