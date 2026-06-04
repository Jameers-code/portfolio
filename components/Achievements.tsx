"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  { icon: "🏆", title: "BizVIT Hackathon — 1st Prize", sub: "Winner among 50+ teams with a production-ready solution." },
  { icon: "🌐", title: "Google The Big Code 2026", sub: "Round 2 Qualifier · Top 1,500 nationally." },
  { icon: "🔥", title: "LeetCode — 250+ Problems", sub: "100-day streak across all DSA topics." },
  { icon: "⭐", title: "Google Cloud Study Jams", sub: "Top 2 Mentor nationally · Tier-1 GDG status." },
  { icon: "☁️", title: "AWS Bronze Badge", sub: "Awarded for leadership, community building & impact." },
  { icon: "🛠️", title: "GSSoC 2026 Contributor", sub: "Selected for India's largest open-source program." },
  { icon: "🎃", title: "Hacktoberfest 2025", sub: "Super Contributor · Holopin Badge + Official T-shirt." },
  { icon: "📊", title: "Naukri Young Turks 2025", sub: "97th percentile in a national technical assessment." },
];

const driveLinks = [
  { label: "📧 Offer & Mail Letters", href: "https://drive.google.com/drive/folders/16BAkDuT4KMf_UKp0kW-wIBbJZ-D_OU0d" },
  { label: "😎 Swag Collection", href: "https://drive.google.com/drive/folders/1MqyyRyKH42sLsiCyuScG9BDDOZ1TMGJY" },
  { label: "🎓 Certificates", href: "https://drive.google.com/drive/folders/1OdnBv0pR0i4pQcBb1mp1wC3tGfkODIAj" },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className="px-12 py-24"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}
        >
          Achievements
        </div>
        <h2
          className="font-black tracking-tight mb-3"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px,4vw,48px)",
            letterSpacing: "-1.5px",
          }}
        >
          The Wall of Wins
        </h2>
        <p
          className="text-base font-light mb-14 max-w-lg"
          style={{ color: "var(--muted)" }}
        >
          Certifications, swag, and recognition from global programs.
        </p>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              whileHover={{ borderColor: "rgba(255,214,102,.35)" }}
              className="flex items-start gap-4 rounded-xl p-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-2xl mt-0.5 shrink-0">{a.icon}</span>
              <div>
                <div className="font-semibold text-sm mb-1">{a.title}</div>
                <div
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {a.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drive links */}
        <div className="mt-14">
          <div
            className="text-xs font-bold tracking-widest uppercase mb-5"
            style={{ color: "var(--accent)" }}
          >
            Credentials & Drive
          </div>
          <div className="flex flex-wrap gap-3">
            {driveLinks.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(79,158,255,.4)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
