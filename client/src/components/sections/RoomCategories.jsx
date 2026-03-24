import { roomCategories } from "../../data/index.js";
import { ArrowRight } from "../icons.jsx";
import AnimateIn from "../ui/AnimateIn.jsx";

const RoomCategories = () => (
  <section style={{ padding: "0 48px 72px", borderTop: "3px solid #1A1A1A" }}>
    <AnimateIn>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
        <div>
          <span style={{
            fontSize: "12px", fontWeight: 800, color: "#FFFFFF", textTransform: "uppercase",
            letterSpacing: "0.2em", background: "#FF6B35", padding: "6px 12px", borderRadius: "4px",
            display: "inline-block", marginBottom: "10px",
          }}>
            Shop By Space
          </span>
          <h2 style={{
            fontFamily: "'Arial Black', Arial, sans-serif",
            fontSize: "42px", fontWeight: 900, margin: "8px 0",
            letterSpacing: "-1.5px", color: "#1A1A1A",
            textTransform: "uppercase", lineHeight: 1,
          }}>
            Pick Your Room
          </h2>
        </div>
        <span style={{
          fontSize: "12px", fontWeight: 700, color: "#1A1A1A",
          background: "#F5F5F5", padding: "6px 12px", borderRadius: "4px",
        }}>5 SPACES</span>
      </div>
    </AnimateIn>

    <div style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gridTemplateRows: "240px 240px",
      gap: "12px",
    }}>
      {roomCategories.map((room, i) => (
        <AnimateIn key={room.name} delay={i * 80} style={{ gridRow: i === 0 ? "span 2" : "span 1" }}>
          <div style={{
            borderRadius: "8px",
            padding: "24px",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            cursor: "pointer",
            overflow: "hidden",
            height: "100%",
            backgroundImage: `linear-gradient(to top, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.3) 55%), url(${room.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "all 0.25s ease",
            position: "relative",
            border: "2px solid #1A1A1A",
          }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.borderColor = "#FF6B35";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.borderColor = "#1A1A1A";
            }}
          >
            <div style={{
              fontSize: "11px", fontWeight: 800, color: "#FF6B35",
              textTransform: "uppercase", marginBottom: "8px",
              letterSpacing: "0.15em",
            }}>
              {room.desc}
            </div>
            <div style={{
              fontFamily: "'Arial Black', Arial, sans-serif",
              fontSize: i === 0 ? "36px" : "24px",
              fontWeight: 900, color: "#FFFFFF",
              lineHeight: 1, textTransform: "uppercase",
              letterSpacing: "-1px",
            }}>{room.name}</div>
            <div style={{
              marginTop: "12px", display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "12px", color: "#FFFFFF", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              Explore <ArrowRight />
            </div>
          </div>
        </AnimateIn>
      ))}
    </div>
  </section>
);

export default RoomCategories;
