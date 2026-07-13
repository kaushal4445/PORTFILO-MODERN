import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

const projects = [
  {
    title: "Fest Flow",
    description:
      "FestFlow is a full-stack campus event management platform that provides separate portals for Students, Organizers, and Volunteers.",
    tech: {
      frontend: ["React 19", "Next.js 14", "TypeScript", "Tailwind CSS", "Vite", "React Router", "Lucide React", "QR Code", "HTML5 QR Scanner"],
      backend: ["Firebase Authentication", "Firestore", "Firebase Storage"],
    },
    live: "https://fest-flow-one.vercel.app/",
    github: "https://github.com/kaushal4445/Collage-event-management",
    featured: true,
    teamName: "Team PixelPioneers",
    team: [
      { name: "Diwarkar Singh", linkedin: "https://www.linkedin.com/in/diiwakar-singh/" },
      { name: "Ayush Sinha", linkedin: "https://www.linkedin.com/in/ayush-sinha-46a37b365/" },
      { name: "Divyata", linkedin: "https://www.linkedin.com/in/divyata-1720b737a?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
      { name: "Yogit Goyal", linkedin: "https://www.linkedin.com/in/yogit-goyal-644821395/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BJiucoBGhQJu0t8Z1qt%2B2uA%3D%3D" },
    ],
  },
  {
    title: "Dynamic Form Builder",
    description:
      "Full-stack platform to create, share, and analyze custom forms without coding. Includes QR sharing, submission analytics, and Razorpay payments.",
    tech: {
      frontend: ["React.js"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    },
    live: "https://readynest-week1-dynamic-form-builde.vercel.app/",
    github: "https://github.com/kaushal4445/ReadynestWeek1--Dynamic_Form_Builder",
    featured: true,
  },
  {
    title: "Smart Campus Utility App",
    description:
      "Campus life management for students and admins — timetables, assignments, CGPA tracker, attendance, goals, and an admin dashboard.",
    tech: {
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["Supabase"],
    },
    live: "https://smart-campus-utility-app-readynest.vercel.app/",
    github: "https://github.com/kaushal4445/SMART_CAMPUS_UTILITY_APP-ReadynestWeek2",
    featured: true,
  },
  {
    title: "TeamSync – Real-Time Collaborative Workspace Platform",
    description:
      "TeamSync is a full-stack collaboration platform for teams that need shared workspaces, documents, chat, scheduling, notifications, analytics, and file management in one place. The project now includes real-time collaborative document editing, live collaborator presence, live cursor tracking, safer concurrent edit handling, and reliable autosave/sync behavior.",
    tech: {
      frontend: ["React + Vite", "React Router DOM", "Tailwind CSS", "Socket.IO Client", "React Hot Toast", "React Icons", "Recharts", "Framer Motion"],
      backend: ["Node.js", "Express.js", "MongoDB + Mongoose", "Socket.IO", "JWT + Cookie Parser", "Cloudinary + Multer", "PDFKit"],
    },
    live: "https://teamsync-00p7.onrender.com/",
    github: "https://github.com/kaushal4445/SyncSpace_ReadyNestWeek4",
    featured: true,
    teamName: "Team",
    team: [
      { name: "Kaushal", role: "Frontend", linkedin: "https://www.linkedin.com/in/kaushal-kaushal-0265b9308/" },
      { name: "Prem Dogra", role: "Backend", linkedin: "https://www.linkedin.com/in/prem-dogra-b76109338/" },
    ],
  },
  {
    title: "Movie App",
    description:
      "A dynamic movie discovery platform with real-time search, ratings, and curated watchlists powered by a live movie API.",
    tech: ["HTML", "CSS", "Tailwind", "React", "JSX"],
    live: "https://movie-updater.onrender.com/",
    github: "https://github.com/kaushal4445/Movie-Updater",
    featured: true,
  },
  {
    title: "Currency Calculator",
    description:
      "Real-time currency converter with live exchange rates, clean UI, and support for multiple global currencies.",
    tech: ["React", "TypeScript", "JSX", "Tailwind"],
    live: "https://tourmaline-zuccutto-edf311.netlify.app/",
    github: "https://github.com/KAUSHAL265/Calculator-task",
  },
  {
    title: "Double Landing Page",
    description:
      "A dual-theme landing page showcasing responsive design and interactive API-driven content sections.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://dashing-zuccutto-d6c43b.netlify.app/",
    github: "https://github.com/KAUSHAL265/doubleland-page",
  },
  {
    title: "Rotating Gallery",
    description:
      "A visually immersive image gallery with smooth CSS 3D rotation animations and keyboard navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://gleaming-gecko-c808de.netlify.app/",
    github: "https://github.com/KAUSHAL265/rotating-gallery",
  },
  {
    title: "Amazon Clone",
    description:
      "Front-end clone of Amazon's UI featuring product listings, a cart system, and a responsive storefront layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://transcendent-dolphin-cc43e6.netlify.app/",
    github: "https://github.com/KAUSHAL265/amozon-project",
  },
  {
    title: "Random Joke Generator",
    description:
      "Fetches and displays random jokes from a public API with a clean, single-page interface and share functionality.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://transcendent-bienenstitch-d37426.netlify.app/",
    github: "https://github.com/yourusername/joke-generator",
  },
];

// Generates a live screenshot via Microlink (free, no API key needed)
const screenshotUrl = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ComingSoonCard = () => (
  <div
    className="
      group relative flex flex-col items-center justify-center h-full min-h-[420px]
      rounded-2xl border-2 border-dashed border-blue-500/25
      bg-gradient-to-br from-blue-950/40 via-[#080d1a] to-cyan-950/20
      hover:border-blue-400/60
      hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]
      transition-all duration-500 p-6 text-center overflow-hidden
    "
  >
    {/* Soft glow blobs */}
    <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-colors duration-500" />
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-colors duration-500" />

    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
      <PlusIcon />
    </div>
    <p className="relative bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-base font-bold">
      More Projects
    </p>
    <p className="relative text-gray-500 text-xs mt-1.5 tracking-wide uppercase">
      Coming soon
    </p>
    <span className="relative mt-3 flex gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 animate-pulse" />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/50 animate-pulse [animation-delay:150ms]" />
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/30 animate-pulse [animation-delay:300ms]" />
    </span>
  </div>
);

const ImageSkeleton = () => (
  <div className="w-full h-full bg-white/5 animate-pulse flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  </div>
);

const ProjectImage = ({ url, title, featured }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0f1e]" style={{ paddingBottom: "56.25%" }}>
      {/* Featured label */}
      {featured && (
        <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1 bg-blue-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-lg">
          <StarIcon /> Featured
        </div>
      )}

      <div className="absolute inset-0">
        {!loaded && !error && <ImageSkeleton />}
        {error ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/20 to-cyan-900/10 gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 font-bold text-xl">
              {title[0]}
            </div>
            <span className="text-gray-600 text-xs font-medium">{title}</span>
          </div>
        ) : (
          <img
            src={screenshotUrl(url)}
            alt={`${title} preview`}
            className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => { setError(true); }}
          />
        )}
      </div>

      {/* Hover overlay with action buttons */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-end p-3 gap-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-blue-500 transition shadow-lg"
        >
          <ExternalLinkIcon /> Preview
        </a>
      </div>
    </div>
  );
};

// Renders a single row of tech badges, optionally under a small caption label.
const TechRow = ({ label, items, dotClass }) => (
  <div className={label ? "mb-2 last:mb-0" : ""}>
    {label && (
      <p className="flex items-center gap-1.5 text-gray-500 text-[9px] font-semibold uppercase tracking-wider mb-1">
        <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
        {label}
      </p>
    )}
    <div className="flex flex-wrap gap-1.5">
      {items.map((tech, i) => (
        <span
          key={i}
          className="bg-blue-500/10 text-blue-400 border border-blue-500/20 py-0.5 px-2 rounded-full text-[10px] font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

// Balances tech display: full-stack projects (tech as {frontend, backend})
// get two clearly labeled sections; single-tier projects (tech as a flat
// array) get one plain row of badges.
const TechStack = ({ tech }) => {
  if (Array.isArray(tech)) {
    return <TechRow items={tech} />;
  }

  const { frontend = [], backend = [] } = tech;

  return (
    <div className="space-y-2">
      {frontend.length > 0 && (
        <TechRow label="Frontend" items={frontend} dotClass="bg-blue-400" />
      )}
      {backend.length > 0 && (
        <TechRow label="Backend" items={backend} dotClass="bg-cyan-400" />
      )}
    </div>
  );
};

// Renders team member credits. If members have a `role` (e.g. Frontend /
// Backend), each is shown with its role label; otherwise falls back to a
// flat badge list (used by projects like Fest Flow with an even team).
const TeamCredits = ({ teamName, team }) => {
  const hasRoles = team.some((m) => m.role);

  return (
    <div className="mb-3">
      <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wide mb-1.5">
        {teamName || "Team"}
      </p>

      {hasRoles ? (
        <div className="flex flex-wrap gap-2">
          {team.map((member, i) => (
            <a
              key={i}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/5 hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/30 text-gray-300 hover:text-blue-300 py-1 px-2 rounded-full text-[10px] font-medium transition-colors"
            >
              <LinkedInIcon />
              <span>{member.name}</span>
              {member.role && (
                <span className="text-blue-400/80 font-semibold">· {member.role}</span>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-1.5">
          {team.map((member, i) => (
            <a
              key={i}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/5 hover:bg-blue-500/15 border border-white/10 hover:border-blue-500/30 text-gray-300 hover:text-blue-300 py-1 px-2 rounded-full text-[10px] font-medium transition-colors"
            >
              <LinkedInIcon />
              {member.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div
      className={`
        group relative flex flex-col h-full
        rounded-2xl border border-white/10 bg-[#080d1a]
        overflow-hidden
        hover:-translate-y-1.5 hover:border-blue-500/40
        hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)]
        transition-all duration-300
      `}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Screenshot */}
      <ProjectImage url={project.live} title={project.title} featured={featured} />

      {/* Card body */}
      <div className={`flex flex-col flex-1 ${featured ? "p-5" : "p-4"}`}>

        {/* Title row */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className={`font-bold text-white group-hover:text-blue-300 transition-colors leading-snug ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {project.title}
          </h3>
          <div className="flex gap-2 shrink-0 mt-0.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors"
              title="Live Demo"
            >
              <ExternalLinkIcon />
            </a>
          </div>
        </div>

        <p className={`text-gray-400 text-xs leading-relaxed mb-3 ${featured ? "line-clamp-4" : "line-clamp-3"}`}>
          {project.description}
        </p>

        {/* Team members */}
        {project.team && project.team.length > 0 && (
          <TeamCredits teamName={project.teamName} team={project.team} />
        )}

        {/* Tech badges — balanced Frontend/Backend sections for full-stack projects */}
        <div className="mt-auto pt-3 border-t border-white/5">
          <TechStack tech={project.tech} />
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header — reveals on its own, independent of the (very tall) grids below */}
        <RevealOnScroll>
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              A collection of projects spanning full-stack apps, interactive UIs, and browser experiments.
            </p>
            <div className="mt-5 flex justify-center">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
          </div>
        </RevealOnScroll>

        {/* Featured — each card reveals independently so a tall mobile grid
            doesn't stop the IntersectionObserver threshold from ever being met */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 mb-5 auto-rows-fr">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.title} delay={(i % 4) * 80}>
              <ProjectCard project={project} featured />
            </RevealOnScroll>
          ))}
        </div>

        {/* Rest — same per-card reveal pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-fr">
          {rest.map((project, i) => (
            <RevealOnScroll key={project.title} delay={(i % 4) * 80}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
          <RevealOnScroll delay={(rest.length % 4) * 80}>
            <ComingSoonCard />
          </RevealOnScroll>
        </div>

        {/* Footer CTA */}
        <RevealOnScroll>
          <div className="text-center mt-14">
            <a
              href="https://github.com/kaushal4445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500/40 text-blue-400 text-sm font-medium hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
            >
              <GitHubIcon />
              View All on GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};