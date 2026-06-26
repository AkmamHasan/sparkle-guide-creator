import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check, ExternalLink } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/site/Primitives";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead({
      title: "Contact Akmam Hasan | Applied AI & Data",
      description:
        "Get in touch with Akmam Hasan about AI, data, machine learning, NLP, explainability or research opportunities.",
      path: "/contact",
    }),
  component: ContactPage,
});

const subjects = [
  "Job opportunity",
  "Research opportunity",
  "Project discussion",
  "Professional networking",
  "Other",
];

function ContactPage() {
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const mailto =
    `mailto:${profile.email}?subject=${encodeURIComponent(subject)}` +
    (message ? `&body=${encodeURIComponent(message)}` : "");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {/* ignore */}
  }

  return (
    <>
      <section className="surface-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="absolute inset-0 hero-glow opacity-70" aria-hidden />
        <div className="container-page relative py-16 md:py-20">
          <div className="eyebrow-light">Contact</div>
          <h1 className="mt-3 font-display font-bold text-4xl md:text-5xl text-text-light leading-tight max-w-3xl">
            Let's discuss AI, data or research opportunities.
          </h1>
          <p className="mt-5 text-text-light-dim leading-relaxed max-w-2xl">
            I am open to relevant roles, research opportunities and professional conversations involving
            applied AI, machine learning, NLP, data analytics, explainability and operational decision support.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-page py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* Methods */}
            <div className="space-y-4">
              <article className="p-6 rounded-xl border border-border-light bg-paper-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal-dark"><Mail size={16} /></span>
                  <div>
                    <div className="font-display font-semibold text-text-dark">Email</div>
                    <button onClick={copyEmail} className="text-sm font-mono text-text-dark-dim hover:text-teal-dark inline-flex items-center gap-1.5">
                      {profile.email}
                      {copied ? <Check size={12} className="text-teal" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>
                <a href={`mailto:${profile.email}`} className="btn-primary text-sm mt-4">Send an email</a>
              </article>

              <article className="p-6 rounded-xl border border-border-light bg-paper-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal-dark"><Linkedin size={16} /></span>
                  <div>
                    <div className="font-display font-semibold text-text-dark">LinkedIn</div>
                    <div className="text-sm font-mono text-text-dark-dim">linkedin.com/in/akmamhasan</div>
                  </div>
                </div>
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="btn-ghost-light text-sm mt-4">
                  Connect on LinkedIn <ExternalLink size={14} />
                </a>
              </article>

              <article className="p-6 rounded-xl border border-border-light bg-paper-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal-dark"><Github size={16} /></span>
                  <div>
                    <div className="font-display font-semibold text-text-dark">GitHub</div>
                    <div className="text-sm font-mono text-text-dark-dim">github.com/AkmamHasan</div>
                  </div>
                </div>
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="btn-ghost-light text-sm mt-4">
                  View GitHub <ExternalLink size={14} />
                </a>
              </article>

              <p className="text-xs text-text-dark-dim leading-relaxed">
                Based in London, United Kingdom. This site does not collect or store any messages —
                the composer below only constructs a mailto: link in your browser.
              </p>
            </div>

            {/* Composer */}
            <div className="p-6 md:p-8 rounded-2xl border border-border-light bg-paper-2">
              <SectionHeading eyebrow="Compose" title="Open a draft in your email app." />
              <form
                onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
                className="mt-6 space-y-5"
              >
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-dark mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-lg border border-border-light bg-paper-2 px-3 py-2.5 text-sm text-text-dark focus:border-teal focus:outline-none"
                  >
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="A brief outline of the role, project or question…"
                    className="w-full rounded-lg border border-border-light bg-paper-2 px-3 py-2.5 text-sm text-text-dark focus:border-teal focus:outline-none resize-y"
                  />
                </div>
                <button type="submit" className="btn-primary text-sm">
                  <Mail size={14} /> Open in email app
                </button>
                <p className="text-xs text-text-dark-dim">
                  This builds a <span className="font-mono">mailto:</span> link only. No data is sent or stored anywhere.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
