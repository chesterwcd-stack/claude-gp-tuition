// CP06: Arts & Humanities
module.exports = {
  pillar: 'Arts & Humanities',
  code: 'CP06',
  accent: 'DC2626', // red
  tagline: 'Expression, Identity & What We Call Beautiful',
  snapshot: {
    examFrequency: 'Medium — appears 1-2 times per paper. 2025 Q2 (well-known art = great art?) and 2024 Q8 (music). Often paired with society or censorship angles.',
    sgExamples: 10,
    intlExamples: 10,
    crossPillarLinks: ['Society & Culture', 'Politics', 'Science & Technology'],
    examAlert: 'Students weak on this pillar write vague essays about "appreciating culture." The A-grade position takes a specific stance on what art is FOR — political tool? Commercial product? Cultural heritage? Community bond? Pick a thesis and commit.',
  },

  bigPicture: {
    whyMatters: 'Arts questions are never just about art — they\'re about values: who has the power to define what counts as culture? What does a society invest in and why? When should expression be limited? The arts pillar is where politics, society, economics, and identity converge most visibly.',
    topMistake: '"Art is important because it enriches our lives." This is not a thesis — it is a platitude. GP markers want to see you argue a position: art as political resistance, art as commercial product, art as community identity, AI as artistic tool vs threat. Be specific, be arguable.',
  },

  tensions: [
    {
      id: 'T1',
      title: 'Arts as Essential vs Arts as Luxury',
      why: '2025 Q2 (great art ≠ well-known art) hints at arts valuation. Also connects to "in your society" framing when asking about arts funding priorities.',
      for: [
        {
          claim: 'The arts are essential to human development, democratic culture, and economic vitality — not a luxury to be funded only after "real" needs are met',
          reasoning: 'Arts and culture are not decorative additions to society — they are primary vehicles for identity formation, political critique, empathy development, and economic activity. Societies that defund the arts systematically diminish their civic and creative capacity.',
          evidence: [
            'UNESCO (2022): cultural and creative industries generate $2.25 trillion globally (3% of global GDP) and employ 48 million people — larger than automotive or ICT sectors',
            'Neuroscience of arts: music training increases grey matter density in motor cortex and auditory cortex; drama education develops theory of mind and empathy in measurable ways (multiple peer-reviewed studies)',
            'Korean Wave (Hallyu): South Korean cultural exports (K-pop, K-drama, webtoons) worth $10B+ annually; BTS alone generated $3.6B tourism revenue for South Korea in 2019 pre-pandemic',
            'UK Creative Economy: generated £125B in 2021 (6.4% of UK economy); 2.3 million jobs. Grew faster than the economy overall in every year 2010-2019',
          ],
          sg: 'Singapore\'s National Arts Council budget: ~$100M annually. Singapore Biennale, National Gallery, Esplanade (capacity 1.8M visitors/year) represent significant state investment in arts as national identity. Budget 2024 increased arts funding amid long-term decline.',
          tip: 'The economic argument is your strongest opening because it defeats the "luxury" framing on economic grounds. Then pivot to the civic argument: even if arts had no economic value, they would be essential.',
        },
      ],
      against: [
        {
          claim: 'In resource-constrained contexts, arts funding is legitimately lower priority than healthcare, education, and infrastructure',
          reasoning: 'Every dollar spent on arts is a dollar not spent on cancer treatment, school lunches, or clean water. In wealthy nations the trade-off is abstract; in developing nations it is existential. Arts advocates must confront this hierarchy of needs honestly.',
          evidence: [
            'UK Arts Council cuts (2022-2023): £50M reduction in arts funding to redirect to healthcare, following pandemic strains — received broad public support despite arts community protests',
            'Australia: arts funding per capita 1/3 of UK level — yet Australian soft power (film, literature, music) remains globally significant, suggesting market mechanisms partly substitute for state investment',
            'Debate within Singapore: arts sector regularly argues for more funding (NAC budget has fallen in real terms); government points to 3.3M monthly "cultural touch points" created and asks whether more is needed',
            'WHO (2023): 1 billion people lack access to mental healthcare, 300M have depression — competing claim on government resources that dwarfs arts funding requests',
          ],
          sg: 'Singapore\'s pragmatic arts funding philosophy: NAC funds arts that serve nation-building (cultural identity, social cohesion) and economic outcomes (tourism, creative industries). Pure aesthetic value is not a funding criterion — state arts support is explicitly instrumental.',
          tip: 'Concede this tension is real — don\'t dismiss it. Then argue that "luxury vs essential" is a false binary in the long run: arts neglect produces measurable social costs (reduced empathy, weaker civic culture, worse mental health outcomes).',
        },
      ],
    },

    {
      id: 'T2',
      title: 'Tradition/Heritage vs Contemporary/Innovation',
      why: 'Singapore\'s conservation vs development debate, globalisation of culture, and authenticity questions all flow from this tension.',
      for: [
        {
          claim: 'Cultural heritage and tradition provide irreplaceable sources of identity, meaning, and continuity that globalisation and commercialisation threaten',
          reasoning: 'Traditional art forms, vernacular languages, folk practices, and cultural heritage are not merely aesthetically valuable — they encode ways of seeing the world, community bonds, and historical memory that global mass culture cannot replicate. Their loss is irreversible.',
          evidence: [
            'UNESCO Intangible Cultural Heritage: 700+ living traditions on endangered list; once lost, cannot be reconstructed — language death (one language dies every 2 weeks) permanently destroys knowledge systems',
            'Wayang kulit (shadow puppetry): UNESCO listed 2008; 1,200-year-old Javanese art form faces extinction as younger audiences prefer digital entertainment — loss of entire aesthetic vocabulary and cosmology',
            'New Zealand Māori language revival: te reo Māori brought back from near-extinction through immersion schools (kura kaupapa). Demonstrates that deliberate state investment can rescue endangered traditions.',
            'Japan\'s Living National Treasures: government designates master traditional craftspeople as national human heritage, provides stipends — preserving kabuki, ikebana, ceramics through direct subsidy',
          ],
          sg: 'Singapore\'s conservation of Chinatown, Little India, Kampong Glam shophouses and UNESCO nomination for Singapore Botanic Gardens. Peranakan culture (Straits Chinese) and Baba-Nonya traditions actively supported by NHB. Singlish debate (dialect asset vs Standard English requirement) reflects heritage-modernity tension.',
          tip: 'Distinguish between living traditions (actively practiced) and museum-piece preservation (frozen artefacts). The strongest argument is for living traditions — the goal is not nostalgia but active cultural practice.',
        },
      ],
      against: [
        {
          claim: 'Cultures are not static — innovation, hybridisation, and change are how cultural traditions stay relevant and alive',
          reasoning: 'Every "traditional" art form was once contemporary innovation. Attempts to freeze culture in an "authentic" historical moment are both impossible (cultures always change) and often politically motivated — defining "authentic" culture usually means excluding groups who were always present.',
          evidence: [
            'Jazz → Hip-hop → K-pop: each generation of popular music builds on and transforms what came before; attempts to stop this transformation would have frozen music at each preceding stage',
            'Shakespeare\'s language was revolutionary for its time — the "tradition" of Shakespearean theatre was once dangerous, market-driven popular entertainment, not elite culture',
            'Nigerian Afrobeats: global phenomenon combining Yoruba rhythms, highlife, funk, hip-hop — not "traditional" by any strict definition, but deeply Nigerian and globally influential',
            'Architecture hybridisation: Singapore\'s Jewel Changi (waterfall in airport), Marina Bay Sands, Supertrees — globally distinctive aesthetic that blends tradition and modernity, not preservation of one historical style',
          ],
          sg: 'Singapore\'s cultural identity is itself hybrid: Singlish (English + Malay + Hokkien + Tamil), Peranakan cuisine (Chinese + Malay), hawker culture (multiple ethnic origins in one shared space). Authenticity is a construction, not a discovery.',
          tip: 'The counterargument is not "destroy tradition" but "let tradition live by allowing it to evolve." The best essays reconcile both — protection of endangered traditions + freedom for living culture to change.',
        },
      ],
    },

    {
      id: 'T3',
      title: 'Art and Censorship',
      why: 'Connects directly to CP05 T4 (censorship). Arts censorship is the most concrete battleground for free expression vs community standards.',
      for: [
        {
          claim: 'Some artistic content legitimately requires restriction to protect community standards, religious sensitivities, and social cohesion',
          reasoning: 'Art operates within social contexts — it is not produced in a vacuum but consumed by communities with real sensitivities and vulnerabilities. Art that incites violence, exploits children, or deliberately degrades religious minorities causes demonstrable harm that outweighs its artistic value.',
          evidence: [
            'Singapore\'s IMDA content classification: Public Entertainment Licensing Act, Films Act, Infocomm Media Development Authority rate films/art — balances access with community standards. R21, NC16, Advisory categories allow graduated access.',
            'Lady Chatterley\'s Lover (1960) trial: banned as obscene; court ruled "the jury of ordinary readers" standard appropriate — public norms should constrain extreme artistic expression',
            'South Park "200"/"201" episodes: depicted Mohammed, received death threats, Comedy Central censored the episodes citing genuine safety concerns for staff — not all censorship is state overreach',
            'Germany\'s ban on Nazi propaganda in art: Mein Kampf publication restricted until 2015; Nazi symbols banned except in educational contexts — restrictions with clear historical justification',
          ],
          sg: 'Singapore\'s history: Eason Chan concert cancellation (2007, lyrics deemed offensive to Malays); staging controversies around plays examining religious themes. S$20,000 production grant requirement for any public staging — financial gatekeeping as soft censorship.',
          tip: 'Frame restriction as contextual, not absolute: restrictions on child exploitation content, incitement to violence, are different in kind from restrictions on political critique or religious commentary. Avoid conflating these.',
        },
      ],
      against: [
        {
          claim: 'Artistic censorship is never justified — art\'s core function is to challenge, disturb, and transgress the comfortable boundaries of its time',
          reasoning: 'Virtually every artistic work later recognised as great was initially scandalous, offensive, or banned. Censoring "offensive" art by community standards reliably suppresses the most important artistic and political expression of its era. Those in power define what offends.',
          evidence: [
            'Censorship history of great art: Ulysses (Joyce) — banned 1921-1933 in US; 1984 (Orwell) — banned in USSR and still banned in some nations; Catcher in the Rye — most banned book in US schools despite literary status',
            'Ai Weiwei: Chinese dissident artist detained 81 days (2011), passport confiscated, studio demolished — state censorship of political art as repression of legitimate dissent',
            'Mapplethorpe photographs (1989): Cincinnati museum director prosecuted for obscenity; jury acquitted, recognising government prosecution of art as chilling effect on free expression',
            'Singapore\'s "White Horse" play controversy (2007): Play about National Service class privilege (sons of elites get easier service) — performed, then subject to pressure that playwright described as chilling future works',
          ],
          sg: 'Alfian Sa\'at (Singaporean playwright): multiple works exploring race, LGBTQ+ identity, and national mythology in Singapore. Works have been staged but subject to National Arts Council funding withdrawal and public controversy. Shows how soft censorship (funding) operates alongside formal censorship.',
          tip: 'The argument for artistic freedom is strongest when focused on the pattern: censors are always wrong about which art history should remember. This is a verifiable historical claim, not an abstract principle.',
        },
      ],
    },

    {
      id: 'T4',
      title: 'Art in the Age of AI',
      why: '2025 Prelim trend. The intersection of AI and creativity is a live debate that examiners are expected to pick up given CP01\'s AI focus.',
      for: [
        {
          claim: 'AI artistic tools democratise creative expression, expand what is possible, and represent the latest evolution of artistic tools — not the end of human creativity',
          reasoning: 'Every major artistic medium began as a new technology that was initially resisted: photography "killed" painting (it didn\'t — it liberated painting from documentation), cinema "killed" theatre (it didn\'t). AI is a new tool that will reshape but not replace human creativity.',
          evidence: [
            'DALL-E / Midjourney / Stable Diffusion: enabled visual artists without formal training to express complex ideas visually — democratisation of visual expression, not replacement of artists',
            'Holly Herndon\'s "PROTO" album (2019): used AI trained on human voices to create hybrid compositions — AI as collaborative instrument, not autonomous creator',
            'Adobe Firefly (2023): integrated AI generation into professional creative workflow; 3 billion images generated in first 3 months. Artists using tools, not being replaced by them.',
            'Spotify data (2023): AI-generated music accounts for <1% of streams despite thousands of AI albums released — audiences still overwhelmingly prefer human-created music when given choice',
          ],
          sg: 'Singapore\'s "AI for the Arts" initiative (NAC): grants for arts practitioners to explore AI tools. Singapore\'s media production industry using AI for post-production. Government framing AI as tool to enhance Singapore\'s creative industries, not replace human creators.',
          tip: 'The strongest pro-AI creativity argument engages with the history of tool resistance and comes back to a clear principle: what matters in art is the intention, perspective, and meaning — not the medium.',
        },
      ],
      against: [
        {
          claim: 'AI-generated art threatens the economic livelihoods of human artists, raises unresolved questions of authorship and originality, and cannot produce genuine creativity',
          reasoning: 'AI models are trained on human-created work without consent or compensation, then produce outputs that directly compete with the creators they learned from. This is not a new tool — it is the systematic extraction of creative labour value from artists to corporations.',
          evidence: [
            'Getty Images vs Stability AI lawsuit (2023): Stability AI trained Stable Diffusion on 12 million Getty images without licence — copying watermarks even appeared in generated images',
            'US Copyright Office (2023): refused copyright registration for AI-generated images without "sufficient human authorship" — Midjourney outputs are not copyrightable, creating economic uncertainty for users',
            'Illustrators\' strike analogy: US illustrators report 40-90% income decline in sectors where AI image generation has been adopted (stock photography, book covers, game asset creation)',
            'Philosophical objection: Roger Scruton\'s argument that art requires intention — AI has no intention, aesthetic experience, or mortality; it produces statistical patterns, not art',
          ],
          sg: 'Singapore\'s IMDA "Generative AI Guidelines for the Media Sector" (2023): transparency requirements for AI-generated content in media. Highlights regulatory vacuum and the real economic and ethical issues facing creative workers.',
          tip: 'The strongest AI-sceptic argument is not philosophical but economic and legal: who owns AI-generated work? Who compensates the human artists whose work trained the model? These are concrete, solvable questions — frame them that way.',
        },
      ],
    },
  ],

  sgReferences: [
    { name: 'National Arts Council (NAC) Funding', what: 'Singapore government\'s primary arts funding body. Budget ~$100M/year for grants, arts education, international exposure. Funds Singapore International Festival of Arts, SWF, arts education programmes.', gpUse: 'Use for T1 (arts as essential vs luxury — Singapore government treats arts as instrumental, not intrinsically valuable). Also T3 (NAC funding withdrawal is soft censorship mechanism).', critical: 'NAC funding comes with implicit expectations around national values alignment. Works exploring LGBTQ+ themes, political critique, or racial sensitivity face funding uncertainty. Alfian Sa\'at\'s experience documented this dynamic.' },
    { name: 'Esplanade — Theatres on the Bay', what: 'Singapore\'s premier arts venue. 1.8M visitors annually (pre-COVID). $600M construction, publicly funded. Houses concert hall (1,800 seats), theatre (2,000 seats), outdoor free performances. Described as democratising arts access through free programming.', gpUse: 'Use for T1 — state investment in arts infrastructure as public good. Also for national identity building through arts.', critical: 'Programming has been criticised for being safe and commercially oriented. Singapore arts community has noted that Esplanade\'s prime programming slots favour international and commercially proven acts over local experimental work.' },
    { name: 'National Gallery Singapore', what: 'Largest collection of Southeast Asian modern art globally (8,000+ works). Housed in former Supreme Court and City Hall. Opened 2015. Positions Singapore as hub for regional art history and identity.', gpUse: 'Use for T2 (heritage preservation) — Singapore investing in regional art history. Also for soft power: positioning Singapore as regional cultural hub.', critical: 'Curating "Southeast Asian art" raises questions about who defines the region\'s artistic heritage. Critics note SAM and National Gallery have different mandates but can create overlapping jurisdictional confusion.' },
    { name: 'Singapore Writers Festival (SWF)', what: 'Annual festival in multiple languages (English, Mandarin, Malay, Tamil). Brings international and local authors together. SG-specific literary scene includes Alfian Sa\'at, Vyvyane Loh, Cyril Wong, Tan Twan Eng (Man Booker longlist).', gpUse: 'Use for multilingual cultural identity argument. Singapore\'s literary scene reflects its linguistic pluralism in ways unique globally.', critical: 'English-language literary scene significantly larger than other language streams despite Malay being the national language. Hierarchy of cultural prestige mirrors socioeconomic hierarchy.' },
    { name: 'Heritage Conservation (Shophouses, Kampongs)', what: 'URA (Urban Redevelopment Authority) conservation areas protect shophouses in Chinatown, Tanjong Pagar, Boat Quay, Little India, Arab Street. 7,100 conserved buildings. Conservation = maintaining facades while allowing interior renovation.', gpUse: 'Use for T2 (heritage vs development) — Singapore\'s pragmatic approach: preserve the visual heritage, allow commercial use inside. Tourism vs authentic living culture debate.', critical: 'Conserved shophouses are now prime real estate — restaurants, boutiques, hotels. Original residents and communities long displaced. Conservation of buildings without preservation of communities is aestheticisation, not cultural preservation.' },
    { name: 'Singlish Debate', what: 'Singlish (Singapore Colloquial English) is a creole blending English, Malay, Hokkien, Cantonese, Tamil. Government\'s Speak Good English Movement (since 1999) discourages Singlish as "bad English." But Singlish is the primary marker of Singaporean identity for many.', gpUse: 'Best example for T2 (tradition vs progress in language/culture). Also for T1 — government treating a vernacular as a problem to solve rather than a cultural asset.', critical: 'Singlish listed in Oxford English Dictionary (since 2000). Internationally recognised as authentic linguistic phenomenon. Government\'s position has softened somewhat — PM Lee acknowledged Singlish as part of identity in National Day speech.' },
    { name: 'Singapore Biennale', what: 'Major contemporary art festival held biennially since 2006. 2022 theme "Natasha" explored identity, ecology, technology. International and regional artists. Free entry — explicitly designed to build public audience for contemporary art.', gpUse: 'Use for T1 (state investment in contemporary art as nation-building). Also for T2 — biennale is deliberately contemporary, not heritage-preserving.', critical: 'Contemporary art biennales are globalised art world institutions — critics question whether they meaningfully build local arts culture or primarily serve international art market circuits.' },
    { name: 'IMDA Content Classification', what: 'Info-communications Media Development Authority regulates films, TV, online content, publications. Rating system: G, PG, PG13, NC16, M18, R21. Community Advisory Committees include public members advising on community standards.', gpUse: 'Use for T3 (censorship) — Singapore\'s formal content restriction framework. Classification system allows graduated access rather than binary allow/ban.', critical: 'IMDA bans of LGBTQ+ content from broadcast media (removed 2024 but restrictions remain on children\'s content), political advertising — reflects government values, not neutral "community standards".' },
    { name: 'K-pop and Entertainment Culture Influence in SG', what: 'Korea\'s cultural exports dominate Singapore\'s youth entertainment — BTS, BLACKPINK, Korean dramas. Singapore hosts K-pop concerts (largest in Asia region, 40,000+ crowds). Korean food, fashion, beauty standards influence.', gpUse: 'Use for T2 — foreign cultural domination vs local cultural identity. Also for T4 (AI in K-pop production — virtual idols, AI-generated music).', critical: 'K-pop\'s dominance raises questions about Singapore\'s own cultural production. The same cultural forces that globalised K-pop could globalise Singapore\'s arts sector — but requires deliberate investment Singapore hasn\'t made at the same scale.' },
    { name: 'Arts Education in Schools', what: 'Visual Arts, Music, and Drama are part of Singapore school curriculum. School of the Arts (SOTA) offers specialised arts O/A-Level pathway. 3 dedicated arts schools (School of the Arts, LASALLE, Nanyang Academy of Fine Arts). But arts subjects dropped by most students for Sciences/Humanities at A-level.', gpUse: 'Use for T1 (arts as essential vs luxury — even students who enjoy arts systematically abandon them in pursuit of economically "useful" subjects).', critical: 'Despite government rhetoric about creativity and the arts, the educational system\'s STEM-heavy incentive structure (grades, university admissions, career prospects) consistently signals that arts are lower priority. Talk and structure are misaligned.' },
    { name: 'Museum Repatriation Debates (Asia Context)', what: 'Asian nations increasingly demanding return of cultural artefacts from Western museums. Elgin Marbles (Greece vs British Museum); Koh-i-Noor diamond (India/Pakistan vs UK). Singapore\'s Asian Civilisations Museum proactively documents provenance of controversial acquisitions.', gpUse: 'Use for T2 (heritage) and T1 (whose culture, whose museum?). Singapore\'s ACM position — acquiring Southeast Asian art for regional hub vs original community ownership question.', critical: 'Singapore is both a colonial legacy country (British-built institutions) and a regional hub claiming to preserve Asian heritage. The politics of who legitimately "owns" regional cultural heritage is complex for Singapore specifically.' },
  ],

  intlReferences: [
    { name: 'Ai Weiwei — Art as Political Resistance', facts: 'Chinese dissident artist. Detained 81 days (2011) by Chinese government. Studio demolished. Works explore Chinese history, government censorship, refugee crisis. "Remembering" installation (9,000 children\'s backpacks on Munich museum facade) commemorated 2008 Sichuan earthquake victims killed by "tofu" school construction.', gpUse: 'Use for T3 — art as political speech; censorship of art as political repression. Best example of artist facing direct state violence for political art.' },
    { name: 'Banksy — Art and Commerce', facts: 'Anonymous British street artist. Works appear overnight on public/private surfaces globally. "Girl with Balloon" self-destructed at Sotheby\'s auction (sold for £1M+, shredding device activated — resold for £18.5M in 2021). Dismaland (2015) — satirical theme park. Paradox: anti-commercial art sold for millions.', gpUse: 'Use for T1 (art as luxury vs essential) and T2 (authenticity vs commercialisation). Banksy\'s art both critiques the market and exists entirely within it.' },
    { name: 'BTS and Korean Wave (Hallyu)', facts: 'BTS: $3.6B Korean tourism revenue (2019). South Korean cultural exports $10B+. K-dramas (Squid Game: 111 million households, most-watched Netflix series ever). Korean beauty and food trends global.', gpUse: 'Use for T1 (economic case for arts) and T2 (cultural innovation as hybrid tradition). Also use to show how deliberate state investment in culture (Korean Creative Content Agency, KOCCA) can produce transformative economic returns.' },
    { name: 'NFTs and Digital Art Market', facts: 'Beeple\'s "Everydays: The First 5,000 Days" sold for $69 million at Christie\'s (2021) — most expensive digital artwork ever. NFT market peaked at $25B (2021), collapsed to <$1B (2023). Raised fundamental questions about what makes art valuable.', gpUse: 'Use for T1 (art valuation) and T4 (AI and digital art). NFT boom and bust is a perfect case study in how hype and speculation can distort art market, challenging the idea that price reflects quality.' },
    { name: 'Netflix/Streaming Democratising Global Arts', facts: 'Netflix in 190 countries. Invested $17B in content (2023). Non-English content growing — foreign language Oscar winners include "Parasite" (Korea), "CODA" (France-set). Platform dramatically expanded access to global cinema for non-English audiences.', gpUse: 'Use for T2 (tradition vs contemporary) — streaming both threatens local arts industries (competing for audiences) and distributes them globally (Squid Game, Money Heist). Ambiguous impact on cultural diversity.' },
    { name: 'AI Art — DALL-E, Midjourney, Copyright Cases', facts: 'Stable Diffusion trained on 5.8 billion images. Getty Images vs Stability AI lawsuit (2023). US Copyright Office: AI outputs not copyrightable without human authorship. "Théâtre D\'Opéra Spatial" won Colorado State Fair (2022) — artist used Midjourney, sparking furious debate.', gpUse: 'Use for T4 — the concrete legal and economic questions AI art raises. Not just philosophical — who owns it, who gets paid, what is creativity?' },
    { name: 'Book Banning Debates (US)', facts: 'US school book bans reached record 3,362 book bans in 2022-2023 school year (PEN America). Most banned: "Gender Queer" (LGBTQ+ memoir), "All Boys Aren\'t Blue" (queer experiences). Florida, Texas driving most bans. Contrast with "banned books" culture that celebrates these very works.', gpUse: 'Use for T3 (censorship) — democratic society banning books raises exactly the question of who defines community standards. Pattern: banned books tend to represent minority perspectives.' },
    { name: 'UNESCO World Heritage Controversies', facts: 'Liverpool\'s waterfront lost World Heritage status (2021) for overdevelopment. Saudi Arabia\'s Diriyah at-Turaif nominated despite human rights concerns. Qatar building artificial heritage sites. 1,157 sites listed — but 150+ under threat.', gpUse: 'Use for T2 (heritage preservation vs development). UNESCO process is political — heritage listing is as much about national soft power as genuine preservation.' },
    { name: 'Bollywood and Nollywood as Cultural Exports', facts: 'Bollywood: 1,500+ films/year, viewed by 1.5 billion people globally. India\'s cultural export and diaspora connection. Nollywood (Nigerian): world\'s 2nd largest film industry by volume (2,000+ films/year). Primary cultural export for African diaspora globally.', gpUse: 'Use for T2 (non-Western cultural production and tradition). Also T1 — cultural industries generate significant economic value in developing economies, proving arts are not a luxury.' },
    { name: 'Cultural Appropriation Debates', facts: 'Kim Kardashian\'s "Kimono" shapewear (Japanese protest), Adele wearing Bantu knots at Notting Hill Carnival (UK debate), hip-hop style by non-Black artists. No legal definition — cultural debate about power, context, and authenticity.', gpUse: 'Use for T2 (cultural ownership and identity). Also for T3 (who polices cultural borrowing? Is social media pressure a form of censorship?). Complex, no clear answer — perfect for GP nuanced treatment.' },
    { name: 'Louvre as Cultural Soft Power', facts: 'Most visited museum in world (8.9M visitors, 2022). Louvre Abu Dhabi opened 2017 — France charged $525M for use of the Louvre name and 300+ artworks. Represents state cultural diplomacy and the global market for cultural prestige.', gpUse: 'Use for T1 (economic value of arts) and T2 (heritage as commodity — who owns the Louvre\'s cultural capital?). Louvre Abu Dhabi raises question of whether cultural prestige can be purchased.' },
  ],

  crossPillarConnections: [
    { pillars: 'Arts × Society', tensions: 'Cultural identity, representation, cancel culture, authenticity of traditional art forms', questions: 'Does art reflect or shape social values? Who decides what culture is acceptable?' },
    { pillars: 'Arts × Politics', tensions: 'Censorship, art as political resistance, state funding conditions, propaganda vs free expression', questions: 'Can art be truly free in a society where the state funds it?' },
    { pillars: 'Arts × Science & Technology', tensions: 'AI creativity, digital distribution, copyright, virtual reality as art form', questions: 'Does AI destroy creativity or democratise it?' },
  ],

  practiceQuestions: [
    { q: '"Well-known art is not necessarily great art." How far do you agree?', type: 'How far', difficulty: 'Medium', focus: 'T1 + T2 — 2025 Q2, directly on this pillar; value and canonisation' },
    { q: '"The arts are a luxury that only wealthy societies can afford to prioritise." Discuss.', type: 'Discuss', difficulty: 'Medium', focus: 'T1 — economic vs intrinsic value of arts' },
    { q: 'To what extent is censorship of the arts ever justified in a democratic society?', type: 'To what extent', difficulty: 'High', focus: 'T3 — connects to CP05 T4; SG context essential' },
    { q: 'Assess the view that AI poses a greater threat than opportunity to human creativity.', type: 'Evaluate', difficulty: 'High', focus: 'T4 — CP01 × CP06 cross-pillar' },
    { q: '"Preserving cultural heritage is more important than embracing cultural change." How far do you agree?', type: 'How far', difficulty: 'Medium', focus: 'T2 — heritage vs innovation; SG context rich' },
    { q: 'Does art have a responsibility to serve society, or should it exist for its own sake?', type: 'Discuss', difficulty: 'High', focus: 'T1 + T3 — fundamental question about art\'s purpose' },
  ],
};
