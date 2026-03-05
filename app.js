// ===== Data =====
const MODULES = [
  {
    id: 1,
    icon: "🐠",
    title: "Marine Ecosystems",
    difficulty: "Beginner",
    duration: "10 min",
    description: "Learn about coral reefs, mangroves, and the diverse ecosystems that thrive beneath the ocean surface.",
    content: `
      <div class="module-section">
        <h3>What Are Marine Ecosystems?</h3>
        <p>Marine ecosystems are communities of living organisms — from tiny plankton to giant whales — interacting with their ocean environment. They include coral reefs, mangroves, seagrass beds, estuaries, deep-sea vents, and the open ocean.</p>
      </div>
      <div class="module-section">
        <h3>🪸 Coral Reefs</h3>
        <p>Often called the <strong>rainforests of the sea</strong>, coral reefs support about <strong>25% of all marine species</strong> despite covering less than 1% of the ocean floor. They are built by tiny animals called coral polyps that secrete calcium carbonate skeletons over thousands of years.</p>
        <p>Reefs provide food and shelter for fish, protect coastlines from storm waves, and support fishing communities throughout the tropics.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> The Great Barrier Reef in Australia is so large it can be seen from space — it stretches over 2,300 km!</div>
      </div>
      <div class="module-section">
        <h3>🌿 Mangroves</h3>
        <p><strong>Mangroves</strong> are salt-tolerant trees and shrubs that grow along tropical and subtropical coastlines. They have complex root systems that trap sediment, filter pollutants, and reduce coastal erosion.</p>
        <p>Mangrove forests serve as <strong>nurseries for fish</strong> — many commercially important species spend their early life stages among mangrove roots. They also store up to 4 times more carbon per hectare than tropical rainforests.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> Mangroves can absorb up to 5 times more carbon dioxide than forests on land, making them crucial for fighting climate change.</div>
      </div>
      <div class="module-section">
        <h3>🌱 Seagrass Beds</h3>
        <p>Seagrasses are flowering plants that grow underwater in shallow coastal waters. They form extensive meadows that provide habitat for seahorses, dugongs, sea turtles, and hundreds of fish species.</p>
        <p>Seagrass beds stabilise the seafloor, improve water clarity, and produce oxygen — a single square metre of seagrass can release 10 litres of oxygen per day.</p>
      </div>
      <div class="module-section">
        <h3>Why This Matters for Your Community</h3>
        <p>These ecosystems are critically important for <strong>biodiversity, food security, and livelihoods</strong> of coastal communities. In the Global South, millions of families depend directly on healthy coral reefs and mangroves for their daily food and income.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Biodiversity</strong> — the variety of life in a particular habitat</li>
          <li><strong>Coral polyp</strong> — tiny animal that builds coral reefs</li>
          <li><strong>Nursery habitat</strong> — an area where young fish grow and develop</li>
          <li><strong>Carbon sequestration</strong> — capturing and storing carbon dioxide from the atmosphere</li>
        </ul>
      </div>
    `,
    badge: { icon: "🐠", name: "Reef Guardian" }
  },
  {
    id: 2,
    icon: "🌊",
    title: "Ocean Currents & Tides",
    difficulty: "Beginner",
    duration: "12 min",
    description: "Discover how water moves around the planet and why it matters for climate and marine life.",
    content: `
      <div class="module-section">
        <h3>The Moving Ocean</h3>
        <p>The ocean is never still. Massive rivers of water flow continuously through the seas, driven by wind, temperature, salinity, and the Earth's rotation. These movements — called <strong>ocean currents</strong> — shape our climate, redistribute heat, and carry nutrients vital to marine life.</p>
      </div>
      <div class="module-section">
        <h3>🌬️ Surface Currents</h3>
        <p><strong>Surface currents</strong> affect the top 400 metres of the ocean and are mainly driven by <strong>wind patterns</strong>. The trade winds near the equator push water westward, while the westerlies at higher latitudes push water eastward.</p>
        <p>The <strong>Coriolis effect</strong> — caused by the Earth's rotation — deflects moving water to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, creating large circular patterns called <strong>gyres</strong>.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> The Gulf Stream carries warm water from the Gulf of Mexico all the way to Europe, which is why Western Europe has milder winters than regions at similar latitudes.</div>
      </div>
      <div class="module-section">
        <h3>🌡️ Deep-Water Currents</h3>
        <p><strong>Thermohaline circulation</strong> (also called the "global conveyor belt") drives deep-water currents. Cold, salty water near the poles is denser and sinks to the ocean floor, then flows slowly towards the equator. This single cycle takes about <strong>1,000 years</strong> to complete!</p>
        <p>This deep circulation distributes heat and nutrients around the globe and plays a crucial role in regulating Earth's climate.</p>
      </div>
      <div class="module-section">
        <h3>🌙 Tides</h3>
        <p><strong>Tides</strong> are the regular rise and fall of sea levels caused by the gravitational pull of the <strong>Moon</strong> and the <strong>Sun</strong>. Most coastlines experience two high tides and two low tides each day.</p>
        <p><strong>Spring tides</strong> (extra high) occur when the Sun, Moon, and Earth align. <strong>Neap tides</strong> (less extreme) occur when the Sun and Moon are at right angles.</p>
        <p>Tides are essential for intertidal life — crabs, mussels, starfish, and seaweed all depend on the rhythm of tides for feeding and reproduction.</p>
      </div>
      <div class="module-section">
        <h3>Why This Matters</h3>
        <p>Understanding ocean circulation helps us <strong>predict weather, track pollution, manage fisheries</strong>, and prepare for the impacts of climate change on coastal communities.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Gyre</strong> — a large system of circular ocean currents</li>
          <li><strong>Coriolis effect</strong> — the deflection of moving objects caused by Earth's rotation</li>
          <li><strong>Thermohaline circulation</strong> — deep ocean current driven by temperature and salinity</li>
          <li><strong>Spring tide</strong> — an especially high tide when Sun, Moon, and Earth align</li>
        </ul>
      </div>
    `,
    badge: { icon: "🌊", name: "Current Master" }
  },
  {
    id: 3,
    icon: "🐋",
    title: "Marine Conservation",
    difficulty: "Intermediate",
    duration: "15 min",
    description: "Understand the threats facing our oceans and what we can do to protect marine life.",
    content: `
      <div class="module-section">
        <h3>Oceans Under Threat</h3>
        <p>Our oceans face serious and growing threats from human activities. Understanding these challenges is the first step toward protecting the marine world.</p>
      </div>
      <div class="module-section">
        <h3>🎣 Overfishing</h3>
        <p>Over <strong>one-third</strong> of global fish stocks are overfished — caught faster than they can reproduce. Industrial fishing fleets use massive nets that can sweep up entire schools of fish in a single haul.</p>
        <p>Overfishing disrupts food chains, reduces biodiversity, and threatens the food security of billions of people who depend on fish as their primary protein source.</p>
      </div>
      <div class="module-section">
        <h3>🥤 Plastic Pollution</h3>
        <p>Over <strong>8 million tonnes</strong> of plastic enter the oceans every year — equivalent to dumping a truckload of plastic into the sea every minute. This plastic harms marine animals through entanglement and ingestion.</p>
        <p><strong>Microplastics</strong> — tiny pieces smaller than 5mm — have been found in the deepest ocean trenches, in Arctic ice, and even inside fish that humans eat.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> A single plastic bottle can take up to 450 years to decompose in the ocean. During that time, it breaks into thousands of microplastic fragments.</div>
      </div>
      <div class="module-section">
        <h3>🌡️ Ocean Acidification & Climate Change</h3>
        <p>The ocean absorbs about <strong>30% of CO₂</strong> produced by humans. When CO₂ dissolves in seawater, it forms carbonic acid, making the ocean more acidic. This process — <strong>ocean acidification</strong> — weakens the shells and skeletons of corals, shellfish, and plankton.</p>
        <p>Rising ocean temperatures cause <strong>coral bleaching</strong>, shift species distributions, and intensify extreme weather events.</p>
      </div>
      <div class="module-section">
        <h3>🛡️ Conservation Solutions</h3>
        <p><strong>Marine Protected Areas (MPAs)</strong> restrict human activities in key ocean zones to allow ecosystems to recover. There are over 17,000 MPAs worldwide, but only about 8% of the ocean is currently protected.</p>
        <p><strong>Community-based conservation</strong> in the Global South — such as locally managed marine areas in the Pacific Islands and community fish reserves in Southeast Asia — are proving highly effective at balancing conservation with livelihoods.</p>
        <p>Other solutions include reducing single-use plastics, supporting sustainable seafood, restoring mangroves and seagrass, and enforcing fishing regulations.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Overfishing</strong> — catching fish faster than populations can reproduce</li>
          <li><strong>Microplastics</strong> — plastic particles smaller than 5mm</li>
          <li><strong>Ocean acidification</strong> — decrease in ocean pH due to CO₂ absorption</li>
          <li><strong>Marine Protected Area (MPA)</strong> — a zone with restricted human activity to protect ecosystems</li>
        </ul>
      </div>
    `,
    badge: { icon: "🛡️", name: "Ocean Protector" }
  },
  {
    id: 4,
    icon: "🔬",
    title: "Oceanographic Data",
    difficulty: "Intermediate",
    duration: "12 min",
    description: "Explore how scientists collect and use data to study the oceans.",
    content: `
      <div class="module-section">
        <h3>How Do We Study the Ocean?</h3>
        <p>Oceanography is the scientific study of the ocean — its physics, chemistry, biology, and geology. Scientists use a range of tools and technologies to collect data from the surface to the deepest trenches.</p>
      </div>
      <div class="module-section">
        <h3>🛰️ Tools of Oceanography</h3>
        <p><strong>Satellites</strong> orbit Earth and measure sea surface temperature, ocean colour (which indicates phytoplankton), sea level height, and wave patterns from space.</p>
        <p><strong>Buoys and Argo floats</strong> — over 4,000 robotic Argo floats drift through the world's oceans, diving to 2,000 metres and measuring temperature and salinity as they rise back to the surface.</p>
        <p><strong>Sonar</strong> uses sound waves to map the ocean floor. It revealed that the ocean has mountains taller than Everest and canyons deeper than the Grand Canyon.</p>
        <p><strong>Submersibles and ROVs</strong> (Remotely Operated Vehicles) allow scientists to explore the deep sea directly, collecting samples and video from extreme environments.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> We have better maps of the surface of Mars than of the Earth's ocean floor. Over 80% of the ocean remains unmapped and unexplored.</div>
      </div>
      <div class="module-section">
        <h3>📊 Key Data Types</h3>
        <p><strong>Sea Surface Temperature (SST)</strong> — helps track climate change, predict El Niño/La Niña events, and monitor coral bleaching risk.</p>
        <p><strong>Salinity</strong> — the amount of dissolved salt in water. Changes in salinity affect ocean circulation and marine life distribution.</p>
        <p><strong>Sea level data</strong> — satellite altimetry measures the height of the sea surface to millimetre accuracy, crucial for monitoring sea-level rise (currently about 3.6mm per year).</p>
        <p><strong>Ocean colour</strong> — the greenness of the ocean indicates phytoplankton productivity, which forms the base of the marine food web.</p>
      </div>
      <div class="module-section">
        <h3>🌍 Open Data for Everyone</h3>
        <p>Open data initiatives like NASA's Ocean Color Web and NOAA's World Ocean Database allow students and researchers everywhere to access real oceanographic data for free, promoting global scientific collaboration.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Argo float</strong> — a robotic device that drifts through the ocean collecting data</li>
          <li><strong>SST</strong> — Sea Surface Temperature</li>
          <li><strong>Sonar</strong> — using sound waves to detect and map objects underwater</li>
          <li><strong>Phytoplankton</strong> — microscopic plants that form the base of the ocean food web</li>
        </ul>
      </div>
    `,
    badge: { icon: "🔬", name: "Data Diver" }
  },
  {
    id: 5,
    icon: "🐢",
    title: "Endangered Marine Species",
    difficulty: "Intermediate",
    duration: "14 min",
    description: "Learn about species at risk and the efforts to save them from extinction.",
    content: `
      <div class="module-section">
        <h3>Species at Risk</h3>
        <p>Many marine species are threatened with extinction due to human activities. The International Union for Conservation of Nature (IUCN) Red List shows that over <strong>1,550 marine species</strong> are currently at risk.</p>
      </div>
      <div class="module-section">
        <h3>🐢 Sea Turtles</h3>
        <p>Six of the seven sea turtle species are classified as vulnerable, endangered, or critically endangered. Threats include <strong>habitat loss</strong> (beach development destroys nesting sites), <strong>fishing bycatch</strong>, plastic ingestion, and climate change (which affects the sex ratio of hatchlings — warmer sand produces more females).</p>
        <p>Community-led turtle conservation programmes in countries like Costa Rica, Indonesia, and Mozambique have helped increase nesting numbers significantly.</p>
      </div>
      <div class="module-section">
        <h3>🦈 Sharks</h3>
        <p>Over <strong>one-third of all shark species</strong> are threatened with extinction. An estimated <strong>100 million sharks</strong> are killed every year, mainly for the shark fin trade. Sharks are apex predators that keep marine ecosystems in balance.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> Sharks have been on Earth for over 450 million years — they are older than trees! Yet in just a few decades, humans have pushed many species to the edge of extinction.</div>
      </div>
      <div class="module-section">
        <h3>🐋 Whales & Dolphins</h3>
        <p>Many whale species are still recovering from centuries of commercial whaling. The <strong>North Atlantic right whale</strong> has fewer than 350 individuals left. Threats today include ship strikes, fishing line entanglement, ocean noise pollution, and loss of prey due to climate change.</p>
      </div>
      <div class="module-section">
        <h3>🦭 Other Threatened Species</h3>
        <p><strong>Dugongs</strong> — gentle herbivores that graze on seagrass — are vulnerable due to habitat loss and bycatch. <strong>Seahorses</strong> are over-harvested for traditional medicine. <strong>Giant clams</strong> are poached for their shells in many Pacific islands.</p>
      </div>
      <div class="module-section">
        <h3>What's Being Done</h3>
        <p><strong>Bycatch</strong> — the accidental capture of non-target species — is one of the biggest threats. Solutions include circle hooks (which reduce turtle bycatch by 90%), turtle excluder devices in nets, and seasonal fishing closures.</p>
        <p>In the Global South, community education and sustainable fishing practices play a vital role in protecting threatened species.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Bycatch</strong> — accidental capture of non-target species in fishing gear</li>
          <li><strong>Apex predator</strong> — a predator at the top of the food chain</li>
          <li><strong>IUCN Red List</strong> — global inventory of the conservation status of species</li>
          <li><strong>Turtle excluder device (TED)</strong> — a grid in fishing nets that allows turtles to escape</li>
        </ul>
      </div>
    `,
    badge: { icon: "🐢", name: "Species Saver" }
  },
  {
    id: 6,
    icon: "🏝️",
    title: "Coastal Communities & The Sea",
    difficulty: "Beginner",
    duration: "10 min",
    description: "Explore how communities around the world depend on and live alongside the ocean.",
    content: `
      <div class="module-section">
        <h3>People and the Ocean</h3>
        <p>Over <strong>3 billion people</strong> depend on the ocean for their livelihoods, food, and culture. For many coastal communities in the Global South, the sea is not just a resource — it is central to their identity, traditions, and way of life.</p>
      </div>
      <div class="module-section">
        <h3>🐟 Small-Scale Fisheries</h3>
        <p><strong>Small-scale fisheries</strong> employ over <strong>90% of the world's fishers</strong> and provide crucial protein for billions of people, especially in developing countries. In many African, Asian, and Pacific Island communities, fishing is the primary source of income and nutrition.</p>
        <p>Unlike industrial fishing, small-scale fishers often use traditional methods that are more selective and sustainable — but they face growing pressure from industrial fleets, pollution, and climate change.</p>
        <div class="fact-box">🧠 <strong>Did You Know?</strong> Fish provides over 50% of animal protein intake in many West African and Pacific Island countries.</div>
      </div>
      <div class="module-section">
        <h3>🌊 Threats to Coastal Communities</h3>
        <p><strong>Sea-level rise</strong> threatens millions of people living in low-lying coastal areas. Small island nations like Tuvalu, Kiribati, and the Maldives could lose significant land area by 2100.</p>
        <p><strong>Extreme weather</strong> — tropical cyclones, storm surges, and flooding — disproportionately affect communities with limited infrastructure and resources.</p>
        <p><strong>Saltwater intrusion</strong> contaminates freshwater supplies and agricultural land in many coastal areas.</p>
      </div>
      <div class="module-section">
        <h3>🧓 Traditional Knowledge</h3>
        <p>Indigenous and traditional knowledge about the sea — such as reading ocean swells for navigation, predicting fish behaviour by moon phases, and managing fishing grounds through customary rules — is invaluable for sustainable marine management.</p>
        <p>Integrating this knowledge with modern science creates more effective and culturally appropriate conservation strategies.</p>
      </div>
      <div class="module-section">
        <h3>Building Resilience</h3>
        <p>Coastal communities are adapting through mangrove restoration, coral gardening, diversifying livelihoods, establishing community marine reserves, and developing early warning systems for natural disasters.</p>
      </div>
      <div class="key-terms">
        <h4>📖 Key Terms</h4>
        <ul>
          <li><strong>Small-scale fisheries</strong> — local fishing operations using traditional methods</li>
          <li><strong>Sea-level rise</strong> — increase in ocean height due to global warming</li>
          <li><strong>Saltwater intrusion</strong> — seawater contaminating freshwater sources</li>
          <li><strong>Climate resilience</strong> — the ability to prepare for and recover from climate impacts</li>
        </ul>
      </div>
    `,
    badge: { icon: "🏝️", name: "Community Champion" }
  }
];

const CHALLENGES = [
  {
    id: 1,
    icon: "🗑️",
    title: "Beach Cleanup Planner",
    description: "Plan a beach cleanup for your local coast. Identify the top 5 pollutants you would expect to find and explain how each one harms marine life.",
    points: 40,
    type: "written",
    prompt: "List 5 pollutants commonly found on beaches near you. For each one, write one sentence explaining how it harms marine life.",
    hint: "Think about plastic bottles, fishing nets, straws, cigarette butts, and food packaging."
  },
  {
    id: 2,
    icon: "🐟",
    title: "Sustainable Fishing Report",
    description: "Research a fishing method used in your region. Write a short report on whether it is sustainable and suggest improvements.",
    points: 50,
    type: "written",
    prompt: "Name one fishing method used in your area. Is it sustainable? What improvements would you suggest?",
    hint: "Consider methods like net fishing, line fishing, dynamite fishing, spearfishing, or trawling."
  },
  {
    id: 3,
    icon: "🌡️",
    title: "Temperature Impact Analysis",
    description: "Describe how rising ocean temperatures might affect marine species in your area. Think about coral, fish, and coastal ecosystems.",
    points: 45,
    type: "written",
    prompt: "How would a 2°C rise in sea temperature affect marine life near your coast? Mention at least 2 species or ecosystems.",
    hint: "Think about coral bleaching, fish migration, mangrove health, and changes in fishing patterns."
  },
  {
    id: 4,
    icon: "🗺️",
    title: "Mangrove Mapping Mission",
    description: "Identify mangrove areas near your coast. Explain why these areas are important and what threats they face.",
    points: 40,
    type: "written",
    prompt: "Describe a mangrove area you know about (or research one near your country). Why is it important? What threatens it?",
    hint: "Mangroves protect coastlines, store carbon, and serve as fish nurseries. Threats include deforestation, shrimp farming, and pollution."
  },
  {
    id: 5,
    icon: "📢",
    title: "Ocean Awareness Campaign",
    description: "Write a short message (like a poster slogan) to raise awareness about ocean pollution in your community.",
    points: 35,
    type: "written",
    prompt: "Write a catchy slogan or short paragraph (2-3 sentences) that could go on a poster to convince people in your community to reduce ocean pollution.",
    hint: "Make it personal and local. Why should people in YOUR community care about the ocean?"
  },
  {
    id: 6,
    icon: "🔗",
    title: "Food Chain Builder",
    description: "Build a marine food chain with at least 4 levels, from tiny plankton to top predators. Explain what happens if one link is removed.",
    points: 45,
    type: "written",
    prompt: "Write a marine food chain with at least 4 organisms (e.g., phytoplankton → small fish → big fish → shark). What would happen if one organism disappeared?",
    hint: "Start with phytoplankton or algae at the bottom. Think about how removing one species affects everything above and below it."
  },
  {
    id: 7,
    icon: "🏖️",
    title: "Coastal Change Reporter",
    description: "Interview a family member or elder about how the coastline near you has changed over the years. Report your findings.",
    points: 55,
    type: "written",
    prompt: "Ask an older family member: 'How has the coast/ocean changed since you were young?' Summarise what they told you in 3-5 sentences.",
    hint: "Ask about changes in fish catches, beach size, water quality, storms, or coral health."
  },
  {
    id: 8,
    icon: "💡",
    title: "Pollution Solution Designer",
    description: "Invent a simple, low-cost solution to reduce plastic pollution in your local waterways or coastline.",
    points: 50,
    type: "written",
    prompt: "Describe a simple invention or system that could reduce plastic waste entering the ocean near you. How would it work? What materials would you need?",
    hint: "Think about trash traps in rivers, community recycling programmes, or alternatives to single-use plastics using local materials."
  }
];

const QUIZ_QUESTIONS = [
  // Marine Ecosystems
  {
    question: "What percentage of the Earth's surface is covered by oceans?",
    options: ["50%", "61%", "71%", "80%"],
    answer: 2,
    explanation: "Oceans cover approximately 71% of the Earth's surface."
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3,
    explanation: "The Pacific Ocean is the largest, covering about 63 million square miles."
  },
  {
    question: "What are coral reefs sometimes called?",
    options: ["Gardens of the sea", "Rainforests of the sea", "Deserts of the sea", "Mountains of the sea"],
    answer: 1,
    explanation: "Coral reefs support 25% of all marine species, earning them the nickname 'rainforests of the sea'."
  },
  {
    question: "What percentage of marine species do coral reefs support?",
    options: ["5%", "10%", "25%", "50%"],
    answer: 2,
    explanation: "Despite covering less than 1% of the ocean floor, coral reefs support about 25% of all marine species."
  },
  {
    question: "Why are mangrove forests important?",
    options: [
      "They produce oil for cooking",
      "They protect coastlines and serve as fish nurseries",
      "They are used to build boats",
      "They produce fresh drinking water"
    ],
    answer: 1,
    explanation: "Mangroves protect shorelines from erosion, filter pollutants, store carbon, and serve as nurseries for many fish species."
  },
  // Ocean Currents & Tides
  {
    question: "What causes ocean tides?",
    options: ["Wind patterns", "Gravitational pull of the Moon and Sun", "Volcanic activity", "Earth's magnetic field"],
    answer: 1,
    explanation: "Tides are caused by the gravitational pull of the Moon and the Sun on Earth's water."
  },
  {
    question: "What is the Coriolis effect?",
    options: [
      "Warming of the ocean surface",
      "Deflection of moving water due to Earth's rotation",
      "The pull of gravity on ocean water",
      "Cooling of deep-sea water"
    ],
    answer: 1,
    explanation: "The Coriolis effect deflects moving water to the right in the Northern Hemisphere and left in the Southern Hemisphere."
  },
  {
    question: "What drives deep-water ocean currents?",
    options: [
      "Wind and waves",
      "Temperature and salinity differences",
      "Tidal forces only",
      "Submarine activity"
    ],
    answer: 1,
    explanation: "Deep-water currents (thermohaline circulation) are driven by differences in water density caused by temperature and salinity."
  },
  {
    question: "What is a 'spring tide'?",
    options: [
      "A tide that only happens in spring",
      "An extra-high tide when Sun, Moon, and Earth align",
      "A tide caused by rivers flowing into the sea",
      "A gentle, calm tide"
    ],
    answer: 1,
    explanation: "Spring tides occur when the Sun, Moon, and Earth are aligned, producing especially high and low tides."
  },
  {
    question: "How long does it take for deep ocean water to complete one cycle of thermohaline circulation?",
    options: ["1 year", "10 years", "100 years", "About 1,000 years"],
    answer: 3,
    explanation: "The thermohaline circulation — the global conveyor belt — takes about 1,000 years to complete a full cycle."
  },
  // Marine Conservation
  {
    question: "What is coral bleaching?",
    options: [
      "When coral is painted white",
      "When coral loses its symbiotic algae due to stress",
      "When coral grows too large",
      "When coral is cleaned by fish"
    ],
    answer: 1,
    explanation: "Coral bleaching occurs when stressed coral expels the colourful algae living in its tissues, turning white."
  },
  {
    question: "Approximately how much plastic enters the oceans each year?",
    options: ["1 million tonnes", "4 million tonnes", "8 million tonnes", "20 million tonnes"],
    answer: 2,
    explanation: "Over 8 million tonnes of plastic enter the oceans every year — like a truckload every minute."
  },
  {
    question: "What are Marine Protected Areas (MPAs)?",
    options: [
      "Areas where fishing is maximised",
      "Zones where human activity is restricted to protect ecosystems",
      "Military zones in the ocean",
      "Deep-sea mining areas"
    ],
    answer: 1,
    explanation: "MPAs restrict human activities to help marine ecosystems recover and maintain biodiversity."
  },
  {
    question: "What percentage of CO₂ produced by humans does the ocean absorb?",
    options: ["About 5%", "About 10%", "About 30%", "About 70%"],
    answer: 2,
    explanation: "The ocean absorbs about 30% of human-produced CO₂, which causes ocean acidification."
  },
  {
    question: "What are microplastics?",
    options: [
      "Tiny robots that clean the ocean",
      "Plastic particles smaller than 5mm",
      "A type of biodegradable plastic",
      "Microscopic sea creatures"
    ],
    answer: 1,
    explanation: "Microplastics are plastic fragments smaller than 5mm found throughout the ocean, even in the deepest trenches."
  },
  // Oceanographic Data
  {
    question: "What do Argo floats measure in the ocean?",
    options: [
      "Fish populations",
      "Temperature and salinity",
      "Plastic pollution levels",
      "Whale migration routes"
    ],
    answer: 1,
    explanation: "Over 4,000 Argo floats drift through the ocean, diving to 2,000m and measuring temperature and salinity."
  },
  {
    question: "How much of the ocean floor has been mapped in detail?",
    options: ["Less than 20%", "About 50%", "About 75%", "Almost 100%"],
    answer: 0,
    explanation: "Over 80% of the ocean floor remains unmapped — we have better maps of Mars!"
  },
  {
    question: "What does SST stand for in oceanography?",
    options: ["Sub-Surface Temperature", "Sea Surface Temperature", "Standard Sea Test", "Satellite Sonar Technology"],
    answer: 1,
    explanation: "SST (Sea Surface Temperature) is a key measurement for tracking climate change and coral bleaching risk."
  },
  {
    question: "What technology uses sound waves to map the ocean floor?",
    options: ["Radar", "Sonar", "GPS", "Lidar"],
    answer: 1,
    explanation: "Sonar (Sound Navigation and Ranging) sends sound pulses that bounce off the seafloor to create detailed maps."
  },
  {
    question: "What does the 'colour' of the ocean indicate to scientists?",
    options: [
      "How deep it is",
      "How warm it is",
      "How much phytoplankton is present",
      "How salty it is"
    ],
    answer: 2,
    explanation: "Ocean colour (greenness) indicates phytoplankton concentration, which is the base of the marine food web."
  },
  // Endangered Species
  {
    question: "What is bycatch?",
    options: [
      "Fish that escape from nets",
      "A method of fish farming",
      "Accidental capture of non-target species",
      "Catching fish at night"
    ],
    answer: 2,
    explanation: "Bycatch is the accidental capture of non-target species (like turtles, dolphins, or sharks) in fishing gear."
  },
  {
    question: "Approximately how many sharks are killed every year?",
    options: ["1 million", "10 million", "100 million", "1 billion"],
    answer: 2,
    explanation: "An estimated 100 million sharks are killed every year, mainly for the shark fin trade."
  },
  {
    question: "How does climate change affect sea turtle hatchlings?",
    options: [
      "It makes them grow faster",
      "Warmer sand temperatures produce more female turtles",
      "It changes their shell colour",
      "It has no effect on turtles"
    ],
    answer: 1,
    explanation: "Sea turtle sex is determined by nest temperature. Warmer temperatures produce more females, threatening population balance."
  },
  {
    question: "How long have sharks existed on Earth?",
    options: ["1 million years", "50 million years", "Over 450 million years", "10,000 years"],
    answer: 2,
    explanation: "Sharks have been on Earth for over 450 million years — they are older than trees and even dinosaurs!"
  },
  {
    question: "What is a turtle excluder device (TED)?",
    options: [
      "A fence around nesting beaches",
      "A grid in fishing nets that lets turtles escape",
      "A GPS tracker attached to turtles",
      "A type of fish trap"
    ],
    answer: 1,
    explanation: "TEDs are grids fitted in fishing nets that allow sea turtles to escape while retaining the target catch."
  },
  // Coastal Communities
  {
    question: "How many people globally depend on the ocean for their livelihoods?",
    options: ["500 million", "1 billion", "Over 3 billion", "100 million"],
    answer: 2,
    explanation: "Over 3 billion people depend on the ocean for food, income, and cultural traditions."
  },
  {
    question: "What percentage of the world's fishers work in small-scale fisheries?",
    options: ["About 10%", "About 30%", "About 60%", "Over 90%"],
    answer: 3,
    explanation: "Small-scale fisheries employ over 90% of the world's fishers and are vital for food security in developing countries."
  },
  {
    question: "What is saltwater intrusion?",
    options: [
      "Adding salt to freshwater for cooking",
      "Seawater contaminating freshwater sources",
      "Fish moving from the sea to rivers",
      "Salt mining near the coast"
    ],
    answer: 1,
    explanation: "Saltwater intrusion occurs when rising seas push seawater into freshwater aquifers and agricultural land."
  },
  {
    question: "Which of these is a threat to marine biodiversity?",
    options: ["Marine Protected Areas", "Sustainable fishing", "Ocean acidification", "Coral restoration"],
    answer: 2,
    explanation: "Ocean acidification — caused by the ocean absorbing excess CO₂ — weakens shells and coral skeletons."
  },
  {
    question: "In which countries does fish provide over 50% of animal protein?",
    options: [
      "USA and Canada",
      "Many West African and Pacific Island countries",
      "European countries",
      "Only Japan"
    ],
    answer: 1,
    explanation: "Fish is the primary animal protein source in many developing coastal nations in Africa and the Pacific."
  }
];

const LEADERBOARD_DATA = [
  { name: "Amara K.", points: 720, badges: 6, region: "West Africa" },
  { name: "Luis M.", points: 650, badges: 5, region: "Caribbean" },
  { name: "Fatima Z.", points: 580, badges: 5, region: "East Africa" },
  { name: "Priya S.", points: 530, badges: 4, region: "South Asia" },
  { name: "Raj P.", points: 480, badges: 4, region: "South Asia" },
  { name: "Ngozi O.", points: 440, badges: 3, region: "West Africa" },
  { name: "Maria T.", points: 400, badges: 3, region: "Pacific Islands" },
  { name: "Chen W.", points: 370, badges: 3, region: "Southeast Asia" },
  { name: "Sofia R.", points: 330, badges: 2, region: "South America" },
  { name: "Kwame A.", points: 290, badges: 2, region: "West Africa" },
  { name: "Aisha M.", points: 250, badges: 2, region: "East Africa" },
  { name: "Tomas J.", points: 210, badges: 1, region: "Caribbean" },
  { name: "Leilani P.", points: 180, badges: 1, region: "Pacific Islands" },
  { name: "David N.", points: 140, badges: 1, region: "Southeast Asia" },
  { name: "Esperanza V.", points: 100, badges: 0, region: "Central America" }
];

// ===== Levels & XP =====
const LEVELS = [
  { name: "Sea Sprout", minPoints: 0, icon: "🌱" },
  { name: "Tide Walker", minPoints: 100, icon: "🦀" },
  { name: "Wave Rider", minPoints: 250, icon: "🏄" },
  { name: "Reef Explorer", minPoints: 450, icon: "🐠" },
  { name: "Current Navigator", minPoints: 700, icon: "🧭" },
  { name: "Deep Diver", minPoints: 1000, icon: "🤿" },
  { name: "Ocean Guardian", minPoints: 1400, icon: "🔱" }
];

function getLevel(points) {
  let level = LEVELS[0];
  for (const l of LEVELS) {
    if (points >= l.minPoints) level = l;
  }
  return level;
}

function getNextLevel(points) {
  for (const l of LEVELS) {
    if (points < l.minPoints) return l;
  }
  return null;
}

// ===== State =====
const state = {
  playerName: "Explorer",
  playerLocation: "",
  playerDepartment: "",
  points: 0,
  badges: [],
  completedModules: [],
  completedChallenges: [],
  challengeResponses: {},
  quizHistory: [],
  streak: 0,
  lastVisit: null,
  totalQuizzesTaken: 0,
  bestQuizScore: 0,
  quizState: null
};

function loadState() {
  try {
    const saved = localStorage.getItem("oceanquest_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
    }
  } catch (e) {
    // Ignore invalid data
  }
}

function saveState() {
  try {
    localStorage.setItem("oceanquest_state", JSON.stringify({
      playerName: state.playerName,
      playerLocation: state.playerLocation,
      playerDepartment: state.playerDepartment,
      points: state.points,
      badges: state.badges,
      completedModules: state.completedModules,
      completedChallenges: state.completedChallenges,
      challengeResponses: state.challengeResponses,
      quizHistory: state.quizHistory,
      streak: state.streak,
      lastVisit: state.lastVisit,
      totalQuizzesTaken: state.totalQuizzesTaken,
      bestQuizScore: state.bestQuizScore
    }));
  } catch (e) {
    // Storage unavailable
  }
}

// ===== Streak =====
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastVisit) {
    const last = new Date(state.lastVisit);
    const diff = Math.floor((new Date(today) - last) / (1000 * 60 * 60 * 24));
    if (diff === 1) {
      state.streak++;
      if (state.streak >= 7 && !state.badges.find(b => b.name === "Week Warrior")) {
        state.badges.push({ icon: "🔥", name: "Week Warrior" });
        showNotification("🔥 Badge earned: Week Warrior! 7-day streak!");
      }
    } else if (diff > 1) {
      state.streak = 1;
    }
  } else {
    state.streak = 1;
  }
  state.lastVisit = today;
  saveState();
}

// ===== Navigation =====
function initNavigation() {
  const links = document.querySelectorAll(".nav-link");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      showSection(sectionId);
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      navLinks.classList.remove("open");
    });
  });

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  const section = document.getElementById(id);
  if (section) {
    section.classList.add("active");
    if (id === "leaderboard") renderLeaderboard();
    if (id === "visitors") renderVisitors();
    if (id === "suggestions") renderSuggestions();
  }
}

// ===== Onboarding =====
function showOnboarding() {
  document.getElementById("onboarding-overlay").classList.remove("hidden");
  document.getElementById("onboarding-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("onboard-name").value.trim();
    const location = document.getElementById("onboard-location").value.trim();
    const department = document.getElementById("onboard-department").value.trim();

    if (!name || !location || !department) return;

    state.playerName = name;
    state.playerLocation = location;
    state.playerDepartment = department;
    saveState();

    // Save visitor record
    addVisitorRecord(name, location, department);

    document.getElementById("onboarding-overlay").classList.add("hidden");
    showNotification(`Welcome aboard, ${name}! 🌊 Let's explore the ocean!`);
    updateDashboard();
    renderLeaderboard();
    renderVisitors();
  });
}

// ===== Dashboard =====
function updateDashboard() {
  document.getElementById("player-name").textContent = state.playerName;
  document.getElementById("total-points").textContent = state.points;
  document.getElementById("total-badges").textContent = state.badges.length;
  document.getElementById("modules-completed").textContent = state.completedModules.length + "/" + MODULES.length;

  // Level
  const level = getLevel(state.points);
  const nextLevel = getNextLevel(state.points);
  document.getElementById("level-display").textContent = level.icon + " " + level.name;

  // Level progress bar
  const progressEl = document.getElementById("level-progress-fill");
  const levelInfoEl = document.getElementById("level-info");
  if (nextLevel) {
    const prevMin = level.minPoints;
    const needed = nextLevel.minPoints - prevMin;
    const earned = state.points - prevMin;
    const pct = Math.min((earned / needed) * 100, 100);
    progressEl.style.width = pct + "%";
    levelInfoEl.textContent = `${nextLevel.minPoints - state.points} pts to ${nextLevel.icon} ${nextLevel.name}`;
  } else {
    progressEl.style.width = "100%";
    levelInfoEl.textContent = "Max level reached!";
  }

  // Streak
  document.getElementById("streak-display").textContent = state.streak + " day" + (state.streak !== 1 ? "s" : "");

  // Rank
  const allPoints = LEADERBOARD_DATA.map(e => e.points).concat(state.points);
  allPoints.sort((a, b) => b - a);
  const rank = allPoints.indexOf(state.points) + 1;
  document.getElementById("rank-display").textContent = "#" + rank;

  // Badges
  const container = document.getElementById("badges-container");
  if (state.badges.length === 0) {
    container.innerHTML = '<p class="empty-state">Complete modules and challenges to earn badges!</p>';
  } else {
    container.innerHTML = state.badges.map(b =>
      `<div class="badge-item">
        <span class="badge-icon">${b.icon}</span>
        <span class="badge-name">${b.name}</span>
      </div>`
    ).join("");
  }

  // Recent activity
  renderRecentActivity();
}

function renderRecentActivity() {
  const el = document.getElementById("recent-activity");
  const activities = [];

  state.completedModules.forEach(id => {
    const mod = MODULES.find(m => m.id === id);
    if (mod) activities.push({ text: `Completed module: ${mod.title}`, icon: "📚" });
  });
  state.completedChallenges.forEach(id => {
    const ch = CHALLENGES.find(c => c.id === id);
    if (ch) activities.push({ text: `Completed challenge: ${ch.title}`, icon: "🏆" });
  });
  if (state.totalQuizzesTaken > 0) {
    activities.push({ text: `Quizzes taken: ${state.totalQuizzesTaken} (Best: ${state.bestQuizScore}/10)`, icon: "📝" });
  }

  if (activities.length === 0) {
    el.innerHTML = '<p class="empty-state">Start exploring to build your activity log!</p>';
  } else {
    el.innerHTML = activities.slice(-5).reverse().map(a =>
      `<div class="activity-item"><span class="activity-icon">${a.icon}</span> ${a.text}</div>`
    ).join("");
  }
}

// ===== Modules =====
function renderModules() {
  const grid = document.getElementById("modules-grid");
  grid.innerHTML = MODULES.map(m => {
    const done = state.completedModules.includes(m.id);
    return `<div class="module-card ${done ? "completed" : ""}" data-id="${m.id}">
      <div class="module-header">
        <div class="module-icon">${m.icon}</div>
        <div class="module-meta">
          <span class="module-difficulty ${m.difficulty.toLowerCase()}">${m.difficulty}</span>
          <span class="module-duration">⏱ ${m.duration}</span>
        </div>
      </div>
      <h3>${m.title}</h3>
      <p>${m.description}</p>
      <span class="module-status">${done ? "✓ Completed" : "Start Learning"}</span>
    </div>`;
  }).join("");

  grid.querySelectorAll(".module-card").forEach(card => {
    card.addEventListener("click", () => openModule(Number(card.dataset.id)));
  });
}

function openModule(id) {
  const mod = MODULES.find(m => m.id === id);
  if (!mod) return;

  const modal = document.getElementById("module-modal");
  document.getElementById("modal-title").textContent = mod.icon + " " + mod.title;
  document.getElementById("modal-body").innerHTML = mod.content;

  const completeBtn = document.getElementById("modal-complete-btn");
  const done = state.completedModules.includes(id);
  completeBtn.style.display = done ? "none" : "inline-block";
  completeBtn.onclick = () => completeModule(id);

  modal.classList.remove("hidden");
}

function completeModule(id) {
  if (state.completedModules.includes(id)) return;

  const mod = MODULES.find(m => m.id === id);
  state.completedModules.push(id);
  state.points += 50;

  if (mod.badge && !state.badges.find(b => b.name === mod.badge.name)) {
    state.badges.push(mod.badge);
    showNotification(`🏅 Badge earned: ${mod.badge.icon} ${mod.badge.name}!`);
  } else {
    showNotification(`+50 points! Module completed.`);
  }

  // Check for "All Modules" badge
  if (state.completedModules.length === MODULES.length && !state.badges.find(b => b.name === "Ocean Scholar")) {
    state.badges.push({ icon: "🎓", name: "Ocean Scholar" });
    state.points += 100;
    showNotification("🎓 Badge earned: Ocean Scholar! All modules completed! +100 bonus points!");
  }

  saveState();
  updateDashboard();
  renderModules();
  document.getElementById("module-modal").classList.add("hidden");
}

// Close modal
document.querySelector(".modal-close").addEventListener("click", () => {
  document.getElementById("module-modal").classList.add("hidden");
});
document.getElementById("module-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.add("hidden");
  }
});

// ===== Challenges =====
function renderChallenges() {
  const list = document.getElementById("challenges-list");
  list.innerHTML = CHALLENGES.map(c => {
    const done = state.completedChallenges.includes(c.id);
    const response = state.challengeResponses[c.id];
    return `<div class="challenge-card ${done ? "done" : ""}">
      <div class="challenge-icon">${c.icon}</div>
      <div class="challenge-info">
        <h3>${c.title} <span class="challenge-pts">+${c.points} pts</span></h3>
        <p>${c.description}</p>
        ${done ? `<div class="challenge-response-preview">"${response ? (response.length > 100 ? response.substring(0, 100) + '...' : response) : ''}"</div>` : ""}
      </div>
      <button class="btn ${done ? "btn-success" : "btn-accent"} challenge-btn" data-id="${c.id}" ${done ? "disabled" : ""}>
        ${done ? "✓ Done" : "Start"}
      </button>
    </div>`;
  }).join("");

  list.querySelectorAll(".challenge-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => openChallenge(Number(btn.dataset.id)));
  });
}

function openChallenge(id) {
  const challenge = CHALLENGES.find(c => c.id === id);
  if (!challenge) return;

  const modal = document.getElementById("challenge-modal");
  document.getElementById("challenge-modal-title").textContent = challenge.icon + " " + challenge.title;
  document.getElementById("challenge-prompt").textContent = challenge.prompt;
  document.getElementById("challenge-hint").textContent = "💡 Hint: " + challenge.hint;
  document.getElementById("challenge-response").value = "";
  document.getElementById("challenge-word-count").textContent = "0 words";
  document.getElementById("challenge-submit-btn").disabled = true;

  const textarea = document.getElementById("challenge-response");
  const wordCount = document.getElementById("challenge-word-count");
  const submitBtn = document.getElementById("challenge-submit-btn");

  textarea.oninput = () => {
    const words = textarea.value.trim().split(/\s+/).filter(w => w.length > 0).length;
    wordCount.textContent = words + " word" + (words !== 1 ? "s" : "");
    submitBtn.disabled = words < 10;
  };

  submitBtn.onclick = () => submitChallenge(id);
  modal.classList.remove("hidden");
}

function submitChallenge(id) {
  const response = document.getElementById("challenge-response").value.trim();
  if (response.split(/\s+/).filter(w => w.length > 0).length < 10) return;

  const challenge = CHALLENGES.find(c => c.id === id);
  state.completedChallenges.push(id);
  state.challengeResponses[id] = response;
  state.points += challenge.points;

  // Check for "All Challenges" badge
  if (state.completedChallenges.length === CHALLENGES.length && !state.badges.find(b => b.name === "Challenge Champion")) {
    state.badges.push({ icon: "💪", name: "Challenge Champion" });
    state.points += 100;
    showNotification("💪 Challenge Champion! All challenges completed! +100 bonus!");
  } else {
    showNotification(`+${challenge.points} points! Great work on "${challenge.title}"!`);
  }

  document.getElementById("challenge-modal").classList.add("hidden");
  saveState();
  updateDashboard();
  renderChallenges();
}

// Close challenge modal
document.querySelector("#challenge-modal .modal-close").addEventListener("click", () => {
  document.getElementById("challenge-modal").classList.add("hidden");
});
document.getElementById("challenge-modal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.add("hidden");
  }
});

// ===== Quiz =====
function initQuiz() {
  document.getElementById("start-quiz-btn").addEventListener("click", startQuiz);
  document.getElementById("quiz-retry-btn").addEventListener("click", startQuiz);
  document.getElementById("quiz-next-btn").addEventListener("click", nextQuestion);
}

function startQuiz() {
  state.quizState = {
    currentIndex: 0,
    score: 0,
    answered: false,
    questions: shuffleArray([...QUIZ_QUESTIONS]).slice(0, 10)
  };

  document.getElementById("quiz-intro").classList.add("hidden");
  document.getElementById("quiz-results").classList.add("hidden");
  document.getElementById("quiz-area").classList.remove("hidden");
  document.getElementById("quiz-total").textContent = state.quizState.questions.length;

  renderQuestion();
}

function renderQuestion() {
  const qs = state.quizState;
  const q = qs.questions[qs.currentIndex];

  document.getElementById("quiz-current").textContent = qs.currentIndex + 1;
  document.getElementById("quiz-progress-fill").style.width =
    ((qs.currentIndex / qs.questions.length) * 100) + "%";
  document.getElementById("quiz-question").textContent = q.question;
  document.getElementById("quiz-feedback").classList.add("hidden");
  document.getElementById("quiz-next-btn").classList.add("hidden");

  const optionsEl = document.getElementById("quiz-options");
  optionsEl.innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" data-index="${i}">${opt}</button>`
  ).join("");

  qs.answered = false;

  optionsEl.querySelectorAll(".quiz-option").forEach(btn => {
    btn.addEventListener("click", () => answerQuestion(Number(btn.dataset.index)));
  });
}

function answerQuestion(selectedIndex) {
  const qs = state.quizState;
  if (qs.answered) return;
  qs.answered = true;

  const q = qs.questions[qs.currentIndex];
  const correct = selectedIndex === q.answer;

  const buttons = document.querySelectorAll(".quiz-option");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === selectedIndex && !correct) btn.classList.add("wrong");
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.classList.remove("hidden", "correct", "wrong");

  if (correct) {
    qs.score++;
    feedback.classList.add("correct");
    feedback.textContent = "✓ Correct! " + (q.explanation || "Well done.");
  } else {
    feedback.classList.add("wrong");
    feedback.textContent = "✗ " + (q.explanation || `The answer is: ${q.options[q.answer]}`);
  }

  document.getElementById("quiz-next-btn").classList.remove("hidden");
}

function nextQuestion() {
  const qs = state.quizState;
  qs.currentIndex++;

  if (qs.currentIndex >= qs.questions.length) {
    finishQuiz();
  } else {
    renderQuestion();
  }
}

function finishQuiz() {
  const qs = state.quizState;
  const total = qs.questions.length;
  const earned = qs.score * 10;
  const pct = Math.round((qs.score / total) * 100);

  state.points += earned;
  state.totalQuizzesTaken++;
  if (qs.score > state.bestQuizScore) state.bestQuizScore = qs.score;

  // Star rating
  let stars = "⭐";
  if (pct >= 50) stars = "⭐⭐";
  if (pct >= 70) stars = "⭐⭐⭐";
  if (pct >= 90) stars = "⭐⭐⭐⭐";
  if (pct === 100) stars = "⭐⭐⭐⭐⭐";

  // Perfect score badge
  if (qs.score === total && !state.badges.find(b => b.name === "Quiz Master")) {
    state.badges.push({ icon: "🧠", name: "Quiz Master" });
    state.points += 50;
    showNotification("🧠 Badge earned: Quiz Master! Perfect score!");
  } else {
    showNotification(`Quiz complete! +${earned} points earned.`);
  }

  // Quiz count badge
  if (state.totalQuizzesTaken >= 5 && !state.badges.find(b => b.name === "Quiz Enthusiast")) {
    state.badges.push({ icon: "📝", name: "Quiz Enthusiast" });
    state.points += 30;
  }

  document.getElementById("quiz-area").classList.add("hidden");
  document.getElementById("quiz-results").classList.remove("hidden");
  document.getElementById("quiz-score").innerHTML =
    `<div class="quiz-stars">${stars}</div>` +
    `<p>You got <strong>${qs.score}</strong> out of <strong>${total}</strong> correct (${pct}%)</p>` +
    `<p class="quiz-earned">+${earned} points</p>` +
    `<p class="quiz-stats-line">Quizzes taken: ${state.totalQuizzesTaken} | Best score: ${state.bestQuizScore}/${total}</p>`;

  saveState();
  updateDashboard();
}

// ===== Leaderboard =====
function renderLeaderboard() {
  const body = document.getElementById("leaderboard-body");

  const entries = [...LEADERBOARD_DATA, {
    name: state.playerName + " (You)",
    points: state.points,
    badges: state.badges.length,
    region: state.playerLocation || "—",
    isUser: true
  }];

  entries.sort((a, b) => b.points - a.points);

  body.innerHTML = entries.map((entry, i) => {
    const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1);
    return `<tr class="${entry.isUser ? "current-user" : ""}">
      <td>${medal}</td>
      <td>${entry.name}</td>
      <td>${entry.region || "—"}</td>
      <td><strong>${entry.points}</strong></td>
      <td>${entry.badges}</td>
    </tr>`;
  }).join("");
}

// ===== Reset Progress =====
function initSettings() {
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset ALL your progress? This cannot be undone.")) {
      localStorage.removeItem("oceanquest_state");
      location.reload();
    }
  });
}

// ===== Notification =====
function showNotification(text) {
  const el = document.getElementById("notification");
  document.getElementById("notification-text").textContent = text;
  el.classList.remove("hidden");
  el.classList.add("show");

  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.classList.add("hidden"), 300);
  }, 3000);
}

// ===== Visitors =====
function getVisitors() {
  try {
    const data = localStorage.getItem("oceanquest_visitors");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function addVisitorRecord(name, location, department) {
  const visitors = getVisitors();
  const now = new Date();
  visitors.push({
    name: name,
    location: location,
    department: department,
    date: now.toISOString()
  });
  try {
    localStorage.setItem("oceanquest_visitors", JSON.stringify(visitors));
  } catch (e) {
    // Storage unavailable
  }
}

function renderVisitors() {
  const visitors = getVisitors();
  const body = document.getElementById("visitors-body");
  const countEl = document.getElementById("visitor-count");

  if (!body) return;

  countEl.textContent = visitors.length;

  if (visitors.length === 0) {
    body.innerHTML = '<tr><td colspan="5" style="text-align:center; color: var(--text-dim); padding: 2rem;">No visitors yet. Be the first!</td></tr>';
    return;
  }

  // Show newest first
  const sorted = [...visitors].reverse();
  body.innerHTML = sorted.map((v, i) => {
    const d = new Date(v.date);
    const dateStr = d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    const timeStr = d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    return `<tr>
      <td>${visitors.length - i}</td>
      <td><strong>${escapeHtml(v.name)}</strong></td>
      <td>${escapeHtml(v.location)}</td>
      <td>${escapeHtml(v.department)}</td>
      <td>${dateStr}, ${timeStr}</td>
    </tr>`;
  }).join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ===== Utilities =====
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ===== Suggestions =====
function getSuggestions() {
  try {
    return JSON.parse(localStorage.getItem("oceanquest_suggestions")) || [];
  } catch { return []; }
}

function addSuggestion(name, topic, text, rating) {
  const suggestions = getSuggestions();
  suggestions.unshift({
    name: name,
    topic: topic,
    text: text,
    rating: rating,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("oceanquest_suggestions", JSON.stringify(suggestions));
}

function renderSuggestions() {
  const suggestions = getSuggestions();
  const container = document.getElementById("suggestions-cards");
  const emptyMsg = document.getElementById("no-suggestions");
  if (!container) return;

  if (suggestions.length === 0) {
    container.innerHTML = "";
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  container.innerHTML = suggestions.map(s => {
    const r = parseInt(s.rating) || 0;
    const stars = Array.from({length: 7}, (_, i) =>
      `<span class="${i < r ? 'star-filled' : 'star-empty'}">★</span>`
    ).join("");
    return `
    <div class="suggestion-card">
      <div class="suggestion-card-header">
        <span class="suggestion-card-name">${escapeHtml(s.name)}</span>
        <span class="suggestion-card-topic">${escapeHtml(s.topic)}</span>
      </div>
      <p class="suggestion-card-text">${escapeHtml(s.text)}</p>
      <div class="suggestion-card-rating">${stars}</div>
      <span class="suggestion-card-date">${escapeHtml(s.date)}</span>
    </div>`;
  }).join("");

  // Update rating summary
  updateRatingSummary(suggestions);
}

function updateRatingSummary(suggestions) {
  const bigVal = document.getElementById("rating-big-value");
  const starsDisplay = document.getElementById("rating-stars-display");
  const countEl = document.getElementById("rating-count");
  if (!bigVal) return;

  const rated = suggestions.filter(s => parseInt(s.rating) > 0);
  if (rated.length === 0) {
    bigVal.textContent = "—";
    starsDisplay.innerHTML = "";
    countEl.textContent = "No ratings yet";
    return;
  }

  const avg = rated.reduce((sum, s) => sum + parseInt(s.rating), 0) / rated.length;
  bigVal.textContent = avg.toFixed(1);
  const rounded = Math.round(avg);
  starsDisplay.innerHTML = Array.from({length: 7}, (_, i) =>
    `<span class="${i < rounded ? 'star-filled' : 'star-empty'}">★</span>`
  ).join("");
  countEl.textContent = `Based on ${rated.length} rating${rated.length !== 1 ? 's' : ''}`;
}

function initStarRating() {
  const container = document.getElementById("star-rating");
  const hiddenInput = document.getElementById("suggestion-rating");
  const label = document.getElementById("star-rating-label");
  if (!container) return;

  const labels = ["", "Terrible", "Poor", "Fair", "Good", "Great", "Amazing", "Perfect!"];
  let selectedRating = 0;

  const stars = container.querySelectorAll(".star");

  container.addEventListener("mouseover", (e) => {
    const star = e.target.closest(".star");
    if (!star) return;
    const val = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.classList.toggle("hovered", parseInt(s.dataset.value) <= val);
    });
    label.textContent = labels[val];
  });

  container.addEventListener("mouseleave", () => {
    stars.forEach(s => s.classList.remove("hovered"));
    label.textContent = selectedRating > 0 ? labels[selectedRating] : "Click a star to rate";
    label.classList.toggle("has-rating", selectedRating > 0);
  });

  container.addEventListener("click", (e) => {
    const star = e.target.closest(".star");
    if (!star) return;
    selectedRating = parseInt(star.dataset.value);
    hiddenInput.value = selectedRating;
    stars.forEach(s => {
      const v = parseInt(s.dataset.value);
      s.classList.toggle("selected", v <= selectedRating);
      s.classList.remove("animate");
      if (v <= selectedRating) {
        setTimeout(() => s.classList.add("animate"), v * 50);
      }
    });
    label.textContent = labels[selectedRating];
    label.classList.add("has-rating");
  });

  // Expose reset
  container._reset = () => {
    selectedRating = 0;
    hiddenInput.value = 0;
    stars.forEach(s => { s.classList.remove("selected", "hovered", "animate"); });
    label.textContent = "Click a star to rate";
    label.classList.remove("has-rating");
  };
}

function initSuggestionForm() {
  const form = document.getElementById("suggestion-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("suggestion-name").value.trim();
    const topic = document.getElementById("suggestion-topic").value;
    const text = document.getElementById("suggestion-text").value.trim();
    const rating = parseInt(document.getElementById("suggestion-rating").value) || 0;
    if (!name || !topic || !text) return;
    addSuggestion(name, topic, text, rating);
    form.reset();
    const starContainer = document.getElementById("star-rating");
    if (starContainer._reset) starContainer._reset();
    renderSuggestions();
    showNotification("🌟 Suggestion submitted! Thank you for your feedback.");
  });
}

// ===== Initialise =====
document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Always show the visitor popup on every visit
  showOnboarding();

  updateStreak();
  initNavigation();
  initQuiz();
  initSettings();
  updateDashboard();
  renderModules();
  renderChallenges();
  renderLeaderboard();
  renderVisitors();
  renderSuggestions();
  initSuggestionForm();
  initStarRating();

  // ===== Floating Ocean Particles =====
  const canvas = document.getElementById("ocean-particles");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    const PARTICLE_COUNT = 40;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulse = Math.random() * Math.PI * 2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) this.reset(), this.y = canvas.height + 10;
      }
      draw() {
        const glow = Math.sin(this.pulse) * 0.15 + this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${glow})`;
        ctx.shadowBlur = this.size * 4;
        ctx.shadowColor = "rgba(56, 189, 248, 0.3)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }

  // ===== Staggered Card Entrance Animations =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  function animateCards() {
    document.querySelectorAll(".stat-card, .module-card, .challenge-card, .badge-item, .dev-card, .quiz-intro-card, .ocean-hero-banner").forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `opacity 0.5s ${i * 0.07}s cubic-bezier(0.16,1,0.3,1), transform 0.5s ${i * 0.07}s cubic-bezier(0.16,1,0.3,1)`;
      observer.observe(card);
    });
  }
  animateCards();

  // Re-animate when switching tabs
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => setTimeout(animateCards, 60));
  });

  // ===== Smooth hover glow on stat values =====
  document.querySelectorAll(".stat-value").forEach(el => {
    el.style.transition = "text-shadow 0.3s ease";
    el.closest(".stat-card").addEventListener("mouseenter", () => {
      el.style.textShadow = "0 0 12px rgba(56, 189, 248, 0.5)";
    });
    el.closest(".stat-card").addEventListener("mouseleave", () => {
      el.style.textShadow = "none";
    });
  });
});
