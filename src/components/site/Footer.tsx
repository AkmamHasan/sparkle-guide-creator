import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="surface-dark border-t border-border-dark">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-dark bg-ink-3 font-display font-bold text-text-light"
                aria-hidden
              >
                AH
              </span>
              <div>
                <div className="font-display font-semibold text-text-light">Akmam Hasan</div>
                <div className="text-sm text-text-light-dim">Applied AI &amp; Data Professional</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-text-light-dim max-w-xs leading-relaxed">
              Built to communicate applied AI work with clarity, evidence and context.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-text-light-dim">
              <MapPin size={14} className="text-teal-bright" />
              London, United Kingdom
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="eyebrow-light mb-3">Navigate</div>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-text-light-dim hover:text-teal-bright transition-colors">Home</Link></li>
                <li><Link to="/projects" className="text-text-light-dim hover:text-teal-bright transition-colors">Projects</Link></li>
                <li><Link to="/research" className="text-text-light-dim hover:text-teal-bright transition-colors">Research</Link></li>
                <li><Link to="/about" className="text-text-light-dim hover:text-teal-bright transition-colors">About</Link></li>
                <li><Link to="/contact" className="text-text-light-dim hover:text-teal-bright transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow-light mb-3">Connect</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-text-light-dim hover:text-teal-bright">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-text-light-dim hover:text-teal-bright">
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-text-light-dim hover:text-teal-bright">
                    <Mail size={14} /> Email
                  </a>
                </li>
                <li>
                  <a href={profile.cvPath} download className="inline-flex items-center gap-2 text-text-light-dim hover:text-teal-bright">
                    <Download size={14} /> Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="eyebrow-light mb-3">Get in touch</div>
            <a
              href={`mailto:${profile.email}`}
              className="text-text-light hover:text-teal-bright break-all font-mono text-sm"
            >
              {profile.email}
            </a>
            <p className="mt-4 text-xs text-text-light-dim leading-relaxed">
              Open to roles in Applied AI, Data Analytics, ML/NLP, Explainable AI, Data Operations and Research.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-dark flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs text-text-light-dim">
          <div>© {year} Akmam Hasan</div>
          <div className="font-mono">akmam.info</div>
        </div>
      </div>
    </footer>
  );
}
