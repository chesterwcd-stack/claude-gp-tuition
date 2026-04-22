// CP04: Economics
module.exports = {
  pillar: 'Economics',
  code: 'CP04',
  accent: 'D97706', // gold
  tagline: 'Markets, Money & the Meaning of Progress',
  snapshot: {
    examFrequency: 'High — often embedded in other pillars (environment, society). Pure economics questions appear 1-2 per paper.',
    sgExamples: 10,
    intlExamples: 10,
    crossPillarLinks: ['Environment', 'Society & Culture', 'Politics'],
    examAlert: 'Economics questions rarely ask about economics in isolation — they test values. "Should governments intervene?" is really a question about freedom vs equality. "Is GDP a good measure?" is about what we think progress means.',
  },

  bigPicture: {
    whyMatters: 'Every major GP theme — climate, inequality, technology, political stability — has an economic dimension. Students who understand basic economic logic (incentives, trade-offs, market failures, collective action problems) can apply it across all pillars. This is the cross-cutting pillar.',
    topMistake: 'Writing "the economy should grow while being fair and sustainable" — this says nothing. The essay must engage with what happens when these goals conflict: does growth take priority? Does equity? Who decides and who bears the cost?',
  },

  tensions: [
    {
      id: 'T1',
      title: 'Free Market vs Government Intervention',
      why: 'The foundational economics debate. Tests whether students can go beyond "markets are efficient" and "governments correct failures" to argue a position.',
      for: [
        {
          claim: 'Free markets, despite imperfections, allocate resources more efficiently than government planning and generate the prosperity that funds social goods',
          reasoning: 'Markets harness dispersed local knowledge through price signals that no central planner can replicate. Competition drives innovation, cost reduction, and quality improvements. The historical record of market economies vs planned economies is unambiguous.',
          evidence: [
            'IMF research: market economies generate 4-5x higher GDP per capita than comparable planned economies over 40-year periods (East vs West Germany, North vs South Korea)',
            'Singapore\'s Economic Development Board model: strategic state guidance combined with market mechanisms; GDP per capita from $428 (1965) to $65,000+ (2023) — the market-led transformation story',
            'China post-1978 reform: Deng Xiaoping\'s opening to markets lifted 800+ million out of poverty — the fastest poverty reduction in history',
            'Index of Economic Freedom (Heritage Foundation): top-10 free economies consistently have higher social mobility, life expectancy, and human development than bottom-10',
          ],
          sg: 'Singapore as test case: strategic openness to trade (175%+ trade/GDP ratio), low corporate tax (17%), no capital gains tax. Result: #2 globally in World Competitiveness Index (IMD 2023). State-owned companies (Temasek, GIC) operate on commercial principles, not political ones.',
          tip: 'Don\'t defend free markets as perfect — acknowledge market failures (externalities, information asymmetry, monopoly) and argue that these are correctable through targeted intervention rather than broad state planning.',
        },
      ],
      against: [
        {
          claim: 'Unregulated markets systematically produce inequality, environmental destruction, and systemic instability that require strong government intervention',
          reasoning: 'Markets cannot price externalities (pollution), provide public goods (national defence, basic research), correct information asymmetries (financial products), or address coordination failures. Left unchecked, they produce winner-take-all dynamics and periodic catastrophic collapses.',
          evidence: [
            '2008 Global Financial Crisis: $10 trillion wiped from US household wealth; caused by deregulated mortgage markets and complex financial instruments that spread risk without understanding it. Required $700B government bailout (TARP)',
            'US healthcare: most market-driven healthcare system in developed world; also most expensive ($12,318 per capita 2021) with worse outcomes on life expectancy, infant mortality than universal systems',
            'Platform monopolies: Amazon (38% US e-commerce), Google (92% global search), Meta (60%+ social media) — markets concentrated to point where competition has failed without antitrust intervention',
            'Oxfam (2023): 1% of global population owns more wealth than the bottom 95% combined — the wealth disparity enabled by unregulated capital accumulation',
          ],
          sg: 'Singapore\'s "government-guided capitalism": CPF mandated savings (no market alternative for retirement), HDB housing (80% of citizens in subsidised housing — market would have excluded this), Progressive Wage Model (government-mandated wage floors for specific sectors). Government actively prevents the worst market outcomes.',
          tip: 'The strongest argument distinguishes between "government intervention" (smart, targeted, evidence-based) and "government planning" (inefficient, politicised, slow). Argue for the former, not the latter.',
        },
      ],
    },

    {
      id: 'T2',
      title: 'Globalisation: Benefits vs Casualties',
      why: 'Trade, migration, supply chains, and cultural flows — globalisation is the dominant economic fact of the past 50 years. GP questions probe its winners and losers.',
      for: [
        {
          claim: 'Globalisation has produced the greatest reduction in poverty in human history and expanded human freedom and choice',
          reasoning: 'Trade enables specialisation and comparative advantage — everyone produces what they are relatively best at, and trade makes everyone richer. Capital mobility directs investment to highest-return opportunities. Integration of global knowledge accelerates innovation.',
          evidence: [
            'World Bank data: extreme poverty ($2.15/day) fell from 36% of world population (1990) to 9% (2019) — the biggest driver was trade-led growth in Asia (China, Vietnam, Bangladesh)',
            'Trade enables specialisation: Bangladesh garment sector employs 4 million workers (85% women); garments = 84% of exports; average income 3x rural alternative despite poor conditions',
            'Global supply chains: iPhone components from 43 countries — each nation contributes comparative advantage, creating value impossible in autarky',
            'Global talent flows: 281 million international migrants (3.6% of world population) collectively remit $794B/year — key income source for Philippines, Mexico, India, Egypt',
          ],
          sg: 'Singapore as extreme example: 5.9 million population with 175% trade/GDP ratio — the economy literally cannot exist without globalisation. Changi Airport as global hub (100+ airlines), Tanjong Pagar as top global port. National survival depends on global integration.',
          tip: 'Acknowledge that gains are real but unevenly distributed — the honest argument for globalisation includes supporting mechanisms (education, social safety nets) that share the gains more broadly.',
        },
      ],
      against: [
        {
          claim: 'Globalisation has displaced workers, hollowed out communities, and transferred power to corporations at the expense of democratic governance',
          reasoning: 'Trade liberalisation creates aggregate gains but concentrated losses — the factory worker in Detroit who loses their job to Chinese competition does not receive the consumer savings distributed across millions of households. Aggregate statistics conceal real human costs.',
          evidence: [
            '"China Shock" research (Autor, Dorn, Hanson 2016): US-China trade cost 2.4 million American manufacturing jobs 1999-2011 — concentrated in specific communities with persistent unemployment, opioid crisis, political radicalisation',
            'Banana republic critique: IMF structural adjustment programs (1980s-90s) imposed market liberalisation on developing nations — often destroyed domestic industries and worsened poverty in short run while serving creditor interests',
            'Tax competition: OECD estimated corporate tax avoidance costs governments $200-600B/year; multinationals use transfer pricing, shell companies, and tax havens enabled by capital mobility',
            'COVID-19 supply chain fragility: dependence on single-country manufacturing (China for PPE, Taiwan for semiconductors) created critical vulnerabilities during crisis — exposed cost of comparative advantage logic',
          ],
          sg: 'Singapore explicitly builds "critical supply" resilience — 30-by-30 food security goal, strategic petroleum reserves, semiconductor design capability. Acknowledges globalisation creates dependencies that require domestic strategic reserves.',
          tip: 'The debate isn\'t "globalisation vs autarky" — it\'s about rules, redistribution, and which globalisation we want. RCEP, CPTPP, and bilateral FTAs show globalisation can be governed.',
        },
      ],
    },

    {
      id: 'T3',
      title: 'Growth vs Equality and Wellbeing',
      why: 'Beyond GDP — what does a good economy actually look like? Tests whether students can challenge dominant economic assumptions.',
      for: [
        {
          claim: 'Economic growth remains the most powerful tool for improving human welfare and cannot be sacrificed for abstract equality goals',
          reasoning: 'Growth creates the fiscal resources for social programmes, healthcare, education, and environmental investment. Slower growth means fewer resources for everything governments want to do. History shows that economic development consistently improves health, education, and freedom outcomes.',
          evidence: [
            'Preston Curve: strong correlation between national income and life expectancy across 200 countries — richer countries live longer, universally',
            'South Korea transformation: GDP per capita $158 (1960) to $33,000+ (2023) — life expectancy grew from 53 to 83; literacy from 55% to 98%; infant mortality from 90 to 3 per 1,000',
            'Environmental Kuznets Curve: beyond certain income level, environmental quality improves with growth as societies can afford cleaner alternatives',
            'Singapore: 3.5% average annual growth 1960-2020 built public housing (HDB), universal healthcare (Medishield Life), and education system rated #1 globally (PISA 2022)',
          ],
          sg: 'Singapore\'s Budget surplus philosophy: accumulated reserves (Est. $1T+) give Singapore the fiscal space to manage crises (COVID-19: $100B+ support packages) and invest in long-term infrastructure. Growth enabled resilience.',
          tip: 'Acknowledge that growth is not sufficient — high-growth countries can still have high inequality. The argument is that growth is necessary but must be accompanied by distribution mechanisms.',
        },
      ],
      against: [
        {
          claim: 'GDP is a fundamentally flawed measure that drives harmful policies; genuine wellbeing requires moving beyond growth as the primary objective',
          reasoning: 'GDP counts cigarettes sold, car crashes, and environmental destruction as positive. It ignores unpaid care work (mostly done by women), leisure time, social trust, and subjective wellbeing. Optimising for GDP produces economies that are rich in measurable output and poor in things that actually matter.',
          evidence: [
            'Bhutan\'s Gross National Happiness Index (1971): measures psychological wellbeing, health, time use, ecological diversity, cultural resilience, good governance — used alongside GDP in policy',
            'New Zealand Wellbeing Budget (2019): first OECD nation to structure entire national budget around wellbeing indicators, not GDP growth — prioritised mental health, child poverty, indigenous rights',
            'Easterlin Paradox: beyond a threshold (~$75,000/year), income gains produce no increase in happiness. US real income tripled 1950-2000; self-reported happiness flat since 1970s',
            'Unpaid care work: valued at $10.8 trillion globally (ILO) — the economy runs on unpaid (predominantly female) labour that GDP ignores entirely',
          ],
          sg: 'Singapore\'s development success is real but the costs are visible: 2nd most expensive city in the world (Economist 2023); housing unaffordability worsening; high mental health rates (1 in 7 Singaporeans, IMH survey); long working hours (average 44.8hr/week vs OECD avg 36.5). GDP masks these costs.',
          tip: 'The argument isn\'t "growth is bad" — it\'s "growth is necessary but insufficient, and measuring only GDP causes us to optimise for the wrong things."',
        },
      ],
    },

    {
      id: 'T4',
      title: 'Future of Work — Gig Economy, Automation, Lifelong Learning',
      why: 'Expected to grow in importance in 2026-2027 papers. Prelim trends show "employment" and "technology and work" questions. Connects to CP01 (tech) and CP03 (social welfare).',
      for: [
        {
          claim: 'Technological change and the gig economy create new freedoms, flexibilities, and opportunities that previous generations lacked',
          reasoning: 'Remote work, platform employment, and digital tools allow workers to build portfolio careers, choose when and where they work, and access global labour markets from anywhere. For skilled workers, this is a genuine expansion of autonomy.',
          evidence: [
            'McKinsey Global Institute (2022): 20-30% of working-age population in US/EU engaged in independent work; 70% report higher satisfaction with platform work vs traditional employment',
            'Upwork Global Freelancer Survey (2022): 60% of freelancers who left traditional employment say no amount of money would bring them back',
            'AI tools (GitHub Copilot, ChatGPT): programmer productivity gains 55% (GitHub study, 2023) — technology augmenting human capability rather than replacing it',
            'Singapore SkillsFuture: credits for lifelong learning used by 660,000+ Singaporeans (2023); recognition that skills obsolescence is manageable with investment in human capital',
          ],
          sg: 'Singapore\'s "Digital Economy Agreement" with Australia, Chile, and UK creates frameworks for cross-border digital work. MyInfo, SingPass reduce friction for freelancers accessing government services.',
          tip: 'Distinguish between high-skill freelancers (genuine autonomy) and low-skill gig workers (precarity without choice). The same economy looks very different from these two positions.',
        },
      ],
      against: [
        {
          claim: 'Automation and the gig economy systematically strip workers of protections, benefits, and security — creating a two-tier labour market',
          reasoning: 'Platform companies like Uber, Deliveroo, and Grab deliberately classify workers as "independent contractors" to avoid paying employment taxes, benefits, and providing job security. This is not new freedom — it is old exploitation with a digital interface.',
          evidence: [
            'Oxford Martin School (Frey & Osborne 2013): 47% of US jobs at high risk of automation within 20 years. Updated 2019 estimate: 14% at high risk but 32% at significant risk of task disruption',
            'UK Gig Economy report (CIPD 2021): 4.4 million gig workers in UK; 59% earn below minimum wage on an hourly basis after costs; 77% have no sick pay; 61% no pension',
            'Amazon warehouse workers: turnover rate 150%+ annually; musculoskeletal injury rates double industry average; algorithmic management tracks productivity to the second',
            'IMF (2017): automation-driven inequality explains 40% of the increase in the capital income share since 1980 — workers\' share of GDP declining across OECD',
          ],
          sg: 'Singapore\'s gig workers (delivery riders, taxi drivers) lack CPF contributions, medical benefits, and employment protections. Platform Workers Bill (2024) — Singapore\'s first legislation extending some protections to platform workers — acknowledges the gap.',
          tip: 'The gig economy question is really a question of regulatory choice: Uber could pay employment taxes if required to. The current arrangement is a political choice, not an economic inevitability.',
        },
      ],
    },
  ],

  sgReferences: [
    { name: 'CPF (Central Provident Fund)', what: 'Mandatory savings scheme: employees contribute 20%, employers 17% of wages to individual accounts for retirement, housing, and healthcare. 4 million members. Unique globally — not a pension but individual savings with state-guaranteed floor returns.', gpUse: 'Core example for any question on social safety net, government paternalism vs individual freedom, or welfare state design.', critical: 'CPF adequacy gap: 50%+ of members may not have sufficient savings for retirement, especially those with career gaps or low wages. Women particularly disadvantaged due to caregiving interruptions.' },
    { name: 'Workfare Income Supplement', what: 'Wage supplement for low-income workers — government tops up wages of those earning <$3,000/month. Paid partly in cash, partly as CPF contributions. Over 400,000 recipients (2022).', gpUse: 'Singapore\'s answer to welfare vs work debate: supplement wages rather than provide unconditional benefits. Maintains work incentive while reducing poverty.', critical: 'Effective subsidy to employers who can pay low wages knowing government will supplement them. Critics argue raises needed, not wage supplements.' },
    { name: 'Progressive Wage Model (PWM)', what: 'Government-mandated minimum wages for specific sectors (cleaning, security, landscape) linked to skills upgrading — workers get higher wages only if they upgrade skills. Expanded to more sectors from 2022.', gpUse: 'Use as evidence Singapore is moving beyond pure market wage-setting. Shows government acknowledging market undervalues essential low-wage work.', critical: 'PWM excluded most low-wage sectors until recently. Singapore still resists universal minimum wage, unlike most OECD peers. Progress but coverage remains partial.' },
    { name: 'Changi Airport and Tanjong Pagar Port', what: 'Changi (world\'s best airport 12 of past 15 years, Skytrax) handles 60M passengers. PSA (Port of Singapore Authority) handles 37.5M TEU — top 2 globally. Both are strategic economic infrastructure and nationally owned.', gpUse: 'Use as evidence of state-managed infrastructure enabling market economy. Singapore\'s openness to trade requires world-class connectivity — cannot be left to market alone.', critical: 'Port expansion (Tuas Mega Port, completion 2040) requires massive state investment. Question of whether government-owned strategic infrastructure is replicable in different political systems.' },
    { name: 'Temasek and GIC (Sovereign Wealth Funds)', what: 'Temasek Holdings ($287B AUM, 2023) owns stakes in Singapore Airlines, DBS, ST Engineering and global investments. GIC ($770B estimated AUM) manages Singapore\'s foreign reserves. Together hold ~$1T+.', gpUse: 'Singapore\'s state-owned market actors. Show how state capitalism operates alongside free markets. Temasek is commercially mandated — not politically directed.', critical: 'Lack of transparency (GIC does not publish holdings). Questions about whether state ownership distorts competition — Singapore Airlines benefits from government backing that private airlines cannot match.' },
    { name: 'Budget Surplus Philosophy and Reserves', what: 'Singapore\'s Constitution requires balanced or surplus budgets over each term of government. Reserves accumulated over decades (estimated $900B-$1T+). Rule: government can spend investment returns but not draw on principal without President\'s approval.', gpUse: 'Use for fiscal responsibility vs welfare state debate. Singapore\'s reserves gave it exceptional COVID-19 response capacity ($100B+ in Budgets 2020-2021).', critical: 'Conservative fiscal approach means some social needs go underfunded. Healthcare costs rising sharply; Singapore shifting from Medishield to Medishield Life but affordability remains a concern.' },
    { name: 'MAS and Financial Centre Role', what: 'Monetary Authority of Singapore (MAS) regulates $4T+ in assets under management (2022). Singapore is world\'s 3rd largest foreign exchange trading centre, 2nd largest in Asia. Attracts hedge funds, family offices, private banks.', gpUse: 'Use for globalisation questions — Singapore as node in global capital flows. Also for T1 (market regulation) — MAS is praised for smart regulation that attracts capital while managing systemic risk.', critical: 'Financial centre success creates inequality (finance sector wages dwarf other sectors) and raises cost of living. Also exposed Singapore to reputational risks (1MDB scandal, money laundering cases in 2023).' },
    { name: 'Singapore\'s Free Trade Agreements (FTAs)', what: 'Singapore has 27 FTAs covering 100+ countries. US-Singapore FTA, EU-Singapore FTA, CPTPP (Comprehensive and Progressive Agreement for Trans-Pacific Partnership), RCEP. FTAs cover goods, services, investment, intellectual property.', gpUse: 'Most comprehensive example of trade liberalisation and globalisation governance. Singapore\'s FTA network is its strategic hedge against protectionism.', critical: 'FTAs benefit export-oriented sectors disproportionately. Service sector workers, domestic-oriented SMEs, and low-wage workers in exposed industries face competitive pressure without equivalent protection.' },
    { name: 'Housing Affordability and BTO', what: 'HDB Build-to-Order (BTO): subsidised housing scheme. 80% of citizens live in HDB flats. New BTO flats priced to be "affordable" at 5x annual household income target. Resale market has surged ($1M+ HDB flats now common). Government responds with cooling measures.', gpUse: 'Use for T3 (wellbeing vs growth) — housing costs are the #1 financial concern for young Singaporeans despite subsidies. Also for T1 — massive government intervention in housing market is a defining feature of Singapore\'s economy.', critical: 'Rising HDB resale prices benefit existing flat owners but price out new entrants. The BTO wait time is now 3-5 years — a significant hardship for young families. "Asset enhancement" policy (HDB as investment) created conflict with "affordable housing" goal.' },
    { name: 'SkillsFuture Programme', what: 'National lifelong learning initiative. Every Singaporean aged 25+ receives SkillsFuture Credit ($500 initial, plus top-ups). 2,000+ subsidised courses. "Skills passport" tracks certifications. Target: 300,000 people in structured skills upgrading annually.', gpUse: 'Use for T4 (future of work) — Singapore\'s response to automation and skills displacement. Also for individual vs systemic responsibility: government funding individual skills development.', critical: 'Credit uptake concentrated among degree-holders — those most at risk from automation (lower-wage, lower-skill workers) least likely to use SkillsFuture. Design may need restructuring to reach most vulnerable.' },
    { name: 'Rising Income Inequality (Gini pre-redistribution)', what: 'Gini coefficient before taxes/transfers: 0.452 (2022) — one of highest in developed Asia. After: 0.378. Income share of top 10%: 36% of total income. Wealth inequality higher still — top 10% hold 57% of wealth.', gpUse: 'Essential statistic for T1 and T3. Shows that even successful market economies produce significant inequality requiring active redistribution to manage.', critical: 'Singapore\'s Gini has been gradually declining (0.478 in 2007 to 0.452 in 2022) as progressive taxation and transfers expanded. Progress, but from a high base.' },
  ],

  intlReferences: [
    { name: '2008 Global Financial Crisis', facts: '$10T in US household wealth destroyed. Lehman Brothers ($639B in assets) collapsed. US government $700B TARP bailout. 8.7M US jobs lost. Caused by deregulated mortgage-backed securities spreading systemic risk no one understood.', gpUse: 'Definitive evidence for government intervention argument (T1). Market failure at civilisation-threatening scale, requiring government rescue.' },
    { name: 'China\'s Economic Transformation', facts: 'GDP per capita $155 (1978) to $13,700 (2023). World\'s 2nd largest economy. Lifted 800M from poverty — 70% of global poverty reduction. Command economy elements alongside market mechanisms (SOEs, 5-year plans, capital controls).', gpUse: 'Use for T1 — mixed economy argument. Also for globalisation (T2) — China\'s integration into global trade was the defining economic event of early 21st century.' },
    { name: 'Amazon / Walmart Labour Practices', facts: 'Amazon: 1.5M employees (2nd largest US employer). Warehouse injury rates double industry average. $15/hr minimum wage (2018) followed union campaigns. Deliveroo riders average £8.55/hr before costs. UK Supreme Court ruled Uber drivers are "workers" (2021).', gpUse: 'Use for T4 (gig economy/labour) — shows that platform economy "flexibility" conceals precarity and that labour regulations require continuous updating.' },
    { name: 'Nordic Welfare State (Sweden, Denmark)', facts: 'Tax-to-GDP ratio 42-46%. Universal healthcare, free university, 480 days paid parental leave (Sweden). Gini 0.27-0.28. GDP per capita $55,000-70,000. Ranked #1-5 globally for happiness (WHR 2024), social mobility, and education outcomes.', gpUse: 'Use for T1 (government intervention can produce superior outcomes) and T3 (wellbeing beyond GDP). The most comprehensive refutation of "you must choose between freedom and equality".' },
    { name: 'Greece Debt Crisis (2010-2018)', facts: 'Greek debt reached 180% of GDP. IMF/EU bailout required austerity: 25% cut in government spending, pension cuts, mass privatisations. GDP fell 25%, unemployment hit 28%. Called "the greatest depression of a peacetime country since WWII".', gpUse: 'Use for T1 — limits of market correction and austerity as policy. Also for globalisation — Greece had no ability to devalue currency (Eurozone), showing limits of economic integration.' },
    { name: 'Grameen Bank and Microfinance', facts: 'Founded Muhammad Yunus (Nobel Peace Prize, 2006) in Bangladesh. Lends small amounts ($50-500) to poor rural women without collateral. 9.5M borrowers in Bangladesh. Repayment rate 97%. Sparked global microfinance industry.', gpUse: 'Use for T2 (globalisation) — shows development finance can serve the poor, not just the wealthy. Also for T1 — market mechanism can serve social goals with right institutional design.' },
    { name: 'BRICS Expansion and Dollar Hegemony Challenge', facts: 'BRICS (Brazil, Russia, India, China, South Africa) expanded to 10 members in 2024. Combined 40%+ of global GDP (PPP). Developing alternative payment systems to dollar. Shanghai Cooperation Organisation growing.', gpUse: 'Use for T2 (globalisation) — the global trading order is being contested. Also for geopolitics-economics cross-pillar: China challenging US-led Bretton Woods institutions.' },
    { name: 'IMF Structural Adjustment Programs', facts: 'IMF conditions loans on fiscal austerity, market liberalisation, privatisation. Applied across sub-Saharan Africa, Latin America, SE Asia (post-1997 crisis). Critics document health spending cuts, education cuts, public job losses in already-vulnerable nations.', gpUse: 'Use for T2 (globalisation casualties) and T1 (market liberalisation imposed costs on developing nations). "Washington Consensus" became a term of critique from inside the IMF itself.' },
    { name: 'China-US Trade War (2018-present)', facts: 'Trump tariffs on $360B Chinese goods (2018); China retaliated. Biden maintained most tariffs, added chip export controls (2022-2023). US CHIPS Act ($52B) for domestic semiconductor production. Supply chain "friend-shoring" and "de-risking" strategies.', gpUse: 'Use for T2 — shows globalisation is politically fragile; supply chain efficiency can conflict with national security. Also for CP05 (politics) — economic interdependence does not prevent geopolitical rivalry.' },
    { name: 'WEF Future of Jobs Report (2023)', facts: 'Estimates 14 million net job displacement by 2027 (26 million lost, 12 million created). Fastest-growing roles: AI/machine learning specialists, sustainability specialists, data analysts. Fastest-declining: bank tellers, data entry clerks, administrative roles.', gpUse: 'Use for T4 (future of work) — quantifies the scale of disruption. Also highlights which skills are future-proof (creativity, critical thinking) — connects directly to why GP matters.' },
    { name: 'Cryptocurrency Regulation Debates', facts: 'FTX collapse (2022): $32B evaporated, Sam Bankman-Fried convicted. Bitcoin mining uses 127 TWh/year (comparable to Argentina). El Salvador adopted Bitcoin as legal tender (2021). EU\'s MiCA regulation (2024) — first comprehensive crypto framework.', gpUse: 'Use for T1 (market vs regulation) — dramatic demonstration of what happens when financial innovation outruns regulation. Also for tech-economics cross-pillar.' },
  ],

  crossPillarConnections: [
    { pillars: 'Economics × Environment', tensions: 'Green growth, carbon pricing, stranded assets, who pays for the transition', questions: '2025 Q1 was exactly this. Always expect economics-environment fusions.' },
    { pillars: 'Economics × Society', tensions: 'Inequality, welfare state, meritocracy, gig workers, housing affordability', questions: 'Can markets produce a fair society? Who bears the cost of economic transformation?' },
    { pillars: 'Economics × Politics', tensions: 'State capitalism, trade wars, sovereign wealth, democratic vs technocratic management of economies', questions: 'Can democracies make economically rational long-term decisions?' },
  ],

  practiceQuestions: [
    { q: '"Free markets do more harm than good." Discuss.', type: 'Discuss', difficulty: 'High', focus: 'T1 — requires engagement with both efficient markets and market failures' },
    { q: 'To what extent has globalisation benefited ordinary people more than it has harmed them?', type: 'To what extent', difficulty: 'Medium', focus: 'T2 — requires distinction between aggregate and distributional effects' },
    { q: '"GDP is a poor guide to national wellbeing." How far do you agree?', type: 'How far', difficulty: 'Medium', focus: 'T3 — measurement and values question' },
    { q: 'Assess the view that technological change always creates more jobs than it destroys.', type: 'Evaluate', difficulty: 'High', focus: 'T4 — historical vs forward-looking analysis' },
    { q: '"The state should only intervene in the economy as a last resort." Examine this claim.', type: 'Examine', difficulty: 'High', focus: 'T1 — requires theory and case study evidence' },
    { q: 'How far can economic inequality be justified in a meritocratic society?', type: 'How far', difficulty: 'High', focus: 'T3+CP03 crossover — economics-society fusion' },
  ],
};
