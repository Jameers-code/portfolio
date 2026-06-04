"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Business LMS",
    desc: "Full-stack Learning Management System with course creation, student enrollment, progress tracking, JWT auth, and RBAC. Deployed on Vercel with full CI/CD pipeline.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Node.js", "JWT"],
    link: "#",
  },
  {
    num: "02",
    title: "Mind Well",
    desc: "Mental wellness app with journaling, mood tracking & mindfulness features. Sanity.io CMS, SSR for fast loads and SEO, Framer Motion animations throughout.",
    tags: ["Next.js", "TypeScript", "Sanity.io", "Framer Motion", "SSR"],
    link: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <div
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Projects
        </div>
        <h2
          className="font-black tracking-tight mb-3"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px,4vw,48px)",
            letterSpacing: "-1.5px",
          }}
        >
          Things I&apos;ve Built
        </h2>
        <p
          className="text-base font-light mb-14 max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          Production-grade applications solving real problems.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, borderColor: "rgba(79,158,255,.35)" }}
              className="rounded-2xl p-7 cursor-pointer"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "border-color 0.25s",
              }}
            >
              <div
                className="text-xs font-black tracking-widest mb-4"
                style={{ color: "var(--muted)" }}
              >
                {p.num} / PROJECT
              </div>
              <h3
                className="font-black text-xl mb-2 tracking-tight"
                style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-0.5px" }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--muted)" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,.05)",
                      color: "var(--muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="inline-flex items-center gap-1.5 text-xs font-semibold"
                style={{ color: "var(--accent)" }}
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
