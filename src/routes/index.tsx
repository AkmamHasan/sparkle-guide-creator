import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, MapPin, Sparkles,
} from "lucide-react";
import {
  profile, metrics, projects, capabilities, experience, education, publication,
} from "@/data/portfolio";
import {
  SectionHeading, MetricCard, TechnologyTag, FeaturedProjectCard,
} from "@/components/site/Primitives";
import { ProcessDiagram } from "@/components/site/ProcessDiagram";
import { CycloneChart } from "@/components/site/CycloneChart";
import { buildHead } from "@/lib/seo";
import headshot from "@/assets/akmam-headshot.jpg.asset.json";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Akmam Hasan",
  url: "https://akmam.info",
  email: "mailto:akmamhasan01@gmail.com",
  jobTitle: "Applied AI & Data Professional",
  address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "London South Bank University" },
    { "@type": "CollegeOrUniversity", name: "North South University" },
  ],
  sameAs: ["https://linkedin.com/in/akmamhasan", "https://github.com/AkmamHasan"],
  knowsAbout: ["Applied AI", "Machine Learning", "NLP", "Explainable AI", "Data Analytics", "Scientific Forecasting"],
};

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      title: "Akmam Hasan | Applied AI & Data Professional",
      description:
        "Portfolio of Akmam Hasan, an Applied AI and data professional specialising in machine learning, NLP, explainable AI, scientific forecasting and data analytics.",
      path: "/",
      jsonLd: personJsonLd,
    }),
  component: HomePage,
});

function HomePage() {
  const featured = [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99));

  return (
    <>
      {/* HERO */}
      <section className="relative surface-dark overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow" aria-hidden />
        <div className="container-page relative py-16 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border-dark bg-ink-2/60 backdrop-blur px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-bright" />
                </span>
                <span className="text-xs text-text-light-dim">{profile.availabilityLabel}</span>
              </div>

              <h1 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-text-light">
                Applied AI that makes complex decisions{" "}
                <span className="text-teal-bright">easier to understand.</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-text-light-dim leading-relaxed max-w-2xl">
                {profile.heroSupport}
              </p>
              <p className="mt-4 text-sm md:text-base text-text-light-dim/90 leading-relaxed max-w-2xl">
                {profile.heroSupport2}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary">
                  Explore my work <ArrowRight size={16} />
                </Link>
                <a href={profile.cvPath} download className="btn-ghost-dark" aria-label="Download CV (PDF)">
                  <Download size={16} /> Download CV
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-light-dim">
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-teal-bright">
                  <Github size={15} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1.5 hover:text-teal-bright">
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-teal-bright">
                  <Mail size={15} /> Email
                </a>
              </div>

              <div className="mt-8 font-mono text-[11px] tracking-wider text-text-light-dim/80">
                {profile.techLine}
              </div>
            </div>

            {/* Portrait card */}
            <div className="relative">
              <div className="relative rounded-2xl border border-border-dark bg-ink-2/60 backdrop-blur-sm p-5 md:p-6 overflow-hidden">
                <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-teal to-transparent" aria-hidden />

                <div className="relative">
                  <div className="aspect-[4/5] rounded-xl border border-border-dark overflow-hidden bg-ink-3 relative">
                    <img
                      src={headshot.url}
                      alt="Akmam Hasan portrait"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-1/80 to-transparent" aria-hidden />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="font-display font-semibold text-text-light">Akmam Hasan</div>
                      <div className="text-xs text-text-light-dim flex items-center gap-1 mt-0.5">
                        <MapPin size={11} /> London, UK
                      </div>
                    </div>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-teal-bright">
                      Applied AI / Data / Research
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -top-6 -right-6 h-32 w-32 rounded-full bg-teal/20 blur-3xl" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-paper border-b border-border-light">
        <div className="container-page py-14 md:py-16">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="eyebrow">Evidence at a glance</div>
              <h2 className="mt-2 font-display font-semibold text-2xl md:text-3xl text-text-dark">
                Verified figures from the research and project work.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
          <p className="mt-5 text-xs text-text-dark-dim italic max-w-3xl">
            Metrics reflect the datasets, experimental settings and evaluation methods of the respective academic projects.
          </p>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="bg-paper-3/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built around real decisions, not just algorithms."
            description="These case studies show how I move from problem definition and data preparation to modelling, validation, interpretation and practical communication."
          />

          <div className="mt-12 space-y-6">
            {/* Largest featured first */}
            {featured[0] && <FeaturedProjectCard project={featured[0]} large />}

            <div className="grid gap-6 md:grid-cols-2">
              {featured.slice(1).map((p) => (
                <FeaturedProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-ghost-light inline-flex">
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-paper">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Working approach"
            title="From an unclear question to an evidence-based solution."
            description="A consistent five-stage workflow keeps modelling honest, communicates limits clearly, and turns proofs of concept into useful outputs."
          />
          <ProcessDiagram />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-paper-3/40 border-y border-border-light">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="Technical depth with business context."
            description="Skills grouped by how I actually use them in projects — modelling, language, explainability, analytics and delivery."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.group} className="p-6 rounded-xl bg-paper-2 border border-border-light">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-teal" />
                  <h3 className="font-display font-semibold text-text-dark">{c.group}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.items.map((i) => (
                    <li key={i}><TechnologyTag>{i}</TechnologyTag></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH HIGHLIGHT */}
      <section className="bg-paper-2">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <div className="eyebrow">Published research</div>
              <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-text-dark leading-tight">
                Deep learning for cyclone trajectory forecasting.
              </h2>
              <p className="mt-5 text-text-dark-dim leading-relaxed">
                {publication.summary}
              </p>
              <div className="mt-6 p-5 rounded-xl border border-border-light bg-paper-3/60">
                <div className="font-mono text-[11px] uppercase tracking-wider text-text-dark-dim">Citation</div>
                <p className="mt-2 text-sm text-text-dark leading-relaxed">
                  {publication.citation}
                </p>
                <div className="mt-3 font-mono text-xs text-teal-dark">DOI: {publication.doi}</div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={publication.doiUrl} target="_blank" rel="noreferrer noopener" className="btn-primary text-sm">
                  Read publication <ExternalLink size={14} />
                </a>
                <Link to="/research" className="btn-ghost-light text-sm">
                  Explore research <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <CycloneChart />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-paper border-t border-border-light">
        <div className="container-page py-16 md:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="Experience across technology, analysis and frontline operations."
          />
          <ol className="mt-10 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border-light md:left-[7rem]" aria-hidden />
            {experience.map((e) => (
              <li key={e.role + e.dates} className="relative pl-10 md:pl-[10rem] py-5 md:py-6">
                <div className="absolute left-[7px] top-7 h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-paper md:left-[110px]" aria-hidden />
                <div className="md:absolute md:left-0 md:top-7 md:w-[6rem] text-xs font-mono text-text-dark-dim">
                  {e.dates}
                </div>
                <h3 className="font-display font-semibold text-text-dark">
                  {e.role} <span className="text-text-dark-dim font-normal">— {e.org}</span>
                </h3>
                {e.location && <div className="text-xs text-text-dark-dim mt-0.5">{e.location}</div>}
                <p className="mt-2 text-sm text-text-dark-dim leading-relaxed max-w-3xl">{e.summary}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Link to="/about" className="btn-ghost-light text-sm inline-flex">
              Read my full story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-paper-3/40">
        <div className="container-page py-16 md:py-24">
          <SectionHeading eyebrow="Education" title="Foundations across applied AI and computer science." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {education.map((ed) => (
              <article key={ed.degree} className="p-6 md:p-7 rounded-xl border border-border-light bg-paper-2">
                <div className="font-mono text-[11px] text-text-dark-dim uppercase tracking-wider">{ed.period}</div>
                <h3 className="mt-2 font-display font-semibold text-text-dark text-lg">{ed.degree}</h3>
                <div className="text-text-dark-dim text-sm">
                  {ed.institution}{ed.location ? ` · ${ed.location}` : ""}
                </div>
                <div className="mt-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal/10 text-teal-dark border border-teal/20">
                  {ed.result}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ed.areas.map((a) => (
                    <TechnologyTag key={a}>{a}</TechnologyTag>
                  ))}
                </div>
                <p className="mt-4 text-sm text-text-dark-dim leading-relaxed">{ed.dissertation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow opacity-60" aria-hidden />
        <div className="container-page relative py-20 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="eyebrow-light">Get in touch</div>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-text-light leading-tight">
              Looking for someone who can connect AI, data and practical decision-making?
            </h2>
            <p className="mt-5 text-text-light-dim leading-relaxed">
              I am interested in opportunities involving applied AI, data analytics, machine learning, NLP, explainability, data operations and research.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} /> Email Akmam
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="btn-ghost-dark">
                <Linkedin size={16} /> View LinkedIn
              </a>
              <Link to="/projects" className="btn-ghost-dark">
                Explore projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
