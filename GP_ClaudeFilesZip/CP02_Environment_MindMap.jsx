import { useState } from "react";

const ACCENT = "#16A34A";
const NAVY = "#1B2A4A";
const GOLD = "#D97706";

const tensions = [
  {
    id: "T1", label: "Growth vs\nSustainability",
    angle: -60, color: "#16A34A",
    for: ["Natural capital argument (Stern Review: inaction costs 5–20% GDP)", "Green economy creates opportunity (IEA: $1.7T clean energy investment 2023)", "Costa Rica: GDP tripled + forest doubled simultaneously"],
    against: ["Aggressive constraints devastate developing nations (India: 240M without power)", "Germany Energiewende: highest electricity prices in Europe", "Carbon leakage — production shifts, net gain is zero"],
    sgLink: "Green Plan 2030 | Carbon Tax $25→$80/tonne | $100B coastal plan",
  },
  {
    id: "T2", label: "Individual vs\nSystemic Action",
    angle: 0, color: "#0D9488",
    for: ["100 companies = 71% of emissions (CDP)", "'Carbon footprint' invented by BP as PR campaign (2004)", "EU ETS covers 40% of EU emissions — more than any awareness campaign"],
    against: ["Plant-based market grew $4.9B→$8B from consumer demand", "Fridays for Future: 4M protesters → 130+ net-zero pledges", "EV early adopters drove prices down 89% (2010–2023)"],
    sgLink: "Zero Waste Masterplan | EPR packaging | Extended Producer Responsibility",
  },
  {
    id: "T3", label: "Developed vs\nDeveloping Nations",
    angle: 60, color: "#7C3AED",
    for: ["US 25% + EU 22% of historical emissions", "IPCC AR6: worst impacts hit lowest emitters", "COP28: $700M pledged vs $400B/year needed"],
    against: ["China: 30% current emissions + world's largest solar installer", "India: coal still 70% electricity; 1.5°C impossible without India", "Present emissions are the decisive variable, not history"],
    sgLink: "$1B Green Climate Fund | ASEAN Sustainable Finance Taxonomy",
  },
  {
    id: "T4", label: "Conservation vs\nDevelopment",
    angle: 180, color: "#D97706",
    for: ["1 million species face extinction (IPBES 2019)", "Amazon tipping point at 20–25% deforestation", "Ecosystem services: pollinators alone = $577B/year"],
    against: ["60M Congo Basin people depend on forest for survival", "Fortress conservation displaced millions of indigenous communities", "China Three Gorges: 1.3M displaced but 18.2 GW clean energy"],
    sgLink: "City in Nature | Central Catchment Reserve | Green Corridor",
  },
];

const sgExamples = [
  "Green Plan 2030 — 5 pillars, net-zero 2050",
  "Carbon Tax: $25 (2024) → $45 (2026) → $50-80/tonne (2030)",
  "NEWater — 40% of demand; exported as global model",
  "$100B Coastal Protection Plan",
  "30-by-30 food security goal",
  "Zero Waste Masterplan + Semakau Landfill 2035",
  "Tuas Nexus — world's first integrated waste-water facility",
  "Solar: 2 GWp target 2030 on HDB rooftops",
  "EV Roadmap — phase out ICE vehicles by 2040",
  "BCA Green Mark — 80% green buildings target",
];

const intlExamples = [
  "Paris Agreement — 1.5°C target, voluntary NDCs",
  "EU Green Deal — €1T, carbon neutrality 2050",
  "Denmark — 55% wind electricity, Ørsted, Vestas",
  "Costa Rica — 99% renewable grid + forest doubled",
  "China — 30% global emissions + largest solar/wind installer",
  "Greta Thunberg / Fridays for Future — 4M protesters",
  "Amazon Deforestation — 17% lost, tipping point at 20–25%",
  "Great Pacific Garbage Patch — 80,000 tonnes",
  "COP Negotiations — $100B pledge gap pattern",
  "Rwanda — plastic bag ban 2008, 95%+ compliance",
];

const examQs = [
  { year: "2025 Q1", q: "Economic development vs environment" },
  { year: "2025 Q6", q: "Wealthier countries + natural disasters" },
  { year: "2024 Q1", q: "Waste disposal + science/tech" },
];

export default function CP02MindMap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("tensions");

  const activeTension = tensions.find(t => t.id === active);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: "16px", maxWidth: 680, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ background: ACCENT, borderRadius: 16, padding: "20px 24px", marginBottom: 16, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>CP02 · ENVIRONMENT</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Green Planet, Grey Choices</div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, opacity: 0.85, flexWrap: "wrap" }}>
          <span>📊 Very High exam frequency</span>
          <span>🇸🇬 10 SG examples</span>
          <span>🌍 10 Int'l examples</span>
          <span>🔗 4 cross-pillar links</span>
        </div>
      </div>

      {/* Alert */}
      <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#DC2626" }}>⚠ EXAM ALERT: </span>
        <span style={{ color: "#374151" }}>Multi-disciplinary framing is the norm. Expect environment + economics or environment + politics. Never write about environment in isolation.</span>
      </div>

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["tensions", "sg", "intl", "exam"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
            background: tab === t ? ACCENT : "#fff", color: tab === t ? "#fff" : "#374151",
            boxShadow: tab === t ? "0 2px 8px rgba(22,163,74,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            {t === "tensions" ? "Tensions" : t === "sg" ? "🇸🇬 SG" : t === "intl" ? "🌍 Intl" : "📝 Exam"}
          </button>
        ))}
      </div>

      {/* Tensions tab */}
      {tab === "tensions" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {tensions.map(t => (
              <div key={t.id} onClick={() => setActive(active === t.id ? null : t.id)}
                style={{ background: active === t.id ? t.color : "#fff", borderRadius: 14, padding: "14px 12px", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", border: `2px solid ${active === t.id ? t.color : "#E5E7EB"}`, transition: "all 0.15s" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: active === t.id ? "rgba(255,255,255,0.8)" : t.color, marginBottom: 4 }}>{t.id}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: active === t.id ? "#fff" : "#111827", lineHeight: 1.3 }}>{t.label}</div>
              </div>
            ))}
          </div>

          {activeTension && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: activeTension.color, marginBottom: 12 }}>{activeTension.id}: {activeTension.label.replace("\n", " ")}</div>

              <div style={{ background: "#F0FDF4", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#16A34A", marginBottom: 8 }}>✓ FOR ARGUMENTS</div>
                {activeTension.for.map((a, i) => (
                  <div key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6, paddingLeft: 12, borderLeft: "3px solid #86EFAC" }}>{a}</div>
                ))}
              </div>

              <div style={{ background: "#FEF2F2", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#DC2626", marginBottom: 8 }}>✗ AGAINST ARGUMENTS</div>
                {activeTension.against.map((a, i) => (
                  <div key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6, paddingLeft: 12, borderLeft: "3px solid #FCA5A5" }}>{a}</div>
                ))}
              </div>

              <div style={{ background: "#EFF6FF", borderRadius: 10, padding: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#2563EB", marginBottom: 4 }}>🇸🇬 SG LINK</div>
                <div style={{ fontSize: 13, color: "#374151" }}>{activeTension.sgLink}</div>
              </div>
            </div>
          )}

          {!activeTension && (
            <div style={{ textAlign: "center", color: "#9CA3AF", fontSize: 13, padding: "20px 0" }}>Tap a tension to expand arguments</div>
          )}
        </div>
      )}

      {/* SG tab */}
      {tab === "sg" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>10 Singapore Examples — master all of these</div>
          {sgExamples.map((e, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "2px 7px", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>SG{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{e}</div>
            </div>
          ))}
        </div>
      )}

      {/* Intl tab */}
      {tab === "intl" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>10 International Examples</div>
          {intlExamples.map((e, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, display: "flex", alignItems: "flex-start", gap: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ background: NAVY, color: "#fff", borderRadius: 6, padding: "2px 7px", fontSize: 11, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>INT{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{e}</div>
            </div>
          ))}
        </div>
      )}

      {/* Exam tab */}
      {tab === "exam" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>Recent Exam Questions</div>
          {examQs.map((q, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{q.year}</div>
              <div style={{ fontSize: 13, color: "#374151" }}>{q.q}</div>
            </div>
          ))}
          <div style={{ background: "#F0FDF4", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#16A34A", marginBottom: 8 }}>Cross-pillar fusion zones</div>
            {["Economics × Environment — green growth, carbon markets", "Politics × Environment — COP, climate governance, developed vs developing", "Science × Environment — geoengineering, nuclear, carbon capture"].map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "#374151", marginBottom: 5, paddingLeft: 10, borderLeft: "3px solid #86EFAC" }}>{c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
