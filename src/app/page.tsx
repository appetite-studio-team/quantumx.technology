"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FeaturePanels from "@/components/FeaturePanels";

export default function Home() {
  const [submitHovered, setSubmitHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        background: "#0A0A0F",
      }}
    >
      {/* ============================================ */}
      {/* SECTION 1 — Hero + Newsletter                */}
      {/* ============================================ */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle purple radial glow */}
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Container */}
        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Navbar />

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: "6px",
              }}
            >
              Engineering the
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                marginBottom: "24px",
                color: "#0A0A0F",
                background: "#FFFFFF",
                display: "inline-block",
                padding: "4px 16px",
              }}
            >
              Post-Quantum World.
            </motion.h1>

            {/* Newsletter */}
            <motion.div
              id="newsletter"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
              style={{
                display: "flex",
                gap: "0px",
                marginBottom: "14px",
                width: "100%",
                maxWidth: "480px",
              }}
            >
              <input
                type="email"
                placeholder="gavin@hooli.com"
                style={{
                  flex: 1,
                  padding: "14px 18px",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  backgroundColor: "#111118",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRight: "none",
                  borderRadius: "0px",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s ease",
                }}
              />
              <button
                onMouseEnter={() => setSubmitHovered(true)}
                onMouseLeave={() => setSubmitHovered(false)}
                style={{
                  padding: "14px 28px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  backgroundColor: submitHovered ? "rgba(139, 92, 246, 0.15)" : "transparent",
                  border: "1px solid rgba(139, 92, 246, 0.6)",
                  borderRadius: "0px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
              >
                Get Notified →
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              style={{
                fontSize: "11px",
                color: "#5A5E6B",
              }}
            >
              No spam. Ever. Only research updates that matter.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              textAlign: "center",
              paddingBottom: "28px",
            }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#5A5E6B", fontSize: "18px" }}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2 — Mission Statement                 */}
      {/* ============================================ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "80px 40px",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 400,
            color: "#9CA3AF",
            lineHeight: 1.5,
            maxWidth: "800px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          QuantumX is building open infrastructure for{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 700 }}>quantum computing</span>,{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 700 }}>post-quantum cybersecurity</span>, and{" "}
          <span style={{ color: "#FFFFFF", fontWeight: 700 }}>next-generation scientific systems</span>.
        </motion.p>
      </section>

      {/* ============================================ */}
      {/* SECTION 3 — Research Panels + Footer          */}
      {/* ============================================ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Subtle blue glow */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(58,91,255,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Section content */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
              paddingTop: "80px",
              paddingBottom: "40px",
            }}
          >
            {/* Section header */}
            <div style={{ textAlign: "center" }}>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Research Infrastructure
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#9CA3AF",
                  lineHeight: 1.6,
                  maxWidth: "500px",
                  margin: "0 auto",
                }}
              >
                Open tools and frameworks preparing the world for the quantum
                transition.
              </motion.p>
            </div>

            {/* Feature Panels */}
            <FeaturePanels />
          </div>

          {/* Footer */}
          <footer
            style={{
              textAlign: "center",
              paddingBottom: "28px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 400,
                color: "#5A5E6B",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              © 2026 QuantumX.Technology&nbsp;&nbsp;·&nbsp;&nbsp;Preparing the
              Quantum Transition
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
}
