# One59.com Ecommerce Build Plan

This is the execution companion to `one59-spec.md`. It stays thin, practical, and fully aligned to the spec. If a future change needs a product decision, update the spec first.

## 1. Build goal

Ship a Singapore-only furniture store where customers can discover products, compare alternatives, and complete checkout with minimal friction. The build should support the locked rules in the spec and nothing beyond them.

## 2. Build guardrails

- Follow the canonical spec for all product and policy decisions
- Keep the catalog split between evergreen items and drops
- Use category-specific templates for product content
- Treat guest checkout fields, shipping, returns, and support rules as fixed
- Do not add pickup, express shipping, free-shipping thresholds, or cancellations after payment
- Keep pricing logic simple, with GST included in display prices and per-item prices under S$159

## 3. Execution sequence

### Phase 1, foundation
- Set up the app shell, shared layout, and shared content primitives
- Add the catalog data model, including categories, variants, SKUs, stock, alternatives, and promo flags
- Wire the core content templates for each product category

### Phase 2, storefront
- Build homepage, category browsing, search, and product detail views
- Show social proof and campaign-driven urgency where the spec calls for it
- Make sold-out items surface same-category alternatives

### Phase 3, commerce flow
- Build cart, guest checkout, and payment flow
- Enforce the required guest fields, email, name, phone, and address
- Reserve inventory on payment success
- Keep the order lifecycle to the 3 states defined in the spec

### Phase 4, post-purchase and policy
- Send the full transactional email lifecycle
- Publish required policy pages, shipping, returns, privacy, terms, and contact
- Route support through Instagram DM first, email second
- Set the customer-facing support expectation to replies within 24 hours
- Apply the 7-day return rule and customer-paid change-of-mind returns

### Phase 5, verification
- Check product, checkout, and post-purchase flows against the spec
- Confirm there are no stale references to pickup, express shipping, or cancellation states
- Verify mobile usability and the policy pages before launch

## 4. Minimum delivery set

- Mixed evergreen plus drops catalog
- Category templates for product data
- Product pages with moderate per-SKU content
- Cart and guest checkout
- Payment success inventory reservation
- 3-state order lifecycle
- Standard delivery promise of 3 to 5 days
- Policy pages and support routing
- Transactional email coverage for the full order flow
- Sold-out alternatives
- Simple sitewide promos

## 5. Completion criteria

The build plan is done when:
- Every locked decision in the spec is reflected in the build
- No stale commerce assumptions remain in the docs or implementation plan
- The build can be handed to implementation without product ambiguity
