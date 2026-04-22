import { useState } from "react";

const ACCENT = "#DC2626";
const NAVY = "#1B2A4A";

const tensions = [
  {
    id: "T1", label: "Arts as Essential\nvs Luxury",
    color: "#DC2626",
    for: ["UNESCO: creative industries = $2.25T globally (3% GDP, 48M jobs)", "Korean Wave (Hallyu): BTS alone = $3.6B tourism revenue (2019)", "UK Creative Economy: £125B (6.4% of GDP), grew faster than economy every year 2010-2019"],
    against: ["UK Arts Council cuts 2022: £50M redirected to healthcare — broad public support", "WHO: 1 billion people lack mental healthcare — competing claim on government resources", "Australia: 1/3 UK arts funding per capita yet still globally significant — market can substitute"],
    sgLink: "NAC ~$100M/yr | Esplanade 1.8M visitors | National Gallery | Singapore Biennale",
  },
  {
    id: "T2", label: "Tradition vs\nInnovation",
    color: "#7C3AED",
    for: ["UNESCO: 700+ traditions on endangered list — once lost, permanently gone", "New Zealand Māori language revival through immersion schools — state investment works", "Japan's Living National Treasures: master craftspeople subsidised to preserve kabuki, ikebana"],
    against: ["Jazz → Hip-hop → K-pop: each generation transforms what came before", "Shakespeare was revolutionary popular entertainment — not tradition when written", "Nigeria Afrobeats: global phenomenon combining Yoruba + highlife + hip-hop — hybrid, not traditional"],
    sgLink: "Singlish debate | Peranakan culture | Heritage conservation (shophouses) | K-pop influence",
  },
  {
    id: "T3", label: "Art &\nCensorship",
    color: "#D97706",
    for: ["130+ democracies restrict hate speech — Germany's laws suppressed far-right extremism", "Facebook algorithm amplified anti-Muslim incitement before Rohingya genocide", "Singapore IMDA: graduated rating system allows access while protecting vulnerable groups"],
    against: ["History: Ulysses, 1984, Catcher in the Rye — all banned; censors are reliably wrong", "Ai Weiwei: detained 81 days, studio demolished — state censorship = political repression", "PAP defamation suits vs JB Jeyaretnam (20 years) — censorship as political tool"],
    sgLink: "IMDA ratings | NAC funding withdrawal | OB markers | Alfian Sa'at controversy",
  },
  {
    id: "T4", label: "Art in the\nAge of AI",
    color: "#0D9488",
    for: ["DALL-E democratised visual expression for non-trained artists", "Adobe Firefly: 3B images in first 3 months — tool adoption, not replacement", "Spotify data: AI music <1% of streams — audiences still prefer human-created art"],
    against: ["Getty vs Stability AI: trained on 12M images without licence — watermarks appeared in outputs", "US Copyright Office: AI outputs not copyrightable — economic uncertainty for users", "Illustrators: 40-90% income decline in sectors where AI image generation adopted"],
    sgLink: "NAC 'AI for the Arts' grants | IMDA Generative AI Guidelines 2023 | SG media production AI use",
  },
];

const sgExamples = [
  "National Arts Council — ~$100M/yr, nation-building funding philosophy",
  "Esplanade — 1.8M visitors/yr, $600M public investment",
  "National Gallery Singapore — largest SE Asian modern art collection (8,000+ works)",
  "Singapore Writers Festival — multilingual (English, Mandarin, Malay, Tamil)",
  "Heritage conservation — 7,100 URA-conserved buildings (shophouses, Chinatown)",
  "Singlish — English-Malay-Hokkien-Tamil creole; national identity marker vs Speak Good English",
  "Singapore Biennale — contemporary art, biennial since 2006",
  "IMDA content classification — G, PG, NC16, M18, R21 graduated system",
  "K-pop and Hallyu influence — BTS, BLACKPINK, K-drama dominant in SG youth culture",
  "Arts education — SOTA, LASALLE, NAFA; but arts dropped by most for Sciences",
];

const intlExamples = [
  "Ai Weiwei — detained 81 days, studio demolished; art as political resistance",
  "Banksy — anti-commercial art sold for millions; self-destructing 'Girl with Balloon'",
  "BTS / Korean Wave — $10B+ cultural exports; KOCCA state investment model",
  "NFTs — Beeple $69M (2021), market crashed to <$1B (2023); questions what makes art valuable",
  "Netflix streaming — democratises global cinema; threatens local industries simultaneously",
  "AI art: DALL-E, Midjourney, Stable Diffusion — Getty lawsuit, copyright vacuum",
  "US book banning record (2022-23) — 3,362 bans; mostly LGBTQ+ and minority perspectives",
  "UNESCO World Heritage controversies — Liverpool lost status for overdevelopment",
  "Bollywood / Nollywood — 1,500 and 2,000 films/yr; economic + diaspora cultural role",
  "Cultural appropriation debates — Kim Kardashian 'Kimono', Adele Bantu knots controversy",
];

const examQs = [
  { year: "2025 Q2", q: "Well-known art = great art?" },
  { year: "2024 Q8", q: "Value of music (in your society)" },
  { year: "2024 Q7", q: "Humour as communication" },
];

export default function CP06MindMap() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("tensions");
  const activeTension = tensions.find(t => t.id === active);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#F3F4F6", minHeight: "100vh", padding: "16px", maxWidth: 680, margin: "0 auto" }}>
      <div style={{ background: ACCENT, borderRadius: 16, padding: "20px 24px", marginBottom: 16, color: "#fff" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, opacity: 0.8, marginBottom: 4 }}>CP06 · ARTS & HUMANITIES</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Expression, Identity & What We Call Beautiful</div>
        <div style={{ display: "flex", gap: 16, fontSize: 12, opacity: 0.85, flexWrap: "wrap" }}>
          <span>📊 Medium — 1-2 per paper</span>
          <span>🇸🇬 10 SG examples</span>
          <span>🌍 10 Int'l examples</span>
          <span>🔗 Society, Politics, Tech</span>
        </div>
      </div>

      <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 12, padding: "12px 16px", marginBottom: 16, fontSize: 13 }}>
        <span style={{ fontWeight: 700, color: "#DC2626" }}>⚠ EXAM ALERT: </span>
        <span style={{ color: "#374151" }}>"Art enriches our lives" is a platitude, not a thesis. Pick a specific position: art as political resistance? AI as democratising tool? Heritage as economic asset? Commit to an argument.</span>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["tensions", "sg", "intl", "exam"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{
            flex: 1, padding: "8px 4px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
            background: tab === t ? ACCENT : "#fff", color: tab === t ? "#fff" : "#374151",
            boxShadow: tab === t ? "0 2px 8px rgba(220,38,38,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
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
              <div style={{ background: "#FFF7ED", borderRadius: 10, padding: 10 }}>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#D97706", marginBottom: 4 }}>🇸🇬 SG LINK</div>
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
          <div style={{ background: "#FEF2F2", borderRadius: 12, padding: 14, marginTop: 8 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: ACCENT, marginBottom: 8 }}>Cross-pillar fusions</div>
            {["Arts × Society — cancel culture, representation, cultural identity", "Arts × Politics — censorship, state funding conditions, political art", "Arts × Science & Tech — AI creativity, digital distribution, copyright (2025 Prelim trend)"].map((c, i) => (
              <div key={i} style={{ fontSize: 12, color: "#374151", marginBottom: 5, paddingLeft: 10, borderLeft: "3px solid #FCA5A5" }}>{c}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
