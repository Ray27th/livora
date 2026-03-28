import { Link } from "react-router-dom";

import { useStore } from "../app/store.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import EmptyState from "../components/EmptyState.jsx";
import QuantityStepper from "../components/QuantityStepper.jsx";
import ProductImage from "../components/ui/ProductImage.jsx";
import { formatPrice } from "../theme.js";

export default function CartPage() {
  const { cart, clearCart, removeFromCart, updateCartQuantity } = useStore();

  if (!cart.lineItems.length) {
    return (
      <section className="section">
        <div className="container">
          <EmptyState
            action={
              <div className="button-row" style={{ justifyContent: "center" }}>
                <Link className="btn btn--primary" to="/shop">
                  Start shopping
                </Link>
                <Link className="btn btn--ghost" to="/drops">
                  Browse drops
                </Link>
              </div>
            }
            body="Your cart is empty. Start with the catalogue or the latest drops and build your room from there."
            title="No items in cart yet"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Cart" }]} />

        <div className="cart-layout">
          <div className="cart-card surface">
            <div style={{ display: "grid", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
              <span className="eyebrow">Your cart</span>
              <h1 className="page-title">Review the order before guest checkout.</h1>
              <p className="lede">
                Check your quantities, confirm the SG-only delivery details, and continue to guest checkout when you are ready.
              </p>
            </div>

            <div className="cart-list">
              {cart.lineItems.map((item) => (
                <div className="cart-item" key={item.slug} style={{ "--item-accent": `var(--tone-${item.product.tone})` }}>
                  <div className="cart-item__media">
                    <ProductImage objectFit="contain" product={item.product} />
                  </div>

                  <div style={{ display: "grid", gap: "var(--space-3)" }}>
                    <div>
                      <p className="fine-copy">{item.product.category.name}</p>
                      <h2 className="card-title" style={{ fontSize: "1.5rem", margin: 0 }}>
                        {item.product.name}
                      </h2>
                    </div>

                    <p className="body-copy">{item.product.summary}</p>

                    <div className="badge-row">
                      <span className="badge">GST included</span>
                      <span className="badge">Mainland Singapore only</span>
                    </div>

                    <QuantityStepper
                      onDecrease={() => updateCartQuantity(item.slug, item.quantity - 1)}
                      onIncrease={() => updateCartQuantity(item.slug, item.quantity + 1)}
                      value={item.quantity}
                    />
                  </div>

                  <div style={{ display: "grid", gap: "var(--space-3)", justifyItems: "end" }}>
                    <span className="price-text">{formatPrice(item.lineTotal)}</span>
                    <button className="btn btn--ghost" onClick={() => removeFromCart(item.slug)} type="button">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="summary-card surface">
            <span className="eyebrow">Order summary</span>
            <div className="summary-row">
              <span className="body-copy">Items ({cart.count})</span>
              <strong>{formatPrice(cart.subtotal)}</strong>
            </div>
            <div className="summary-row">
              <span className="body-copy">GST</span>
              <span>Included</span>
            </div>
            <div className="summary-row">
              <span className="body-copy">Shipping</span>
              <span>Flat mainland SG rules</span>
            </div>
            <div className="summary-row summary-row--total">
              <span className="card-title" style={{ fontSize: "1.2rem" }}>
                Items subtotal
              </span>
              <span className="price-text">{formatPrice(cart.subtotal)}</span>
            </div>

            <div className="mini-card">
              <span className="eyebrow">What happens next</span>
              <p className="body-copy">
                You can continue to guest checkout now. Online payment, inventory reservation, and order emails are not yet enabled on the site.
              </p>
            </div>

            <div className="button-row">
              <Link className="btn btn--primary" to="/checkout">
                Continue to checkout
              </Link>
              <button className="btn btn--ghost" onClick={clearCart} type="button">
                Clear cart
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
