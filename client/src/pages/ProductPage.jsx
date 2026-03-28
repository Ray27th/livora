import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useStore } from "../app/store.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyState from "../components/EmptyState.jsx";
import ProductCard from "../components/ProductCard.jsx";
import QuantityStepper from "../components/QuantityStepper.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AnimateIn from "../components/ui/AnimateIn.jsx";
import { getAlternativeProducts, getProductBySlug } from "../content/catalog/index.js";
import { stockStatusLabels } from "../theme.js";
import ProductImage from "../components/ui/ProductImage.jsx";

export default function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useStore();
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            action={
              <Link className="btn btn--primary" to="/shop">
                Back to shop
              </Link>
            }
            body="That product is not available right now. You can keep browsing the rest of the One59 catalogue."
            title="Product not found"
          />
        </div>
      </section>
    );
  }

  const alternatives = getAlternativeProducts(product);
  const accent = `var(--tone-${product.tone})`;

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Shop", to: "/shop" },
            { label: product.category.name, to: `/shop/${product.categorySlug}` },
            { label: product.name },
          ]}
        />

        <div className="detail-layout">
          <div className="detail-gallery">
            <div className="detail-gallery__frame surface" style={{ "--detail-accent": accent }}>
              <ProductImage objectFit="contain" product={product} />
            </div>

            <div className="detail-strip">
              <div className="detail-strip__card">
                <p className="fine-copy">Delivery</p>
                <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                  3 to 5 days
                </h3>
                <p className="body-copy">Mainland Singapore only.</p>
              </div>

              <div className="detail-strip__card">
                <p className="fine-copy">Returns</p>
                <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                  7 days
                </h3>
                <p className="body-copy">Change-of-mind returns are customer-paid.</p>
              </div>

              <div className="detail-strip__card">
                <p className="fine-copy">Support</p>
                <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                  DM first
                </h3>
                <p className="body-copy">Replies within 24 hours, email available too.</p>
              </div>
            </div>

            <div className="detail-card surface">
              <SectionHeading
                eyebrow="What this product is for"
                title="Moderate content, clear buying context."
                body="Everything here is focused on the details that help you decide quickly, without turning the page into a long brochure."
              />

              <div className="detail-columns">
                <div className="detail-list">
                  <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                    Highlights
                  </h3>
                  {product.highlights.map((item) => (
                    <div className="detail-list__item" key={item}>
                      <span className="badge">Why it works</span>
                      <p className="body-copy">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="detail-list">
                  <h3 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                    Product facts
                  </h3>
                  {product.specs.map((item) => (
                    <div className="detail-list__item" key={item.label}>
                      <p className="fine-copy">{item.label}</p>
                      <p className="body-copy">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="detail-card detail-card--sticky surface" style={{ "--card-accent": accent }}>
            <div className="badge-row">
              <span className="badge badge--solid">{product.catalogType}</span>
              <span className="badge">{product.sku}</span>
              <span className="badge badge--dark">{stockStatusLabels[product.stockStatus]}</span>
            </div>

            <div style={{ display: "grid", gap: "var(--space-3)" }}>
              <h1 className="page-title">{product.name}</h1>
              <p className="lede">{product.summary}</p>
            </div>

            <div className="detail-meta" style={{ justifyContent: "space-between", alignItems: "end" }}>
              <span className="price-text" style={{ fontSize: "2.4rem" }}>
                {product.priceLabel}
              </span>
              <div style={{ textAlign: "right" }}>
                <p className="fine-copy">GST included</p>
                <p className="fine-copy">Per-item promise stays under S$159</p>
              </div>
            </div>

            <div className="detail-list">
              <div className="summary-row">
                <span className="fine-copy">Category</span>
                <span className="body-copy">{product.category.name}</span>
              </div>
              <div className="summary-row">
                <span className="fine-copy">Dimensions</span>
                <span className="body-copy">{product.dimensions}</span>
              </div>
              <div className="summary-row">
                <span className="fine-copy">Materials</span>
                <span className="body-copy">{product.materials}</span>
              </div>
              <div className="summary-row">
                <span className="fine-copy">Finish</span>
                <span className="body-copy">{product.finish}</span>
              </div>
              <div className="summary-row">
                <span className="fine-copy">Assembly</span>
                <span className="body-copy">{product.assembly}</span>
              </div>
            </div>

            {product.stockStatus !== "sold_out" ? (
              <>
                <QuantityStepper
                  onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                  onIncrease={() => setQuantity((current) => current + 1)}
                  value={quantity}
                />

                <div className="detail-actions">
                  <button className="btn btn--primary" onClick={() => addToCart(product, quantity)} type="button">
                    Add {quantity} to cart
                  </button>
                  <Link className="btn btn--ghost" to="/cart">
                    View cart
                  </Link>
                </div>
              </>
            ) : (
              <div className="mini-card">
                <span className="eyebrow">Sold out</span>
                <p className="body-copy">
                  This SKU is currently unavailable. You can still explore similar pieces in the same category below.
                </p>
              </div>
            )}

            <div className="mini-card">
              <span className="eyebrow">Support note</span>
              <p className="body-copy">Instagram DM is the fastest channel for stock questions. Email stays available for longer order notes.</p>
            </div>

            <div className="mini-card">
              <span className="eyebrow">Customer note</span>
              <p className="body-copy">“{product.socialProof.quote}”</p>
              <p className="fine-copy">
                {product.socialProof.person} · {product.socialProof.rating} rating from {product.socialProof.reviews} review notes
              </p>
            </div>
          </div>
        </div>

        {alternatives.length ? (
          <section className="section">
            <SectionHeading
              eyebrow={product.stockStatus === "sold_out" ? "Same-category alternatives" : "Pairs with the same room"}
              title={product.stockStatus === "sold_out" ? "Sold-out products should never leave shoppers stranded." : "Useful alternatives stay close to the product story."}
              body={product.stockStatus === "sold_out" ? "If a piece is gone, nearby alternatives make it easier to keep shopping without starting over." : "Similar pieces stay close by so you can compare options without losing the feel of the room you are building."}
            />

            <div className="catalog-grid">
              {alternatives.map((item, index) => (
                <AnimateIn delay={index * 60} key={item.slug}>
                  <ProductCard product={item} />
                </AnimateIn>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
