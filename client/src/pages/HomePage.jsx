import { Link } from "react-router-dom";

import { featuredProducts, categories, liveDrop, liveDropProducts } from "../content/catalog/index.js";
import { homeStory, testimonials, trustPoints } from "../content/site/index.js";
import { CategoryLinkRow } from "../components/Layout.jsx";
import ProductCard from "../components/ProductCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimateIn from "../components/ui/AnimateIn.jsx";
import { DeliveryIcon, ShieldIcon, SparkIcon } from "../components/icons.jsx";

const heroStats = [
  {
    icon: <SparkIcon />,
    title: "Mixed catalogue",
    body: "Evergreen bestsellers stay available while sharper drops carry urgency and freshness.",
  },
  {
    icon: <DeliveryIcon />,
    title: "Made for Singapore",
    body: "Mainland SG only, standard delivery in 3 to 5 days, and no unsupported pickup storylines.",
  },
  {
    icon: <ShieldIcon />,
    title: "Trust surfaces up front",
    body: "Guest checkout, GST-included pricing, and support details are visible before the customer needs them.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <AnimateIn className="hero__copy surface">
            <span className="eyebrow">Under S$159, always</span>
            <div className="hero__highlight">
              <SparkIcon size={16} />
              <span>{homeStory.highlight}</span>
            </div>

            <div style={{ display: "grid", gap: "var(--space-4)" }}>
              <h1 className="display-title">Furniture under S$159 that still feels worth sharing.</h1>
              <p className="lede">{homeStory.body}</p>
            </div>

            <div className="button-row">
              <Link className="btn btn--primary" to="/shop">
                Shop the catalogue
              </Link>
              <Link className="btn btn--ghost" to="/drops">
                Browse current drops
              </Link>
            </div>

            <CategoryLinkRow />
          </AnimateIn>

          <AnimateIn className="hero__visual surface" delay={120}>
            <div className="hero__image-wrap">
              <img alt="One59 room starter scene" src="/images/room-starter.webp" />
            </div>

            <div className="mini-card">
              <span className="eyebrow">Live now</span>
              <h2 className="card-title" style={{ fontSize: "1.8rem", margin: 0 }}>
                {liveDrop.name}
              </h2>
              <p className="body-copy">{liveDrop.summary}</p>
              <p className="fine-copy">{liveDrop.windowLabel}</p>
            </div>

            <div className="hero__floating">
              <p className="fine-copy" style={{ color: "rgba(255,255,255,0.74)", marginBottom: "var(--space-2)" }}>
                Guest checkout stays simple.
              </p>
              <p className="body-copy" style={{ color: "rgba(255,255,255,0.9)" }}>
                Email, name, phone, and address only — with DM support visible before the final step.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section--tight">
        <div className="container metrics-grid">
          {heroStats.map((item, index) => (
            <AnimateIn className="metric-card" delay={index * 60} key={item.title}>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                <span className="eyebrow">{item.icon} Truth</span>
                <h2 className="card-title" style={{ fontSize: "1.4rem", margin: 0 }}>
                  {item.title}
                </h2>
                <p className="body-copy">{item.body}</p>
              </div>
            </AnimateIn>
          ))}

          <AnimateIn className="metric-card" delay={180}>
            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <span className="eyebrow">Support</span>
              <h2 className="card-title" style={{ fontSize: "1.4rem", margin: 0 }}>
                Replies within 24 hours.
              </h2>
              <p className="body-copy">
                Instagram DM is the default help channel, with email available when longer notes make more sense.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Shop by room"
            title="Start with the room, then find the pieces that fit it."
            body="Browse living, bedroom, dining, workspace, and storage collections built for Singapore homes that need every piece to earn its place."
          />

          <div className="info-grid">
            {categories.map((category, index) => (
              <AnimateIn
                className="category-card"
                delay={index * 60}
                key={category.slug}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="category-card__overlay" />
                <span className="eyebrow">{category.eyebrow}</span>
                <h3 className="category-card__title">{category.name}</h3>
                <p className="category-card__body body-copy">{category.description}</p>
                <Link className="btn btn--ghost" to={`/shop/${category.slug}`}>
                  Browse {category.name}
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            action={
              <Link className="btn btn--ghost" to="/drops">
                See all drops
              </Link>
            }
            eyebrow="Current drop"
            title={`${liveDrop.name} is live with a tighter, more urgent edit.`}
            body={liveDrop.story}
          />

          <div className="drop-grid">
            <AnimateIn className="drop-card drop-card--feature">
              <div className="drop-card__image">
                <img alt={liveDrop.name} src={liveDrop.image} />
              </div>
              <div style={{ display: "grid", gap: "var(--space-3)" }}>
                <div className="badge-row">
                  <span className="badge badge--solid">{liveDrop.status}</span>
                  <span className="badge">{liveDrop.windowLabel}</span>
                </div>
                <h3 className="section-title">The live window mixes soft seating, flexible dining, and fast vertical storage.</h3>
                <p className="body-copy">
                  This edit brings together flexible seating, compact dining pieces, and smart storage for quick room resets without losing the One59 value story.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn className="drop-card drop-card--stack" delay={120}>
              <SectionHeading
                eyebrow="Why it feels good to buy"
                title="Trust and urgency can coexist."
                body="The store keeps the energy high while staying clear on pricing, delivery timing, and customer support." 
              />

              {trustPoints.slice(0, 3).map((item) => (
                <div className="mini-card" key={item.title}>
                  <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                    {item.title}
                  </h3>
                  <p className="body-copy">{item.body}</p>
                </div>
              ))}
            </AnimateIn>
          </div>

          <div className="catalog-grid" style={{ marginTop: "var(--space-6)" }}>
            {liveDropProducts.map((product, index) => (
              <AnimateIn delay={index * 80} key={product.slug}>
                <ProductCard product={product} showCategory />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            action={
              <Link className="btn btn--accent" to="/shop?type=evergreen">
                Shop evergreen
              </Link>
            }
            eyebrow="Always available"
            title="Evergreen pieces keep the store easy to return to any day of the week."
            body="These are the reliable picks that stay ready to browse alongside limited drops, so the catalogue always feels balanced and usable."
          />

          <div className="catalog-grid">
            {featuredProducts.map((product, index) => (
              <AnimateIn delay={index * 70} key={product.slug}>
                <ProductCard product={product} showCategory />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Customer trust"
            title="The value story lands harder when the operational rules stay visible."
            body="These notes reinforce the SG-only promise, the guest checkout flow, and the fact that One59 is pricing the product honestly instead of hiding the truth until checkout."
          />

          <div className="info-grid">
            {testimonials.map((item, index) => (
              <AnimateIn className="testimonial-card" delay={index * 70} key={item.name}>
                <span className="eyebrow">Customer note</span>
                <p className="body-copy">“{item.quote}”</p>
                <div>
                  <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                    {item.name}
                  </h3>
                  <p className="fine-copy">{item.meta}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
