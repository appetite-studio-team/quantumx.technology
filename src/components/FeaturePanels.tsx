"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface PanelProps {
    image: string;
    title: string;
    description: string;
}

function Panel({ image, title, description }: PanelProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -6 }}
            style={{
                flex: 1,
                background: "#111118",
                border: `1px solid ${hovered ? "rgba(139, 92, 246, 0.5)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "0px",
                cursor: "default",
                overflow: "hidden",
                boxShadow: hovered ? "0 24px 48px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.15)" : "none",
                transition: "border-color 0.25s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Image */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "180px",
                    overflow: "hidden",
                }}
            >
                <motion.div
                    style={{ position: "absolute", inset: 0 }}
                    animate={{
                        scale: hovered ? 1.08 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{
                            objectFit: "cover",
                            filter: hovered ? "brightness(1.15) contrast(1.02)" : "brightness(0.85)",
                            transition: "filter 0.4s ease",
                        }}
                    />
                </motion.div>
                {/* Bottom gradient fade into card bg */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "70px",
                        background: "linear-gradient(to top, #111118, transparent)",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ padding: "22px 24px 26px" }}
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
            >
                <motion.h3
                    variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "8px",
                    }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    transition={{ duration: 0.35 }}
                    style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#9CA3AF",
                        lineHeight: 1.55,
                    }}
                >
                    {description}
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

const panels = [
    {
        image: "/quantum-vulnerability.png",
        title: "Quantum Vulnerability Dashboard",
        description: "Assess cryptographic risk in the quantum era.",
    },
    {
        image: "/post-quantum-crypto.png",
        title: "Post-Quantum Cryptography",
        description: "Designing secure systems resistant to quantum attacks.",
    },
    {
        image: "/hybrid-quantum.png",
        title: "Hybrid Classical-Quantum Systems",
        description: "Bridging classical infrastructure with quantum processors.",
    },
];

export default function FeaturePanels() {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{
                display: "flex",
                gap: "16px",
                width: "100%",
            }}
        >
            {panels.map((panel) => (
                <Panel key={panel.title} {...panel} />
            ))}
        </motion.div>
    );
}
