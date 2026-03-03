import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quantumx.technology";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "QuantumX.Technology — Engineering the Post-Quantum World",
  description:
    "QuantumX is building open, research-driven infrastructure for quantum computing, post-quantum cybersecurity, and next-generation scientific systems.",
  keywords: [
    "quantum computing",
    "post-quantum cryptography",
    "quantum research",
    "cybersecurity",
    "quantum infrastructure",
  ],
  icons: {
    icon: "/App-Icon-Black.png",
    apple: "/App-Icon-Black.png",
  },
  openGraph: {
    title: "QuantumX.Technology",
    description: "Engineering the Post-Quantum World",
    type: "website",
    images: ["/App-Icon-Black.png"],
  },
  twitter: {
    card: "summary",
    images: ["/App-Icon-Black.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
