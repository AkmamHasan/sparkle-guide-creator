import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { projects, projectCategories } from "@/data/portfolio";
import { ProjectCard, SectionHeading } from "@/components/site/Primitives";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () =>
    buildHead({
      title: "AI, Data and Machine Learning Projects | Akmam Hasan",
      description:
        "A collection of applied AI, data, research and software work by Akmam Hasan—organised around the problem, technical decisions, evidence and limitations of each project.",
      path: "/projects",
    }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter as never));
  }, [filter]);

  return (
    <>
      <section className="bg-paper-3/40 border-b border-border-light">
        <div className="container-page py-14 md:py-20">
          <SectionHeading
            eyebrow="Projects"
            title="A collection of applied AI, data, research and software work."
            description="Organised around the problem, technical decisions, evidence and limitations of each project—rather than around tools or buzzwords."
          />
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page py-10 md:py-14">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {projectCategories.map((c) => {
              const active = filter === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  role="tab"
                  aria-selected={active}
                  className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium border transition-colors ${
                    active
                      ? "bg-ink text-text-light border-ink"
                      : "bg-paper-2 text-text-dark-dim border-border-light hover:border-teal hover:text-teal-dark"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 font-mono text-xs text-text-dark-dim">
            Showing {filtered.length} of {projects.length} projects
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 p-8 text-center border border-dashed border-border-light rounded-xl text-text-dark-dim">
              No projects match this filter yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
