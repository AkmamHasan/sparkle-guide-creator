import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, BookOpen, Lightbulb } from "lucide-react";
import { publication, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/Primitives";
import { buildHead } from "@/lib/seo";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline:
    "A Deep Learning-Based Study for Cyclone Track Forecasting: Comparative Analysis Using Historical Data from the Bay of Bengal",
  author: [
    { "@type": "Person", name: "R. Majid" },
    { "@type": "Person", name: "A. Hasan" },
    { "@type": "Person", name: "S. Mostarin" },
    { "@type": "Person", name: "K.R. Alam" },
    { "@type": "Person", name: "R.M. Rahman" },
  ],
  datePublished: "2024",
  publisher: { "@type": "Organization", name: "Springer" },
  isPartOf: {
    "@type": "Book",
    name: "Networking and Parallel/Distributed Computing Systems",
    isbn: undefined,
  },
  identifier: "10.1007/978-3-031-53274-0_1",
  url: "https://doi.org/10.1007/978-3-031-53274-0_1",
};

export const Route = createFileRoute("/research")({
  head: () =>
    buildHead({
      title: "AI Research and Springer Publication | Akmam Hasan",
      description:
        "Research by Akmam Hasan in applied AI, multimodal learning, explainability, and scientific machine learning—including a peer-reviewed Springer publication on cyclone track forecasting.",
      path: "/research",
      jsonLd: articleJsonLd,
    }),
  component: ResearchPage,
});

const interests = [
  "Explainable and trustworthy AI",
  "Multimodal machine learning",
  "NLP and domain-specific language models",
  "Scientific and time-series machine learning",
  "Responsible AI evaluation",
  "Human-centred decision support",
  "AI for risk and sustainability analysis",
];

const principles = [
  { title: "Evidence before claims", body: "Results should be connected to transparent data, evaluation and limitations." },
  { title: "Explanations for decisions", body: "Explainability should help a user inspect, challenge or act on a result." },
  { title: "Models in context", body: "Technical performance must be considered alongside domain meaning and operational use." },
  { title: "Honest uncertainty", body: "Research communication should distinguish evidence, association, limitation and inference." },
];

function ResearchPage() {
  return (
    <>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow opacity-70" aria-hidden />
        <div className="container-page relative py-16 md:py-24">
          <div className="eyebrow-light">Research</div>
          <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl text-text-light leading-tight max-w-3xl">
            Research focused on understandable and useful AI.
          </h1>
          <p className="mt-5 text-text-light-dim leading-relaxed max-w-3xl">
            My research interests sit at the intersection of applied machine learning, multimodal evidence, scientific forecasting and explainable decision support.
          </p>
        </div>
      </section>

      {/* Publication */}
      <section className="bg-paper border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <SectionHeading eyebrow="Publication" title="Peer-reviewed Springer chapter." />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="p-6 md:p-8 rounded-2xl border border-border-light bg-paper-2">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-teal" />
                <span className="eyebrow">Springer · Studies in Computational Intelligence, Vol. 1125</span>
              </div>
              <h3 className="mt-3 font-display font-semibold text-2xl text-text-dark leading-tight">
                A Deep Learning-Based Study for Cyclone Track Forecasting
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-dark-dim">{publication.citation}</p>
              <div className="mt-4 font-mono text-xs text-teal-dark">DOI: {publication.doi}</div>
              <p className="mt-5 text-text-dark-dim leading-relaxed">{publication.summary}</p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-text-dark-dim">
                <div><span className="eyebrow block mb-1">Methods</span>LSTM · GRU · ConvLSTM</div>
                <div><span className="eyebrow block mb-1">Evaluation</span>MSE · MAE · RMSE · R² · km distance error</div>
                <div><span className="eyebrow block mb-1">Data</span>Historical Bay of Bengal cyclone observations</div>
                <div><span className="eyebrow block mb-1">Contribution</span>Problem formulation, experimentation, interpretation, writing</div>
              </div>
              <a href={publication.doiUrl} target="_blank" rel="noreferrer noopener" className="btn-primary text-sm mt-6">
                Read publication <ExternalLink size={14} />
              </a>
            </div>

            <div className="p-6 md:p-8 rounded-2xl border border-border-light bg-paper-3/40">
              <div className="eyebrow">Practical relevance</div>
              <p className="mt-3 text-sm text-text-dark-dim leading-relaxed">
                Cyclone-track forecasting supports disaster preparation. Using kilometre-based distance error
                makes recurrent-model outputs interpretable in an operational forecasting context.
              </p>
              <div className="mt-6 eyebrow">Skill transfer</div>
              <ul className="mt-3 space-y-2 text-sm text-text-dark-dim">
                {["Operational forecasting", "Predictive maintenance", "Movement modelling", "Sequential prediction"].map((s) => (
                  <li key={s} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-teal" /> {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dissertation */}
      <section className="bg-paper-3/40 border-b border-border-light">
        <div className="container-page py-16 md:py-20">
          <SectionHeading eyebrow="MSc dissertation" title="LenseESG — explainable multimodal ESG risk." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Companies", v: "542" },
              { k: "Weighted F1", v: "≈0.71" },
              { k: "Modalities", v: "Structured + text" },
              { k: "Explainability", v: "SHAP + attention" },
            ].map((m) => (
              <div key={m.k} className="p-4 rounded-xl border border-border-light bg-paper-2">
                <div className="font-display font-semibold text-2xl text-teal-dark">{m.v}</div>
                <div className="text-xs text-text-dark-dim mt-1">{m.k}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-xl border border-border-light bg-paper-2">
              <div className="eyebrow">Research question</div>
              <p className="mt-2 text-text-dark-dim text-sm leading-relaxed">
                Can structured environmental, social, governance and controversy indicators be combined with
                company disclosures and news-derived text to produce a more informative and explainable
                ESG risk-assessment workflow?
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border-light bg-paper-2">
              <div className="eyebrow">Main result</div>
              <p className="mt-2 text-text-dark-dim text-sm leading-relaxed">
                The multimodal classification experiment achieved approximately 0.71 weighted F1, outperforming
                the weaker text-only approach. SHAP and transformer-attention analysis surfaced influential
                risk variables and textual signals; leakage-prone configurations were identified and corrected.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-text-dark-dim italic max-w-3xl">
            Limitations: ESG labels are provider-dependent; news coverage is uneven; a 542-company dataset
            limits generalisation; attention is not a complete explanation of model reasoning.
          </p>
        </div>
      </section>

      {/* Research interests + principles */}
      <section className="bg-paper">
        <div className="container-page py-16 md:py-20 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="eyebrow">Research interests</div>
            <h2 className="mt-3 font-display font-semibold text-2xl text-text-dark">Where I focus my attention.</h2>
            <ul className="mt-6 space-y-3">
              {interests.map((i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-lg border border-border-light bg-paper-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  <span className="text-sm text-text-dark">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">Research principles</div>
            <h2 className="mt-3 font-display font-semibold text-2xl text-text-dark">How I think about evidence.</h2>
            <div className="mt-6 grid gap-3">
              {principles.map((p) => (
                <div key={p.title} className="p-5 rounded-xl border border-border-light bg-paper-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb size={14} className="text-teal" />
                    <h3 className="font-display font-semibold text-text-dark">{p.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-text-dark-dim leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education quick recap */}
      <section className="bg-paper-3/40 border-t border-border-light">
        <div className="container-page py-14">
          <div className="eyebrow">Academic context</div>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            {education.map((e) => (
              <div key={e.degree} className="p-5 rounded-xl border border-border-light bg-paper-2">
                <div className="font-mono text-[11px] text-text-dark-dim uppercase">{e.period}</div>
                <div className="mt-1 font-display font-semibold text-text-dark">{e.degree}</div>
                <div className="text-sm text-text-dark-dim">{e.institution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
