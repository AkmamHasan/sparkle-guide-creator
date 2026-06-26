import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "backdrop-blur-md bg-paper/80 border-b border-border-light"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Akmam Hasan — home">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-light bg-paper-2 font-display font-bold text-text-dark transition-colors group-hover:border-teal group-hover:text-teal-dark"
            aria-hidden
          >
            AH
          </span>
          <span className="hidden sm:flex items-baseline gap-2">
            <span className="font-display font-semibold text-text-dark">Akmam Hasan</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-dark-dim">/ portfolio</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navItems.map((n) => {
            const active = location.pathname === n.to ||
              (n.to !== "/" && location.pathname.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-text-dark" : "text-text-dark-dim hover:text-text-dark"
                }`}
              >
                {n.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-px h-px bg-teal" aria-hidden />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            className="p-2 rounded-md text-text-dark-dim hover:text-teal-dark transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            className="p-2 rounded-md text-text-dark-dim hover:text-teal-dark transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.cvPath}
            download
            aria-label="Download Akmam Hasan CV (PDF)"
            className="btn-primary text-xs"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-text-dark"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border-light bg-paper-2">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((n) => {
              const active = location.pathname === n.to ||
                (n.to !== "/" && location.pathname.startsWith(n.to));
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    active
                      ? "bg-paper-3 text-text-dark"
                      : "text-text-dark-dim hover:bg-paper-3 hover:text-text-dark"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <div className="mt-3 flex items-center gap-3 border-t border-border-light pt-4">
              <a href={profile.github} target="_blank" rel="noreferrer noopener" className="btn-ghost-light text-sm" aria-label="GitHub">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="btn-ghost-light text-sm" aria-label="LinkedIn">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={profile.cvPath} download className="btn-primary text-sm ml-auto" aria-label="Download CV">
                <Download size={14} /> CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
