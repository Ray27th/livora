import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimateIn from "../components/ui/AnimateIn.jsx";
import { drops, getProductsByDrop, liveDrop } from "../content/catalog/index.js";
import { dropStatusLabels } from "../theme.js";

export default function DropsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="page-hero">
          <AnimateIn className="page-hero__panel surface">
            <span className="eyebrow">Limited drops</span>
            <h1 className="page-title">Limited windows for sharper, more campaign-led edits.</h1>
            <p className="lede">
              Drops live beside the evergreen catalogue, not instead of it. They bring a faster, more seasonal energy to the store while keeping the same straightforward shopping flow.
            </p>

            <div className="badge-row">
              <span className="badge badge--solid">Limited-time edit</span>
              <span className="badge">Clear launch windows</span>
              <span className="badge">Same cart and checkout flow</span>
            </div>
          </AnimateIn>

          <AnimateIn className="page-hero__aside surface" delay={120}>
            <img alt="Entryway reset" src="/images/entryway-reset.webp" />
            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <h2 className="card-title" style={{ fontSize: "1.6rem", margin: 0 }}>
                The storefront can feel urgent without lying.
              </h2>
              <p className="body-copy">
                Launch windows, product labels, and sold-out states stay clear so the excitement feels real without overpromising.
              </p>
            </div>
          </AnimateIn>
        </div>

        <SectionHeading
          eyebrow="Current window"
          title={`${liveDrop.name} is the active drop right now.`}
          body={`${liveDrop.summary} ${liveDrop.story}`}
        />

        <div className="catalog-grid">
          {getProductsByDrop(liveDrop.slug).map((product, index) => (
            <AnimateIn delay={index * 70} key={product.slug}>
              <ProductCard product={product} showCategory />
            </AnimateIn>
          ))}
        </div>

        <section className="section">
          <SectionHeading
            eyebrow="Drop schedule"
            title="More drops are on the way."
            body="Each drop keeps its own mood, timing, and linked products together so it feels like a true collection, not just a list of items."
          />

          <div className="drop-grid">
            {drops.map((drop, index) => (
              <AnimateIn
                className={`drop-card ${index === 0 ? "drop-card--feature" : "drop-card--stack"}`}
                delay={index * 70}
                key={drop.slug}
              >
                <div className="drop-card__image">
                  <img alt={drop.name} src={drop.image} />
                </div>

                <div className="drop-card__meta">
                  <span className="badge badge--solid">{dropStatusLabels[drop.status]}</span>
                  <span className="badge">{drop.windowLabel}</span>
                </div>

                <h2 className="card-title" style={{ fontSize: "1.75rem", margin: 0 }}>
                  {drop.name}
                </h2>
                <p className="body-copy">{drop.summary}</p>
                <p className="fine-copy">{drop.story}</p>

                <div className="badge-row">
                  {drop.productSlugs.map((slug) => (
                    <span className="badge" key={slug}>
                      {slug.replaceAll("-", " ")}
                    </span>
                  ))}
                </div>

                <Link className="btn btn--ghost" to="/shop?type=drop">
                  Browse all drop products
                </Link>
              </AnimateIn>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
