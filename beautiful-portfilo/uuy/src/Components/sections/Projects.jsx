import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

const projects = [
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
    title: "Dynamic Form Builder",
    description:
      "Full-stack platform to create, share, and analyze custom forms without coding. Includes QR sharing, submission analytics, and Razorpay payments.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    live: "https://readynest-week1-dynamic-form-builde.vercel.app/",
    github: "https://github.com/kaushal4445/ReadynestWeek1--Dynamic_Form_Builder",
    featured: true,
  },
  {
    title: "Smart Campus Utility App",
    description:
      "Campus life management for students and admins — timetables, assignments, CGPA tracker, attendance, goals, and an admin dashboard.",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    live: "https://smart-campus-utility-app-readynest.vercel.app/",
    github: "https://github.com/kaushal4445/SMART_CAMPUS_UTILITY_APP-ReadynestWeek2",
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
  // {
  //   title: "Todo List",
  //   description:
  //     "Minimalist task manager with add, complete, and delete functionality — persisted across sessions.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   live: "https://gleaming-gecko-c808de.netlify.app/",
  //   github: "https://github.com/yourusername/todo-list",
  // },
  // {
  //   title: "Ludo Board",
  //   description:
  //     "Interactive digital Ludo board game with turn-based logic, animated dice rolls, and multi-player support.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   live: "https://gleaming-gecko-c808de.netlify.app/",
  //   github: "https://github.com/yourusername/ludo-board",
  // },
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

const ImageSkeleton = () => (
  <div className="w-full h-full bg-white/5 animate-pulse flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  </div>
);

const ProjectImage = ({ url, title }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0f1e]" style={{ paddingBottom: "56.25%" }}>
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

const ProjectCard = ({ project, featured = false }) => {
  return (
    <div
      className={`
        group relative flex flex-col
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
      <ProjectImage url={project.live} title={project.title} />

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

        <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-500/10 text-blue-400 border border-blue-500/20 py-0.5 px-2 rounded-full text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
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
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
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

          {/* Featured */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {featured.map((project, i) => (
              <ProjectCard key={i} project={project} featured />
            ))}
          </div>

          {/* Rest */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {rest.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>

          {/* Footer CTA */}
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
        </div>
      </RevealOnScroll>
    </section>
  );
};