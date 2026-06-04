"use client";
import FadeIn from "./FadeIn";

const links = [
  { label: "📧 jameer.xxvi@gmail.com", href: "mailto:jameer.xxvi@gmail.com" },
  { label: "📞 +91 63007 51897", href: "tel:+916300751897" },
  { label: "🔗 LinkedIn", href: "https://linkedin.com/in/jameer-ahmed-shaik" },
  { label: "💻 GitHub", href: "https://github.com/jameer-ahmed-shaik" },
  { label: "⚙️ LeetCode", href: "https://leetcode.com/jameer" },
  { label: "▶️ YouTube", href: "https://youtube.com/@jameer" },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="px-12 py-24"
        style={{
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <FadeIn className="max-w-2xl">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Contact
          </div>
          <h2
            className="font-black tracking-tight mb-5"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-1.5px",
            }}
          >
            Let&apos;s Build
            <br />
            Something Great.
          </h2>
          <p
            className="text-base font-light leading-relaxed mb-10"
            style={{ color: "var(--muted)" }}
          >
            Currently seeking SDE Internships. Open to full-stack, cloud, and
            product engineering roles. Let&apos;s connect — I respond fast.
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: "var(--surface)",
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
                {l.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      <footer
        className="flex items-center justify-between px-12 py-8 text-xs"
        style={{
          borderTop: "1px solid var(--border)",
          color: "var(--muted)",
        }}
      >
        <span>© 2026 Shaik Jameer Ahmed · Bhimavaram, AP</span>
        <span style={{ color: "var(--accent)" }}>Open to SDE Internships →</span>
      </footer>
    </>
  );
}
