"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import FeaturePanels from "@/components/FeaturePanels";

const MISSION_SEGMENTS = [
  { text: "QuantumX is building open infrastructure for ", bold: false },
  { text: "quantum computing", bold: true },
  { text: ", ", bold: false },
  { text: "post-quantum cybersecurity", bold: true },
  { text: ", and ", bold: false },
  { text: "next-generation scientific systems", bold: true },
  { text: ".", bold: false },
];

function TypewriterMission() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const totalLen = MISSION_SEGMENTS.reduce((n, s) => n + s.text.length, 0);
  const [visibleLen, setVisibleLen] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (visibleLen >= totalLen) return;
    const t = setInterval(() => {
      setVisibleLen((prev) => (prev >= totalLen ? totalLen : prev + 1));
    }, 35);
    return () => clearInterval(t);
  }, [inView, visibleLen, totalLen]);

  let consumed = 0;
  const parts: { text: string; bold: boolean }[] = [];
  for (const seg of MISSION_SEGMENTS) {
    const start = consumed;
    const end = consumed + seg.text.length;
    consumed = end;
    if (visibleLen <= start) continue;
    const take = Math.min(visibleLen - start, seg.text.length);
    if (take > 0) parts.push({ text: seg.text.slice(0, take), bold: seg.bold });
  }
  const showCursor = visibleLen < totalLen;

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="font-display"
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
      {parts.map((p, i) => (
        <span
          key={i}
          style={
            p.bold
              ? { color: "#FFFFFF", fontWeight: 700 }
              : { color: "#9CA3AF", fontWeight: 400 }
          }
        >
          {p.text}
        </span>
      ))}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          style={{
            display: "inline-block",
            width: "2px",
            height: "0.9em",
            backgroundColor: "#8B5CF6",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
          }}
        />
      )}
    </motion.p>
  );
}

const floatingOrbVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    x: [0, i % 2 === 0 ? 8 : -8, 0],
    opacity: [0.4, 0.7, 0.4],
    transition: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

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
        className="bg-grid-pattern"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating orbs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatingOrbVariants}
            animate="animate"
            style={{
              position: "absolute",
              width: 300 + i * 120,
              height: 300 + i * 120,
              borderRadius: "50%",
              background:
                i === 0
                  ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
                  : i === 1
                    ? "radial-gradient(circle, rgba(58,91,255,0.08) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
              filter: "blur(60px)",
              pointerEvents: "none",
              zIndex: 0,
              top: `${20 + i * 25}%`,
              left: i === 0 ? "10%" : i === 1 ? "60%" : "80%",
            }}
          />
        ))}

        {/* Central purple glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-display"
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 800,
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="font-display"
              style={{
                fontSize: "clamp(42px, 5.5vw, 72px)",
                fontWeight: 800,
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex",
                gap: "0px",
                marginBottom: "14px",
                width: "100%",
                maxWidth: "480px",
              }}
            >
              <motion.input
                type="email"
                placeholder="gavin@hooli.com"
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
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
              <motion.button
                onMouseEnter={() => setSubmitHovered(true)}
                onMouseLeave={() => setSubmitHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.48 }}
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
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{
              textAlign: "center",
              paddingBottom: "28px",
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#5A5E6B", fontSize: "20px", cursor: "default" }}
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
        className="bg-dot-pattern"
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <TypewriterMission />
      </section>

      {/* ============================================ */}
      {/* SECTION 3 — Research Panels + Footer          */}
      {/* ============================================ */}
      <section
        className="bg-diagonal-lines"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Subtle blue glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(58,91,255,0.05) 0%, transparent 70%)",
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
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
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.22 }}
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
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
