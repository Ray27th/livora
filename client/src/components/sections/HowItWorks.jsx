import { forwardRef } from "react";
import AnimateIn from "../ui/AnimateIn.jsx";

const steps = [
  {
    n: "1", title: "DESCRIBE YOUR ROOM",
    body: "Write naturally — style, walls, floors, lighting. Try: \"Bright HDB living room, parquet floors, warm light.\"",
  },
  {
    n: "2", title: "PICK A PIECE",
    body: "Choose any product from the catalog. It'll be composited intelligently into your described scene.",
  },
  {
    n: "3", title: "SEE YOUR ROOM",
    body: "A photorealistic render with the furniture placed naturally. Regenerate or adjust your prompt anytime.",
  },
];

const HowItWorks = forwardRef((_, ref) => (
  <section ref={ref} style={{
    padding: "80px 48px",
    background: "#FF6B35",
    borderTop: "3px solid #1A1A1A",
  }}>
    <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "88px", alignItems: "center" }}>
        <AnimateIn>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ width: "28px", height: "3px", background: "#1A1A1A", display: "inline-block" }} />
            <span style={{
              fontSize: "12px", fontWeight: 800, color: "#1A1A1A", textTransform: "uppercase",
              letterSpacing: "0.2em", background: "#FFFFFF", padding: "6px 12px", borderRadius: "4px",
            }}>
              AI VISUALIZATION
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(38px, 4.5vw, 58px)",
            fontWeight: 900, margin: "0 0 20px",
            letterSpacing: "-2px", color: "#1A1A1A",
            textTransform: "uppercase", lineHeight: 1,
          }}>
            SEE IT BEFORE<br />YOU COMMIT.
          </h2>
          <p style={{
            color: "#1A1A1A", fontSize: "15px", lineHeight: 1.7,
            margin: 0, fontWeight: 700,
          }}>
            The only furniture platform in Southeast Asia that lets you render any piece in your room — from a single sentence.
          </p>
        </AnimateIn>

        <div>
          {steps.map((step, i) => (
            <AnimateIn key={step.n} delay={i * 120}>
              <div style={{
                display: "flex", gap: "24px",
                paddingBottom: i < 2 ? "32px" : "0",
                marginBottom: i < 2 ? "32px" : "0",
                borderBottom: i < 2 ? "2px solid #1A1A1A" : "none",
              }}>
                <div style={{
                  width: "40px", height: "40px", flexShrink: 0,
                  background: "#1A1A1A", color: "#FFFFFF",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  fontSize: "18px", fontWeight: 900,
                }}>{step.n}</div>
                <div>
                  <div style={{
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    fontSize: "18px", fontWeight: 900,
                    marginBottom: "8px", color: "#1A1A1A",
                    textTransform: "uppercase",
                  }}>{step.title}</div>
                  <div style={{ color: "#1A1A1A", fontSize: "14px", lineHeight: 1.6, fontWeight: 600 }}>{step.body}</div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </div>
  </section>
));

HowItWorks.displayName = "HowItWorks";
export default HowItWorks;
