import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

// Illustrative predicted vs observed cyclone track (lat/lon waypoints)
const trackData = [
  { hr: 0,  observed: 14.2, predicted: 14.2 },
  { hr: 6,  observed: 14.8, predicted: 14.7 },
  { hr: 12, observed: 15.5, predicted: 15.4 },
  { hr: 18, observed: 16.3, predicted: 16.1 },
  { hr: 24, observed: 17.1, predicted: 17.0 },
  { hr: 30, observed: 17.9, predicted: 17.6 },
  { hr: 36, observed: 18.6, predicted: 18.3 },
  { hr: 42, observed: 19.2, predicted: 19.1 },
  { hr: 48, observed: 19.8, predicted: 19.5 },
  { hr: 54, observed: 20.3, predicted: 20.0 },
  { hr: 60, observed: 20.7, predicted: 20.5 },
  { hr: 72, observed: 21.4, predicted: 21.1 },
];

export function CycloneChart() {
  return (
    <div className="rounded-xl border border-border-light bg-paper-2 p-5">
      <div className="eyebrow">Forecast vs observation</div>
      <h4 className="mt-1 font-display font-semibold text-text-dark">Predicted vs observed cyclone latitude (°N)</h4>
      <p className="mt-1 text-xs text-text-dark-dim">
        Deep learning trajectory model tracks observed Bay of Bengal cyclone path over a 72-hour horizon.
      </p>
      <div className="mt-4 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trackData} margin={{ top: 12, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis dataKey="hr" stroke="#64748B" fontSize={11} tickLine={false} label={{ value: "Forecast hour", position: "insideBottom", offset: -2, fontSize: 11, fill: "#64748B" }} />
            <YAxis stroke="#64748B" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E2E8F0", fontSize: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="observed" stroke="#0F2942" strokeWidth={2} dot={{ r: 3 }} name="Observed" />
            <Line type="monotone" dataKey="predicted" stroke="#16B8A6" strokeWidth={2} strokeDasharray="5 4" dot={{ r: 3 }} name="Predicted" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
