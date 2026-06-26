import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

// ─── PASTE YOUR REAL CERTIFICATIONS HERE ───────────────────────────────────
// Copy from: linkedin.com/in/kaushal-kaushal-0265b9308/details/certifications/
const certifications = [
  {
    title: "Build With AI Workshop",
    issuer: "GDG Cloud Chandigarh",
    date: "2024",
    credentialId: "CREDENTIAL-ID-001",
    credentialUrl: "https://www.linkedin.com/in/kaushal-kaushal-0265b9308/overlay/Certifications/551975465/treasury/?profileId=ACoAAE5mM94BRXmjflAxmTYzzJpWYi4sHGrMOyg",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/240px-Udemy_logo.svg.png",
    category: "Web Dev",
    color: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "rgba(59,130,246,0.15)" },
  },
  {
    title: "Generative AI For ALL",
    issuer: "PW Skills",
    date: "2026",
    credentialId: "70917b1f-0670-435d-84d6-13337598b2e3",
    credentialUrl: "https://pwskills.com/learn/certificate/70917b1f-0670-435d-84d6-13337598b2e3/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/240px-Udemy_logo.svg.png",
    category: "Aritificial Intelligence",
    color: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20", glow: "rgba(139,92,246,0.15)" },
  },
  {
    title: "Programming Fundamentals Using Python",
    issuer: "Infosys Springboard",
    date: "2025",
    credentialId: "UC-YYYYYYYY",
    credentialUrl: "https://www.linkedin.com/in/kaushal-kaushal-0265b9308/overlay/Certifications/1933951219/treasury/?profileId=ACoAAE5mM94BRXmjflAxmTYzzJpWYi4sHGrMOyg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/240px-Udemy_logo.svg.png",
    category: "Python",
    color: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", glow: "rgba(16,185,129,0.15)" },
  },
  {
    title: "AWS Summit India Online 2025",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    credentialId: "CREDENTIAL-ID-002",
    credentialUrl: "https://www.deeplearning.ai/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/240px-Coursera-Logo_600x600.svg.png",
    category: "Cloud Computing",
    color: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", glow: "rgba(249,115,22,0.15)" },
  },
  {
    title: "Hack & Win 3.0",
    issuer: "D4 Community",
    date: "2026",
    credentialId: "UC-ZZZZZZZZ",
    credentialUrl: "https://www.linkedin.com/in/kaushal-kaushal-0265b9308/overlay/Certifications/1751178277/treasury/?profileId=ACoAAE5mM94BRXmjflAxmTYzzJpWYi4sHGrMOyg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/240px-Udemy_logo.svg.png",
    category: "Hackathon",
    color: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "rgba(6,182,212,0.15)" },
  },
  {
    title: "React ",
    issuer: "Hackerrank",
    date: "2026",
    credentialId: "3d19f24491e7",
    credentialUrl: "https://www.hackerrank.com/certificates/3d19f24491e7",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/240px-Udemy_logo.svg.png",
    category: "React.js",
    color: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", glow: "rgba(244,63,94,0.15)" },
  },
];

const categories = ["All", ...Array.from(new Set(certifications.map((c) => c.category)))];

const VerifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const CertCard = ({ cert }) => (
  <div
    className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#080d1a] overflow-hidden hover:-translate-y-1.5 transition-all duration-300"
    style={{ "--glow": cert.color.glow }}
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 12px 40px ${cert.color.glow}`}
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
  >
    {/* Top accent */}
    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cert.color.text}`} />

    <div className="p-5 flex flex-col flex-1 gap-4">
      {/* Header row */}
      <div className="flex items-start gap-3">
        {/* Issuer logo */}
        <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 p-1.5">
          <img
            src={cert.logo}
            alt={cert.issuer}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden w-full h-full items-center justify-center text-gray-500 font-bold text-lg">
            {cert.issuer[0]}
          </div>
        </div>

        {/* Title & issuer */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-bold leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
            {cert.title}
          </h3>
          <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
        </div>
      </div>

      {/* Category badge + date */}
      <div className="flex items-center justify-between">
        <span className={`${cert.color.bg} ${cert.color.text} border ${cert.color.border} text-[10px] font-semibold px-2.5 py-0.5 rounded-full`}>
          {cert.category}
        </span>
        <span className="text-gray-600 text-xs font-mono">{cert.date}</span>
      </div>

      {/* Verified + credential */}
      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
          <VerifiedIcon />
          Verified
        </div>
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-500 hover:text-blue-400 text-xs font-medium transition-colors"
        >
          <LinkIcon />
          Show Credential
        </a>
      </div>
    </div>
  </div>
);

export const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Credentials
            </p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
              Verified credentials from globally recognised platforms — always learning, always building.
            </p>
            <div className="mt-5 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-blue-500/20 border-blue-500/50 text-blue-300"
                    : "bg-white/[0.03] border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex justify-center gap-8 mb-10">
            {[
              { label: "Certifications", value: certifications.length },
              { label: "Platforms", value: new Set(certifications.map((c) => c.issuer.split(" / ")[0])).size },
              { label: "Categories", value: categories.length - 1 },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}+
                </p>
                <p className="text-gray-500 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((cert, i) => (
              <RevealOnScroll key={i} delay={i * 60}>
                <CertCard cert={cert} />
              </RevealOnScroll>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <div className="text-center mt-14">
            <a
              href="https://www.linkedin.com/in/kaushal-kaushal-0265b9308/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#0A66C2]/40 text-[#5fa8d3] text-sm font-medium hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/70 transition-all duration-300"
            >
              <LinkedInIcon />
              View All on LinkedIn
            </a>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};