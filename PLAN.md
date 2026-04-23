# GP Mastery Programme — Work Plan

Last updated: 2026-04-23

---

## Model Selection Guide

| Phase | Task complexity | Use |
|-------|----------------|-----|
| Planning | Complex, multi-artifact, or architectural | **Opus** |
| Planning | Single artifact, clear scope | **Sonnet** |
| Execution | Non-trivial logic, new patterns, rich content generation | **Sonnet** |
| Execution | Routine generation, templated builds, script runs | **Haiku** |

Rule of thumb: plan once with a smarter model, execute repeatedly with a cheaper one.

---

## Project Status Snapshot

**Programme:** IGNITE Phase 1 — 12 lessons / 3 months, small groups (4–6 students), Singapore A-Level GP Syllabus 8881  
**Methodology:** ARGUE framework  
**Infrastructure:** Node.js (v24) + docx@9.5.3. Run `node scripts/build-cpXX.js` to regenerate any pillar.

### Content Packages — All Done ✅

| Pillar | Tutor Guide | Student Handout | Mind Map |
|--------|-------------|-----------------|----------|
| CP01 SciTech | ✅ v2 | ✅ v2 | ✅ v3 |
| CP02 Environment | ✅ | ✅ | ✅ |
| CP03 Society & Culture | ✅ | ✅ | ✅ |
| CP04 Economics | ✅ | ✅ | ✅ |
| CP05 Politics | ✅ | ✅ | ✅ |
| CP06 Arts & Humanities | ✅ | ✅ | ✅ |

---

## Remaining Work (Priority Order)

### 1. Trial Lesson — HIGHEST PRIORITY ⚠️

**Why first:** No students enrolled yet. This is the primary sales/conversion tool. Everything else is irrelevant without students.

**What it is:** A standalone 2-hour lesson that prospective students attend to experience ARGUE in action and want to enrol. Not a watered-down preview — a full, impressive experience.

**Deliverables:**
- Trial Lesson Plan (script-level, full 2-hour runtime) — DOCX
- Trial Student Handout (take-home, reinforces the experience) — DOCX
- Optional: Parent-facing one-pager (what they observed, what's next) — DOCX

**Suggested topic:** Pick a high-interest, accessible GP topic (e.g., AI/tech or social media) — not a pillar deep-dive, but a demonstration of the ARGUE method on a hot question.

**Planning model:** Sonnet (clear scope, single lesson)  
**Execution model:** Sonnet (rich content, must impress — not the place for Haiku)

---

### 2. Singapore Cheat Sheet

**Why:** High student-facing value, fast to produce, immediately usable in AQ and "in your society" questions.

**What it is:** A quick-reference card covering Singapore's major policies and cases across all 6 pillars — 1 page per pillar or one dense multi-pillar card. Format: DOCX (printable) + JSX (digital).

**Deliverables:**
- `SG_CheatSheet.docx` — print-ready A4 or A5
- `SG_CheatSheet.jsx` — interactive/filterable digital version

**Planning model:** Sonnet  
**Execution model:** Haiku (content already exists in CP01-06 handouts — extraction and reformatting task)

---

### 3. Lesson 5 — Full Script

**Why:** L5 is "Science, Tech & The Future" (CP01 content + Lens Shift). Currently outline-level only. Lessons 1–4 are script-level — this is the first lesson of Month 2 and must match that quality.

**Reference:** Follow L1–4 script format in `GP_Mastery_IGNITE_Full_12_Lesson_Arc.docx`. Structure: SPARK → TEACH → PRACTISE → PROVE → REFLECT.

**Deliverables:**
- Updated `GP_Mastery_IGNITE_Lesson5_Script.docx`

**Planning model:** Sonnet  
**Execution model:** Sonnet (script-level detail, must match L1-4 quality)

---

### 4. Lesson 9 — Full Script

**Why:** L9 is "Cracking Paper 2" — the 3-Pass reading and SAQ technique entry point. Paper 2 is the higher-weight component (60 marks vs 40) and is structurally underweighted in the current programme.

**Deliverables:**
- Updated `GP_Mastery_IGNITE_Lesson9_Script.docx`

**Planning model:** Sonnet  
**Execution model:** Sonnet (new territory — Paper 2 technique content requires care)

---

### 5. Paper 2 Micro-Drills (Lessons 5–8 Integration)

**Why:** Programme audit flagged Paper 2 as a structural risk — too back-loaded. Micro-drills in L5–8 spread the exposure and prevent students arriving at L9 cold.

**What it is:** Short (10–15 min) drill inserts for L5–8 that practice comprehension sub-skills (inference, summary, application of knowledge, vocabulary in context).

**Deliverables:**
- `Paper2_MicroDrills_L5-8.docx` — 4 drills (one per lesson), each self-contained
- Notes on where in each lesson plan to insert them

**Planning model:** Opus (curriculum sequencing across 4 lessons requires architectural thinking)  
**Execution model:** Haiku (once drills are designed, generation is templated)

---

## Future / Backlog

- Phase 2 programme design (BUILD/SPECIALISE)
- Parent report template
- Landing page / marketing copy
- Leaderboard / gamification expansion
- L6–L8 and L10–L12 full scripts (after L5 + L9 done)

---

## Technical Reference

```
Runtime:     Node.js v24.15.0
Package:     docx@9.5.3 (local install)
Regenerate:  node scripts/build-cpXX.js   (from project root)
Output dir:  GP_ClaudeFilesZip/
```

**DOCX constraints:**
- Never use `\n` in TextRuns — use separate Paragraph elements
- A4 page: 11906 × 16838 DXA, margins 1200 DXA all sides
- Fonts: Georgia (headings), Calibri (body)

**JSX constraints:**
- div-based layout only (no SVG)
- DM Sans font, mobile-first (max-width 680px)
- React state only — no localStorage

**Always read `GP_ClaudeFilesZip/SKILL.md` before starting any content work.**
