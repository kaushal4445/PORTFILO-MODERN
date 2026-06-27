import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Certificates", href: "#certificates" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight active section on scroll
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050810]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a
              href="#home"
              className="font-mono text-lg font-bold tracking-tight group"
            >
              <span className="text-white group-hover:text-gray-200 transition-colors">
                Kaushal
              </span>
              <span className="text-blue-400 group-hover:text-cyan-400 transition-colors">
                .tech
              </span>
              <span
                className="text-cyan-400 ml-0.5"
                style={{ animation: "blink 1s step-end infinite" }}
              >
                _
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {active === link.href && (
                    <span className="absolute inset-0 rounded-lg bg-white/5 border border-white/10" />
                  )}
                  <span className="relative">{link.label}</span>
                  {active === link.href && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-400" />
                  )}
                </a>
              ))}

              {/* CTA */}
              <a
                // href="https://drive.google.com/file/d/13x-JnWuqzBewT5fB7NAgbUVX2Gd5O7Gt/view?usp=drive_link"

                    href="https://drive.google.com/file/d/14stGGAVog3LmUnu2XFF5V_gwCGRn8to3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-400 hover:text-blue-300 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 z-40 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-4 h-0.5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-gray-300 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom glow line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#050810]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-2 transition-all duration-400 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <p className="text-gray-600 text-[10px] tracking-widest uppercase mb-6 font-medium">
          Navigation
        </p>

        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`relative w-48 text-center py-3 text-lg font-semibold rounded-xl transition-all duration-200 ${
              active === link.href
                ? "text-white bg-white/5 border border-white/10"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {active === link.href && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400" />
            )}
            {link.label}
          </a>
        ))}

        <a
          // href="https://drive.google.com/file/d/13x-JnWuqzBewT5fB7NAgbUVX2Gd5O7Gt/view?usp=drive_link"

          href="https://drive.google.com/file/d/14stGGAVog3LmUnu2XFF5V_gwCGRn8to3/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-6 flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold px-6 py-3 rounded-full hover:bg-blue-500/20 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download Resume
        </a>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
};