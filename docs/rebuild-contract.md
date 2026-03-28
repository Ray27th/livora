# One59 Frontend Rebuild Contract

## Canonical sources

Canonical sources: `one59-spec.md`, `one59-ecommerce.md`

If implementation details conflict with legacy frontend code, the canonical docs win.

## True rebuild definition

This work is a frontend replacement, not a retrofit.

- Do not reuse legacy client implementation as the base.
- Do not preserve the old single-page Livora shell and rename it.
- Do not treat existing sections, modals, or data wiring as foundational.
- Safe reuse is limited to generic furniture image assets and isolated primitives where they remain brand-agnostic.

## In Scope

- A fresh One59 customer-facing frontend inside `client/`
- New branding, metadata, title, favicon, and page structure
- Route-based information architecture for the main customer surfaces
- Homepage, category browsing, search, product detail, cart, guest checkout, and required policy/contact pages
- PRD-aligned catalog presentation for evergreen products and drops
- SG-only pricing, shipping, returns, and support messaging
- Removal of visible Livora leftovers from shipped frontend code and content
- A new Vercel project for the rebuilt frontend

## Deferred

- Backend rewrite
- Real payment integration
- Inventory reservation backend logic
- Transactional email sending
- Admin panel
- Optional user accounts
- Real-time drop counters, websockets, and live operational syncing
- Git history cleanup
- Unrelated server cleanup

## Anti-legacy rules

- Do not carry forward Livora copy, title, favicon, or deployment naming
- Do not keep unsupported legacy features just because they already exist
- Do not keep modal-first IA as the primary storefront structure
- Do not ship old commerce assumptions such as pickup, express shipping, free-shipping thresholds, or post-payment cancellations

## Prototype target

The result should be a high-quality, public, frontend-only One59 prototype that feels product-real, is visibly distinct from Livora, and is safe to share for design and product feedback.
