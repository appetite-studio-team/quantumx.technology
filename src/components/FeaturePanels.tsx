"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface PanelProps {
    image: string;
    title: string;
    description: string;
    delay: number;
}

function Panel({ image, title, description, delay }: PanelProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                flex: 1,
                background: "#111118",
                border: `1px solid ${hovered ? "rgba(139, 92, 246, 0.45)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "0px",
                transition: "all 0.2s ease",
                cursor: "default",
                overflow: "hidden",
            }}
        >
            {/* Image */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "160px",
                    overflow: "hidden",
                }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{
                        objectFit: "cover",
                        transition: "transform 0.4s ease, filter 0.4s ease",
                        transform: hovered ? "scale(1.05)" : "scale(1)",
                        filter: hovered ? "brightness(1.1)" : "brightness(0.8)",
                    }}
                />
                {/* Bottom gradient fade into card bg */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "60px",
                        background: "linear-gradient(to top, #111118, transparent)",
                    }}
                />
            </div>

            {/* Content */}
            <div style={{ padding: "20px 24px 24px" }}>
                <h3
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
                </h3>
                <p
                    style={{
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#9CA3AF",
                        lineHeight: 1.5,
                    }}
                >
                    {description}
                </p>
            </div>
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
        <div
            style={{
                display: "flex",
                gap: "12px",
                width: "100%",
            }}
        >
            {panels.map((panel, i) => (
                <Panel key={panel.title} {...panel} delay={0.1 + i * 0.08} />
            ))}
        </div>
    );
}
