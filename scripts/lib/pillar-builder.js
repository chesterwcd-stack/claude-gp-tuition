// Generates Tutor Guide and Student Handout DOCX for any content pillar
const {
  h1, h2, h3, h4, body, bodyMixed, bullet, spacer, divider, label,
  simpleTable, argumentBlock, sgRefEntry, intlRefEntry,
  makeDocument, saveDocx, COLOURS,
} = require('./docx-helpers');
const { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType } = require('docx');

// ── Cover block ────────────────────────────────────────────────────────────

function coverBlock(content, docType) {
  const isPillarColour = content.accent;
  const colour = isPillarColour || COLOURS.navy;
  return [
    new Paragraph({
      spacing: { before: 0, after: 80 },
      shading: { type: ShadingType.CLEAR, fill: colour, color: colour },
      children: [
        new TextRun({ text: `  ${content.code}: ${content.pillar.toUpperCase()}  `, font: 'Georgia', size: 42, bold: true, color: COLOURS.white }),
      ],
    }),
    new Paragraph({
      spacing: { before: 20, after: 60 },
      children: [new TextRun({ text: `GP Mastery Programme — ${docType}`, font: 'Calibri', size: 22, color: COLOURS.midGrey, italics: true })],
    }),
    new Paragraph({
      spacing: { before: 20, after: 20 },
      children: [new TextRun({ text: `"${content.tagline}"`, font: 'Georgia', size: 26, bold: true, color: colour })],
    }),
    divider(colour),
  ];
}

// ── TUTOR GUIDE ────────────────────────────────────────────────────────────

async function buildTutorGuide(content, filepath) {
  const ac = content.accent || COLOURS.navy;
  const sections = [];

  // Cover
  sections.push(...coverBlock(content, 'TUTOR GUIDE'));

  // 1. Pillar Snapshot
  sections.push(h2('1. Pillar Snapshot', ac));
  const snapRows = [
    ['Exam frequency', content.snapshot.examFrequency],
    ['SG examples', `${content.snapshot.sgExamples} curated references in Student Handout`],
    ["Int'l examples", `${content.snapshot.intlExamples} curated references in Student Handout`],
    ['Cross-pillar links', content.snapshot.crossPillarLinks.join(' | ')],
  ];
  sections.push(simpleTable(['Stat', 'Detail'], snapRows, { accentColour: ac }));
  sections.push(spacer());
  sections.push(label('EXAM ALERT', COLOURS.red, COLOURS.white));
  sections.push(body(content.snapshot.examAlert));
  sections.push(spacer());

  // Tension summary table
  sections.push(h3('Core Tensions — Quick Reference', ac));
  const tensionRows = content.tensions.map(t => [
    t.id,
    t.title,
    t.why,
  ]);
  sections.push(simpleTable(['ID', 'Tension', 'Why it matters for GP'], tensionRows, { accentColour: ac }));
  sections.push(spacer());

  // 2. Lesson Delivery Plan
  sections.push(h2('2. Lesson Delivery Plan', ac));
  sections.push(body('This content is taught in Lesson ' + (parseInt(content.code.replace('CP','')) + 4) + ' (Month 2 Theme Deep-Dive). Structure your 30-min TEACH segment around 2 tensions maximum. Leave the rest for self-study via the Student Handout.'));
  sections.push(spacer(0.5));

  const deliveryRows = [
    ['SPARK (0–15 min)', 'Headline Roulette: pick a recent environment headline. 60 sec to name the tension it belongs to.', 'Activates prior knowledge; surfaces current affairs gaps'],
    ['TEACH (15–45 min)', `Focus on ${content.tensions[0].title} and ${content.tensions[2].title}. These are the two most exam-tested. Model ONE full ARGUE paragraph live.`, 'Concentrate on the tensions that appear most frequently in A-Level papers'],
    ['PRACTISE (45–75 min)', 'Evidence Wars: students compete to name the strongest piece of evidence for each side of T1. Then Argument Auction for T3.', 'Students discover which arguments hold up under scrutiny'],
    ['PROVE (75–105 min)', 'Timed writing: full intro + 2 body paragraphs on a T1 question (35 min).', 'Produces marking data; builds under-time-pressure fluency'],
    ['REFLECT (105–120 min)', 'GLOW-GROW-GO on intros. Preview next lesson. XP awards.', 'Consolidates and motivates'],
  ];
  sections.push(simpleTable(['Segment', 'Activity', 'Rationale'], deliveryRows, { accentColour: ac }));
  sections.push(spacer());

  sections.push(h3('What to teach LIVE vs Leave for Self-Study'));
  sections.push(body('LIVE (must cover in class):', { bold: true }));
  sections.push(bullet('T1: Economic Growth vs Sustainability — the foundational tension; foundational to all other pillars'));
  sections.push(bullet('T3: Developed vs Developing obligations — moral reasoning dimension; appears in exam most years'));
  sections.push(bullet('The "natural capital" reframe of the trade-off (A-grade move)'));
  sections.push(bullet('Singapore\'s Green Plan 2030 — students must know this cold'));
  sections.push(body('SELF-STUDY (Student Handout):', { bold: true }));
  sections.push(bullet('T2 and T4 (important but less frequently directly examined)'));
  sections.push(bullet('All 10 SG references and 10 international references'));
  sections.push(bullet('Cross-pillar connections'));
  sections.push(spacer());

  // 3. Discussion Prompts
  sections.push(h2('3. Discussion Prompts & Socratic Questions', ac));

  sections.push(h3('SPARK Hooks'));
  sections.push(bullet('"Look at this headline: [SG carbon tax raised to $45]. Is this good or bad for Singapore businesses? For Singapore\'s environment? What\'s the tension?"'));
  sections.push(bullet('"If I asked you to list three things you did last week that hurt the environment, what would you say? Now — do you think YOU changing those things would actually fix climate change?"'));
  sections.push(bullet('"Quick thesis: \'Countries that are poor have no obligation to protect the environment.\' Agree or disagree — 30 seconds, no fence-sitting."'));

  sections.push(spacer(0.5));
  sections.push(h3('TEACH Probing Questions'));
  sections.push(bullet('"What would it actually cost Singapore if we stopped burning all natural gas tomorrow? What would break first?"'));
  sections.push(bullet('"If the Stern Review is right that inaction costs 5–20% of GDP — why isn\'t every government treating this as a crisis? What\'s the political economy problem?"'));
  sections.push(bullet('"China is both the world\'s largest emitter AND the world\'s largest solar installer. Does that make China a villain, a hero, or both? What does that tell us about the trade-off?"'));
  sections.push(bullet('"Bangladesh emits almost nothing per capita but faces the worst flooding. India emits a lot but less per person than the US. How should we allocate responsibility?"'));

  sections.push(spacer(0.5));
  sections.push(h3('PRACTISE Debate Prompts'));
  sections.push(bullet('Devil\'s Advocate Chair: "Carbon taxes are unfair to working-class people." Argue FOR this, then AGAINST. Switch.'));
  sections.push(bullet('Lens Shift: Take the question "Should wealthy nations bear full responsibility for climate costs?" through Economic / Ethical / Political / Practical lenses.'));
  sections.push(bullet('Perspective Grid: How do the following groups view a carbon tax? Business owners, young activists, factory workers, coastal communities in Indonesia.'));

  sections.push(spacer());

  // 4. Common Misconceptions
  sections.push(h2('4. Common Misconceptions', ac));

  const misconceptions = [
    {
      wrong: '"Environment = pollution and recycling." Students write essays about littering and plastic straws.',
      correct: 'GP environment questions are about governance, economics, and justice — not personal habits. Re-orient immediately: "This question is really about WHO should be responsible, and at what cost."',
    },
    {
      wrong: '"Singapore is too small to matter." Students dismiss Singapore\'s role entirely.',
      correct: 'Singapore matters in multiple ways: (1) highest per-capita emissions in SE Asia, (2) role as a financial hub for regional green finance, (3) world-class case studies in water tech, waste management. Size doesn\'t exempt us.',
    },
    {
      wrong: '"Developing countries don\'t need to do anything about the environment." Students treat this as obvious and don\'t engage with the counterargument.',
      correct: 'The counterargument is powerful: if China and India don\'t act, historical Western reductions are irrelevant to the math. The best answer argues for DIFFERENTIATED obligations, not exemptions.',
    },
    {
      wrong: '"Technology will solve everything." Used as a dismissive get-out clause.',
      correct: 'Technology helps but doesn\'t eliminate trade-offs. Technology requires investment (who pays?), deployment takes time (we have deadlines), and some technologies have their own risks (geoengineering, nuclear). Don\'t let students use "technology" as a magic wand.',
    },
    {
      wrong: 'Fence-sitting: "We need to balance environment and economy." This says nothing.',
      correct: 'Force a thesis: what should the PRIORITY be when they conflict? Under what conditions does growth take precedence? What minimum environmental standards are non-negotiable? The essay must commit.',
    },
  ];

  misconceptions.forEach((m, i) => {
    sections.push(label(`Misconception ${i + 1}`, COLOURS.red, COLOURS.white));
    sections.push(body(`WRONG: "${m.wrong}"`, { italic: true }));
    sections.push(body(`CORRECT: ${m.correct}`));
    sections.push(spacer(0.5));
  });

  // 5. Differentiation Notes
  sections.push(h2('5. Differentiation Notes', ac));

  sections.push(h3('Stronger Students'));
  sections.push(bullet('Push them to the carbon leakage and Carbon Border Adjustment Mechanism (CBAM) concept — systemic policy design'));
  sections.push(bullet('Challenge them: "If the Kuznets Curve theory is right, should we actively encourage developing countries to grow faster so they can fix their environment?" (Forces engagement with political economy)'));
  sections.push(bullet('Ask: "What\'s the strongest argument FOR being a climate change sceptic? Steelman it." — then demolish it.'));

  sections.push(h3('Weaker Students'));
  sections.push(bullet('Start with T2 (individual vs systemic) — it\'s the most intuitive and closest to their lived experience'));
  sections.push(bullet('Give them 3 SG examples to master first (Green Plan 2030, Carbon Tax, NEWater) before attempting international examples'));
  sections.push(bullet('For T1 essays: provide the "natural capital" reframe as a sentence template to adapt'));

  sections.push(h3('STEM-oriented Students'));
  sections.push(bullet('Lead with NEWater / Tuas Nexus (engineering solutions) — then bridge to governance question: who decided to invest? Who paid?'));
  sections.push(bullet('Use the IPCC confidence levels — they understand uncertainty quantification better than humanities students'));

  sections.push(spacer());

  // 6. Post-Lesson Checklist
  sections.push(h2('6. Post-Lesson Checklist', ac));
  const checkRows = [
    ['Students can name the 4 core tensions and give one example per tension', '☐'],
    ['At least 3 students used a SG example unprompted in class discussion', '☐'],
    ['Every student attempted a full thesis sentence for T1 or T3', '☐'],
    ['The "natural capital" reframe was explicitly taught', '☐'],
    ['Evidence Wars produced at least 3 strong international examples from students', '☐'],
    ['Homework assigned: full timed essay on T1 question (Week 1 of 4-week rotation)', '☐'],
    ['XP awarded and leaderboard updated', '☐'],
  ];
  sections.push(simpleTable(['Checkpoint', '✓'], checkRows, { accentColour: ac }));

  const doc = makeDocument(sections);
  await saveDocx(doc, filepath);
}

// ── STUDENT HANDOUT ────────────────────────────────────────────────────────

async function buildStudentHandout(content, filepath) {
  const ac = content.accent || COLOURS.navy;
  const sections = [];

  // Cover
  sections.push(...coverBlock(content, 'STUDENT HANDOUT'));

  // Page 1 snapshot
  sections.push(h2('THE BIG PICTURE', ac));
  sections.push(label('WHY THIS PILLAR MATTERS', ac, COLOURS.white));
  sections.push(body(content.bigPicture.whyMatters));
  sections.push(spacer(0.5));
  sections.push(label('#1 MISTAKE STUDENTS MAKE', COLOURS.red, COLOURS.white));
  sections.push(body(content.bigPicture.topMistake));
  sections.push(spacer());

  // Snapshot stats row
  sections.push(h3('At a glance', ac));
  const snapItems = [
    `Exam frequency: ${content.snapshot.examFrequency}`,
    `SG examples: ${content.snapshot.sgExamples} | Int'l examples: ${content.snapshot.intlExamples}`,
    `Links to: ${content.snapshot.crossPillarLinks.join(', ')}`,
    `Exam alert: ${content.snapshot.examAlert}`,
  ];
  snapItems.forEach(s => sections.push(bullet(s)));
  sections.push(divider(ac));
  sections.push(spacer());

  // Core tensions
  sections.push(h2('CORE TENSIONS', ac));

  for (const tension of content.tensions) {
    sections.push(h3(`${tension.id}: ${tension.title}`, ac));
    sections.push(body(`Why it matters: ${tension.why}`, { italic: true, colour: COLOURS.midGrey }));
    sections.push(spacer(0.5));

    // FOR arguments
    for (const arg of tension.for) {
      sections.push(...argumentBlock(arg, { side: 'FOR', accentColour: COLOURS.green }));
    }

    // AGAINST arguments
    for (const arg of tension.against) {
      sections.push(...argumentBlock(arg, { side: 'AGAINST', accentColour: COLOURS.red }));
    }

    sections.push(divider(ac));
    sections.push(spacer());
  }

  // Singapore References
  sections.push(h2('SINGAPORE COMPLETE REFERENCE', ac));
  sections.push(body('Master these 10 examples. Every "in your society" question REQUIRES at least 2-3 of these.', { italic: true }));
  sections.push(spacer(0.5));

  content.sgReferences.forEach((ref, i) => {
    sections.push(h4(`SG${String(i + 1).padStart(2, '0')} — ${ref.name}`));
    sections.push(...sgRefEntry(ref));
  });

  sections.push(divider(ac));
  sections.push(spacer());

  // International References
  sections.push(h2("INTERNATIONAL COMPLETE REFERENCE", ac));
  sections.push(body('Use these to demonstrate global breadth. Pair international examples with SG examples for A-grade essays.', { italic: true }));
  sections.push(spacer(0.5));

  content.intlReferences.forEach((ref, i) => {
    sections.push(h4(`INT${String(i + 1).padStart(2, '0')} — ${ref.name}`));
    sections.push(...intlRefEntry(ref));
  });

  sections.push(divider(ac));
  sections.push(spacer());

  // Cross-pillar connections
  sections.push(h2('CROSS-PILLAR CONNECTIONS', ac));
  sections.push(body('A-grade essays live here. Examiners reward students who can connect themes across pillars.'));
  sections.push(spacer(0.5));
  content.crossPillarConnections.forEach(link => {
    sections.push(h4(`${link.pillars}`));
    sections.push(body(link.tensions));
    if (link.questions) sections.push(body(`Exam application: ${link.questions}`, { italic: true, colour: COLOURS.midGrey }));
    sections.push(spacer(0.4));
  });

  sections.push(divider(ac));
  sections.push(spacer());

  // Practice Questions
  sections.push(h2('PRACTICE QUESTIONS', ac));
  sections.push(body('For each question: (1) do a Question Autopsy, (2) write a thesis, (3) identify your 2-3 best arguments with evidence, (4) identify the strongest counterargument.'));
  sections.push(spacer(0.5));

  const qRows = content.practiceQuestions.map((pq, i) => [
    `Q${i + 1}`,
    pq.q,
    pq.type,
    pq.difficulty,
    pq.focus,
  ]);
  sections.push(simpleTable(['#', 'Question', 'Type', 'Difficulty', 'Focus'], qRows, { accentColour: ac }));
  sections.push(spacer());

  // Student Task
  sections.push(h2('YOUR TASK: EVIDENCE VAULT EXPANSION', ac));
  sections.push(body('Before next session, add 5 new entries to your Evidence Vault for this pillar. Use this checklist:'));
  sections.push(bullet('2 Singapore examples you didn\'t already know (from this handout or news)'));
  sections.push(bullet('2 International examples from different regions (not just UK/US)'));
  sections.push(bullet('1 Statistic with a year attached (passes the Google Test)'));
  sections.push(spacer(0.5));
  sections.push(body('Think Card (due next session): "What is the most surprising thing you learned about this pillar? Why does it change how you think?"', { italic: true, bold: true }));

  const doc = makeDocument(sections);
  await saveDocx(doc, filepath);
}

module.exports = { buildTutorGuide, buildStudentHandout };
