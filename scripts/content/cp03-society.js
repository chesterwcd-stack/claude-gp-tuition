// CP03: Society & Culture
module.exports = {
  pillar: 'Society & Culture',
  code: 'CP03',
  accent: '7C3AED', // purple
  tagline: 'People, Power & Inequality',
  snapshot: {
    examFrequency: 'High — 2+ questions per paper in most years. Meritocracy, social mobility, identity topics recur.',
    sgExamples: 10,
    intlExamples: 10,
    crossPillarLinks: ['Economics', 'Politics', 'Arts & Humanities'],
    examAlert: '"In your society" tag appears most frequently on Society & Culture questions. Singapore context is mandatory and must be specific — not generic "Singapore is multiracial".',
  },

  bigPicture: {
    whyMatters: 'Society & Culture questions test whether students can move beyond surface observations about Singapore to engage with deep structural tensions: is meritocracy fair, how is identity constructed, what does progress look like? These are questions with no consensus answer, which is exactly what GP rewards.',
    topMistake: 'Treating Singapore as a perfect meritocracy or dismissing it as entirely unjust — both are simplistic. The A-grade position acknowledges the genuine achievement of social mobility while engaging seriously with structural barriers like class, race, and gender that persist.',
  },

  tensions: [
    {
      id: 'T1',
      title: 'Meritocracy vs Structural Inequality',
      why: 'Singapore\'s founding ideology is meritocracy — but international research and local data show structural advantages persist. This is the highest-tested tension in this pillar.',
      for: [
        {
          claim: 'Meritocracy, properly implemented, remains the most fair and efficient system for allocating opportunities',
          reasoning: 'Any alternative to merit-based selection introduces subjective or arbitrary criteria — favouring birth, connections, or group membership over ability — which is both unfair to individuals and economically inefficient for society.',
          evidence: [
            'Singapore\'s social mobility: OECD Mobility Report (2018) ranked Singapore among top performers in social mobility in Asia; higher education access grew from 5% (1960s) to 40%+ of each cohort today',
            'Harvard Business Review (2022): companies with rigorous merit-based HR practices outperform peers by 35% on productivity metrics',
            'Singapore\'s PSC scholarship system selects on measurable academic criteria — produced technocratic governance with consistently ranked effectiveness (World Bank governance indicators)',
            'PSLE scoring changes (2021): removed aggregate scoring to reduce pressure while maintaining subject-level assessment — meritocracy refined, not abandoned',
          ],
          sg: 'Singapore\'s public housing (HDB) policy ensures 80% of citizens live in subsidised housing regardless of class — creating a broadly equal material baseline. Bursaries and fee assistance ensure financial barriers to education are reduced, not eliminated.',
          tip: 'Acknowledge that meritocracy is an ideal, not always a reality — the strong argument accepts this and argues for better implementation, not abandonment.',
        },
      ],
      against: [
        {
          claim: 'Meritocracy is a myth that disguises structural advantage as individual achievement',
          reasoning: '"Merit" is never measured in a vacuum — it reflects the compounding advantages of wealthy, educated families who can invest in tuition, enrichment activities, and social capital. Calling the outcome "merit" launders inequality as deserved.',
          evidence: [
            'Michael Sandel\'s "Tyranny of Merit" (2020): meritocracy corrodes social solidarity by telling "losers" they deserve their fate, breeding both resentment from below and hubris from above',
            'NUS research (2019): students from top 20% of households are 7x more likely to enter elite universities than those from bottom 20% — despite "merit-based" admissions',
            'Singapore\'s private tuition industry worth $1.4B (2022): families with resources can purchase academic performance, systematically advantaging the privileged',
            'Social mobility paradox: Singapore performs well on inter-generational mobility overall, but the bottom quintile shows far lower mobility — structural floor below which meritocracy doesn\'t operate',
          ],
          sg: 'Singapore\'s Class Distinction study (IPS, 2021): socioeconomic background has become as significant as race in determining social outcomes. "Sandwich class" families (too wealthy for bursaries, too poor to afford premium alternatives) face particular disadvantage.',
          tip: 'The "laundering inequality" framing is a sophisticated analytical move — use Michael Sandel for a Tier 3 evidence boost.',
        },
      ],
    },

    {
      id: 'T2',
      title: 'Tradition vs Progress (Family, Gender, Generational Values)',
      why: 'Rapid social change in Singapore and globally — marriage rates, LGBTQ+ rights, gender roles — creates genuine generational tension. Examiners value authentic engagement.',
      for: [
        {
          claim: 'Social progress on gender, family, and identity rights reflects genuine moral advancement and should be embraced',
          reasoning: 'Expanding rights and freedoms to previously excluded groups makes societies more just, more productive, and more innovative. Clinging to tradition because it is tradition — not because it is good — is circular reasoning.',
          evidence: [
            'World Economic Forum Gender Gap Report (2023): Iceland, Finland, Norway at 90%+ gender parity — strongest economies in Scandinavia correlate with highest gender equality',
            'McKinsey (2023): companies in top quartile for gender diversity are 39% more likely to outperform financially than bottom quartile',
            'Singapore: Section 377A repeal (November 2022) decriminalised consensual same-sex relations between men — citing "right to personal space" and pragmatic harm reduction',
            '#MeToo movement (2017–present): documented systemic workplace harassment previously normalised as "tradition" — forced structural changes in corporate policies and legal frameworks worldwide',
          ],
          sg: 'Singapore\'s women\'s representation in Parliament reached 29.1% (2020) — progress but below Nordic benchmarks. National Policy on Women (2022) set targets for boardroom representation and protection from online harassment.',
          tip: 'Note the pattern: Singapore leads on some social progress (female workforce participation at 60%+) but lags on others (LGBTQ+ rights, political representation). Nuanced country analysis beats sweeping claims.',
        },
      ],
      against: [
        {
          claim: 'Social traditions encode accumulated wisdom and community bonds that rapid change disrupts at serious cost',
          reasoning: 'Traditions are not arbitrary — they encode solutions to coordination problems evolved over generations. Rapid dismantling of family structures, religious norms, and community bonds can produce social fragmentation, loneliness, and identity crisis with consequences that outlast any individual policy change.',
          evidence: [
            'Japan\'s "solo society": record low marriage rates (birth rate 1.2, 2023), epidemic of loneliness (hikikomori — 1.46 million recluses), "death alone" (kodawari) normalised — rapid modernity without social support systems',
            'South Korea: world\'s lowest fertility rate (0.72, 2023); rapid urbanisation and economic competition dismantled extended family networks; government spending $200M/year on anti-loneliness measures',
            'UK social mobility: despite decades of progressive social policy, class mobility has stagnated — destroying traditional working-class communities (mining towns, factory districts) without replacing the social fabric',
            'Singapore family values: 89% of elderly live with or near family (HDB policies reinforce this) — strong intergenerational bonds provide social safety net that market economies cannot replicate',
          ],
          sg: 'Singapore\'s Marriage and Parenthood Package reflects government acknowledgement that pro-family policies must actively counteract market forces that reduce fertility and delay family formation. Tradition doesn\'t maintain itself in a globalised economy without intervention.',
          tip: 'Distinguish between traditions worth preserving (social bonds, community care) and traditions that harm (discrimination, suppression of rights). Don\'t defend tradition wholesale.',
        },
      ],
    },

    {
      id: 'T3',
      title: 'Individual Freedom vs Collective Harmony',
      why: 'Singapore\'s communitarian political philosophy is in direct tension with Western liberal individualism — a live debate in GP papers testing political philosophy.',
      for: [
        {
          claim: 'Collective harmony and social order are preconditions for the freedoms individuals actually want to exercise',
          reasoning: 'Absolute individual freedom is self-defeating — without social order, property rights, security, and trust, the freedoms that matter most (to work, travel, associate, express oneself) cannot be exercised. Communities have legitimate interests in constraining behaviours that damage the collective.',
          evidence: [
            'Rawls\' "veil of ignorance" thought experiment: rational agents who don\'t know their position in society would choose institutions that protect the worst-off — which sometimes requires limiting individual freedoms',
            'Singapore\'s COVID-19 response: SafeEntry tracking, mask mandates, gathering limits — justified by outcomes: one of the world\'s lowest death rates per capita in early pandemic',
            'Hate speech laws: 130+ democracies restrict speech inciting racial/religious hatred — recognising that unfettered expression can destroy the social harmony that enables all other freedoms',
            'HDB ethnic integration policy (EIP): limits an individual\'s choice to sell to any buyer — but has maintained multi-racial neighbourhoods for 40 years, preventing ethnic ghettoisation',
          ],
          sg: 'CMIO (Chinese, Malay, Indian, Others) racial classification maintains representation in government (GRC system, minority President provision) by constraining pure majoritarian democracy — collective harmony through institutional design.',
          tip: 'Singapore\'s case is most powerful when you engage with it honestly: some constraints on freedom have produced genuinely good collective outcomes. The question is always: which constraints, and who decides?',
        },
      ],
      against: [
        {
          claim: '"Collective harmony" is often a rhetorical device used to silence legitimate dissent and protect elite power',
          reasoning: 'When governments invoke "social harmony" to restrict protest, press freedom, or political opposition, the actual harmony being protected is frequently the harmony of the powerful, not the welfare of all. Genuine harmony arises from justice and voice, not enforced silence.',
          evidence: [
            'Freedom House 2024: Singapore rated "Partly Free" — press freedom ranked 126/180 (RSF 2024); PAP\'s continuous governance since 1965 enabled by institutional design, not just performance',
            'Hong Kong: Beijing\'s National Security Law (2020) crushed protest movement citing "harmony" — but the harmony imposed through mass arrests reflects suppression, not genuine social cohesion',
            'Lee Kuan Yew vs JB Jeyaretnam (1972-2001): 20 years of defamation suits against the leading opposition politician — the costs of "disrupting harmony" fell almost entirely on the opposition',
            'Singapore\'s POFMA (Protection from Online Falsehoods and Manipulation Act, 2019): government can direct platforms to issue "correction notices" — critics argue it chills legitimate political speech',
          ],
          sg: 'Singapore ranked 70th on Social Progress Index 2023 (below many developing nations on civil liberties despite high GDP). Opposition MP Tan Cheng Bock\'s Progress Singapore Party formation (2019) suggests genuine demand for political plurality.',
          tip: 'Avoid the trap of treating this as "East vs West" — Singapore itself has internal debates about this tension. Use local voices, not just Western critics.',
        },
      ],
    },

    {
      id: 'T4',
      title: 'Social Media, Identity & Belonging',
      why: '2025 Prelim trend: social media + youth + loneliness/belonging. Expected to appear in main paper. Tests whether students can critique technology as a social force.',
      for: [
        {
          claim: 'Social media has fundamentally expanded human connection, self-expression, and community for marginalised groups',
          reasoning: 'For people whose identities, interests, or communities are not represented locally — LGBTQ+ youth in conservative societies, diaspora communities, people with rare conditions — social media provides genuine community that did not exist before.',
          evidence: [
            'Trevor Project (2022): LGBTQ+ youth who found supportive online communities had 40% lower suicide attempt rates than those without online connection',
            'Arab Spring (2010-2012): social media coordinated protest movements across Egypt, Tunisia, Libya — enabled collective action that authoritarian governments could not suppress through traditional media control',
            '#BlackLivesMatter: originated as a hashtag (2013), became the largest civil rights movement in US history — mobilised 26 million Americans across 2020 protests',
            'Rare disease communities: 7,000 rare diseases exist; offline communities are impossible for most; online communities enable patient knowledge sharing that improves treatment outcomes',
          ],
          sg: 'Singapore\'s online LGBTQ+ community (Pink Dot movement, founded 2009) built sufficient mainstream support to influence the 377A repeal — social media as political organising tool in a constrained media environment.',
          tip: 'Note the pattern: social media is most democratising for groups with least access to traditional media and political power. Its value is unequally distributed.',
        },
      ],
      against: [
        {
          claim: 'Social media algorithms systematically degrade social cohesion, mental health, and shared reality',
          reasoning: 'Optimising for engagement maximises outrage, anxiety, and tribalism — because these emotions drive more interaction than contentment. The result is a systematic distortion of social reality: filter bubbles, misinformation epidemics, and a generation of young people shaped by comparison and performance.',
          evidence: [
            'Frances Haugen / Facebook Papers (2021): internal research showed Instagram made "body image issues worse for one in three teen girls" — company suppressed findings',
            'MIT Media Lab study (2018): false news spreads 6x faster than true news on Twitter/X; emotional false stories spread 20x faster',
            'US Surgeon General Advisory (2023): social media use linked to poor mental health outcomes in adolescents; called for warning labels similar to tobacco packaging',
            'Jean Twenge\'s iGen research: screen time 5+ hours/day correlated with 66% higher likelihood of having a risk factor for suicide among teenage girls (US longitudinal data)',
          ],
          sg: 'Singapore\'s Online Safety Act (2022) and new powers for IMDA to direct platforms to remove harmful content reflect government acknowledgement that market forces will not self-correct. Youth mental health referrals at Singapore\'s Institute of Mental Health rose 30% from 2019 to 2022.',
          tip: 'The most sophisticated analysis distinguishes platform design (deliberately addictive by choice) from social media in principle — the problem is not connection, but algorithmic optimisation for engagement.',
        },
      ],
    },
  ],

  sgReferences: [
    { name: 'CMIO Racial Classification', what: 'Singapore\'s administrative racial categorisation system: Chinese, Malay, Indian, Others. Used in census, housing, education, political representation.', gpUse: 'Central to any question on race, multiculturalism, or identity in Singapore. Shows state management of racial categories.', critical: 'Critics argue CMIO freezes racial identities, disadvantages mixed-race individuals, and doesn\'t capture Singapore\'s growing South Asian and other diversity. Increasingly contested.' },
    { name: 'HDB Ethnic Integration Policy (EIP)', what: 'Each HDB block and neighbourhood has ethnic quotas — limits the proportion of any one ethnic group. Prevents ethnic enclaves.', gpUse: 'Best example of collective harmony constraining individual freedom (T3). Use to show how Singapore uses housing policy as social engineering.', critical: 'Constrains individual choice (can\'t sell to buyer of same ethnicity if quota is full). Some argue the policy sustains racial categories rather than transcending them.' },
    { name: 'Section 377A Repeal (2022)', what: 'November 2022: Singapore decriminalised consensual same-sex relations between men (Section 377A, a colonial-era law). Simultaneously, government amended Constitution to define marriage as between man and woman, blocking same-sex marriage.', gpUse: 'Use for T2 (tradition vs progress) — a partial but significant liberalisation. Shows Singapore\'s calculated, incremental approach to social change.', critical: 'Critics argue Constitutional protection of marriage definition pre-empts future reform. LGBTQ+ advocates see the 377A repeal as insufficient without right to marry or adopt.' },
    { name: 'Private Tuition Industry ($1.4B)', what: 'Singapore\'s private tuition market worth $1.4B (2022), one of world\'s largest per capita. Estimated 70-80% of primary school children attend tuition. Entire industry ($5B+ including enrichment) built around exam performance.', gpUse: 'Strongest evidence for T1 (meritocracy critique). Shows how financial resources convert to academic "merit".', critical: 'Government has tried to reduce exam stakes (PSLE changes, holistic assessments) but structural demand for tuition persists — suggests social anxiety runs deeper than exam design.' },
    { name: 'Forward Singapore (2022-2023)', what: 'National exercise led by DPM Lawrence Wong to redefine Singapore\'s social compact — economic growth, equity, sustainability, and collective identity. Produced Forward SG report 2023 recommending changes to education, work, and social support.', gpUse: 'Shows government-led deliberation on meritocracy reform and social values. Acknowledges existing system\'s shortcomings.', critical: 'Critics note the consultation was government-organised and curated — not bottom-up democratic deliberation. Recommendations are aspirational targets, not binding policy changes.' },
    { name: 'ComLink and Social Safety Net', what: 'ComLink (2019) is Singapore\'s integrated social support approach — case managers for vulnerable families provide holistic support across housing, employment, and education. Part of broader social safety net expansion.', gpUse: 'Use for T1 — shows meritocracy requires robust safety net to have legitimacy. Singapore government acknowledges floors of support are needed.', critical: 'Social support in Singapore is deliberately means-tested and conditional on "self-reliance" efforts — reflects ideology that welfare should not create dependency, which critics argue stigmatises poverty.' },
    { name: 'Ageing Population and Silver Support', what: 'Singapore has one of world\'s fastest-ageing populations — 1 in 4 Singaporeans will be aged 65+ by 2030. Silver Support Scheme (2016) provides quarterly cash payouts to lowest-income elderly CPF members.', gpUse: 'Use for economics-society cross-pillar questions on welfare state and intergenerational equity.', critical: 'CPF (Central Provident Fund) system requires lifelong contributions for retirement — those with interrupted careers (women who left work to care for family) receive systematically less support.' },
    { name: 'Education Streaming Reforms', what: 'Singapore abolished PSLE streaming (Express/Normal Academic/Normal Technical) in 2024, replaced with Full Subject-Based Banding. O-Level, N-Level streams merged into common curriculum with subject-level differentiation.', gpUse: 'Use as evidence Singapore recognises that binary streaming at 12 is developmentally harmful and reinforces inequality. Shows meritocracy being reformed, not replaced.', critical: 'Subject-based banding still creates de facto grouping. Elite schools remain elite. The pipeline from prestige schools to top universities remains largely unchanged.' },
    { name: 'Foreign Worker Policies and Dormitories', what: 'Singapore has 300,000+ migrant workers in construction and marine sectors, living in large dormitories. COVID-19 exposed vulnerability — 54,000 workers infected in 2020 outbreaks. Foreign Worker Dormitories Act (2015) sets minimum standards.', gpUse: 'Use for T1 (structural inequality) — migrant workers are excluded from Singapore\'s meritocracy entirely. Their labour enables Singapore\'s development but they receive few of its social benefits.', critical: 'Dormitory conditions, restrictions on movement and social life, and deportation vulnerability show the limits of Singapore\'s meritocracy — it applies selectively to citizens and PRs, not to those who do the dirtiest and most dangerous work.' },
    { name: 'Social Media and Online Safety Act (2022)', what: 'Requires major social media platforms to take down harmful online content (child sexual abuse material, self-harm, terrorism content) within 24 hours. IMDA has powers to direct platforms on Singapore-designated harmful content.', gpUse: 'Use for T4 — systemic government response to social media harms. Contrast with individual responsibility approach (just "be responsible online").', critical: 'Scope of "harmful" is defined by government, raising concerns about overreach. Platforms report compliance but critics argue targeted political speech could be caught in broad net.' },
    { name: 'Gini Coefficient and Income Inequality', what: 'Singapore\'s Gini coefficient (before taxes/transfers): 0.452 (2022) — one of the highest in developed Asia. After taxes and transfers: 0.378 — redistribution narrows but does not eliminate inequality. Income of top 10% is 6x bottom 10%.', gpUse: 'Most important statistic for T1. Essential to have this number. Shows that meritocracy coexists with significant income inequality.', critical: 'Comparison is difficult — Singapore\'s Gini includes high-income expats as "residents" which inflates inequality figures. But even adjusting for this, inequality is structurally high.' },
  ],

  intlReferences: [
    { name: 'Nordic Social Model (Sweden, Denmark, Norway)', facts: 'High taxation (40%+ of GDP), universal healthcare, free university, generous parental leave, strong unions. Combined with some of world\'s highest GDP per capita, innovation metrics, and social mobility. Gini coefficients among world\'s lowest (0.25-0.28).', gpUse: 'Strongest counterargument to "you can\'t have equality AND prosperity." Use for T1 — structured meritocracy requires active redistribution.' },
    { name: 'US Racial Wealth Gap', facts: 'Median white family wealth $188,200 vs median Black family wealth $24,100 (Federal Reserve, 2019) — 8:1 ratio. Persists despite 60 years since Civil Rights Act. Driven by housing discrimination (redlining), education funding inequalities, incarceration rates.', gpUse: 'Best international evidence for "structural inequality" argument (T1). Proves that formal legal equality does not eliminate historical structural disadvantage.' },
    { name: 'India\'s Caste System in Modern Economy', facts: 'Constitutional prohibition on caste discrimination since 1950. Reality: Scheduled Castes (Dalits) 15% of population but 3% of senior civil servants. Reservation system (affirmative action) for 50% of government jobs creates backlash and parallel inequality.', gpUse: 'Use for T1 — formal meritocracy operating atop deep structural hierarchy produces persistent inequality. Also use for T3 (individual rights vs collective redress).' },
    { name: 'UBI Experiments (Finland, Stockton, Kenya)', facts: 'Finland (2017-2018): 2,000 unemployed given €560/month unconditionally — improved wellbeing, marginal employment gains. Stockton CA (2019-2021): $500/month — full-time employment rose 28%, mental health improved. Kenya (GiveDirectly): long-running cash transfer shows asset accumulation, business formation.', gpUse: 'Use for economics-society cross-pillar. Challenges meritocratic argument that unconditional support creates dependency — evidence shows opposite.' },
    { name: '#MeToo Movement (2017)', facts: 'Hashtag by Tarana Burke, amplified by Harvey Weinstein allegations. Toppled 200+ high-profile men (Weinstein, Bill O\'Reilly, Kevin Spacey). Led to corporate policy changes, legal reforms, and cultural shift in workplace norms in 80+ countries.', gpUse: 'Use for T2 (tradition vs progress) — shows rapid norm change is possible when critical mass mobilises. Social media as the mechanism for collective action (T4).' },
    { name: 'South Korea Gender Equality Backlash', facts: 'South Korea has world\'s largest gender pay gap (31%) among OECD nations. Political backlash against feminism — Yoon Suk-yeol won presidency partly on anti-feminist platform. "4B movement" (women refusing marriage, dating, sex, children) as radical rejection of gender norms.', gpUse: 'Use for T2 — shows limits of top-down gender equality progress when underlying cultural attitudes lag behind policy. Also demonstrates generational tension (young Korean men vs women).' },
    { name: 'UK Class and Social Mobility Data', facts: 'UK Social Mobility Commission (2023): a person\'s socioeconomic background is the most powerful predictor of their life outcomes, more than any other characteristic. "Elite" occupations (law, medicine, finance) still dominated by privately educated (7% of population = 65% of top jobs).', gpUse: 'Use for T1 — even societies with strong meritocratic ideals show persistent class reproduction. The UK is a particularly clear case because of its visible class culture.' },
    { name: 'Japan\'s Ageing and Loneliness Crisis', facts: 'Lowest fertility rate among G7 (1.2). "Hikikomori" phenomenon (social withdrawal) affects 1.46 million. "Death alone" (kodowari) has become normal. Government created Ministry of Loneliness (2021). Marriage rate at post-war low.', gpUse: 'Use for T2 — modernisation and economic competition can destroy the social fabric that traditional family structures provided, without automatically replacing it.' },
    { name: 'Cancel Culture and Free Speech Debates', facts: 'High-profile cancellations (J.K. Rowling, professors, comedians) spark ongoing debate about whether social media pile-ons constitute censorship or legitimate social accountability. Free speech advocates (ACLU, Jonathan Rauch) vs social justice critics.', gpUse: 'Use for T3 (individual vs collective) and T4 (social media). The "cancel culture" debate forces students to grapple with whether social consequences for speech constitute a harm or a right.' },
    { name: 'French Laïcité and Muslim Headscarf Ban', facts: 'France bans conspicuous religious symbols in public schools (2004), in face-covering in public (2011). Affects primarily Muslim women wearing hijab or niqab. Framed as defence of secularism (collective principle) vs minority religious freedom.', gpUse: 'Use for T3 — a liberal democracy imposing collective norms over individual religious identity. Contrast with Singapore\'s more accommodating approach to religious expression in schools.' },
  ],

  crossPillarConnections: [
    { pillars: 'Economics × Society', tensions: 'Inequality, social mobility, welfare state vs meritocracy, gig economy and precarity', questions: 'Can an economy be both efficient and equitable? Who bears the cost of inequality?' },
    { pillars: 'Politics × Society', tensions: 'Representation, minority rights, democracy and majority tyranny, censorship of dissent', questions: 'Whose "harmony" is being protected when governments restrict free speech?' },
    { pillars: 'Arts & Humanities × Society', tensions: 'Cultural identity, representation, cancel culture, heritage vs contemporary values', questions: 'Does art reflect or shape social values? Who decides what culture is acceptable?' },
  ],

  practiceQuestions: [
    { q: '"Meritocracy creates as many problems as it solves." Discuss.', type: 'Discuss', difficulty: 'High', focus: 'T1 — core tension, requires balanced treatment' },
    { q: 'How far has social media done more harm than good to young people in your society?', type: 'How far', difficulty: 'Medium', focus: 'T4 + SG context mandatory' },
    { q: '"Preserving social harmony justifies limiting individual freedoms." To what extent do you agree?', type: 'To what extent', difficulty: 'High', focus: 'T3 — political philosophy dimension' },
    { q: 'Assess the view that social progress always comes at the expense of social cohesion.', type: 'Evaluate', difficulty: 'High', focus: 'T2 — tradition vs progress with nuanced treatment' },
    { q: '"Structural inequality, not individual failure, explains poverty." Examine this claim.', type: 'Examine', difficulty: 'Medium', focus: 'T1 — structural analysis required' },
    { q: 'To what extent is it possible for a society to achieve both diversity and unity?', type: 'To what extent', difficulty: 'High', focus: 'T3 + SG context — in your society framing likely' },
  ],
};
