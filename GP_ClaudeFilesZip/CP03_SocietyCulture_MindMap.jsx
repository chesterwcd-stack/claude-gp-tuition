import { useState } from "react";

const ACCENT = "#7C3AED";
const NAVY = "#1B2A4A";

const tensions = [
  {
    id: "T1", label: "Meritocracy vs\nStructural Inequality",
    color: "#7C3AED",
    for: ["SG social mobility: top Asia performer (OECD 2018)", "HBR: merit-based HR outperforms peers 35%", "PSLE changes: refined, not abandoned"],
    against: ["NUS study: top-20% household = 7x more likely to enter elite uni", "Private tuition industry $1.4B (2022) — merit is purchasable", "Michael Sandel: meritocracy launders inequality as deserved"],
    sgLink: "Gini 0.452 | Private tuition $1.4B | Forward SG 2023",
  },
  {
    id: "T2", label: "Tradition vs\nProgress",
    color: "#0D9488",
    for: ["WEF: Iceland + Norway top gender parity = strongest economies", "McKinsey: gender diversity = 39% higher financial performance", "377A repeal (2022) — Singapore's incremental liberalisation"],
    against: ["Japan solo society: fertility 1.2, 1.46M hikikomori", "South Korea: world's lowest fertility 0.72 (2023)", "SG family bonds: 89% elderly live with/near family — traditional safety net"],
    sgLink: "Section 377A repeal Nov 2022 | Marriage & Parenthood Package | Ageing population",
  },
  {
    id: "T3", label: "Individual Freedom vs\nCollective Harmony",
    color: "#D97706",
    for: ["Rawls' veil of ignorance — rational agents choose collective protection", "Singapore COVID response: lowest death rates per capita", "HDB EIP: limits choice but prevented ethnic ghettoisation for 40 years"],
    against: ["Freedom House 2024: Singapore 'Partly Free', press ranked 126/180", "HK NSL (2020): 'harmony' imposed through mass arrests", "POFMA used against opposition politicians — whose harmony is protected?"],
    sgLink: "CMIO model | GRC system | POFMA | OB markers",
  },
  {
    id: "T4", label: "Social Media &\nBelonging",
    color: "#DC2626",
    for: ["Trevor Project: online community = 40% lower suicide attempt rates for LGBTQ+ youth", "Arab Spring: social media coordinated mass protest", "#BLM: originated as hashtag → 26M protesters (2020)"],
    against: ["Frances Haugen/Facebook Papers: Instagram worsens body image for 1 in 3 teen girls", "MIT: false news spreads 6x faster than true news", "US Surgeon General 2023: social media = public health crisis for youth"],
    sgLink: "Online Safety Act 2022 | IMH: youth referrals +30% (2019–22) | Pink Dot movement",
  },
];

const sgExamples = [
  "CMIO racial classification — Chinese, Malay, Indian, Others",
  "HDB Ethnic Integration Policy (EIP) — ethnic quotas per block",
  "Section 377A repeal (Nov 2022) + Constitutional marriage definition",
  "Private tuition industry $1.4B (2022) — 70-80% of primary schoolers",
  "Forward Singapore (2022-23) — redefining social compact",
  "ComLink — integrated support for vulnerable families",
  "Ageing population: 1 in 4 aged 65+ by 2030 | Silver Support Scheme",
  "Education streaming reform: Subject-Based Banding from 2024",
  "Foreign worker dormitories: 300,000+ migrant workers; COVID-19 exposure",
  "Gini coefficient: 0.452 pre-transfer | top 10% earn 6x bottom 10%",
];

const intlExamples = [
  "Nordic Social Model — 40% tax, high GDP, Gini 0.25-0.28",
  "US Racial Wealth Gap — white $188K vs Black $24K median wealth",
  "India's caste system — Dalits 15% population, 3% senior civil servants",
  "UBI experiments — Finland, Stockton CA, Kenya (GiveDirectly)",
  "#MeToo movement (2017) — toppled 200+ powerful figures, changed norms",
  "South Korea gender backlash — 0.72 fertility, 4B movement",
  "UK class and social mobility — 7% privately educated = 65% elite jobs",
  "Japan's ageing and loneliness — hikikomori, Ministry of Loneliness",
  "Cancel culture vs free speech — social accountability or censorship?",
  "French laïcité — Muslim headscarf ban: collective secularism vs religious freedom",
];

const examQs = [
  { year: "2025 Q4", q: "Celebrity media coverage + youth (in your society)" },
  { year: "2024 Q3", q: "Crime & punishment (in your society)" },
  { year: "2025 Prelim", q: "Commercialisation, loneliness, social media themes" },
];

export default function CP03MindMap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("tensions");
  const activeTension = tensions.find(t => t.id === active);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: "16px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ background: ACCENT, borderRadius: 16, padding: "20px 24px", marginBottom: 16, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>CP03 · SOCIETY & CULTURE</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>People, Power & Inequality</div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, opacity: 0.85, flexWrap: "wrap" }}>
          <span>📊 High exam frequency</span>
          <span>🇸🇬 10 SG examples</span>
          <span>🌍 10 Int'l examples</span>
          <span>⚠ "In your society" most common here</span>
        </div>
      </div>

      <div style={{ background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#7C3AED" }}>⚠ EXAM ALERT: </span>
        <span style={{ color: "#374151" }}>"In your society" appears most on this pillar. Singapore context must be specific — not "Singapore is multiracial." Name policies, data, events.</span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["tensions", "sg", "intl", "exam"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
            background: tab === t ? ACCENT : "#fff", color: tab === t ? "#fff" : "#374151",
            boxShadow: tab === t ? "0 2px 8px rgba(124,58,237,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
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
              <div style={{ background: "#F5F3FF", borderRadius: 10, padding: 10 }}>
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
          <div style={{ fontWeight: 700, fontSize: 14, color: NAVY, marginBottom: 12 }}>Recent + Predicted Exam Questions</div>
          {examQs.map((q, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, marginBottom: 4 }}>{q.year}</div>
              <div style={{ fontSize: 13, color: "#374151" }}>{q.q}</div>
            </div>
          ))}
          <div style={{ background: "#F5F3FF", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: ACCENT, marginBottom: 8 }}>Cross-pillar fusions</div>
            {["Economics × Society — inequality, gig workers, housing", "Politics × Society — censorship, minority rights, OB markers", "Arts × Society — cancel culture, representation, cultural identity"].map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "#374151", marginBottom: 5, paddingLeft: 10, borderLeft: "3px solid #C4B5FD" }}>{c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
