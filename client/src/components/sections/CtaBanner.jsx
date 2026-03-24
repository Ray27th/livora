import { products } from "../../data/index.js";
import ProductImage from "../ui/ProductImage.jsx";
import AnimateIn from "../ui/AnimateIn.jsx";

const CtaBanner = ({ onVisualize, onScrollToFeatured }) => (
  <section style={{ padding: "0 48px 80px" }}>
    <AnimateIn distance={16}>
      <div style={{
        background: "#FF6B35",
        borderRadius: "12px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: "360px",
        border: "3px solid #1A1A1A",
        boxShadow: "8px 8px 0px #1A1A1A",
      }}>
        <div style={{ padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <span style={{ width: "28px", height: "3px", background: "#1A1A1A", display: "inline-block" }} />
            <span style={{
              fontSize: "12px", fontWeight: 800, color: "#1A1A1A", textTransform: "uppercase",
              letterSpacing: "0.2em", background: "#FFFFFF", padding: "6px 12px", borderRadius: "4px",
            }}>
              AI VISUALIZATION STUDIO
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "clamp(38px, 4vw, 56px)",
            fontWeight: 900, color: "#1A1A1A",
            margin: "0 0 16px", lineHeight: 0.95,
            letterSpacing: "-2px",
            textTransform: "uppercase",
          }}>
            NOT SURE HOW IT'LL LOOK?<br />
            <span style={{ color: "#FFFFFF", background: "#1A1A1A", padding: "0 8px" }}>SEE IT FIRST.</span>
          </h2>
          <p style={{ color: "#1A1A1A", fontSize: "14px", lineHeight: 1.7, maxWidth: "360px", margin: "0 0 32px", fontWeight: 600 }}>
            Describe your room. Pick a piece. Get a photorealistic render in seconds. No guesswork, no returns anxiety.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => onVisualize(products[0])} style={{
              background: "#1A1A1A", color: "#FFFFFF",
              border: "none", borderRadius: "6px",
              padding: "16px 28px", fontSize: "14px", fontWeight: 800,
              cursor: "pointer", fontFamily: "'Arial Black', Arial, sans-serif",
              textTransform: "uppercase", letterSpacing: "0.08em",
              transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#333333"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1A1A1A"; e.currentTarget.style.transform = "translateY(0)"; }}
            >TRY VISUALIZER</button>

            <button onClick={onScrollToFeatured} style={{
              background: "#FFFFFF", color: "#1A1A1A",
              border: "2px solid #1A1A1A", borderRadius: "6px",
              padding: "16px 28px", fontSize: "14px",
              cursor: "pointer", fontFamily: "'Arial Black', Arial, sans-serif",
              fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "0.06em",
              transition: "all 0.15s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#1A1A1A"; e.currentTarget.style.color = "#FFFFFF"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FFFFFF"; e.currentTarget.style.color = "#1A1A1A"; }}
            >BROWSE ALL</button>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "2px",
          background: "#1A1A1A",
        }}>
          {products.slice(0, 4).map((p) => (
            <div key={p.id} style={{
              background: p.bg,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative", overflow: "hidden",
            }}>
              <ProductImage product={p} />
            </div>
          ))}
        </div>
      </div>
    </AnimateIn>
  </section>
);

export default CtaBanner;
