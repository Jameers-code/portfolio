"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "AWS Cloud Captain",
    company: "Amazon Web Services",
    badge: "Amazon Web Services",
    badgeColor: "#ff9500",
    date: "Feb 2026 – Present",
    dotColor: "#ff9500",
    points: [
      "Founded the first official AWS Cloud Club on campus; selected in a global student leader cohort.",
      "Organized hands-on workshops on cloud architecture and serverless computing for 150+ students.",
    ],
  },
  {
    role: "Microsoft Learn Student Ambassador",
    company: "Microsoft",
    badge: "Microsoft",
    badgeColor: "#00a4ef",
    date: "Apr 2026 – Present",
    dotColor: "#00a4ef",
    points: [
      "Selected among 3,000 global ambassadors to represent Microsoft's tech ecosystem on campus.",
      "Delivered Azure, AI & cloud-native workshops to 100+ students alongside Microsoft Engineers & MVPs.",
    ],
  },
  {
    role: "GDG Technical Associate Lead",
    company: "Google Developer Groups",
    badge: "Google Developer Groups",
    badgeColor: "#4f9eff",
    date: "Aug 2025 – Present",
    dotColor: "#4285f4",
    points: [
      "Mentored 200+ participants at HACK-A-TRON 3.0; recognized as Top 2 Mentor nationally.",
      "Led Google Cloud & AI Study Jams — helped the institution achieve Tier-1 GDG status in India.",
    ],
  },
  {
    role: "Product Contributor",
    company: "DevLoom",
    badge: "DevLoom",
    badgeColor: "#00e5c0",
    date: "Jan 2026 – Present",
    dotColor: "#00e5c0",
    points: [
      "Contributed feature ideas and built frontend components with Next.js & TypeScript for 300+ active users.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="px-12 py-24"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Experience
        </div>
        <h2
          className="font-black tracking-tight mb-3"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px,4vw,48px)",
            letterSpacing: "-1.5px",
          }}
        >
          Where I&apos;ve Led
        </h2>
        <p
          className="text-base font-light mb-14 max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          Building communities and shipping impact across India&apos;s biggest
          tech ecosystems.
        </p>

        <div
          ref={ref}
          className="relative pl-7"
          style={{
            borderLeft: "1px solid",
            borderImage:
              "linear-gradient(to bottom,#4f9eff,#00e5c0,transparent) 1",
          }}
        >
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-[34px] top-1.5 w-3 h-3 rounded-full"
                style={{
                  border: `2px solid ${e.dotColor}`,
                  background: "var(--bg)",
                }}
              />

              <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                <span
                  className="font-bold text-lg"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {e.role}
                </span>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap"
                  style={{
                    background: `rgba(${hexToRgb(e.badgeColor)},.12)`,
                    color: e.badgeColor,
                    border: `1px solid rgba(${hexToRgb(e.badgeColor)},.3)`,
                  }}
                >
                  {e.badge}
                </span>
              </div>
              <div className="text-sm mb-1" style={{ color: "var(--accent2)" }}>
                {e.company}
              </div>
              <div className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                {e.date}
              </div>
              <ul
                className="text-sm leading-relaxed pl-4 space-y-1.5 list-disc"
                style={{ color: "var(--muted)" }}
              >
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
