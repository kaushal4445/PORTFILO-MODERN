import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Ambient background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-3xl mx-auto">

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-gray-300 font-medium tracking-wide">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Kaushal
            </span>
          </h1>

          {/* Role line */}
          <p className="text-lg md:text-xl text-blue-400/80 font-medium mb-6 tracking-wide">
            Full-Stack Developer &nbsp;·&nbsp; AI Enthusiast &nbsp;·&nbsp; Open Source Contributor
          </p>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I craft clean, scalable web applications with exceptional performance
            and delightful user experiences — from pixel-perfect UIs to robust
            backend systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-7 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 py-3 px-7 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/10 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              Contact Me
            </a>

            <a
              href="https://drive.google.com/file/d/13x-JnWuqzBewT5fB7NAgbUVX2Gd5O7Gt/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 text-gray-300 py-3 px-7 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:border-white/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-gray-600 text-xs tracking-widest uppercase">Connect</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/kaushal4445"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kaushal-kaushal-0265b9308"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kaushalmehra54@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 hover:text-red-400 hover:border-red-400/50 hover:bg-red-400/10 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <HiOutlineMail size={20} />
            </a>
          </div>

        </div>
      </RevealOnScroll>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <HiArrowDown size={14} />
      </div>
    </section>
  );
};