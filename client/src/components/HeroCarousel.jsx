import { useState, useRef, useEffect } from "react";
import { products } from "../data/index.js";
import ProductImage from "./ui/ProductImage.jsx";
import { ArrowRight } from "./icons.jsx";

const HeroCarousel = ({ onVisualize, onAddToCart }) => {
  const slides = products.slice(0, 5);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const idxRef = useRef(0);
  const transitioning = useRef(false);
  const intervalRef = useRef(null);

  const goTo = (next) => {
    if (transitioning.current) return;
    transitioning.current = true;
    setVisible(false);
    setTimeout(() => {
      idxRef.current = next;
      setIdx(next);
      setVisible(true);
      transitioning.current = false;
    }, 380);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goTo((idxRef.current + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const current = slides[idx];

  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "55fr 45fr",
      minHeight: "86vh",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Left: product info */}
      <div style={{
        background: "#FFFFFF",
        padding: "80px 56px 100px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(10px)",
        transition: "opacity 0.38s ease, transform 0.38s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
          <span style={{ width: "24px", height: "3px", background: "#FF6B35", display: "inline-block" }} />
          <span style={{
            fontSize: "12px", fontWeight: 800, color: "#FF6B35", textTransform: "uppercase",
            letterSpacing: "0.2em", background: "#1A1A1A", padding: "4px 10px", borderRadius: "4px",
          }}>
            {current.category}
          </span>
          {current.badge && (
            <span style={{
              background: "#FF6B35", color: "#FFFFFF",
              borderRadius: "4px", padding: "4px 10px",
              fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>{current.badge}</span>
          )}
        </div>

        <h1 style={{
          fontFamily: "'Arial Black', Arial, sans-serif",
          fontSize: "clamp(52px, 6.5vw, 90px)",
          fontWeight: 900, lineHeight: 0.95,
          margin: "0 0 20px", color: "#1A1A1A",
          letterSpacing: "-2px",
          textTransform: "uppercase",
        }}>
          {current.name}
        </h1>

        <p style={{
          color: "#666666", fontSize: "16px", lineHeight: 1.7,
          margin: "0 0 10px", maxWidth: "400px", fontWeight: 400,
          fontFamily: "Arial, sans-serif",
        }}>
          {current.desc}
        </p>

        <div style={{ display: "flex", alignItems: "baseline", gap: "10px", margin: "16px 0 36px" }}>
          <span style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "42px", fontWeight: 900,
            color: "#FF6B35",
            letterSpacing: "-1px",
          }}>{current.price}</span>
          {current.originalPrice && (
            <span style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "18px", fontWeight: 400,
              color: "#999999", textDecoration: "line-through",
            }}>was {current.originalPrice}</span>
          )}
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button onClick={() => onAddToCart(current)} style={{
            background: "#FF6B35", color: "#FFFFFF",
            border: "none", borderRadius: "6px",
            padding: "16px 32px", fontSize: "15px", fontWeight: 800,
            cursor: "pointer", fontFamily: "'Arial Black', Arial, sans-serif",
            textTransform: "uppercase", letterSpacing: "0.08em",
            transition: "all 0.15s",
            boxShadow: "0 4px 16px rgba(255,107,53,0.3)",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#E55A2B"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#FF6B35"; e.currentTarget.style.transform = "translateY(0)"; }}
          >ADD TO CART</button>

          <button onClick={() => onVisualize(current)} style={{
            background: "#1A1A1A", color: "#FFFFFF",
            border: "none", borderRadius: "6px",
            padding: "16px 32px", fontSize: "14px",
            cursor: "pointer", fontFamily: "'Arial Black', Arial, sans-serif",
            textTransform: "uppercase", letterSpacing: "0.06em",
            transition: "all 0.15s",
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#333333"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#1A1A1A"; }}
          >Visualize It</button>
        </div>

        <div style={{ display: "flex", gap: "6px", marginTop: "24px", flexWrap: "wrap" }}>
          {current.tags.map(t => (
            <span key={t} style={{
              background: "#F5F5F5", color: "#1A1A1A",
              border: "2px solid #E0E0E0",
              borderRadius: "6px", padding: "4px 12px",
              fontSize: "11px", fontWeight: 700, letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Right: bold product visual with pop art style */}
      <div style={{
        background: "#FFF0E6",
        transition: "background 0.9s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Bold graphic elements */}
        <div style={{
          position: "absolute",
          top: "40px", right: "40px",
          fontSize: "120px",
          fontWeight: 900,
          color: "rgba(255,107,53,0.15)",
          fontFamily: "'Arial Black', Arial, sans-serif",
          pointerEvents: "none",
          lineHeight: 1,
        }}>SALE</div>

        <div style={{
          background: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: "0 16px 60px rgba(255,107,53,0.25)",
          width: "72%",
          aspectRatio: "1 / 1",
          display: "flex", alignItems: "center", justifyContent: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.96)",
          transition: "opacity 0.38s ease, transform 0.38s ease",
          overflow: "hidden",
          border: "4px solid #1A1A1A",
        }}>
          <ProductImage product={current} />
        </div>

        {/* Price badge overlay */}
        <div style={{
          position: "absolute",
          bottom: "32px", left: "32px",
          background: "#1A1A1A",
          color: "#FFFFFF",
          padding: "16px 20px",
          borderRadius: "8px",
          transform: "rotate(-5deg)",
        }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#FF6B35", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Factory Direct
          </div>
          <div style={{ fontSize: "24px", fontWeight: 900, fontFamily: "'Arial Black', Arial, sans-serif" }}>
            {current.price}
          </div>
        </div>
      </div>

      {/* Slide navigation dots - bold style */}
      <div style={{
        position: "absolute",
        bottom: "32px", left: "27.5%",
        transform: "translateX(-50%)",
        display: "flex", gap: "10px", zIndex: 10,
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => { goTo(i); startAutoPlay(); }} style={{
            width: i === idx ? "36px" : "10px",
            height: "10px",
            borderRadius: "5px",
            background: i === idx ? "#FF6B35" : "#E0E0E0",
            border: "none", cursor: "pointer",
            transition: "all 0.3s ease",
            padding: 0,
            fontWeight: 900,
          }} />
        ))}
      </div>

      {/* Slide counter - bold */}
      <div style={{
        position: "absolute",
        top: "32px", right: "32px",
        fontSize: "14px", fontWeight: 800, color: "#1A1A1A",
        letterSpacing: "0.15em", fontFamily: "'Arial Black', Arial, sans-serif",
        zIndex: 10,
        background: "#FFFFFF",
        padding: "8px 12px",
        borderRadius: "6px",
        border: "2px solid #E0E0E0",
      }}>
        {String(idx + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default HeroCarousel;
