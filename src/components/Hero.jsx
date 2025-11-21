import { motion } from "framer-motion";
import heroBg from "../assets/images/Technology-Section-1024x492.jpg"; // Ensure you have an image at this path

const Hero = () => (
  <section
    id="home"
    className="hero"
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      minHeight: "100vh",
    }}
  >
    <div
      className="hero-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
      }}
    >
      <div
        className="hero-content"
        style={{
          zIndex: 2,
          maxWidth: "500px",
          textAlign: "left",
          paddingLeft: "60px",
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontFamily: "'Roboto Slab', serif",
            color: "#1A88DA",
            fontWeight: 800,
            fontSize: 46,
            lineHeight: 1.2,
            marginBottom: 22,
            textAlign: "left",
          }}
        >
          Transforming Brain
          <br />
          Healthcare:&nbsp;Portable
          <br />
          Imaging
        </h1>
        <p
          className="hero-description"
          style={{
            color: "#222",
            fontSize: 16,
            marginBottom: 26,
            textAlign: "left",
          }}
        >
          AiimSense is redefining brain healthcare with portable brain scanners,
          turning costly and time-intensive head scans into real-time, bedside
          monitoring solutions.
        </p>
        <button
          className="btn-primary"
          style={{
            background: "#1A88DA",
            color: "white",
            borderRadius: "8px",
            fontSize: 16,
            fontWeight: 600,
            padding: "11px 26px",
            boxShadow: "0 2px 8px rgba(26,136,218,0.12)",
            border: "none",
            textAlign: "left",
          }}
        >
          Learn More
        </button>
      </div>
    </div>
    <div className="herobefore" />
  </section>
);

export default Hero;
