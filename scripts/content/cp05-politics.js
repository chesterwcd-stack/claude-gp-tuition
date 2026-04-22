// CP05: Politics
module.exports = {
  pillar: 'Politics',
  code: 'CP05',
  accent: '2563EB', // blue
  tagline: 'Power, Governance & the Art of the Possible',
  snapshot: {
    examFrequency: 'High — democracy, censorship, security vs rights appear every 1-2 years. 2025 Q5 (democracy as perfect government) is the classic form.',
    sgExamples: 10,
    intlExamples: 10,
    crossPillarLinks: ['Society & Culture', 'Economics', 'Science & Technology'],
    examAlert: '"Democracy" questions are almost always qualified — not "is democracy good?" but "is democracy the best system?" or "does democracy produce the right outcomes?" Always interrogate what "best" means and for whom.',
  },

  bigPicture: {
    whyMatters: 'Politics shapes every other pillar — who makes decisions about the environment, the economy, social norms? GP examiners use politics questions to test whether students can reason about power, not just describe governments. The best essays show understanding of institutional design, not just ideology.',
    topMistake: 'Treating "democracy = good, authoritarianism = bad" as the thesis. This is a starting assumption, not an argument. The A-grade position engages with why some authoritarian states have produced better outcomes on specific metrics, and why democracy sometimes fails its citizens — before concluding why democratic values ultimately matter more.',
  },

  tensions: [
    {
      id: 'T1',
      title: 'Democracy vs Authoritarianism',
      why: '2025 Q5 asked directly about this. Classic question type that recurs. Tests political philosophy beyond naive democratism.',
      for: [
        {
          claim: 'Democratic governance, despite its inefficiencies, produces more legitimate, accountable, and ultimately effective governance than authoritarian alternatives',
          reasoning: 'Democracy\'s core virtue is not efficiency but accountability — the ability of citizens to remove bad governments, force policy correction, and protect minority rights. These features produce better long-term outcomes because bad policies get corrected before causing irreversible damage.',
          evidence: [
            'Amartya Sen\'s observation: no substantial famine has ever occurred in a functioning democracy — democratic accountability forces governments to respond to food crises before they become catastrophic',
            'V-Dem Institute (2023): democracies average 2.5x higher economic growth over 30-year periods than autocracies, once controlling for initial conditions',
            'Taiwan: democratic transition (1996) produced innovation economy (world\'s most advanced semiconductor manufacture, TSMC), free press, and rule of law — all enablers of economic success',
            'Botswana: Africa\'s longest continuous democracy; GDP grew from one of world\'s poorest to middle income; diamond wealth managed without the "resource curse" that afflicted authoritarian neighbours',
          ],
          sg: 'Singapore\'s PAP governance: effective delivery on economic growth, housing, education. But PAP wins elections (often 60-70% of votes) — not just because of performance but because institutional design (GRC system, defamation laws, media regulation) advantages the incumbent. Democratic legitimacy requires genuine contestation.',
          tip: 'Distinguish between democracy as a VALUE (accountability, rights, legitimacy) and democracy as a PROCEDURE (elections). The strongest argument focuses on values, not just electoral mechanics.',
        },
      ],
      against: [
        {
          claim: 'Democratic systems can be captured, distorted, or paralysed in ways that produce catastrophically bad outcomes for citizens',
          reasoning: 'Majoritarianism can produce tyranny of the majority over minorities. Short electoral cycles produce short-termism on long-term problems (climate, pension reform). Populism can win elections by stoking division rather than solving problems. Democracy\'s virtues are conditional on quality institutions.',
          evidence: [
            'Weimar Republic: democratic election brought Hitler to power (33% of vote, 1933) — democracy can vote itself out of existence',
            'US democratic dysfunction: Senate filibuster requires 60 votes for most legislation; polarisation means Congress averages fewer laws per term than at any point since 1940s; infrastructure bill took years',
            'India: world\'s largest democracy but ranked 161/180 on press freedom (RSF 2023) under Modi; Hindu nationalist majoritarianism eroding minority protections',
            'Philippines: Rodrigo Duterte won 39% in 2016 on anti-drug platform; extrajudicial killings 7,000-30,000 people — democratically elected authoritarian',
          ],
          sg: 'Singapore\'s argument: rapid economic development from third-world to first in one generation required political stability that democratic uncertainty would have disrupted. Lee Kuan Yew\'s "Asian Values" thesis — not rejection of democracy but argument that different historical stages require different governance models.',
          tip: 'This is the strong counterargument — do NOT use it to conclude authoritarianism is better. Use it to show democracy must be actively maintained with strong institutions, independent judiciary, free press, and civic culture.',
        },
      ],
    },

    {
      id: 'T2',
      title: 'National Security vs Individual Rights',
      why: 'Post-9/11, post-COVID permanent tension. ISA, surveillance states, emergency powers — GP examiners test whether students can handle the trade-off.',
      for: [
        {
          claim: 'Governments have a legitimate obligation to restrict individual rights when necessary to protect collective security',
          reasoning: 'Rights are not absolute — they exist within social contracts that require security as a precondition. A society that cannot protect its members from mass violence, terrorism, or pandemic has failed at its most basic purpose. The question is not whether security restrictions are ever justified but whether they are proportionate.',
          evidence: [
            'Singapore\'s Internal Security Act (ISA): allows detention without trial for up to 2 years (renewable). Used against suspected terrorists and in early years against political opponents. The 2001 JI (Jemaah Islamiyah) detentions (36 suspects) disrupted planned bombings without formal trial',
            'UK\'s GCHQ PRISM programme (Snowden revelations, 2013): mass surveillance of communications — government argued it prevented 7 terrorist attacks. Courts found some aspects disproportionate but ruled bulk collection lawful under specific safeguards',
            'COVID-19 contact tracing: South Korea, Taiwan, Singapore used phone location data to trace contacts — enabled 10-20x faster contact tracing than manual methods; suppressed transmission without full lockdown',
            'US PATRIOT Act (2001): bulk phone metadata collection authorised; NSA argued it mapped terrorist networks. Renewed by Congress 5 times — suggesting democratic accountability maintained some oversight',
          ],
          sg: 'Singapore\'s SafeEntry (digital contact tracing) collected location data from 3 million users during COVID-19. Government promised data would not be used for non-COVID purposes, then admitted in Parliament it could be used for criminal investigations. Trust eroded.',
          tip: 'The strongest argument is NOT "security is more important than rights" — it is "specific, proportionate, legally overseen security measures can be justified when the threat is genuine and imminent." The keywords are proportionate and overseen.',
        },
      ],
      against: [
        {
          claim: 'Security powers, once granted, are systematically expanded and rarely reversed — the erosion of rights is permanent while security benefits are temporary',
          reasoning: 'History shows that emergency powers become permanent, surveillance systems built for one purpose are used for another, and governments facing no judicial check will expand their authority. The appropriate response to security threats is not to dismantle rights but to enforce them through legitimate processes.',
          evidence: [
            'Edward Snowden (2013): revealed NSA\'s PRISM programme collected data on 300 million Americans and 200+ foreign leaders including allied heads of state — far beyond any terrorism-related necessity',
            'PATRIOT Act "mission creep": originally anti-terrorism; used in 1.6 million drug investigations, 180,000 immigration cases, fraud, theft — virtually nothing to do with terrorism',
            'China\'s Xinjiang surveillance state: 1 million+ Uyghurs detained, "social credit" scoring system, facial recognition in public spaces — national security framing to suppress ethnic and religious minority',
            'Singapore TraceTogether data (2021 Parliament revelation): TraceTogether data, initially promised to be COVID-only, confirmed usable in criminal investigations — immediately eroded public trust and reduced app usage',
          ],
          sg: 'Singapore\'s ISA use history: 1963 "Operation Cold Store" detained 100+ political opponents, including founding members of Barisan Sosialis — a significant democratic rival to PAP. The line between security threat and political threat is not always drawn by impartial judges.',
          tip: 'The argument isn\'t "no security measures" — it is "institutional design matters": judicial review, sunset clauses, independent oversight, narrow scope, democratic accountability. These are the guardrails that make security measures legitimate.',
        },
      ],
    },

    {
      id: 'T3',
      title: 'Diplomacy vs Force in International Relations',
      why: 'Russia-Ukraine, Taiwan Strait, Israel-Palestine — international conflict is constantly in the news. Tests whether students understand realism vs idealism in foreign policy.',
      for: [
        {
          claim: 'Diplomacy, multilateral institutions, and international law provide the only sustainable framework for managing conflict in an interdependent world',
          reasoning: 'Military force can impose short-term outcomes but cannot create the consent and legitimacy required for stable peace. Wars create grievances, refugees, and instability that outlast the original conflict. Diplomatic solutions — however imperfect — produce more durable outcomes.',
          evidence: [
            'Post-WWII multilateral order: UN Security Council, NATO, WTO, IMF reduced interstate war deaths by 90% compared to 1900-1945 (Our World in Data) — imperfect but transformatively peaceful vs prior century',
            'Iran Nuclear Deal (JCPOA, 2015): diplomacy halted Iran\'s nuclear programme without military action; US withdrawal (2018) and Iran\'s subsequent enrichment shows cost of abandoning diplomacy',
            'Northern Ireland Good Friday Agreement (1998): 3,600 deaths in 30 years of The Troubles; diplomacy (requiring compromise by all sides) ended conflict that military force had failed to resolve',
            'ASEAN Way: Southeast Asia\'s preference for consultation, non-interference, and consensus has maintained regional stability despite territorial disputes (South China Sea) among nuclear-adjacent powers',
          ],
          sg: 'Singapore\'s foreign policy doctrine: "small state realism." Consistent advocacy for rules-based international order (UN Charter, UNCLOS) because Singapore as a small state is most vulnerable if might makes right. SG sent military observers to Ukraine — signal of principled support for sovereignty norms.',
          tip: 'Distinguish between diplomacy as naive idealism (all conflicts can be talked out) vs diplomacy as strategic realism (wars are expensive, unpredictable, and counterproductive — even realists prefer diplomacy).',
        },
      ],
      against: [
        {
          claim: 'In an anarchic international system, military deterrence and willingness to use force are prerequisites for peace — diplomacy only works when backed by credible power',
          reasoning: 'International law has no enforcement mechanism; diplomacy with an aggressive power that believes it can win by force is appeasement, not resolution. The most durable peace settlements — Germany post-WWII, Japan post-WWII — were achieved through overwhelming force, then sustained diplomacy.',
          evidence: [
            'Ukraine-Russia: NATO expansion concerns, Minsk Agreements diplomatic efforts; Russia invaded anyway in February 2022. The diplomatic failures suggest some actors cannot be deterred through dialogue alone',
            'NATO Article 5 collective defence: 75 years without a direct attack on a NATO member — credible military deterrence prevented the very wars it prepared for',
            'Libya (2011): UN-authorised force toppled Gaddafi; led to failed state and civil war — shows military intervention without political plan produces chaos',
            'Munich Agreement (1938): UK/France ceded Sudetenland to Hitler to avoid war — emboldened rather than deterred. "Appeasement" as a historical lesson in limits of diplomacy with expansionist aggressors',
          ],
          sg: 'Singapore\'s Total Defence strategy: despite diplomatic emphasis, Singapore maintains one of world\'s highest defence spending ratios (3%+ of GDP). National Service is mandatory. Singapore buys F-35s, submarines, and advanced weapons — credible deterrence underpins regional stability.',
          tip: 'Most sophisticated answer: diplomacy and force are complements, not alternatives. Force credibility makes diplomacy work (nobody negotiates with the powerless); diplomacy makes force unnecessary in most cases.',
        },
      ],
    },

    {
      id: 'T4',
      title: 'Censorship vs Free Expression',
      why: 'Direct question in 2025 Prelim trends. Singapore\'s unique media environment makes this highly relevant for "in your society" framing.',
      for: [
        {
          claim: 'Some restrictions on expression are necessary and legitimate to protect social harmony, prevent harm, and maintain democratic discourse',
          reasoning: 'Absolute free expression is a fantasy — all societies restrict some speech (fraud, perjury, defamation, incitement to violence). The question is not whether to restrict but which restrictions are justified. Restricting hate speech, disinformation, and incitement to violence is a legitimate exercise of democratic authority.',
          evidence: [
            '130+ democracies ban hate speech — Germany\'s strict Holocaust denial and Nazi propaganda laws have demonstrably suppressed far-right extremism compared to US equivalents',
            'Disinformation and democracy: MIT study (2018) shows false news spreads 6x faster than true news on social platforms; Facebook algorithm linked to Rohingya genocide through amplification of anti-Muslim incitement',
            'Singapore\'s POFMA: since 2019, issued 54 correction directions (as of 2023) — mostly targeting false claims about government policy, COVID-19, and elections. Used against opposition politicians AND foreign interference',
            'Taiwan\'s "infodemic" response: government "fast-check" rebuttal system and social media monitoring countered Chinese disinformation campaigns in 2020 elections — without censoring political speech',
          ],
          sg: 'Singapore\'s Sedition Act, Broadcasting Act, and POFMA create layered restriction framework. During COVID-19, false claims about vaccines and hospital capacity spread rapidly — POFMA correction notices reduced measurable spread of specific false claims.',
          tip: 'The argument for restrictions must always include constraints on the restrictions: who decides what is false/harmful? Independent judiciary? Parliamentary oversight? Government alone? The institutional design determines whether restriction is legitimate or abusive.',
        },
      ],
      against: [
        {
          claim: 'Censorship is more dangerous than the speech it restricts — governments systematically use speech controls to entrench power rather than protect citizens',
          reasoning: 'Free expression is the foundation of all other rights — it enables democratic accountability, journalism that exposes corruption, and the free development of knowledge and culture. When governments control speech, they protect themselves from accountability as much as citizens from harm.',
          evidence: [
            'RSF Press Freedom Index (2024): Singapore 126/180. International journalists denied access; local media (CNA, SPH, Channel 8) majority state-owned or regulated; self-censorship widely reported among Singapore journalists',
            'China\'s Great Firewall: blocking Google, Facebook, Twitter, Wikipedia — not to prevent harm but to prevent citizens accessing information embarrassing to the Party (Tiananmen, Xinjiang, COVID origins)',
            'Brazil\'s X/Twitter ban (2024): Supreme Court banned X over Elon Musk\'s refusal to remove accounts — government-ordered platform censorship with broad political implications',
            'POFMA misuse concerns: Applied to opposition politician Brad Bateman\'s Facebook post about PAP election expenditure (2019); Professor Paul Tambyah (Singapore Democratic Party) — critics argue POFMA targeted political opponents, not just false information',
          ],
          sg: 'Singapore\'s defamation law history: LKY and PAP sued opposition politicians and foreign journalists for defamation across 4+ decades — J.B. Jeyaretnam, Chee Soon Juan, Far Eastern Economic Review. Courts consistently ruled for PAP. Critics argue defamation law functioned as political suppression.',
          tip: 'The anti-censorship argument is strongest when focused on government self-interest — not that all speech is harmless, but that government-controlled censorship systematically protects power more than citizens.',
        },
      ],
    },
  ],

  sgReferences: [
    { name: 'PAP Governance Model', what: 'People\'s Action Party has governed Singapore continuously since 1959. 2020 election: PAP won 83/93 seats with 61.2% of vote. Fourth generation leadership (PM Lawrence Wong from 2024). Technocratic, meritocratic recruitment — ministers drawn from civil service, military, professions.', gpUse: 'Essential for any politics question. Represents the "developmental state" model: strong, capable government delivering outcomes without full liberal democracy. Use to discuss democracy-authoritarianism spectrum.', critical: 'Institutional design advantages incumbency: GRC system (multi-member constituencies), defamation laws, PAP-linked media. Whether PAP\'s dominance reflects genuine popular support or structural advantage is contested.' },
    { name: 'GRC System and Minority Representation', what: 'Group Representation Constituencies (GRCs) require at least one minority (Malay/Indian/Other) candidate in team of 4-6 MPs. Ensures minority representation in Parliament without minority constituencies.', gpUse: 'Use for T1 (democracy — institutional design) and CP03 (CMIO, collective harmony vs individual choice). Shows how minority representation can be engineered rather than emerging organically.', critical: 'GRCs make it harder for opposition to field candidates (must have strong minority candidates); some argue this advantages PAP more than it protects minorities. Elected presidency similarly requires minority reservation in some cycles.' },
    { name: 'POFMA (Protection from Online Falsehoods and Manipulation Act, 2019)', what: 'Allows ministers to direct platforms to post "correction notices" alongside content deemed false and "contrary to public interest." Does not remove the content, but adds government counter-statement. Criminal penalties for non-compliance.', gpUse: 'Use for T4 (censorship vs expression) — Singapore\'s primary speech regulation mechanism. Also T2 (security — protecting information environment).', critical: 'Ministers, not independent judiciary, decide what is false and contrary to public interest. As of 2023, 100%+ of uses were by PAP ministers. Opposition politicians and journalists disproportionately targeted.' },
    { name: 'Internal Security Act (ISA)', what: 'Allows detention without trial for renewable 2-year periods on grounds of national security. Used in 1963 (Operation Cold Store, political opponents), 1987 (Operation Spectrum, alleged Marxist conspiracy), and 2001+ (JI terrorism suspects).', gpUse: 'Central to T2 (security vs rights). Singapore\'s most controversial legislation — operates outside normal legal process.', critical: 'No judicial review of detention decision; evidence not disclosed to detainee or counsel. 1987 detainees (lawyers, social workers, church workers) later maintained they were tortured and never convicted of any offence. Human rights organisations consistently flag ISA.' },
    { name: 'Singapore\'s Foreign Policy: "Small State Realism"', what: 'Singapore punches above weight through: (1) consistent advocacy for rules-based order (UNCLOS, UN Charter), (2) strategic non-alignment while maintaining US alliance and China engagement, (3) ASEAN centrality, (4) global forums (WTO, IMF, Commonwealth). PM Lee Hsien Loong recognised globally as senior statesman.', gpUse: 'Use for T3 (diplomacy vs force). Also shows how small states maximise influence through multilateralism — directly relevant to Singapore\'s unique position.', critical: 'Singapore\'s pragmatic foreign policy means it rarely takes moral stands that offend major powers. Abstained on UN resolution condemning Russia\'s invasion of Ukraine (though later voted in favour of humanitarian resolution). Balance between principle and commercial interest.' },
    { name: 'ASEAN and Regional Diplomacy', what: '10-member organisation (Singapore, Malaysia, Indonesia, Thailand, Philippines, Vietnam, Myanmar, Cambodia, Laos, Brunei). "ASEAN Way": consensus, non-interference, dialogue. Founded 1967. Manages South China Sea disputes, Myanmar crisis, and economic integration (AEC).', gpUse: 'Use for T3 (diplomacy) — ASEAN\'s diplomatic successes and failures. Myanmar coup (2021) and ASEAN\'s "Five-Point Consensus" that achieved little shows limits of consensus diplomacy with authoritarian member.', critical: 'Non-interference principle means ASEAN cannot effectively respond to member state atrocities (Myanmar Rohingya genocide, 2017; Myanmar coup, 2021). Consensus requirement gives any member veto — Cambodia blocked ASEAN South China Sea statement in 2012 under Chinese pressure.' },
    { name: 'Singapore-China-US Balancing Act', what: 'Singapore maintains strong US security relationship (access agreements for US Navy and Air Force) while having close economic ties with China (China is Singapore\'s largest trading partner). LKY described as "the West\'s favourite interpreter of China." PM Lawrence Wong has navigated US chip restrictions while maintaining Chinese investment.', gpUse: 'Use for T3 (diplomacy) — Singapore as case study in small state hedging between great powers. Shows how trade interdependence and security alliances can coexist without choosing sides.', critical: 'Increasingly difficult to maintain neutrality as US-China rivalry intensifies. Chip restrictions, tariffs, and Taiwan tensions force harder choices. Singapore\'s 2023 money laundering scandal (involving Chinese nationals) raised questions about how far Singapore can profit from China ties without enabling corruption.' },
    { name: 'Elected Presidency and Constitutional Design', what: 'Singapore\'s President is elected (since 1993) with power to veto draw on past reserves and key civil service appointments. But Presidential Elections Act has been amended to reserve Presidential elections for specific minority groups (2017 — reserved for Malay candidates, resulting in Halimah Yacob\'s uncontested election).', gpUse: 'Use for T1 (democratic legitimacy) — Singapore\'s novel constitutional design blends democratic elements with institutional safeguards. Reserved election controversy raised genuine questions about democratic legitimacy.', critical: 'Reserved election in 2017 produced first Malay President since 1970, but without contest — many Singaporeans felt the mechanism undermined democratic choice. Halimah Yacob\'s PAP background further complicated "independence" claims.' },
    { name: 'OB Markers (Out-of-Bounds Markers)', what: 'Informal concept describing topics considered politically off-limits in Singapore public discourse: fundamental questioning of Lee Kuan Yew\'s legacy, race-based politics, religious debates in political sphere, fundamental critique of PAP\'s dominance. No formal definition — acknowledged by government as existing.', gpUse: 'Use for T4 (censorship) — the informal self-censorship that operates below formal legal restrictions. Shows how political culture suppresses speech beyond what law requires.', critical: 'The very ambiguity of OB markers makes them effective — journalists and bloggers don\'t know exactly where the line is, so they stay well back from it. Self-censorship is the most efficient form of censorship.' },
    { name: 'Singapore Mainstream Media Regulation', what: 'SPH Media (formerly Singapore Press Holdings) owns Straits Times, Lianhe Zaobao, Berita Harian. Restructured 2022 as government-funded non-profit. CNA (Channel NewsAsia) is Mediacorp — government-owned. All major papers require Newspaper and Printing Presses Act permits (annual renewal).', gpUse: 'Use for T4 (censorship and media freedom). Singapore\'s media structure ensures editorial alignment with government positions on sensitive issues.', critical: 'Annual permit renewal means no publication can afford to fundamentally challenge government — structural dependence rather than explicit editorial control. RSF notes journalists practice extensive self-censorship as a result.' },
    { name: 'Total Defence Doctrine', what: 'Singapore\'s five-pillar national defence: Military (NS, SAF), Civil (emergency preparedness), Economic (supply resilience), Social (racial/religious cohesion), Psychological (national will). All citizens have role. Introduced 1984; Digital Defence pillar added 2019.', gpUse: 'Use for T2 (security vs rights) — Total Defence extends security thinking to every domain of national life. Also use for national resilience and the unique vulnerabilities of a small city-state.', critical: 'Total Defence ideology can be used to frame any dissent as threat to national resilience. Digital Defence pillar specifically targets "false information" online — blurs line between security and political speech control.' },
  ],

  intlReferences: [
    { name: 'US Democratic Polarisation', facts: 'Partisan divide on fundamental policy (healthcare, gun control, immigration) so extreme that Congress passes fewer laws per term than any period since 1940. January 6 (2021) Capitol assault — first contested presidential transfer of power in US history. Trump\'s 2024 return despite criminal convictions.', gpUse: 'Use for T1 — democratic dysfunction can produce worse outcomes than stable authoritarian governance on specific metrics. Shows democracy requires civic culture, not just institutions.' },
    { name: 'Brexit (2016)', facts: 'UK voted 52-48% to leave EU in advisory referendum. Process took 4 years of parliamentary deadlock, 3 prime ministers, and two general elections. Final deal (Dec 2020) negotiated under threat of no-deal exit. Economic costs: Bank of England estimates permanent 4% GDP reduction.', gpUse: 'Use for T1 (democracy — direct democracy vs representative democracy tension). Also T2 (economics-politics) — shows how democratic processes can produce economically irrational outcomes with permanent costs.' },
    { name: 'Taiwan — Democracy Under Threat', facts: 'Fully democratic since 1996 (first direct presidential election). TSMC produces 90% of world\'s most advanced chips. China considers Taiwan a breakaway province; military tensions regularly escalate. 2024 election: DPP won third consecutive term rejecting Beijing\'s "one country, two systems" offer.', gpUse: 'Use for T1 (democracy as value, not just procedure — Taiwanese democracy under existential threat from authoritarian China) and T3 (force vs diplomacy — Taiwan Strait as live geopolitical flashpoint).' },
    { name: 'Russia-Ukraine War (2022-present)', facts: 'Russia invaded February 24, 2022. 200,000+ military casualties each side (UN estimates). 6.5 million Ukrainians fled abroad. NATO countries provided $100B+ military/economic aid. UN General Assembly voted 141-5 to condemn Russian invasion. ICC issued arrest warrant for Putin (war crimes, 2023).', gpUse: 'Use for T3 (force vs diplomacy) and T1 (democracy vs authoritarianism — framed as democratic Ukraine vs authoritarian Russia). Most consequential geopolitical event since 9/11.' },
    { name: 'Hong Kong: National Security Law (2020)', facts: 'China imposed NSL on Hong Kong after 2019 protests (2 million marched). 100+ pro-democracy activists arrested. Apple Daily (newspaper) forced to close. 47 pro-democracy politicians charged with conspiracy to commit subversion. Independent judiciary independence eroded.', gpUse: 'Use for T1 (democracy eroded through legal mechanism) and T4 (censorship — shutting down independent media). Shows how "one country, two systems" can be reversed unilaterally by authoritarian state.' },
    { name: 'Rise of Populism (Trump, Orbán, Modi)', facts: 'Trump (US): 2016, 2024 elections; anti-immigration, anti-trade, anti-NATO. Orbán (Hungary): media control, judiciary packing, NGO restrictions since 2010 — "illiberal democracy." Modi (India): Hindu nationalist majoritarian policies, press freedom decline, minorities\' rights erosion.', gpUse: 'Use for T1 — populism as democratic challenge from within. These leaders were democratically elected but systematically eroded the institutions that make democracy more than just elections.' },
    { name: 'Nordic Democracy (Iceland, Norway, Denmark)', facts: 'Consistently ranked #1-5 on Democracy Index (EIU), Press Freedom, Corruption Perceptions, and Happiness. Strong unions, independent media, low inequality, high trust in government. Iceland had world\'s first female president (1980), first openly gay PM.', gpUse: 'Use for T1 — empirical evidence that high-quality democracy produces superior outcomes. Counter to "democracy is inefficient" argument. Also for T4 (press freedom correlates with democratic quality).' },
    { name: 'UN Effectiveness Debate', facts: 'UN Security Council: 5 permanent members have veto. Russia vetoed 17 resolutions on Syria (2011-2022), China blocked Taiwan from WHO membership. But UN has also deployed 90,000+ peacekeepers to 12 current missions; UNICEF reached 190M children with vaccinations in 2022.', gpUse: 'Use for T3 (diplomacy vs force) — UN represents the best institutional expression of diplomatic order, but P5 veto paralyses response to great power aggression. Imperfect but indispensable.' },
    { name: 'Israel-Palestine Conflict', facts: 'ICJ "plausible genocide" ruling (January 2024). 2.3 million in Gaza under bombardment. Hamas October 7 (2023) attack: 1,200 killed, 251 taken hostage. Netanyahu indicted by ICC (November 2024). US veto of ceasefire resolutions at UNSC. No two-state solution in sight.', gpUse: 'Use for T3 (limits of diplomacy; international law vs sovereignty) and T1 (democratic Israel executing policies that international courts describe as violating international humanitarian law — complicates "democracy = good governance" thesis).' },
    { name: 'Rwanda: Authoritarian Development Success', facts: 'Paul Kagame has ruled since 1994 genocide. Jailed political opponents and critics. But: GDP grew 7%+ annually; universal healthcare coverage; fastest rise from extreme poverty in Africa; Kigali ranked Africa\'s cleanest city. Women hold 61% of parliamentary seats (world\'s highest).', gpUse: 'Most powerful evidence for "not all authoritarian states are equally bad" argument (T1). Use to complicate simple democracy-authoritarianism binary while maintaining that democratic accountability remains the long-run better system.' },
    { name: 'China\'s "Whole-Process Democracy" Claim', facts: 'Xi Jinping argues China has a superior "whole-process people\'s democracy" — consultation through CPC channels rather than competitive elections. China points to COVID-19 management, poverty elimination (800M), and infrastructure investment as evidence of effectiveness.', gpUse: 'Use for T1 — force students to engage with China\'s actual claims rather than caricature. The most sophisticated essays engage with these claims, then explain why meaningful accountability requires genuine electoral contestation.' },
  ],

  crossPillarConnections: [
    { pillars: 'Politics × Economics', tensions: 'State capitalism, democratic economic management, trade wars, sovereign wealth', questions: 'Can democracies make economically rational long-term decisions?' },
    { pillars: 'Politics × Society', tensions: 'Minority rights, censorship, social harmony vs dissent, identity politics', questions: 'Who defines "social harmony" and who benefits from that definition?' },
    { pillars: 'Politics × Science & Tech', tensions: 'Technocracy vs democracy, AI governance, surveillance states, digital authoritarianism', questions: '2025 Prelim: AI regulation — who governs the governors of AI?' },
  ],

  practiceQuestions: [
    { q: '"Democracy is the worst form of government, except for all the others." Discuss.', type: 'Discuss', difficulty: 'High', focus: 'T1 — Churchill\'s famous phrase, requires genuine engagement with democracy\'s failures' },
    { q: 'To what extent is censorship ever justified in a democratic society?', type: 'To what extent', difficulty: 'High', focus: 'T4 — in your society question, SG context essential' },
    { q: '"National security must always take precedence over individual rights." How far do you agree?', type: 'How far', difficulty: 'High', focus: 'T2 — the ISA and surveillance question' },
    { q: 'Assess the view that diplomacy has failed to address the world\'s most serious conflicts.', type: 'Evaluate', difficulty: 'Medium', focus: 'T3 — requires case studies across conflicts' },
    { q: '"Populism is democracy\'s greatest threat." Examine this claim.', type: 'Examine', difficulty: 'High', focus: 'T1 — requires distinguishing populism from democracy' },
    { q: 'How far should small nations compromise their political values for economic survival?', type: 'How far', difficulty: 'High', focus: 'T3 + T1 — directly relevant to Singapore\'s position' },
  ],
};
