"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "⚡",
    bg: "rgba(79,158,255,.15)",
    title: "Languages",
    tags: ["C++", "Java", "JavaScript", "Python", "SQL"],
  },
  {
    icon: "🎨",
    bg: "rgba(0,229,192,.15)",
    title: "Frontend",
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "🔧",
    bg: "rgba(167,139,250,.15)",
    title: "Backend & DB",
    tags: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
  },
  {
    icon: "☁️",
    bg: "rgba(255,107,107,.15)",
    title: "Cloud & DevOps",
    tags: ["AWS EC2", "AWS S3", "Lambda", "GCP", "CI/CD", "Vercel"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-12 py-24 max-w-6xl mx-auto">
      <div
        className="text-xs font-bold tracking-widest uppercase mb-3"
        style={{ color: "var(--accent)" }}
      >
        Technical Skills
      </div>
      <h2
        className="font-black tracking-tight mb-12"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(32px,4vw,48px)",
          letterSpacing: "-1.5px",
        }}
      >
        What I Work With
      </h2>

      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ borderColor: "rgba(79,158,255,.4)", y: -4 }}
            className="rounded-xl p-6 cursor-default transition-colors"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
              style={{ background: s.bg }}
            >
              {s.icon}
            </div>
            <h3
              className="font-bold text-sm mb-3"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {s.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {s.tags.map((t) => (
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
