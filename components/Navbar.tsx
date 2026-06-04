"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-[18px] transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(6,9,16,0.92)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }
          : {}
      }
    >
      <span
        className="text-lg font-black"
        style={{
          fontFamily: "Syne, sans-serif",
          background: "linear-gradient(135deg,#4f9eff,#00e5c0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        SJA
      </span>

      <div className="hidden md:flex gap-8">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted)")
            }
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:jameer.xxvi@gmail.com"
        className="text-xs font-bold px-5 py-2 rounded-full transition-opacity duration-200 hover:opacity-85"
        style={{ background: "var(--accent)", color: "#000" }}
      >
        Hire Me
      </a>
    </motion.nav>
  );
}
