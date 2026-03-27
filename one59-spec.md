# One59.com Product Specification

Canonical source of product truth for One59. If any other doc conflicts with this file, this file wins.

## 1. Product

One59 is a Singapore furniture e-commerce store built for quick discovery and fast checkout. The catalog mixes evergreen items with limited drops. The brand should feel social-proof heavy, urgent, and easy to trust.

### What One59 is
- Mainland Singapore only
- Pre-assembled furniture only
- Separate SKU for each variant
- Category-specific product data templates
- Moderate per-SKU content standard, enough to feel complete without turning every page into a long brochure
- Sold-out items must show same-category alternatives

### What One59 is not
- No warehouse pickup
- No express shipping tier for MVP
- No free-shipping threshold logic for MVP
- No cancellation after payment
- No basket-level under-S$159 rule
- No multi-country selling

## 2. Pricing and merchandising rules

- Display prices in SGD with GST included
- Per-item price promise is under S$159
- Basket totals may exceed S$159
- Simple sitewide promos are allowed
- Campaign-driven urgency is allowed as a merchandising tool
- Urgency surfaces do not need to map directly to live operational data in MVP
- Social proof should be visible across discovery, product, cart, and checkout surfaces

## 3. Catalog rules

### Catalog mix
- Evergreen products stay available long term
- Drops are time-bound and can be highlighted more aggressively
- Both catalog types use the same core shopping flow

### Product data templates
Each category uses its own template so data matches the product type. Templates should control required fields, copy shape, and imagery needs.

At minimum, each SKU should include:
- Product name
- Category
- Separate SKU code
- Price
- GST-inclusive display price
- Main description
- Core specs
- Dimensions
- Materials
- Finish or color
- Assembly note, if relevant
- Delivery note
- Product images

## 4. Checkout and order rules

- Guest checkout is supported
- Guest checkout requires email, name, phone, and address
- Inventory is reserved on payment success
- Orders use a simple 3-state lifecycle:
  1. Pending payment
  2. Paid, inventory reserved
  3. Fulfilled
- No cancellations after payment
- Payment failure does not become a separate order state, it is a checkout failure

## 5. Shipping and returns

- Mainland Singapore only
- Flat shipping rules for MVP
- Standard delivery promise is 3 to 5 days
- Returns are allowed within 7 days
- Change-of-mind returns are customer-paid

## 6. Support and customer comms

- Instagram DM is the primary support channel
- Email is the fallback channel
- Customer-facing support promise is replies within 24 hours
- Core policy pages are required, at minimum shipping, returns, privacy, terms, and contact
- Full transactional email lifecycle is required, including order confirmation, payment success, fulfillment updates, and failure notices where relevant

## 7. Storefront behavior

- Homepage, product pages, cart, and checkout should lean into urgency and social proof
- Sold-out SKUs show same-category alternatives
- Search, category browsing, and product detail pages should all support the catalog template structure

## 8. Implementation guardrails

- Do not introduce pickup flows
- Do not add unsupported shipping tiers
- Do not add unsupported promises or price rules
- Do not add a cancelled order state
- Do not turn basket pricing into a hard cap
- Do not replace the spec with task-level assumptions in other docs

## 9. Canonical decision summary

- Mixed evergreen plus drops catalog
- Inventory reserved on payment success
- Category-specific product data templates
- Flat shipping rules for MVP
- 7-day returns with customer-paid change-of-mind returns
- Social-proof-heavy posture
- Per-item price promise under S$159, basket totals may exceed
- Simple 3-state order lifecycle
- Aggressive marketing allowed
- No cancellations after payment
- Separate SKU variants
- Pre-assembled only
- GST included in displayed prices
- Instagram DM primary support with email fallback
- Mainland Singapore only
- Core policy pages required
- Moderate per-SKU content standard
- Sold-out items show same-category alternatives
- Simple sitewide promos
- Standard delivery promise 3 to 5 days
- Full transactional email lifecycle
- Guest checkout requires email, name, phone, and address
