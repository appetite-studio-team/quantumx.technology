"use client";

import { motion } from "framer-motion";

const navLinks = [
    { label: "Work", href: "https://wellfound.com/company/quantumx-qx-pvt-ltd" },
    { label: "Ecosystem", href: "https://quantumx.foundation/" },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "22px 0",
            }}
        >
            {/* Logo */}
            <div
                style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                }}
            >
                QuantumX
            </div>

            {/* Right: Nav Links + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
                <ul style={{ display: "flex", gap: "28px", listStyle: "none" }}>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                {...(link.href.startsWith("http") && {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                })}
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    color: "#9CA3AF",
                                    textDecoration: "none",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    transition: "color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "#9CA3AF";
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* GET NOTIFIED button */}
                <a
                    href="#newsletter"
                    style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        padding: "10px 20px",
                        border: "1px solid rgba(139, 92, 246, 0.6)",
                        borderRadius: "0px",
                        transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                        const t = e.currentTarget as HTMLAnchorElement;
                        t.style.backgroundColor = "rgba(139, 92, 246, 0.15)";
                        t.style.borderColor = "rgba(139, 92, 246, 0.9)";
                    }}
                    onMouseLeave={(e) => {
                        const t = e.currentTarget as HTMLAnchorElement;
                        t.style.backgroundColor = "transparent";
                        t.style.borderColor = "rgba(139, 92, 246, 0.6)";
                    }}
                >
                    Get Notified
                </a>
            </div>
        </motion.nav>
    );
}
