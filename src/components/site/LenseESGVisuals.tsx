import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, Cell,
} from "recharts";
import lenseOverview from "@/assets/lenseesg-overview.png.asset.json";
import lenseEvaluation from "@/assets/lenseesg-evaluation.png.asset.json";

const modelData = [
  { model: "Structured Baseline", f1: 0.63 },
  { model: "Text-only (BERT)", f1: 0.67 },
  { model: "Multimodal Fusion", f1: 0.71 },
];

const shapData = [
  { feature: "Environmental risk", importance: 0.95 },
  { feature: "Controversy score", importance: 0.78 },
  { feature: "Governance risk", importance: 0.62 },
  { feature: "Social risk", importance: 0.45 },
  { feature: "Disclosure language", importance: 0.30 },
];

const TEAL = "#16B8A6";
const TEAL_BRIGHT = "#5EEAD4";
const NAVY = "#0F2942";

export function LenseESGVisuals() {
  return (
    <div className="space-y-8">
      {/* Two infographics */}
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="rounded-xl border border-border-light overflow-hidden bg-paper-2">
          <img src={lenseOverview.url} alt="LenseESG: from ESG data to explainable risk insights" className="w-full h-auto" loading="lazy" />
          <figcaption className="px-4 py-3 text-xs text-text-dark-dim border-t border-border-light">
            System overview — multimodal inputs flowing into an explainable ESG risk score.
          </figcaption>
        </figure>
        <figure className="rounded-xl border border-border-light overflow-hidden bg-paper-2">
          <img src={lenseEvaluation.url} alt="Evaluating LenseESG — full methodology and results infographic" className="w-full h-auto" loading="lazy" />
          <figcaption className="px-4 py-3 text-xs text-text-dark-dim border-t border-border-light">
            Methodology, data and evaluation summary across 540 companies (S&amp;P 500 + DAX 40).
          </figcaption>
        </figure>
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border-light bg-paper-2 p-5">
          <div className="eyebrow">Classification performance</div>
          <h4 className="mt-1 font-display font-semibold text-text-dark">Weighted F1 by model stream</h4>
          <p className="mt-1 text-xs text-text-dark-dim">Multimodal fusion outperforms standalone structured and text-only approaches.</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelData} margin={{ top: 16, right: 12, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                <XAxis dataKey="model" stroke="#64748B" fontSize={11} tickLine={false} />
                <YAxis domain={[0, 0.8]} stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: "rgba(22,184,166,0.08)" }} contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }} />
                <Bar dataKey="f1" radius={[6, 6, 0, 0]}>
                  {modelData.map((_, i) => (
                    <Cell key={i} fill={i === modelData.length - 1 ? TEAL : NAVY} />
                  ))}
                  <LabelList dataKey="f1" position="top" fontSize={11} fill="#0F2942" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border-light bg-paper-2 p-5">
          <div className="eyebrow">Explainability</div>
          <h4 className="mt-1 font-display font-semibold text-text-dark">SHAP global feature importance</h4>
          <p className="mt-1 text-xs text-text-dark-dim">Top drivers behind the multimodal fusion model's ESG risk predictions.</p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={shapData} layout="vertical" margin={{ top: 8, right: 28, left: 16, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" horizontal={false} />
                <XAxis type="number" domain={[0, 1]} stroke="#64748B" fontSize={11} tickLine={false} />
                <YAxis type="category" dataKey="feature" stroke="#64748B" fontSize={11} width={130} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: "rgba(22,184,166,0.08)" }} contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }} />
                <Bar dataKey="importance" fill={TEAL_BRIGHT} radius={[0, 6, 6, 0]}>
                  <LabelList dataKey="importance" position="right" fontSize={11} fill="#0F2942" formatter={(v: number) => v.toFixed(2)} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
