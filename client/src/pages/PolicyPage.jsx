import { Link } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { supportChannels } from "../content/site/index.js";
import { policyPages } from "../content/policies/index.js";

export default function PolicyPage({ policyKey }) {
  const policy = policyPages[policyKey];

  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: policy.title }]} />

        <div className="page-hero">
          <div className="page-hero__panel surface">
            <span className="eyebrow">{policy.eyebrow}</span>
            <h1 className="page-title">{policy.title}</h1>
            <p className="lede">{policy.intro}</p>
          </div>

          <div className="page-hero__aside surface">
            <img alt={policy.title} src="/images/entryway-reset.webp" />
            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <h2 className="card-title" style={{ fontSize: "1.5rem", margin: 0 }}>
                Trust pages are part of the storefront, not an afterthought.
              </h2>
              <p className="body-copy">Shipping, returns, privacy, and terms are easy to find so the SG-only rules stay clear before checkout.</p>
            </div>
          </div>
        </div>

        <div className="policy-grid" style={{ marginTop: "var(--space-8)" }}>
          {policy.sections.map((section) => (
            <article className="policy-card" key={section.title}>
              <span className="eyebrow">{section.title}</span>
              <div className="policy-card__section">
                {section.points.map((point) => (
                  <p className="body-copy" key={point}>
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}

          <aside className="policy-card">
            <span className="eyebrow">Support channels</span>
            {supportChannels.map((channel) => (
              <div className="policy-card__section" key={channel.href}>
                <h2 className="card-title" style={{ fontSize: "1.2rem", margin: 0 }}>
                  {channel.title}
                </h2>
                <p className="body-copy">{channel.body}</p>
                <a className="btn btn--ghost" href={channel.href} rel="noreferrer" target="_blank">
                  {channel.value}
                </a>
              </div>
            ))}

            <Link className="btn btn--primary" to="/contact">
              Open contact page
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
