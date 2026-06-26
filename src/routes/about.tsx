import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Award, GraduationCap, ArrowRight } from "lucide-react";
import { education, experience, credentials } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/Primitives";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    buildHead({
      title: "About Akmam Hasan | Applied AI, Data and Research",
      description:
        "Background, education and working style of Akmam Hasan—an Applied AI MSc graduate with experience across ML, NLP, data analytics, software experimentation and customer-facing operations.",
      path: "/about",
    }),
  component: AboutPage,
});

const values = [
  { k: "Move from problem framing to data preparation", body: "Comfortable starting before the data is tidy or the question is precise." },
  { k: "Compare methods rather than relying on one model", body: "Baselines and trade-offs come before headline metrics." },
  { k: "Check assumptions, imbalance and leakage", body: "Validity matters as much as accuracy in risk-sensitive work." },
  { k: "Communicate limitations rather than hiding them", body: "Honest reporting builds trust with technical and non-technical stakeholders." },
  { k: "Translate results for non-technical audiences", body: "Clarity is part of the deliverable, not an afterthought." },
  { k: "Understand workflows, ownership and monitoring", body: "Useful AI lives in systems and processes, not just notebooks." },
];

const traits = [
  "Curious", "Evidence-oriented", "Clear communicator",
  "Responsible with claims", "Comfortable across technical and non-technical contexts", "Motivated by practical impact",
];

const journey = [
  { year: "2021–2022", title: "Requirement Analyst", org: "Generic Solutions" },
  { year: "2022–2023", title: "Project Management Intern", org: "Youth Opportunities" },
  { year: "2023", title: "Software Engineer Intern", org: "Echologyx Ltd" },
  { year: "2023–2025", title: "MSc Applied Artificial Intelligence", org: "London South Bank University" },
  { year: "2024–present", title: "Customer Advisor", org: "B&Q (London)" },
  { year: "Ongoing", title: "Applied AI, data and research project work", org: "Independent / collaborative" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-paper border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <div className="eyebrow">About</div>
          <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl text-text-dark leading-tight max-w-3xl">
            I connect technical analysis with practical communication.
          </h1>
          <div className="mt-6 space-y-4 max-w-3xl text-text-dark-dim leading-relaxed">
            <p>
              I am an Applied Artificial Intelligence MSc graduate with a Computer Science background and
              experience across machine learning, NLP, data analytics, software experimentation, requirements
              analysis and customer-facing operations.
            </p>
            <p>
              My path has not been limited to one industry. I have worked on ESG risk analysis, cyclone
              forecasting, cyber-physical monitoring, text classification, data reconciliation, website
              experimentation and frontline retail operations. That range has taught me how to adapt technical
              thinking to different problems and audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Professional value */}
      <section className="bg-paper-3/40 border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <SectionHeading eyebrow="Professional value" title="What I bring to a team." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.k} className="p-5 rounded-xl border border-border-light bg-paper-2">
                <div className="font-display font-semibold text-text-dark">{v.k}</div>
                <p className="mt-2 text-sm text-text-dark-dim leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career journey */}
      <section className="bg-paper border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <SectionHeading
            eyebrow="Career journey"
            title="A path that crosses analysis, software, research and frontline operations."
            description="Customer-facing operations sit alongside research and engineering — and they have made me a clearer communicator and a more reliable colleague."
          />
          <ol className="mt-10 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-border-light md:left-[7rem]" aria-hidden />
            {journey.map((j) => (
              <li key={j.title + j.year} className="relative pl-10 md:pl-[10rem] py-4">
                <div className="absolute left-[7px] top-6 h-2.5 w-2.5 rounded-full bg-teal ring-4 ring-paper md:left-[110px]" aria-hidden />
                <div className="md:absolute md:left-0 md:top-6 md:w-[6rem] text-xs font-mono text-text-dark-dim">{j.year}</div>
                <h3 className="font-display font-semibold text-text-dark">{j.title}</h3>
                <div className="text-sm text-text-dark-dim mt-0.5">{j.org}</div>
              </li>
            ))}
          </ol>

          <details className="mt-8 group">
            <summary className="cursor-pointer text-sm font-medium text-teal-dark hover:underline">
              Read more detail on each role
            </summary>
            <div className="mt-5 space-y-5">
              {experience.map((e) => (
                <div key={e.role + e.dates} className="p-5 rounded-xl border border-border-light bg-paper-2">
                  <div className="font-mono text-xs text-text-dark-dim">{e.dates}</div>
                  <div className="font-display font-semibold text-text-dark mt-1">
                    {e.role} <span className="text-text-dark-dim font-normal">— {e.org}</span>
                  </div>
                  {e.location && <div className="text-xs text-text-dark-dim mt-0.5">{e.location}</div>}
                  <p className="mt-2 text-sm text-text-dark-dim leading-relaxed">{e.summary}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      {/* Education */}
      <section className="bg-paper-3/40 border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <SectionHeading eyebrow="Education" title="Where I trained." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {education.map((ed) => (
              <article key={ed.degree} className="p-6 md:p-7 rounded-xl border border-border-light bg-paper-2">
                <div className="flex items-center gap-2 text-text-dark-dim">
                  <GraduationCap size={14} className="text-teal" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">{ed.period}</span>
                </div>
                <h3 className="mt-2 font-display font-semibold text-text-dark text-lg">{ed.degree}</h3>
                <div className="text-sm text-text-dark-dim">
                  {ed.institution}{ed.location ? ` · ${ed.location}` : ""}
                </div>
                <div className="mt-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal/10 text-teal-dark border border-teal/20">
                  {ed.result}
                </div>
                <ul className="mt-4 space-y-1.5 text-sm text-text-dark-dim">
                  {ed.areas.map((a) => (
                    <li key={a} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-teal flex-shrink-0" />{a}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-text-dark-dim leading-relaxed">{ed.dissertation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-paper border-b border-border-light">
        <div className="container-page py-14">
          <div className="eyebrow">Credentials</div>
          <h2 className="mt-2 font-display font-semibold text-2xl text-text-dark">Verified additional credentials.</h2>
          <p className="mt-2 text-sm text-text-dark-dim max-w-2xl">
            Below the MSc and the Springer publication, additional verified credentials.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {credentials.map((c) => (
              <article key={c.title} className="p-5 rounded-xl border border-border-light bg-paper-2">
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-teal" />
                  <span className="eyebrow">{c.date}</span>
                </div>
                <h3 className="mt-2 font-display font-semibold text-text-dark">{c.title}</h3>
                <div className="text-sm text-text-dark-dim">{c.issuer}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={c.verifyUrl} target="_blank" rel="noreferrer noopener" className="btn-primary text-xs">
                    Verify <ExternalLink size={12} />
                  </a>
                  <a href={c.filePath} className="btn-ghost-light text-xs" download>
                    Download certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Working style */}
      <section className="bg-paper-3/40">
        <div className="container-page py-16">
          <SectionHeading eyebrow="Working style" title="Six traits I aim to demonstrate." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {traits.map((t) => (
              <div key={t} className="p-4 rounded-lg border border-border-light bg-paper-2 text-text-dark">
                <span className="font-mono text-xs text-teal-dark">▸</span>{" "}
                <span className="font-display font-medium">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn-primary text-sm inline-flex">
              Start a conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
