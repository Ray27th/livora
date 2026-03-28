import { supportChannels } from "../content/site/index.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { InstagramIcon, MailIcon } from "../components/icons.jsx";

const contactCards = [
  {
    title: "Before ordering",
    body: "Use Instagram DM for stock questions, dimensions, room-fit checks, and quick delivery clarifications.",
  },
  {
    title: "After ordering",
    body: "Email is the better fallback when you need to share a longer address note or order detail in one place.",
  },
  {
    title: "Support promise",
    body: "Replies are expected within 24 hours, with Instagram DM positioned as the faster path.",
  },
  {
    title: "Returns help",
    body: "For the 7-day return window, start with the order details and reason so the team can guide the next step quickly.",
  },
];

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

        <div className="page-hero">
          <div className="page-hero__panel surface">
            <span className="eyebrow">Contact One59</span>
            <h1 className="page-title">Support is visible, SG-specific, and easy to trust.</h1>
            <p className="lede">
              Instagram DM is the primary support route, email is the fallback, and replies are expected within 24 hours.
            </p>
          </div>

          <div className="page-hero__aside surface">
            <img alt="One59 support context" src="/images/wfh-basic.webp" />
            <div style={{ display: "grid", gap: "var(--space-3)", marginTop: "var(--space-4)" }}>
              <h2 className="card-title" style={{ fontSize: "1.5rem", margin: 0 }}>
                Support should feel closer to the browse flow.
              </h2>
              <p className="body-copy">You will find contact details across the site, so help is easy to reach before and after you place an order.</p>
            </div>
          </div>
        </div>

        <div className="contact-grid" style={{ marginTop: "var(--space-8)" }}>
          <div className="contact-stack">
            {supportChannels.map((channel) => (
              <article className="contact-card" key={channel.href}>
                <span className="eyebrow">{channel.title}</span>
                <h2 className="card-title" style={{ fontSize: "1.8rem", margin: 0 }}>
                  {channel.value}
                </h2>
                <p className="body-copy">{channel.body}</p>
                <a className="btn btn--primary" href={channel.href} rel="noreferrer" target="_blank">
                  {channel.title.includes("Instagram") ? <InstagramIcon /> : <MailIcon />}
                  Open channel
                </a>
              </article>
            ))}
          </div>

          <aside className="contact-stack">
            {contactCards.map((card) => (
              <article className="contact-card" key={card.title}>
                <span className="eyebrow">Need-to-know</span>
                <h2 className="card-title" style={{ fontSize: "1.35rem", margin: 0 }}>
                  {card.title}
                </h2>
                <p className="body-copy">{card.body}</p>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
