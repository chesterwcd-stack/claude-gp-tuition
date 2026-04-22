import { useState } from "react";

const ACCENT = "#D97706";
const NAVY = "#1B2A4A";

const tensions = [
  {
    id: "T1", label: "Free Market vs\nGovernment Intervention",
    color: "#D97706",
    for: ["Market economies: 4-5x higher GDP vs planned (IMF)", "Singapore EDB model: $428 (1965) → $65,000+ GDP per capita (2023)", "China post-1978: markets lifted 800M from poverty"],
    against: ["2008 GFC: $10T wiped, required $700B government bailout", "US healthcare: most market-driven = most expensive + worse outcomes", "Platform monopolies: Google 92% search, Amazon 38% e-commerce — markets failed"],
    sgLink: "Temasek + GIC sovereign wealth | Progressive Wage Model | CPF mandatory savings",
  },
  {
    id: "T2", label: "Globalisation:\nBenefits vs Casualties",
    color: "#16A34A",
    for: ["Extreme poverty: 36% (1990) → 9% (2019) — trade-led Asian growth", "Bangladesh: garments = 84% exports, 4M jobs, income 3x rural alternative", "Singapore: 175%+ trade/GDP — literally cannot exist without globalisation"],
    against: ["'China Shock': 2.4M US manufacturing jobs lost 1999-2011", "IMF structural adjustment: cut health/education spending in vulnerable nations", "COVID-19 supply chains: PPE from China, chips from Taiwan — critical vulnerabilities exposed"],
    sgLink: "27 FTAs | Changi Airport hub | Tanjong Pagar #2 global port | CPTPP + RCEP",
  },
  {
    id: "T3", label: "Growth vs Equality\n& Wellbeing",
    color: "#7C3AED",
    for: ["Preston Curve: richer nations live longer, universally", "South Korea: $158 → $33,000 per capita; life expectancy 53 → 83", "Singapore reserves: $1T+ funded COVID-19 $100B+ response"],
    against: ["GDP counts cigarettes + car crashes as positive", "Bhutan GNH, New Zealand Wellbeing Budget — alternatives exist", "Easterlin Paradox: beyond $75K/yr, income gains don't increase happiness"],
    sgLink: "World's 2nd most expensive city | 44.8hr work week vs OECD 36.5 | Housing affordability crisis",
  },
  {
    id: "T4", label: "Future of Work:\nAutomation & Gig",
    color: "#DC2626",
    for: ["McKinsey: 20-30% engaged in independent work, 70% report higher satisfaction", "GitHub Copilot: programmer productivity +55%", "SkillsFuture: 660,000+ Singaporeans upskilling (2023)"],
    against: ["UK gig workers: 59% earn below minimum wage after costs, 77% no sick pay", "Amazon warehouse: injury rate 2x industry average, 150%+ annual turnover", "IMF: automation explains 40% of decline in labour's share of GDP since 1980"],
    sgLink: "Platform Workers Bill 2024 | SkillsFuture $500 credit | Workfare | Progressive Wage Model",
  },
];

const sgExamples = [
  "CPF — mandatory 20% employee + 17% employer contribution",
  "Workfare Income Supplement — wage top-up for <$3,000/month earners",
  "Progressive Wage Model — skills-linked minimum wages by sector",
  "Changi Airport (world's best) + Tanjong Pagar (#2 global port)",
  "Temasek ($287B AUM) + GIC (~$770B) sovereign wealth funds",
  "Budget surplus philosophy — reserves estimated $900B-$1T+",
  "MAS — $4T+ assets under management, 3rd largest FX trading hub",
  "27 Free Trade Agreements — CPTPP, RCEP, EU-SG FTA, US-SG FTA",
  "HDB / BTO housing — 80% of citizens in subsidised housing",
  "Gini 0.452 (pre-transfer) | top 10% earn 6x bottom 10%",
];

const intlExamples = [
  "2008 Global Financial Crisis — $10T lost, $700B bailout",
  "China's transformation — $155 → $13,700 per capita; 800M from poverty",
  "Amazon/Walmart labour practices — injury rates, gig classification battles",
  "Nordic Welfare State — 42-46% tax, Gini 0.27, #1-5 happiness",
  "Greece Debt Crisis — 25% GDP fall, 28% unemployment under austerity",
  "Grameen Bank — microfinance, $50-500 loans, 97% repayment, Nobel Prize",
  "BRICS Expansion — 40%+ global GDP (PPP), challenging dollar hegemony",
  "IMF Structural Adjustment — documented health/education cuts in developing nations",
  "China-US Trade War — $360B tariffs, CHIPS Act, supply chain reshoring",
  "WEF Future of Jobs 2023 — 14M net job displacement by 2027",
];

const examQs = [
  { year: "2025 Q1", q: "Economic development vs environment" },
  { year: "2024 Q2", q: "Free healthcare" },
  { year: "2025 Prelim", q: "Commercialisation, future of work themes" },
];

export default function CP04MindMap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("tensions");
  const activeTension = tensions.find(t => t.id === active);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: "16px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ background: ACCENT, borderRadius: 16, padding: "20px 24px", marginBottom: 16, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>CP04 · ECONOMICS</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Markets, Money & the Meaning of Progress</div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, opacity: 0.85, flexWrap: "wrap" }}>
          <span>📊 High — embedded in all pillars</span>
          <span>🇸🇬 10 SG examples</span>
          <span>🌍 10 Int'l examples</span>
          <span>🔗 The cross-cutting pillar</span>
        </div>
      </div>

      <div style={{ background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#D97706" }}>⚠ EXAM ALERT: </span>
        <span style={{ color: "#374151" }}>Economics questions test values. "Should governments intervene?" = freedom vs equality. "Is GDP good?" = what is progress? Never just describe economics — argue a position.</span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["tensions", "sg", "intl", "exam"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
            background: tab === t ? ACCENT : "#fff", color: tab === t ? "#fff" : "#374151",
            boxShadow: tab === t ? "0 2px 8px rgba(217,119,6,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            {t === "tensions" ? "Tensions" : t === "sg" ? "🇸🇬 SG" : t === "intl" ? "🌍 Intl" : "📝 Exam"}
          </button>
        ))}
      </div>

      {tab === "tensions" && (
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
            {tensions.map(t => (
              <div key={t.id} onClick={() => setActive(active === t.id ? null : t.id)}
                style={{ background: active === t.id ? t.color : "#fff", borderRadius: 14, padding: "14px 12px", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", border: `2px solid ${active === t.id ? t.color : "#E5E7EB"}` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: active === t.id ? "rgba(255,255,255,0.8)" : t.color, marginBottom: 4 }}>{t.id}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: active === t.id ? "#fff" : "#111827", lineHeight: 1.3 }}>{t.label}</div>
              </div>
            ))}
          </div>
          {activeTension && (
            <div style={{ background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: activeTension.color, marginBottom: 12 }}>{activeTension.id}: {activeTension.label.replace("\n", " ")}</div>
              <div style={{ background: "#F0FDF4", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#16A34A", marginBottom: 8 }}>✓ FOR</div>
                {activeTension.for.map((a, i) => <div key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6, paddingLeft: 12, borderLeft: "3px solid #86EFAC" }}>{a}</div>)}
              </div>
              <div style={{ background: "#FEF2F2", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#DC2626", marginBottom: 8 }}>✗ AGAINST</div>
                {activeTension.against.map((a, i) => <div key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6, paddingLeft: 12, borderLeft: "3px solid #FCA5A5" }}>{a}</div>)}
              </div>
              <div style={{ background: "#FFFBEB", borderRadius: 10, padding: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: ACCENT, marginBottom: 4 }}>🇸🇬 SG LINK</div>
                <div style={{ fontSize: 13, color: "#374151" }}>{activeTension.sgLink}</div>
              </div>
            </div>
          )}
          {!activeTension && <div style={{ textAlign: "center", color: "#9CA3AF", fontSize: 13, padding: "20px 0" }}>Tap a tension to expand arguments</div>}
        </div>
      )}

      {tab === "sg" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>10 Singapore Examples</div>
          {sgExamples.map((e, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, display: "flex", gap: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ background: ACCENT, color: "#fff", borderRadius: 6, padding: "2px 7px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>SG{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{e}</div>
            </div>
          ))}
        </div>
      )}

      {tab === "intl" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>10 International Examples</div>
          {intlExamples.map((e, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, display: "flex", gap: 10, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ background: NAVY, color: "#fff", borderRadius: 6, padding: "2px 7px", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>INT{String(i + 1).padStart(2, "0")}</div>
              <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{e}</div>
            </div>
          ))}
        </div>
      )}

      {tab === "exam" && (
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>Recent + Predicted Questions</div>
          {examQs.map((q, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{q.year}</div>
              <div style={{ fontSize: 13, color: "#374151" }}>{q.q}</div>
            </div>
          ))}
          <div style={{ background: "#FFFBEB", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: ACCENT, marginBottom: 8 }}>Cross-pillar fusions</div>
            {["Economics × Environment — green growth, carbon markets (2025 Q1!)", "Economics × Society — inequality, gig workers, housing affordability", "Economics × Politics — state capitalism, trade wars, democratic economic management"].map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "#374151", marginBottom: 5, paddingLeft: 10, borderLeft: "3px solid #FCD34D" }}>{c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
