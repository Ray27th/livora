import { Link } from "react-router-dom";

import { useStore } from "../app/store.js";
import { stockStatusLabels } from "../theme.js";
import { ArrowRightIcon } from "./icons.jsx";
import ProductImage from "./ui/ProductImage.jsx";

const availabilityClass = {
  in_stock: "badge badge--success",
  low_stock: "badge badge--alert",
  sold_out: "badge badge--dark",
};

export default function ProductCard({ product, showCategory = false }) {
  const { addToCart } = useStore();
  const accent = `var(--tone-${product.tone})`;

  return (
    <article className="product-card" style={{ "--card-accent": accent }}>
      <Link aria-label={`Open ${product.name}`} className="product-card__media" to={`/product/${product.slug}`}>
        <ProductImage objectFit="cover" product={product} />
      </Link>

      <div className="product-card__body">
        <div className="badge-row">
          <span className="badge badge--solid">{product.catalogType}</span>
          <span className={availabilityClass[product.stockStatus]}>{stockStatusLabels[product.stockStatus]}</span>
          {showCategory ? <span className="badge">{product.category.name}</span> : null}
        </div>

        <div className="product-card__top">
          <div>
            <p className="fine-copy">{product.sku}</p>
            <h3 className="product-card__title">{product.name}</h3>
          </div>
          <span className="price-text">{product.priceLabel}</span>
        </div>

        <p className="body-copy">{product.summary}</p>

        <div className="product-card__meta">
          <span className="badge">GST included</span>
          <span className="badge">3 to 5 days</span>
        </div>

        <div className="product-card__actions">
          {product.stockStatus === "sold_out" ? (
            <Link className="btn btn--ghost" to={`/product/${product.slug}`}>
              See alternatives
              <ArrowRightIcon size={14} />
            </Link>
          ) : (
            <button className="btn btn--primary" onClick={() => addToCart(product)} type="button">
              Add to cart
            </button>
          )}

          <Link className="btn btn--ghost" to={`/product/${product.slug}`}>
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
