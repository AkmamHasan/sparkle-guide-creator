import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import {
  getProject, getNeighborProjects, type Project,
} from "@/data/portfolio";
import { ImagePlaceholder, TechnologyTag } from "@/components/site/Primitives";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return buildHead({ title: "Project | Akmam Hasan", description: "Project case study by Akmam Hasan.", path: "/projects" });
    return buildHead({
      title: `${p.title} | Akmam Hasan`,
      description: p.shortDescription,
      path: `/projects/${p.slug}`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://akmam.info/" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://akmam.info/projects" },
          { "@type": "ListItem", position: 3, name: p.title, item: `https://akmam.info/projects/${p.slug}` },
        ],
      },
    });
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <div className="eyebrow">404</div>
      <h1 className="mt-3 font-display font-semibold text-2xl text-text-dark">Project not found</h1>
      <Link to="/projects" className="btn-ghost-light text-sm inline-flex mt-6">Back to all projects</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-2xl text-text-dark">Couldn't load this case study</h1>
      <p className="text-text-dark-dim mt-2">{error.message}</p>
      <button onClick={reset} className="btn-primary mt-6">Try again</button>
    </div>
  ),
  component: CaseStudy,
});

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-12">
      <h2 className="font-display font-semibold text-xl md:text-2xl text-text-dark border-b border-border-light pb-3 mb-5">
        {title}
      </h2>
      <div className="prose-content">{children}</div>
    </section>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-text-dark-dim leading-relaxed mb-3 max-w-prose">{children}</p>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 max-w-prose">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-text-dark-dim text-sm leading-relaxed">
          <span className="mt-2 h-1 w-1 rounded-full bg-teal flex-shrink-0" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function WorkflowStrip({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-border-light bg-paper-3/40 p-4 overflow-x-auto">
      <div className="flex items-center gap-2 min-w-fit">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-paper-2 border border-border-light text-text-dark">
              {s.trim()}
            </span>
            {i < steps.length - 1 && <span className="text-teal">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseStudy() {
  const data = Route.useLoaderData() as { project: Project };
  const project = data.project;
  const { prev, next } = getNeighborProjects(project.slug);

  const toc = buildTOC(project);

  return (
    <article>
      {/* Hero */}
      <header className="surface-dark relative overflow-hidden border-b border-border-dark">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow opacity-70" aria-hidden />
        <div className="container-page relative py-14 md:py-20">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-text-light-dim hover:text-teal-bright">
            <ArrowLeft size={14} /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="eyebrow-light">{project.label}</span>
            {project.year && <span className="font-mono text-xs text-text-light-dim">· {project.year}</span>}
          </div>
          <h1 className="mt-4 font-display font-bold text-3xl md:text-4xl lg:text-5xl text-text-light leading-tight max-w-4xl">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="mt-5 text-text-light-dim text-base md:text-lg leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          )}
          {project.context && (
            <div className="mt-5 font-mono text-xs text-teal-bright">{project.context}</div>
          )}

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechnologyTag key={t} dark>{t}</TechnologyTag>
            ))}
          </div>

          {project.externalLinks && project.externalLinks.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.externalLinks.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noreferrer noopener" className="btn-primary text-sm">
                  {l.label} <ExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body with TOC */}
      <div className="container-page py-12 md:py-16">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-10">
          <div>
            {project.atAGlance && (
              <Section id="at-a-glance" title="At a glance">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.atAGlance.map((a) => (
                    <div key={a} className="p-4 rounded-lg border border-border-light bg-paper-2 flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-teal flex-shrink-0" />
                      <span className="text-sm text-text-dark">{a}</span>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {project.problem && (
              <Section id="problem" title="Problem">
                {project.problem.map((p) => <Para key={p}>{p}</Para>)}
              </Section>
            )}

            {project.whyItMatters && (
              <Section id="why" title="Why it matters">
                {project.whyItMatters.map((p) => <Para key={p}>{p}</Para>)}
              </Section>
            )}

            {project.myRole && (
              <Section id="role" title="My role and contribution">
                {project.myRole.map((p) => <Para key={p}>{p}</Para>)}
              </Section>
            )}

            {project.data && (
              <Section id="data" title="Data">
                {project.data.paragraphs?.map((p) => <Para key={p}>{p}</Para>)}
                {project.data.bullets && <Bullets items={project.data.bullets} />}
              </Section>
            )}

            {(project.technicalApproach || project.workflow) && (
              <Section id="approach" title="Technical approach">
                {project.technicalApproach?.paragraphs?.map((p) => <Para key={p}>{p}</Para>)}
                {project.workflow && (
                  <div className="my-5">
                    <div className="eyebrow mb-3">Workflow</div>
                    <WorkflowStrip steps={project.workflow.split("→")} />
                  </div>
                )}
                {project.technicalApproach?.bullets && <Bullets items={project.technicalApproach.bullets} />}
              </Section>
            )}

            {project.models && (
              <Section id="models" title="Models and methods">
                <div className="grid gap-4 md:grid-cols-2">
                  {project.models.groups.map((g) => (
                    <div key={g.heading} className="p-5 rounded-lg border border-border-light bg-paper-2">
                      <div className="font-display font-semibold text-text-dark text-sm">{g.heading}</div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {g.items.map((i) => <TechnologyTag key={i}>{i}</TechnologyTag>)}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {project.evaluation && (
              <Section id="evaluation" title="Evaluation">
                <div className="flex flex-wrap gap-1.5">
                  {project.evaluation.map((e) => <TechnologyTag key={e}>{e}</TechnologyTag>)}
                </div>
              </Section>
            )}

            {project.results && (
              <Section id="results" title="Results">
                {project.results.map((p) => <Para key={p}>{p}</Para>)}
              </Section>
            )}

            {project.explainability && (
              <Section id="explainability" title="Explainability and dashboard output">
                {project.explainability.paragraphs?.map((p) => <Para key={p}>{p}</Para>)}
                {project.explainability.bullets && <Bullets items={project.explainability.bullets} />}
              </Section>
            )}

            {project.responsibleEvaluation && (
              <Section id="responsible" title="Validation and responsible evaluation">
                <Bullets items={project.responsibleEvaluation} />
              </Section>
            )}

            {project.businessRelevance && (
              <Section id="relevance" title="Business or societal relevance">
                {project.businessRelevance.map((p) => <Para key={p}>{p}</Para>)}
              </Section>
            )}

            {project.limitations && (
              <Section id="limitations" title="Limitations">
                <Bullets items={project.limitations} />
              </Section>
            )}

            {project.whatILearned && (
              <Section id="learned" title="What I learned">
                <Bullets items={project.whatILearned} />
              </Section>
            )}

            {project.futureImprovement && (
              <Section id="future" title="How I would improve it">
                <Bullets items={project.futureImprovement} />
              </Section>
            )}

            {project.extraSections?.map((s) => (
              <Section key={s.heading} id={slug(s.heading)} title={s.heading}>
                {s.paragraphs?.map((p) => <Para key={p}>{p}</Para>)}
                {s.bullets && <Bullets items={s.bullets} />}
              </Section>
            ))}

            {project.imagePlaceholders && project.imagePlaceholders.length > 0 && (
              <Section id="visuals" title="Visuals and artefacts">
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.imagePlaceholders.map((img) => (
                    <div key={img.path}>
                      <ImagePlaceholder label={img.label} ratio="16/10" />
                      <div className="mt-2 font-mono text-[11px] text-text-dark-dim">
                        Asset → <code>{img.path}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            <Section id="tech" title="Technologies">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => <TechnologyTag key={t}>{t}</TechnologyTag>)}
              </div>
            </Section>
          </div>

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="eyebrow">Contents</div>
              <nav className="mt-3 flex flex-col gap-1 border-l border-border-light pl-4">
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="text-sm text-text-dark-dim hover:text-teal-dark py-1">
                    {t.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>

        {/* Prev / Next */}
        <nav className="mt-16 pt-8 border-t border-border-light grid gap-3 sm:grid-cols-2" aria-label="Project navigation">
          <Link
            to="/projects/$slug"
            params={{ slug: prev.slug }}
            className="group p-5 rounded-xl border border-border-light bg-paper-2 card-lift"
          >
            <div className="eyebrow flex items-center gap-1.5"><ArrowLeft size={12} /> Previous</div>
            <div className="mt-2 font-display font-semibold text-text-dark">{prev.title}</div>
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group p-5 rounded-xl border border-border-light bg-paper-2 card-lift sm:text-right"
          >
            <div className="eyebrow flex items-center gap-1.5 sm:justify-end">Next <ArrowRight size={12} /></div>
            <div className="mt-2 font-display font-semibold text-text-dark">{next.title}</div>
          </Link>
        </nav>
      </div>
    </article>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildTOC(p: Project) {
  const items: { id: string; label: string }[] = [];
  if (p.atAGlance) items.push({ id: "at-a-glance", label: "At a glance" });
  if (p.problem) items.push({ id: "problem", label: "Problem" });
  if (p.whyItMatters) items.push({ id: "why", label: "Why it matters" });
  if (p.myRole) items.push({ id: "role", label: "My role" });
  if (p.data) items.push({ id: "data", label: "Data" });
  if (p.technicalApproach || p.workflow) items.push({ id: "approach", label: "Technical approach" });
  if (p.models) items.push({ id: "models", label: "Models" });
  if (p.evaluation) items.push({ id: "evaluation", label: "Evaluation" });
  if (p.results) items.push({ id: "results", label: "Results" });
  if (p.explainability) items.push({ id: "explainability", label: "Explainability" });
  if (p.responsibleEvaluation) items.push({ id: "responsible", label: "Validation" });
  if (p.businessRelevance) items.push({ id: "relevance", label: "Relevance" });
  if (p.limitations) items.push({ id: "limitations", label: "Limitations" });
  if (p.whatILearned) items.push({ id: "learned", label: "What I learned" });
  if (p.futureImprovement) items.push({ id: "future", label: "Future work" });
  p.extraSections?.forEach((s) => items.push({ id: slug(s.heading), label: s.heading }));
  if (p.imagePlaceholders?.length) items.push({ id: "visuals", label: "Visuals" });
  items.push({ id: "tech", label: "Technologies" });
  return items;
}
