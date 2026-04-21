---
name: gp-mastery-programme
description: "Use this skill whenever working on the GP Mastery Programme project — a Singapore JC General Paper tuition programme built around the ARGUE methodology. This includes: creating or editing content packages (tutor guides, student handouts, mind maps) for any of the 6 thematic pillars; building or refining lesson plans at any detail level; designing student-facing materials (playbook, toolkit cards, assessments); working on gamification systems (XP tracking, leaderboards, badges); creating marketing materials (trial lessons, landing pages, parent packs); or any task referencing GP, ARGUE, Singapore A-Level syllabus 8881, or the programme's artifacts. Trigger this skill even for tangentially related tasks like 'update the science content' or 'add a new game format' or 'design a parent report'. Always read the full SKILL.md and relevant reference files before starting work."
---

# GP Mastery Programme — Project Skill

## Project Overview

This is a comprehensive tuition programme for Singapore Junior College (JC) students preparing for the A-Level General Paper (Syllabus 8881). The programme is delivered in small groups of 4–6 students at a private tuition centre, with 2-hour weekly sessions.

**Core methodology:** The ARGUE framework (Analyse, Reason, Grapple, Use evidence, Express)
**Target audience:** Late Gen Z students (born 2007–2009), J1 and J2
**Brand tone:** Chill & relatable — like advice from a smart senior who just aced their A-levels. Direct, no-fluff, occasionally opinionated, never preachy.
**Programme structure:** Phase 1: IGNITE (12 lessons / 3 months) → Phase 2: BUILD/SPECIALISE (future)
**Tutor context:** Part-time tutor running 1–2 groups per week. Materials must minimise prep time.

## Critical Design Decisions (Established)

These decisions were made during the initial design session and should be maintained across all future work:

### Document Architecture
- **Tutor Guides** = delivery-focused (HOW to teach, not WHAT to teach). Contains: pacing, prioritisation, discussion prompts, misconceptions, differentiation, post-lesson checklist.
- **Student Handouts** = comprehensive, self-study-ready (the full content). Students receive AFTER class for reinforcement. Must work standalone for missed lessons.
- **Mind Maps** = interactive JSX artifacts for digital reference. Data-driven design so pillar data can be swapped.
- **Lesson Plans** = script-level for Month 1 (L1-4), detailed outlines for L5-12. Follow the SPARK → TEACH → PRACTISE → PROVE → REFLECT structure.
- **All student-facing content** uses the "chill senior" voice.

### File Naming Convention
```
CP[01-06]_[PillarShortName]_TutorGuide.docx
CP[01-06]_[PillarShortName]_StudentHandout.docx
CP[01-06]_[PillarShortName]_MindMap.jsx
```
Pillar order (by priority): 01=SciTech, 02=Environment, 03=SocietyCulture, 04=Economics, 05=Politics, 06=ArtsHumanities

### Content Package Structure (Per Pillar)
Each content package has 3 files:

**Tutor Guide contains:**
1. Pillar Snapshot (stats bar + tension summary table)
2. Lesson Delivery Plan (what to teach live vs leave for self-study — max 3-4 arguments live)
3. Discussion Prompts & Socratic Questions (hooks for SPARK, probing Qs for TEACH, debate prompts for PRACTISE)
4. Common Misconceptions (4-5 per pillar with corrections)
5. Differentiation Notes (stronger students, weaker students, specific profiles like STEM students)
6. Post-Lesson Checklist (checkbox table)

**Student Handout contains:**
1. Page 1 summary/snapshot
2. Big Picture (why this pillar matters, #1 mistake students make)
3. Core Tensions (3-4 per pillar), each with:
   - FOR arguments (full: claim, reasoning, evidence 3-4 pieces, SG angle, essay usage tip)
   - AGAINST arguments (same structure)
4. Singapore Complete Reference (10 entries: policy name, what it is, GP use with critical angle)
5. International Complete Reference (10 entries: case study, facts, GP application)
6. Cross-Pillar Connections
7. Practice Questions (6, tagged by type and difficulty)
8. Student Task (Evidence Vault building instructions)

**Mind Map (JSX) contains:**
- Stats bar (exam frequency, SG examples, int'l examples, cross-pillar links)
- Visual radial layout with centre node + 3-4 tension nodes + cross-pillar satellite nodes
- Tap-to-expand detail panels showing FOR/AGAINST arguments with evidence tags
- Recent exam questions section
- Cross-pillar connections section
- Built with div-based positioning (NOT SVG — SVG causes clipping issues in artifacts)

### Colour Palette (Consistent Across All Materials)
```
ARGUE Letters: A=Orange(#F97316), R=Teal(#0D9488), G=Purple(#7C3AED), U=Blue(#2563EB), E=Red(#DC2626)
General: Navy(#1B2A4A), Gold(#D97706), Green(#16A34A)
Light variants: add "CC" prefix to hex, or use established light versions
Backgrounds: White(#FFFFFF), Light Grey(#F3F4F6), Off-white(#FAFAFA)
Text: Black(#111827), Dark Grey(#374151), Mid Grey(#6B7280)
```

### Proficiency Levels
| Level | Name | Nickname | XP | Grade |
|-------|------|----------|-----|-------|
| 0 | Recall | The Blank Page | 0 | U/S |
| 1 | Recognise | The Parrot | 200 | D/E |
| 2 | Reproduce | The Template User | 600 | C |
| 3 | Reason | The Thinker | 1200 | B |
| 4 | Reframe | The Strategist | 2000 | A |
| 5 | Reimagine | The Thought Leader | 3000 | A (top) |

### The 6 Thematic Pillars (Syllabus 8881)
1. Science & Technology (CP01) — COMPLETED
2. Environment (CP02)
3. Society & Culture (CP03)
4. Economics (CP04)
5. Politics (CP05)
6. Arts & Humanities (CP06)

## Current Artifact Inventory

| # | Artifact | Format | Status |
|---|----------|--------|--------|
| 1 | Programme Bible (Brainstorm v1) | DOCX | ✅ Complete |
| 2 | ARGUE Toolkit (Interactive) | JSX | ✅ Complete |
| 3 | Diagnostic Assessment Kit | DOCX | ✅ Complete |
| 4 | IGNITE Lesson Plans — Month 1 (L1-4) | DOCX | ✅ Script-level |
| 5 | IGNITE Full 12-Lesson Arc (L1-12) | DOCX | ✅ Outlined |
| 6 | Student Playbook | JSX + HTML | ✅ Complete |
| 7 | XP Tracker Spreadsheet | XLSX | ✅ Complete |
| 8 | ARGUE Toolkit Cards (printable) | PDF | ✅ Complete |
| 9 | Programme Audit & Critical Review | DOCX | ✅ Complete |
| 10 | CP01 SciTech — Tutor Guide | DOCX | ✅ Complete (v2) |
| 11 | CP01 SciTech — Student Handout | DOCX | ✅ Complete (v2) |
| 12 | CP01 SciTech — Mind Map | JSX | ✅ Complete (v3) |
| 13-24 | CP02-06 (all 3 files each) | DOCX+JSX | ❌ Not built |

## Priority Action Items (From Audit)

1. ✅ Build content packages (in progress — CP01 done)
2. ❌ Design trial lesson (conversion tool)
3. ❌ Create Singapore Cheat Sheet
4. ❌ Expand Lessons 5 and 9 to full script
5. ❌ Integrate Paper 2 micro-drills into Lessons 5-8

## Technical Notes

### DOCX Creation
- Use `docx` npm package (v9.5.3)
- A4 page size (11906 x 16838 DXA)
- Margins: 1200 DXA all sides (content width = 9506)
- NEVER use `\n` in TextRuns — use separate Paragraph elements
- Single-row tables: rows array must close with `]` before table closes — pattern: `rows: [new TableRow({...})]`
- Always validate: `python scripts/office/validate.py output.docx`
- Font: Georgia for headings, Calibri for body
- Use LevelFormat.BULLET for lists, never unicode bullets

### JSX Artifacts
- Use div-based layout for mind maps, NOT SVG (SVG causes clipping in artifact viewer)
- Import Google Fonts: DM Sans for all student-facing materials
- Use CSS animations sparingly: fadeIn on section changes
- No localStorage/sessionStorage — use React state only
- Mobile-first design (max-width: 640px for playbook, 680px for mind maps)
- Consistent border-radius: 12-16px for cards, 20px for major containers

### XLSX Creation
- Use openpyxl for formatting + formulas
- Always recalculate: `python scripts/recalc.py output.xlsx`
- Formulas in cells, never hardcoded Python calculations

### PDF Creation
- Use reportlab for toolkit cards
- A5 cards: 2 per A4 page with cut lines
- Double-sided: front = framework, back = worked example

## Reference Files

Read these for detailed context on specific areas:
- `references/argue-framework.md` — Full ARGUE methodology details
- `references/exam-format.md` — Syllabus 8881 structure, marks, question types
- `references/content-pillars.md` — All 6 pillars with tensions, arguments, evidence
- `references/lesson-structure.md` — SPARK-TEACH-PRACTISE-PROVE-REFLECT template
- `references/competitive-landscape.md` — Singapore GP tuition market analysis
