"use client";
import { motion, type Variants } from "framer-motion";

const stats = [
  { num: "250+", label: "LeetCode Problems" },
  { num: "100", label: "Day Streak" },
  { num: "Top 2", label: "GDG Mentor India" },
  { num: "8.5", label: "CGPA" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "120px 48px 80px" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,158,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(79,158,255,.06) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 80%)",
        }}
      />

      {/* Animated glows */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none"
        style={{
          top: -200,
          right: -200,
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle,rgba(79,158,255,.15) 0%,transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute pointer-events-none"
        style={{
          bottom: -200,
          left: -100,
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle,rgba(0,229,192,.1) 0%,transparent 70%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium"
          style={{ background: "rgba(79,158,255,.1)", border: "1px solid rgba(79,158,255,.25)", color: "var(--accent)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5c0] animate-pulse" />
          Open to SDE Internships · 2026
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="font-black leading-[1.05] tracking-tight mb-5"
          style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(48px,6vw,80px)", letterSpacing: "-2px" }}
        >
          Shaik Jameer
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#4f9eff 0%,#00e5c0 50%,#a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ahmed.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-lg leading-relaxed mb-10 max-w-xl font-light"
          style={{ color: "var(--muted)" }}
        >
          Full-Stack Developer & Cloud Engineer. Recognized by{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            Microsoft, AWS & Google
          </strong>
          . Building scalable products with Next.js, Node.js & AWS. Top 1,500
          nationally in{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            Google The Big Code 2026
          </strong>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex gap-4 flex-wrap mb-14">
          <a
            href="mailto:jameer.xxvi@gmail.com"
            className="px-8 py-3.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-85"
            style={{
              background: "linear-gradient(135deg,#4f9eff,#00e5c0)",
              color: "#000",
            }}
          >
            Get In Touch
          </a>
          <a
            href="https://github.com/jameer-ahmed-shaik"
            target="_blank"
            className="px-8 py-3.5 rounded-lg font-medium text-sm transition-all"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            View GitHub →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex gap-10 flex-wrap pt-10"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl font-black"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: "linear-gradient(135deg,#4f9eff,#00e5c0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.num}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
