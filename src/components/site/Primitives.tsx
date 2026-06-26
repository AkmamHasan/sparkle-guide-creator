import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <div className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</div>}
      <h2
        className={`mt-3 font-display font-semibold text-3xl md:text-4xl leading-tight ${
          dark ? "text-text-light" : "text-text-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-text-light-dim" : "text-text-dark-dim"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function MetricCard({ value, label, dark }: { value: string; label: string; dark?: boolean }) {
  return (
    <div
      className={`p-5 md:p-6 rounded-xl border card-lift ${
        dark
          ? "card-dark"
          : "bg-paper-2 border-border-light"
      }`}
    >
      <div className={`font-display font-semibold text-3xl md:text-4xl tracking-tight ${dark ? "text-teal-bright" : "text-teal-dark"}`}>
        {value}
      </div>
      <div className={`mt-2 text-sm leading-snug ${dark ? "text-text-light-dim" : "text-text-dark-dim"}`}>
        {label}
      </div>
    </div>
  );
}

export function TechnologyTag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={dark ? "tag-mono-dark" : "tag-mono"}>{children}</span>;
}

export function ImagePlaceholder({
  label,
  ratio = "16/9",
  dark,
}: {
  label: string;
  ratio?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border ${
        dark ? "border-border-dark grid-bg bg-ink-3" : "border-border-light grid-bg-light bg-paper-2"
      }`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <div className="space-y-1">
          <div className={`font-mono text-[10px] tracking-wider uppercase ${dark ? "text-teal-bright" : "text-teal-dark"}`}>
            Visual placeholder
          </div>
          <div className={`font-display text-sm md:text-base font-medium ${dark ? "text-text-light" : "text-text-dark"}`}>
            {label}
          </div>
        </div>
      </div>
      <svg className="absolute top-4 right-4 opacity-50" width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <circle cx="18" cy="18" r="3" fill={dark ? "#5EEAD4" : "#16B8A6"} />
        <circle cx="6" cy="6" r="2" fill={dark ? "#5EEAD4" : "#16B8A6"} opacity="0.4" />
        <circle cx="30" cy="6" r="2" fill={dark ? "#5EEAD4" : "#16B8A6"} opacity="0.4" />
        <circle cx="6" cy="30" r="2" fill={dark ? "#5EEAD4" : "#16B8A6"} opacity="0.4" />
        <circle cx="30" cy="30" r="2" fill={dark ? "#5EEAD4" : "#16B8A6"} opacity="0.4" />
        <line x1="18" y1="18" x2="6" y2="6" stroke={dark ? "#5EEAD4" : "#16B8A6"} strokeWidth="0.5" opacity="0.4" />
        <line x1="18" y1="18" x2="30" y2="6" stroke={dark ? "#5EEAD4" : "#16B8A6"} strokeWidth="0.5" opacity="0.4" />
        <line x1="18" y1="18" x2="6" y2="30" stroke={dark ? "#5EEAD4" : "#16B8A6"} strokeWidth="0.5" opacity="0.4" />
        <line x1="18" y1="18" x2="30" y2="30" stroke={dark ? "#5EEAD4" : "#16B8A6"} strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex flex-col rounded-xl border border-border-light bg-paper-2 overflow-hidden card-lift"
    >
      <div className="border-b border-border-light">
        <ImagePlaceholder label={project.coverFallback} ratio="16/9" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow">{project.label}</span>
          {project.year && <span className="font-mono text-[11px] text-text-dark-dim">{project.year}</span>}
        </div>
        <h3 className="mt-2 font-display font-semibold text-lg leading-snug text-text-dark group-hover:text-teal-dark transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-text-dark-dim leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>
        {project.evidence[0] && (
          <div className="mt-4 pt-4 border-t border-border-light text-xs text-text-dark-dim font-mono">
            ▸ {project.evidence[0]}
          </div>
        )}
        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-teal-dark">
          View case study
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProjectCard({ project, large }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group rounded-2xl border border-border-light bg-paper-2 overflow-hidden card-lift ${
        large ? "md:grid md:grid-cols-2" : ""
      }`}
    >
      <div className={`border-b border-border-light ${large ? "md:border-b-0 md:border-r" : ""}`}>
        <ImagePlaceholder label={project.coverFallback} ratio={large ? "4/3" : "16/9"} />
      </div>
      <div className="p-6 md:p-8 flex flex-col">
        <div className="flex items-center gap-2">
          <span className="eyebrow">{project.category}</span>
        </div>
        <h3 className={`mt-3 font-display font-semibold leading-tight text-text-dark ${large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-text-dark-dim leading-relaxed">{project.shortDescription}</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {project.evidence.slice(0, 4).map((e) => (
            <div key={e} className="flex items-start gap-2 text-xs text-text-dark-dim">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-teal flex-shrink-0" />
              <span>{e}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <TechnologyTag key={t}>{t}</TechnologyTag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="btn-primary text-sm">
            View case study <ArrowRight size={14} />
          </Link>
          {project.externalLinks?.[0] && (
            <a
              href={project.externalLinks[0].href}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost-light text-sm"
            >
              {project.externalLinks[0].label} <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
