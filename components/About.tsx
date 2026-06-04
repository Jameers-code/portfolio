"use client";
import FadeIn from "./FadeIn";

const badges = [
  { label: "AWS Cloud Captain", color: "#ff9500" },
  { label: "Microsoft MLSA", color: "#00a4ef" },
  { label: "GDG Tech Lead", color: "#4285f4" },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-12 py-24"
      style={{ background: "var(--bg2)" }}
    >
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Left */}
        <FadeIn>
          <div
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            About Me
          </div>
          <h2
            className="font-black tracking-tight mb-6"
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-1.5px",
            }}
          >
            Building the Future,
            <br />
            One Commit at a Time.
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I&apos;m a{" "}
              <strong style={{ color: "var(--text)" }}>
                Computer Science & Business Systems
              </strong>{" "}
              student at Vishnu Institute of Technology (CGPA 8.5), deeply
              passionate about building products that solve real problems.
            </p>
            <p>
              From winning hackathons to qualifying for Google&apos;s national
              coding rounds, I&apos;ve consistently pushed boundaries — both in
              code and in community. I founded the first AWS Cloud Club on my
              campus and mentor 200+ developers regularly.
            </p>
            <p>
              Competitive programmer by night, full-stack engineer by day.
              Always shipping.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: b.color }}
                />
                {b.label}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Right */}
        <FadeIn delay={0.15}>
          <div
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--muted)" }}
          >
            Education
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="font-bold text-base mb-1"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Vishnu Institute of Technology
            </h3>
            <div className="text-sm mb-1" style={{ color: "var(--accent2)" }}>
              B.Tech — CSE & Business Systems
            </div>
            <div className="text-xs" style={{ color: "var(--muted)" }}>
              2023 – 2027 · CGPA: 8.5 / 10.0
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
