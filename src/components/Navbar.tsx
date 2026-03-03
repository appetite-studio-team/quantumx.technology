"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { label: "Work", href: "https://wellfound.com/company/quantumx-qx-pvt-ltd" },
    { label: "Ecosystem", href: "https://quantumx.foundation/" },
];

function NavLink({ link, delay = 0 }: { link: (typeof navLinks)[0]; delay?: number }) {
    const [hovered, setHovered] = useState(false);
    return (
        <li>
            <motion.a
                href={link.href}
                {...(link.href.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                })}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + delay }}
                style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: hovered ? "#FFFFFF" : "#9CA3AF",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: "4px",
                    transition: "color 0.2s ease",
                }}
            >
                {link.label}
                <motion.span
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        background: "rgba(139, 92, 246, 0.8)",
                        transformOrigin: "left",
                    }}
                    initial={false}
                    animate={{ scaleX: hovered ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                />
            </motion.a>
        </li>
    );
}

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 0",
            }}
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    cursor: "default",
                }}
            >
                QuantumX
            </motion.div>

            {/* Right: Nav Links + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
                <ul style={{ display: "flex", gap: "28px", listStyle: "none" }}>
                    {navLinks.map((link, i) => (
                        <NavLink key={link.label} link={link} delay={i * 0.05} />
                    ))}
                </ul>

                {/* Follow on X */}
                <motion.a
                    href="https://x.com/_Quantum_X_"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    whileHover={{
                        backgroundColor: "rgba(139, 92, 246, 0.15)",
                        borderColor: "rgba(139, 92, 246, 0.9)",
                        scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        padding: "10px 20px",
                        border: "1px solid rgba(139, 92, 246, 0.6)",
                        borderRadius: "0px",
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow
                </motion.a>
            </div>
        </motion.nav>
    );
}
