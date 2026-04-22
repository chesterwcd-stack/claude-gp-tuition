// CP02: Environment — Full content data
module.exports = {
  pillar: 'Environment',
  code: 'CP02',
  accent: '16A34A', // green
  tagline: 'Green Planet, Grey Choices',
  snapshot: {
    examFrequency: 'Very High — appears every 1-2 years. 2025 Q1 AND Q6 were environment/related.',
    sgExamples: 10,
    intlExamples: 10,
    crossPillarLinks: ['Economics', 'Politics', 'Society & Culture', 'Science & Technology'],
    examAlert: 'Multi-disciplinary framing is the norm — expect environment + economics, or environment + politics (developed vs developing). Never write about environment in isolation.',
  },

  bigPicture: {
    whyMatters: 'Climate change is the defining challenge of this generation — it touches every other pillar (economics, politics, society, tech). GP examiners use environment questions to test whether students can handle genuinely complex trade-offs with no easy answers.',
    topMistake: 'Treating environment questions as simple "pollution bad, nature good" discussions. The real debate is ALWAYS about competing priorities — growth vs sustainability, individual vs collective responsibility, rich vs poor nations. Students who miss this write shallow essays.',
  },

  tensions: [
    {
      id: 'T1',
      title: 'Economic Growth vs Environmental Sustainability',
      why: 'The foundational tension. 2025 Paper 1 Q1 was directly on this. Examiners want to see if you can handle the genuine trade-off — not a naive "we can have both".',
      for: [
        {
          claim: 'Environmental protection is itself an economic necessity, not an obstacle to growth',
          reasoning: 'The economy depends on functioning ecosystems — clean water, arable land, stable climate, raw materials. Destroying these "natural capital" stocks eliminates the very foundations of long-run growth. Inaction on climate is orders of magnitude more expensive than prevention.',
          evidence: [
            'Stern Review on Climate Change (2006): unmitigated climate change costs 5–20% of global GDP permanently; prevention costs only 1–2% of GDP annually',
            'World Bank (2023): $44 trillion in global GDP — over half — is moderately or highly dependent on nature and its services',
            'The Netherlands: $3B invested in flood defences protects $400B of economic value in low-lying regions — 133:1 return on investment',
            'Costa Rica\'s PES (Payments for Ecosystem Services) scheme: forest coverage recovered from 21% (1987) to 58% (2022) while GDP grew at 4%+ annually — proving decoupling is achievable',
          ],
          sg: 'Singapore\'s $100B coastal protection plan is explicitly framed as economic investment — protecting Jurong Island (oil refinery, petrochemical hub) and Marina Bay (CBD) from sea-level rise. The question is not environment vs economy but short-term cost vs long-term economic survival.',
          tip: 'Use the "natural capital" framing to reframe the trade-off — sustainability is investment in the stock of productive assets, not a consumption choice.',
        },
        {
          claim: 'The transition to a green economy creates more economic opportunity than it destroys',
          reasoning: 'The clean energy transition is the largest industrial transformation since the Industrial Revolution. First movers capture massive economic benefits — new industries, export markets, and jobs. Clinging to fossil fuel industries means becoming an economic laggard.',
          evidence: [
            'IEA (2023): global clean energy investment hit $1.7 trillion — exceeding fossil fuel investment for the first time',
            'Denmark: wind energy sector employs 33,000 people; Ørsted was the world\'s most sustainable company (2020) with market cap exceeding $50B',
            'US Inflation Reduction Act (2022): $369B clean energy investment triggered $300B+ in private sector clean energy manufacturing pledges within 18 months',
            'IRENA: renewable energy sector now employs 13.7 million globally (2022), up from 7.3 million in 2012',
          ],
          sg: 'Singapore\'s Green Plan 2030 explicitly frames green transition as economic positioning — "Enterprise Sustainability Programme", green finance hub ambitions, and attracting green tech companies. Budget 2026 committed $5B to new Energy Transition Fund.',
          tip: 'Pivot from "cost" to "competitiveness" — the essay should show you understand that laggards in green transition face stranded assets and economic marginalisation.',
        },
      ],
      against: [
        {
          claim: 'Aggressive environmental constraints impose prohibitive costs that derail development, especially in poorer nations',
          reasoning: 'Environmental standards raise production costs, reduce industrial competitiveness, and can cause capital flight. For developing nations still building basic infrastructure, these costs can be catastrophic — forcing impossible choices between poverty alleviation and sustainability.',
          evidence: [
            'India\'s dilemma: 240 million citizens still lack reliable electricity; phasing out coal too quickly risks energy poverty with no affordable alternatives at scale',
            'Germany\'s Energiewende (energy transition): electricity prices among Europe\'s highest (€0.31/kWh vs EU avg €0.24); 2022-23 energy crisis forced re-opening of coal plants',
            'Carbon leakage problem: when one country raises environmental standards, production shifts to lower-standard jurisdictions, achieving no net environmental gain while harming the first country\'s economy',
            'IMF study (2022): aggressive carbon pricing without compensation reduces welfare for the bottom income quintile by up to 3x more than wealthier groups',
          ],
          sg: 'Singapore\'s carbon tax trajectory ($25 to $45/tonne by 2026, $50-80 by 2030) raises costs for energy-intensive industries like Jurong Island petrochemicals. Government has had to provide extensive transition support to affected industries.',
          tip: 'Distinguish between advanced economies (can afford the transition) and developing nations (face genuine dilemmas). Avoid the fallacy of assuming all countries have equal capacity.',
        },
        {
          claim: 'Technological innovation, not economic constraint, is the real solution — growth funds the technology we need',
          reasoning: 'Historical precedent shows that economic growth generates the wealth, R&D capacity, and political stability needed for environmental solutions. Imposing limits on growth before technology matures is premature and counterproductive.',
          evidence: [
            'Environmental Kuznets Curve theory: as nations grow richer, environmental quality first worsens then improves — supported by data on air/water quality in OECD nations',
            'China\'s trajectory: world\'s largest carbon emitter AND world\'s largest installer of solar, wind, and EV infrastructure — using growth wealth to fund the transition',
            'Nuclear fusion: ITER project in France (35 nations, $20B investment) could only happen through advanced industrial economies; requires sustained high-income R&D investment',
            'GDP-environment decoupling in UK: GDP doubled 1990-2019 while territorial emissions fell 44%; proves growth and emissions reductions can coexist with right policy mix',
          ],
          sg: 'Singapore\'s NEWater technology — turning wastewater into drinking water — required decades of sustained R&D investment made possible by economic growth. Singapore now exports this technology. Growth enabled the solution.',
          tip: 'This is a strong argument BUT needs a rebuttal: technology does not arrive on schedule, and the climate crisis has deadlines. Use to enrich your essay, not as a complete counter.',
        },
      ],
    },

    {
      id: 'T2',
      title: 'Individual Responsibility vs Systemic/Government Action',
      why: 'A classic GP question type — where does the burden of change lie? Tests whether students can move beyond personal guilt narratives to structural analysis.',
      for: [
        {
          claim: 'Only systemic government and corporate action can achieve the scale of change required',
          reasoning: 'The carbon footprint of individuals is dwarfed by industrial and energy sector emissions. Structural problems require structural solutions — individual consumer choices, however virtuous, cannot decarbonise an economy built on fossil fuels.',
          evidence: [
            '100 companies responsible for 71% of global emissions since 1988 (CDP/Climate Accountability Institute) — including ExxonMobil, Shell, BP',
            'The "carbon footprint" concept was popularised by BP\'s 2004 advertising campaign — deliberately shifting responsibility from corporations to individuals',
            'UK\'s ban on new petrol/diesel cars from 2035: structural policy change that alters consumer options, rather than relying on individuals to voluntarily choose EVs',
            'EU ETS (Emissions Trading Scheme): market mechanism covering 40% of EU emissions — achieves more in one policy than decades of individual awareness campaigns',
          ],
          sg: 'Singapore\'s carbon tax and mandatory energy efficiency requirements (under the Energy Efficiency Fund) demonstrate systemic approaches. The govt\'s Zero Waste Masterplan sets national targets and infrastructure investments — Extended Producer Responsibility (EPR) for packaging waste makes corporations responsible.',
          tip: 'The "BP PR campaign" point is a genuine A-grade observation — it exposes how the individual responsibility narrative was strategically constructed by polluters to deflect accountability.',
        },
      ],
      against: [
        {
          claim: 'Individual choices create market signals and cultural shifts that drive systemic change',
          reasoning: 'Consumer demand shapes what companies produce and what governments legislate. Mass behaviour change is not merely additive — it creates tipping points that transform markets and norms.',
          evidence: [
            'Plant-based food market grew from $4.9B (2018) to $8B (2022) — consumer demand drove massive corporate investment and shelf space allocation',
            'Fridays for Future movement (Greta Thunberg, 2018): mobilised 4 million+ protesters across 161 countries in September 2019 — political pressure led to net-zero pledges from 130+ nations',
            'Ozone layer recovery: Montreal Protocol (1987) succeeded partly because consumer rejection of CFC products created business incentive to develop alternatives',
            'Electric vehicle adoption: individual early adopters created demand that brought EV prices down 89% (2010-2023), making mass adoption possible',
          ],
          sg: 'Singapore\'s "Say Yes to Waste Less" campaign and Bring Your Own Bag initiatives have shifted behavioural norms. Hawker centre recycling rate still low — highlighting the limits of voluntary individual action without systemic reinforcement.',
          tip: 'Best answer integrates both: individual action is necessary but insufficient. The interplay — citizens creating political pressure, governments creating structural incentives, businesses responding to market signals — is the complete picture.',
        },
      ],
    },

    {
      id: 'T3',
      title: 'Developed vs Developing Nation Obligations',
      why: '2025 Paper 1 Q6. Classic justice and fairness dimension. Tests moral reasoning beyond "everyone should do their part".',
      for: [
        {
          claim: 'Wealthy nations bear the primary moral and financial obligation to address climate change they historically caused',
          reasoning: 'The principle of "common but differentiated responsibilities" in international law reflects the historical reality: industrialised nations built their wealth by emitting carbon for 200 years, while developing nations bear the brunt of climate impacts they did not cause.',
          evidence: [
            'Cumulative emissions 1850-2021: US responsible for 25%, EU 22%, of total historical CO2 — together nearly half of all historical emissions',
            'IPCC AR6 (2022): climate impacts most severe in Sub-Saharan Africa, South/SE Asia — regions with lowest historical emissions and lowest adaptive capacity',
            'Loss and Damage fund: COP28 (Dubai, 2023) agreed $700M fund for developing nations — but climate economists estimate $400B/year needed (UN estimate)',
            'Climate Finance Pledge: wealthy nations pledged $100B/year by 2020 under Paris Agreement; the pledge was not fully met until 2022 and much was counted as loans, not grants',
          ],
          sg: 'Singapore, as a high-income, historically-heavy-emitter on a per-capita basis, contributed $1B to Green Climate Fund and co-chairs the ASEAN Taxonomy for Sustainable Finance — acknowledgement of responsibility.',
          tip: 'The "historical responsibility" argument is strengthened by combining it with "adaptive capacity" — wealthy nations not only caused more damage but have more resources to fix it.',
        },
      ],
      against: [
        {
          claim: 'Present and future emissions from developing nations are the decisive variable — they cannot be exempted from action',
          reasoning: 'Climate change is a forward-looking problem. Historical responsibility is morally relevant but practically insufficient — if major developing economies (China, India, Indonesia) continue on high-emission trajectories, historical Western action is irrelevant to outcomes.',
          evidence: [
            'China: world\'s largest current emitter (30% of global emissions 2023) — overtook US in 2006; historical argument does not resolve current emission trajectory',
            'India: on track to be world\'s third-largest economy; coal still provides 70% of electricity; without India\'s energy transition, 1.5°C target is mathematically impossible',
            'Indonesia: deforestation of peatlands is among the world\'s highest per-capita carbon releases; peatland fires in 2015 emitted more CO2 than Germany\'s entire annual emissions',
            'Bangladesh paradox: among world\'s lowest per-capita emitters, yet among the most climate-vulnerable — but its rapidly growing garment sector increasingly drives emissions',
          ],
          sg: 'Singapore\'s view through ASEAN diplomacy: all major emitters must act, with differentiated support. The ASEAN Power Grid proposal aims to share renewable energy across 10 nations — regional collective action rather than bilateral blame.',
          tip: 'Best essays avoid the false binary of "blame developed vs exempt developing." Argue for differentiated obligations with adequate financing — rich nations fund and support developing nations\' transitions.',
        },
      ],
    },

    {
      id: 'T4',
      title: 'Conservation vs Development',
      why: 'Land use, urbanisation, biodiversity loss — tests the tension between human development needs and ecological preservation.',
      for: [
        {
          claim: 'Biodiversity loss and habitat destruction pose existential threats that justify strong conservation constraints on development',
          reasoning: 'Ecosystems provide services worth more than all human economic output. Once destroyed, complex ecosystems cannot be reconstructed on any human timescale. The precautionary principle demands we protect what we cannot replace.',
          evidence: [
            'IPBES (2019): 1 million species face extinction, more than any other period in human history; current extinction rate 100-1,000x the natural background rate',
            'Amazon deforestation: 17% of Amazon deforested since 1970; "tipping point" at 20-25% could trigger irreversible dieback, converting rainforest to savannah',
            'Coral reef bleaching: Great Barrier Reef experienced mass bleaching events in 2016, 2017, 2020, 2022 — threatening fishing industries, coastal protection, and tourism worth $6.4B annually to Australia',
            'Ecosystem services valuation: pollinators alone contribute $577B to global food production annually; wetlands filter water worth trillions in avoided water treatment costs',
          ],
          sg: 'Singapore\'s Green Corridor and Central Catchment Nature Reserve — "City in a Garden" vision preserves 56% of land as parks, nature areas, and water catchment. Toa Payoh and Bishan parks integrate biodiversity into urban planning.',
          tip: 'Use the "ecosystem services" valuation argument — it reframes conservation as economically rational, not just ethically desirable.',
        },
      ],
      against: [
        {
          claim: 'Development is a human right — conservation cannot be imposed on communities that depend on natural resources for survival',
          reasoning: 'Conservation policies in developing nations have historically dispossessed indigenous and rural communities, criminalised traditional livelihoods, and privileged the aesthetic preferences of wealthy urban environmentalists over the survival needs of the poor.',
          evidence: [
            'Fortress conservation critique: colonial-era national parks in Africa displaced millions of indigenous communities; the Maasai in Tanzania and Kenya evicted from ancestral lands',
            'Congo Basin forest communities: 60 million people depend directly on forest for food, medicine, and livelihoods — Western conservation mandates without compensation are unjust',
            'China\'s Three Gorges Dam: displaced 1.3 million people but provides 18.2 GW of clean energy — complex trade-off between displacement and decarbonisation',
            'Brazil under Bolsonaro: framed Amazon protection as "environmental colonialism" blocking Brazil\'s development rights — reflects genuine sentiment in developing nations',
          ],
          sg: 'Singapore\'s history of massive land reclamation (30% of current land area is reclaimed) and clearing of original forest for development shows development priorities took precedence historically. Now repositioning as a green city.',
          tip: 'Best essays use the "just transition" framing — conservation IS possible but requires compensating affected communities, not imposing costs on the poorest.',
        },
      ],
    },
  ],

  sgReferences: [
    {
      name: 'Singapore Green Plan 2030',
      what: 'Whole-of-nation sustainability roadmap launched 2021. Five pillars: City in Nature, Sustainable Living, Energy Reset, Green Economy, Resilient Future. Sets targets like 2/3 of schools as Eco Stewardship, 20% green buildings, net-zero by 2050.',
      gpUse: 'Use to show government-led comprehensive action. Cover across tensions T1 (economic positioning) and T2 (systemic vs individual action).',
      critical: 'Critics note Singapore is still one of Asia\'s highest per-capita emitters and relies heavily on imported fossil fuels. Ambitions require massive behavioural and infrastructure change not yet evident at ground level.',
    },
    {
      name: 'Carbon Tax Trajectory',
      what: 'Singapore\'s carbon tax, introduced 2019 at $5/tonne, raised to $25 in 2024, $45 by 2026, targeting $50-80/tonne by 2030. Covers 80% of total emissions. Revenue used for Green Investment Programme.',
      gpUse: 'Use as evidence of pricing carbon as a systemic policy tool. Shows willingness to impose costs on industry for environmental goals.',
      critical: 'Current $25/tonne is far below the $135/tonne economists estimate is needed to achieve Paris targets. Jurong Island petrochemical complex receives extensive transition subsidies, raising questions about who bears the cost.',
    },
    {
      name: 'NEWater and 4-Tap Strategy',
      what: 'Singapore\'s four water sources: local catchment, imported (Malaysia), NEWater (ultra-pure recycled wastewater), and desalination. NEWater meets 40% of demand; desalination 30%. Strategy driven by strategic vulnerability after 1965 separation.',
      gpUse: 'Strongest Singapore environment example — shows tech-led sustainability success. Proves environmental necessity drove innovation, not constrained it. Used globally as model for water-scarce nations.',
      critical: 'Desalination is energy-intensive ($0.49-$0.78/m³ vs $0.14-$0.23 for conventional treatment). As Singapore scales up, electricity demand for water security grows — circular problem if electricity comes from gas.',
    },
    {
      name: '$100 Billion Coastal Protection Plan',
      what: 'Long-term investment announced 2019 to protect Singapore\'s coastline from sea-level rise, projected at 1m+ by 2100. Covers reclamation, seawalls, mangrove restoration. Single largest infrastructure commitment in Singapore\'s history.',
      gpUse: 'Demonstrates the ECONOMIC cost of climate inaction — Singapore is paying the price of global emissions it largely didn\'t cause. Powerful for T3 (developed vs developing obligations).',
      critical: 'Singapore\'s vulnerability is partly self-created — its land reclamation has displaced mangroves that provided natural coastal protection. The "solution" addresses a problem partly of its own making.',
    },
    {
      name: '30-by-30 Food Security Goal',
      what: 'Singapore\'s goal to produce 30% of nutritional needs locally by 2030 (up from <1% currently). Focuses on high-tech vertical farming, aquaculture, and alternative proteins. SFA (Singapore Food Agency) coordinates.',
      gpUse: 'Use for technology-environment connection (CP01×CP02 cross-pillar). Also shows food security as environmental issue — global supply chain vulnerability exposed by COVID-19 and Ukraine war.',
      critical: 'Vertical farming is extremely energy-intensive. Himawari Greentech (collapsed 2022) showed the business model difficulties. 30% target by 2030 may be aspirational rather than achievable.',
    },
    {
      name: 'Zero Waste Masterplan and Semakau Landfill',
      what: 'Singapore\'s only landfill (Semakau, on an offshore island) projected to be full by 2035. Zero Waste Masterplan (2019) aims to reduce waste sent to landfill by 30% by 2030. Extended Producer Responsibility for packaging waste introduced 2021.',
      gpUse: 'Demonstrates hard physical constraints on linear economy model. Perfect for essays on individual vs systemic action (EPR shifts responsibility to producers) and economic growth vs sustainability.',
      critical: 'Singapore\'s overall recycling rate remains low (~13% domestic, 2022). "Contaminated" recyclables often end up incinerated. High-efficiency incineration (Tuas South) generates energy but critics argue it disincentivises waste reduction.',
    },
    {
      name: 'Tuas Nexus',
      what: 'World\'s first integrated waste-water treatment facility combining water reclamation and solid waste management. Located on Jurong Island. Energy self-sufficient — waste produces energy to treat water. Completed 2025.',
      gpUse: 'Showcase example of circular economy principles in practice. Best example of systems thinking applied to sustainability.',
      critical: 'Represents enormous capital cost — only feasible for wealthy cities. Cannot be replicated in lower-income contexts without massive international financing.',
    },
    {
      name: 'Solar Deployment on HDB Rooftops',
      what: 'Singapore target: 2 GWp solar deployment by 2030, mainly on HDB (public housing) rooftops, industrial buildings, and reservoirs. HDB-Sunseap "SolarNova" programme aggregates demand across 55,000+ units.',
      gpUse: 'Use to show systemic infrastructure investment enabling individual green behaviour. Also demonstrates constraint: Singapore has no hydropower, geothermal, or wind — solar is the only realistic domestic renewable.',
      critical: 'Solar meets a small fraction of Singapore\'s total energy needs (land-scarce, no major renewable alternatives). Singapore is critically dependent on natural gas (96% of electricity currently) and future hydrogen imports.',
    },
    {
      name: 'Electric Vehicle Roadmap',
      what: 'Singapore\'s plan to phase out all internal combustion engine (ICE) vehicles by 2040. EV charging target: 60,000 charging points by 2030. Road Tax rebates and EV Early Adoption Incentive (EEAI) to drive uptake.',
      gpUse: 'Use for individual-systemic interaction: policy incentives + infrastructure investment enabling consumer behaviour change.',
      critical: 'If EVs run on natural gas-generated electricity (as most Singapore electricity currently is), the carbon benefit is marginal. The real test is decarbonising the electricity grid.',
    },
    {
      name: 'BCA Green Mark Scheme',
      what: 'Building and Construction Authority\'s rating system for green buildings. Target: 80% of buildings to be green-certified by 2030. Super Low Energy (SLE) building standard introduced for public sector.',
      gpUse: 'Demonstrates systemic regulation of built environment. Shows that private sector responds to mandatory standards, not just market signals.',
      critical: 'Green certification doesn\'t equal low carbon in absolute terms — a highly efficient building in a hot, humid city may still use more energy than an uninsulated house in a cold country.',
    },
  ],

  intlReferences: [
    {
      name: 'Paris Agreement (2015)',
      facts: 'International treaty committing 196 parties to limit global warming to 1.5–2°C above pre-industrial levels. Countries submit Nationally Determined Contributions (NDCs). No enforcement mechanism — voluntary compliance.',
      gpUse: 'Use as backdrop for T3 (developed vs developing obligations) and T1 (systemic action). The voluntary nature is both its strength (universal participation) and weakness (insufficient ambition — current NDCs put Earth on track for 2.7°C).',
    },
    {
      name: 'EU Green Deal (2019)',
      facts: 'Europe\'s roadmap to climate neutrality by 2050. Includes Fit for 55 package (55% emissions cut by 2030), Carbon Border Adjustment Mechanism (CBAM), hydrogen strategy, biodiversity strategy. Total investment: €1 trillion.',
      gpUse: 'Strongest example of systemic government-led green transformation. Carbon Border Adjustment Mechanism is a landmark — charges importers from non-carbon-priced jurisdictions, addressing carbon leakage.',
    },
    {
      name: 'Denmark — Wind Energy Pioneer',
      facts: 'Wind supplies 55%+ of Denmark\'s electricity. Ørsted (formerly DONG Energy) transformed from oil company to world\'s largest offshore wind developer. Denmark exports 50%+ of global wind turbine components via Vestas.',
      gpUse: 'Best example of T1 (green economy creates opportunity, not just costs). Denmark proves first-mover advantage in clean energy translates to economic dominance.',
    },
    {
      name: 'Costa Rica — Near-100% Renewable Grid',
      facts: 'Costa Rica generates 98-99% of electricity from renewables (hydro, geothermal, wind, solar). GDP per capita tripled 1990–2020 while forest coverage doubled from 21% to 58%. PES (Payments for Ecosystem Services) scheme paid landowners to protect forests.',
      gpUse: 'Most powerful counter to the growth-vs-environment trade-off argument. Small, developing nation achieved both simultaneously. Weaknesses: small population, unique geography (volcanic geothermal, high rainfall for hydro).',
    },
    {
      name: 'China — Paradox of the World\'s Largest Emitter',
      facts: '30% of global CO2 emissions (2023). Also: world\'s largest installer of solar (560 GW), wind (400 GW), and EV manufacturer (60%+ of global EV market). Pledged carbon neutrality by 2060. Still building coal plants domestically while investing in clean energy.',
      gpUse: 'Perfect T1 example of complexity — China simultaneously represents the problem (current emissions) and the solution (scale of clean energy deployment). Avoids the lazy "China is the villain" framing.',
    },
    {
      name: 'Greta Thunberg and Fridays for Future',
      facts: 'Swedish activist who began solo school strike in 2018, aged 15. Mobilised 4+ million in September 2019 global strike across 161 countries. Named TIME Person of the Year 2019. Now focuses on system change critique.',
      gpUse: 'Use for T2 (individual vs systemic action) — Thunberg herself shifted from personal action to arguing for system change. Her 2019 UN speech ("How dare you!") targeted world leaders, not consumers.',
    },
    {
      name: 'Amazon Deforestation',
      facts: 'Amazon lost 17% of original forest area. Deforestation surged under Bolsonaro (2019-2022); declined sharply under Lula from 2023. Brazil holds 60% of Amazon — sovereign territory but global commons.',
      gpUse: 'T4 (conservation vs development) and T3 (developing nation obligations). Brazil argues it should be compensated for not developing its Amazon — "REDD+ payments" principle.',
    },
    {
      name: 'Great Pacific Garbage Patch',
      facts: 'Accumulation of 80,000 tonnes of plastic debris in North Pacific gyre, covering area twice the size of Texas. 80% from land-based sources. Ocean Cleanup Project (Boyan Slat) attempting extraction, removed 268 tonnes by 2023.',
      gpUse: 'Use for T2 (systemic vs individual) — demonstrates that individual plastic bag bans are insufficient for a systemic plastic overproduction problem. Extended Producer Responsibility is the systemic answer.',
    },
    {
      name: 'COP Negotiations — The Broken Promise Pattern',
      facts: '$100B/year climate finance pledge (Copenhagen 2009) not met until 2022 — and much counted as loans, not grants. COP27 (Sharm el-Sheikh, 2022) created Loss & Damage fund. COP28 (Dubai, 2023): $700M pledged vs $400B/year needed.',
      gpUse: 'Use for T3 — the gap between pledges and delivery is the central critique of the international climate finance system. Shows governance failure in collective action problems.',
    },
    {
      name: 'Rwanda — Most Effective Plastic Bag Ban in Africa',
      facts: 'Rwanda banned non-biodegradable plastic bags in 2008. Enforcement strict — bags confiscated at airports, fines for businesses. One of Africa\'s cleanest cities. 95%+ compliance achieved. GDP grew 7%+ annually despite ban.',
      gpUse: 'Best example for T2 (individual vs systemic) — proves that strong government enforcement can drive behaviour change even in a low-income country. Counters argument that environmental regulations are unaffordable for poor nations.',
    },
  ],

  crossPillarConnections: [
    { pillars: 'Economics × Environment', tensions: 'Green growth paradox, carbon markets, stranded assets, green jobs vs fossil fuel workers', questions: '2025 Q1 was exactly this fusion — be ready for it' },
    { pillars: 'Politics × Environment', tensions: 'Climate governance, COP effectiveness, sovereignty vs global commons, developed vs developing nation obligations', questions: 'Democratic political cycles vs long-term climate commitments' },
    { pillars: 'Science & Technology × Environment', tensions: 'Geoengineering risks, nuclear energy debate, carbon capture, precision agriculture vs conventional farming', questions: 'Can technology alone save us? What are the risks of tech-first approaches?' },
    { pillars: 'Society & Culture × Environment', tensions: 'Environmental justice, indigenous rights and conservation, consumption culture and lifestyle change', questions: 'Who bears the burden of environmental change?' },
  ],

  practiceQuestions: [
    { q: '"Economic growth and environmental sustainability are fundamentally incompatible." Discuss.', type: 'Discuss', difficulty: 'High', focus: 'T1 — requires nuanced handling of both sides' },
    { q: '"Individuals, not governments, are the key to solving environmental problems." How far do you agree?', type: 'How far', difficulty: 'Medium', focus: 'T2 — direct tension question' },
    { q: 'Assess the view that wealthier countries have a greater responsibility to address climate change than developing nations.', type: 'Evaluate', difficulty: 'High', focus: 'T3 — moral philosophy + practical reality' },
    { q: '"Conservation of nature is a luxury only rich countries can afford." Examine this claim.', type: 'Examine', difficulty: 'Medium', focus: 'T4 + T3 crossover' },
    { q: 'To what extent can technological innovation alone address today\'s environmental challenges?', type: 'To what extent', difficulty: 'High', focus: 'CP01×CP02 cross-pillar' },
    { q: '"The real obstacle to environmental progress is political, not economic." How far do you agree?', type: 'How far', difficulty: 'High', focus: 'CP02×CP05 cross-pillar — advanced question' },
  ],
};
