import { useState } from "react";

const ACCENT = "#2563EB";
const NAVY = "#1B2A4A";

const tensions = [
  {
    id: "T1", label: "Democracy vs\nAuthoritarianism",
    color: "#2563EB",
    for: ["Amartya Sen: no famine ever in a functioning democracy", "V-Dem: democracies grow 2.5x faster over 30 years", "Taiwan: democratic transition → TSMC, free press, innovation economy"],
    against: ["Weimar Republic: democracy voted itself out (Hitler 33%, 1933)", "India under Modi: world's largest democracy, press freedom rank 161/180", "Philippines: Duterte won on anti-drug platform, 7,000-30,000 extrajudicial killings"],
    sgLink: "PAP governance model | GRC system | Elected Presidency | 'Asian Values' thesis",
  },
  {
    id: "T2", label: "National Security vs\nIndividual Rights",
    color: "#7C3AED",
    for: ["SG ISA: 2001 JI detentions disrupted planned bombings", "GCHQ PRISM: claimed to prevent 7 attacks (UK courts partially upheld)", "COVID contact tracing: 10-20x faster than manual methods"],
    against: ["Snowden 2013: NSA collected data on 300M Americans + allied leaders", "PATRIOT Act: 1.6M drug cases, 180K immigration cases — mission creep", "TraceTogether: govt admitted COVID data could be used for criminal investigations"],
    sgLink: "ISA (detention without trial) | POFMA | TraceTogether controversy | Total Defence",
  },
  {
    id: "T3", label: "Diplomacy vs\nForce",
    color: "#16A34A",
    for: ["Post-WWII multilateral order: interstate war deaths -90% vs 1900-1945", "Iran JCPOA (2015): diplomacy halted nuclear programme without military action", "ASEAN Way: maintained SE Asian stability despite territorial disputes"],
    against: ["Ukraine 2022: Minsk diplomatic efforts failed; Russia invaded anyway", "NATO Article 5: 75 years without attack on a member — deterrence works", "Munich 1938: appeasement emboldened Hitler — limits of diplomacy with expansionist aggressors"],
    sgLink: "Singapore 'small state realism' | ASEAN centrality | Total Defence 3%+ GDP | F-35 purchase",
  },
  {
    id: "T4", label: "Censorship vs\nFree Expression",
    color: "#DC2626",
    for: ["130+ democracies ban hate speech — Germany's laws demonstrably suppressed far-right", "Facebook algorithm linked to Rohingya genocide through anti-Muslim incitement amplification", "POFMA: 54 correction directions (2019-2023) — reduced measurable spread of false claims"],
    against: ["Singapore press freedom: 126/180 (RSF 2024)", "POFMA used against opposition politicians and political critics", "History of great art: Ulysses banned, 1984 banned, Catcher in the Rye banned — censors are always wrong"],
    sgLink: "POFMA | Sedition Act | OB markers | SPH restructure | PAP defamation suits history",
  },
];

const sgExamples = [
  "PAP governance — continuous since 1959; technocratic meritocracy",
  "GRC system — minority representation through team constituencies",
  "POFMA (2019) — ministers direct platforms on 'false' content",
  "Internal Security Act — detention without trial, used 1963 to present",
  "Singapore 'small state realism' — rules-based order + strategic hedging",
  "ASEAN and the 'ASEAN Way' — consensus, non-interference",
  "Singapore-China-US balancing — largest trading partner + US base access",
  "Elected Presidency — reserved elections for minority groups (2017)",
  "OB markers — informal self-censorship boundaries in political discourse",
  "Total Defence Doctrine — 5 pillars including Digital Defence (2019)",
];

const intlExamples = [
  "US democratic polarisation — Jan 6 (2021), Trump 2024 return",
  "Brexit (2016) — 52-48% vote, 4 years of deadlock, 4% permanent GDP loss",
  "Taiwan — democracy under threat; TSMC; 2024 DPP election",
  "Russia-Ukraine War (Feb 2022) — 200,000+ casualties, ICC arrest warrant for Putin",
  "Hong Kong NSL (2020) — democracy crushed, Apple Daily shut",
  "Rise of populism — Trump, Orbán, Modi: elected + eroded institutions",
  "Nordic democracy — #1-5 Democracy Index, press freedom, happiness",
  "UN Security Council — P5 veto paralysis vs 90,000 peacekeepers globally",
  "Israel-Palestine — ICC rulings, UNSC vetoes, limits of international law",
  "Rwanda — authoritarian development success: 7% growth + 61% women in parliament",
];

const examQs = [
  { year: "2025 Q5", q: "Democracy = perfect government?" },
  { year: "2025 Prelim", q: "Diplomacy, AI regulation themes" },
  { year: "2024 Q5", q: "Challenging injustice" },
];

export default function CP05MindMap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("tensions");
  const activeTension = tensions.find(t => t.id === active);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: "16px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ background: ACCENT, borderRadius: 16, padding: "20px 24px", marginBottom: 16, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>CP05 · POLITICS</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Power, Governance & the Art of the Possible</div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, opacity: 0.85, flexWrap: "wrap" }}>
          <span>📊 High — democracy recurs every 1-2 years</span>
          <span>🇸🇬 10 SG examples</span>
          <span>🌍 10 Int'l examples</span>
        </div>
      </div>

      <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#2563EB" }}>⚠ EXAM ALERT: </span>
        <span style={{ color: "#374151" }}>"Democracy = good, authoritarianism = bad" is NOT a thesis — it's a starting assumption. Engage with WHY some authoritarian states outperform on specific metrics. Then argue why democratic values ultimately matter more.</span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["tensions", "sg", "intl", "exam"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
            background: tab === t ? ACCENT : "#fff", color: tab === t ? "#fff" : "#374151",
            boxShadow: tab === t ? "0 2px 8px rgba(37,99,235,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
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
                <div style={{ fontWeight: 700, fontSize: 12, color: "#DC2626", marginBottom: 8 }}>✗ AGAINST / COMPLICATION</div>
                {activeTension.against.map((a, i) => <div key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 6, paddingLeft: 12, borderLeft: "3px solid #FCA5A5" }}>{a}</div>)}
              </div>
              <div style={{ background: "#EFF6FF", borderRadius: 10, padding: 10 }}>
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
          <div style={{ background: "#EFF6FF", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: ACCENT, marginBottom: 8 }}>Cross-pillar fusions</div>
            {["Politics × Economics — state capitalism, trade wars, democratic vs technocratic management", "Politics × Society — censorship, minority rights, social harmony vs dissent", "Politics × Science & Tech — AI governance, surveillance states, digital authoritarianism"].map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "#374151", marginBottom: 5, paddingLeft: 10, borderLeft: "3px solid #93C5FD" }}>{c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
