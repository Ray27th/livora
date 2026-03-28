import { Link } from "react-router-dom";

import EmptyState from "../components/EmptyState.jsx";

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <EmptyState
          action={
            <div className="button-row" style={{ justifyContent: "center" }}>
              <Link className="btn btn--primary" to="/shop">
                Go to shop
              </Link>
              <Link className="btn btn--ghost" to="/drops">
                Browse drops
              </Link>
            </div>
          }
          body="This page is not available. You can keep shopping the catalogue or browse the latest drops instead."
          title="Page not found"
        />
      </div>
    </section>
  );
}
