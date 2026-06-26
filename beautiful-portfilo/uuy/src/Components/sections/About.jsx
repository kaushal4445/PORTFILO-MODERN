import { RevealOnScroll } from "../RevealOnScroll";

const frontendSkills = [
  "React", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript",
  "Tailwind CSS", "Bootstrap", "Framer Motion", "Redux",
];

const backendSkills = [
  "Node.js", "Express.js", "REST APIs", "GraphQL", "JWT", "OAuth2",
  "WebSockets", "Razorpay",
];

const databaseSkills = [
  "MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase",
  "MongoDB Atlas", "Redis",
];

const dataScienceSkills = [
  "Python", "Gen AI", "AI Agents", "Pandas", "NumPy",
  "Matplotlib", "Seaborn", "Google Colab", "Scikit-learn",
];

const devOpsSkills = [
  "Git", "GitHub", "Vercel", "Netlify", "Render",
  "Docker (basics)", "Linux", "Vite",
];

const skillSections = [
  {
    label: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: frontendSkills,
    accent: "from-blue-500 to-cyan-400",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    label: "Backend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: backendSkills,
    accent: "from-violet-500 to-purple-400",
    bg: "bg-violet-500/10",
    text: "text-violet-400",
    border: "border-violet-500/20",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    label: "Databases",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: databaseSkills,
    accent: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    label: "Data Science & AI",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12l8-8"/><path d="M17 7h4V3"/>
      </svg>
    ),
    skills: dataScienceSkills,
    accent: "from-orange-500 to-amber-400",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
    border: "border-orange-500/20",
    glow: "rgba(249,115,22,0.15)",
  },
  {
    label: "DevOps & Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    skills: devOpsSkills,
    accent: "from-rose-500 to-pink-400",
    bg: "bg-rose-500/10",
    text: "text-rose-400",
    border: "border-rose-500/20",
    glow: "rgba(244,63,94,0.15)",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Who I Am
            </p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>

          {/* Bio Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 mb-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
              I'm a{" "}
              <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
              and{" "}
              <span className="text-white font-semibold">AI enthusiast</span>{" "}
              currently pursuing B.Tech in Computer Science at CGC University, Mohali. I love
              building scalable web apps, crafting smooth UIs, and exploring the intersection
              of AI and real-world products. I'm driven by curiosity and a habit of shipping
              things that actually work.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">
              Tech Stack
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillSections.map((section, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 transition-all duration-300 hover:border-white/20"
                  style={{
                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0 8px 32px ${section.glow}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`)
                  }
                >
                  {/* Section header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`${section.text}`}>{section.icon}</span>
                    <h3
                      className={`text-sm font-bold bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}
                    >
                      {section.label}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {section.skills.map((skill, j) => (
                      <span
                        key={j}
                        className={`${section.bg} ${section.text} border ${section.border} py-0.5 px-2.5 rounded-full text-xs font-medium hover:opacity-90 transition`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Education */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:-translate-y-1 transition-all duration-300 hover:border-blue-500/20 hover:shadow-[0_8px_32px_rgba(59,130,246,0.1)]">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">🎓</span>
                <h3 className="text-base font-bold text-white">Education</h3>
              </div>

              <div className="space-y-5">
                <div className="relative pl-4 border-l border-blue-500/30">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500/80" />
                  <p className="text-white text-sm font-semibold">B.Tech — Computer Science</p>
                  <p className="text-blue-400 text-xs mt-0.5">CGC University, Mohali · 2024–2028</p>
                  <p className="text-gray-400 text-xs mt-1">Data Structures · Web Dev · Cloud Computing</p>
                </div>

                <div className="relative pl-4 border-l border-blue-500/20">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-blue-500/40" />
                  <p className="text-white text-sm font-semibold">Advanced Diploma — Computer Science</p>
                  <p className="text-blue-400 text-xs mt-0.5">Microchip Technology Lab, Mukerian · 2023–2024</p>
                  <p className="text-gray-400 text-xs mt-1">Programming fundamentals · Video Editing · Networking</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:-translate-y-1 transition-all duration-300 hover:border-violet-500/20 hover:shadow-[0_8px_32px_rgba(139,92,246,0.1)]">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl">💼</span>
                <h3 className="text-base font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-5">
                <div className="relative pl-4 border-l border-violet-500/30">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-violet-500/80" />
                  <p className="text-white text-sm font-semibold">Web Development Intern</p>
                  <p className="text-violet-400 text-xs mt-0.5">CodSoft · July 2025 – Present</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Developing and shipping full-stack web features, collaborating on UI
                    components, and integrating third-party APIs.
                  </p>
                </div>

                <div className="relative pl-4 border-l border-violet-500/20">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-violet-500/40" />
                  <p className="text-white text-sm font-semibold">Frontend Intern</p>
                  <p className="text-violet-400 text-xs mt-0.5">DEF Startups · 2019</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Built reusable React components and integrated REST APIs for
                    a consumer-facing dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};