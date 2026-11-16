function () {
"use strict";

// ==========================================
// Module: js/data/countries.js
// ==========================================
/**
 * HealthMind AI - Countries Data
 * Complete international country dataset for searchable dropdown.
 */

const COUNTRIES = [
  { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { code: 'AD', name: 'Andorra', flag: '🇦🇩' },
  { code: 'AO', name: 'Angola', flag: '🇦🇴' },
  { code: 'AG', name: 'Antigua and Barbuda', flag: '🇦🇬' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'BB', name: 'Barbados', flag: '🇧🇧' },
  { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'BZ', name: 'Belize', flag: '🇧🇿' },
  { code: 'BJ', name: 'Benin', flag: '🇧🇯' },
  { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
  { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: 'BW', name: 'Botswana', flag: '🇧🇼' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'BN', name: 'Brunei', flag: '🇧🇳' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: 'BF', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: 'BI', name: 'Burundi', flag: '🇧🇮' },
  { code: 'CV', name: 'Cabo Verde', flag: '🇨🇻' },
  { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
  { code: 'CM', name: 'Cameroon', flag: '🇨🇲' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CF', name: 'Central African Republic', flag: '🇨🇫' },
  { code: 'TD', name: 'Chad', flag: '🇹🇩' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'KM', name: 'Comoros', flag: '🇰🇲' },
  { code: 'CG', name: 'Congo (Brazzaville)', flag: '🇨🇬' },
  { code: 'CD', name: 'Congo (Kinshasa)', flag: '🇨🇩' },
  { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
  { code: 'CI', name: 'Côte d’Ivoire', flag: '🇨🇮' },
  { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
  { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
  { code: 'CY', name: 'Cyprus', flag: '🇨🇾' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'DJ', name: 'Djibouti', flag: '🇩🇯' },
  { code: 'DM', name: 'Dominica', flag: '🇩🇲' },
  { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
  { code: 'GQ', name: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: 'ER', name: 'Eritrea', flag: '🇪🇷' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: 'SZ', name: 'Eswatini', flag: '🇸🇿' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
  { code: 'FJ', name: 'Fiji', flag: '🇫🇯' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'GA', name: 'Gabon', flag: '🇬🇦' },
  { code: 'GM', name: 'Gambia', flag: '🇬🇲' },
  { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'GD', name: 'Grenada', flag: '🇬🇩' },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
  { code: 'GN', name: 'Guinea', flag: '🇬🇳' },
  { code: 'GW', name: 'Guinea-Bissau', flag: '🇬🇼' },
  { code: 'GY', name: 'Guyana', flag: '🇬🇾' },
  { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
  { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: 'IS', name: 'Iceland', flag: '🇮🇸' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'JM', name: 'Jamaica', flag: '🇯🇲' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'KI', name: 'Kiribati', flag: '🇰🇮' },
  { code: 'KP', name: 'Korea (North)', flag: '🇰🇵' },
  { code: 'KR', name: 'Korea (South)', flag: '🇰🇷' },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'LA', name: 'Laos', flag: '🇱🇦' },
  { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'LS', name: 'Lesotho', flag: '🇱🇸' },
  { code: 'LR', name: 'Liberia', flag: '🇱🇷' },
  { code: 'LY', name: 'Libya', flag: '🇱🇾' },
  { code: 'LI', name: 'Liechtenstein', flag: '🇱🇮' },
  { code: 'LT', name: 'Lithuania', flag: '🇱🇹' },
  { code: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
  { code: 'MG', name: 'Madagascar', flag: '🇲🇬' },
  { code: 'MW', name: 'Malawi', flag: '🇲🇼' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'MV', name: 'Maldives', flag: '🇲🇻' },
  { code: 'ML', name: 'Mali', flag: '🇲🇱' },
  { code: 'MT', name: 'Malta', flag: '🇲🇹' },
  { code: 'MH', name: 'Marshall Islands', flag: '🇲🇭' },
  { code: 'MR', name: 'Mauritania', flag: '🇲🇷' },
  { code: 'MU', name: 'Mauritius', flag: '🇲🇺' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'FM', name: 'Micronesia', flag: '🇫🇲' },
  { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
  { code: 'MC', name: 'Monaco', flag: '🇲🇨' },
  { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
  { code: 'ME', name: 'Montenegro', flag: '🇲🇪' },
  { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: 'MZ', name: 'Mozambique', flag: '🇲🇿' },
  { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'NA', name: 'Namibia', flag: '🇳🇦' },
  { code: 'NR', name: 'Nauru', flag: '🇳🇷' },
  { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
  { code: 'NE', name: 'Niger', flag: '🇳🇪' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'MK', name: 'North Macedonia', flag: '🇲🇰' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'PW', name: 'Palau', flag: '🇵🇼' },
  { code: 'PS', name: 'Palestine', flag: '🇵🇸' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: 'PG', name: 'Papua New Guinea', flag: '🇵🇬' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'RW', name: 'Rwanda', flag: '🇷🇼' },
  { code: 'KN', name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
  { code: 'LC', name: 'Saint Lucia', flag: '🇱🇨' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
  { code: 'WS', name: 'Samoa', flag: '🇼🇸' },
  { code: 'SM', name: 'San Marino', flag: '🇸🇲' },
  { code: 'ST', name: 'Sao Tome and Principe', flag: '🇸🇹' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'SN', name: 'Senegal', flag: '🇸🇳' },
  { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
  { code: 'SC', name: 'Seychelles', flag: '🇸🇨' },
  { code: 'SL', name: 'Sierra Leone', flag: '🇸🇱' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'SK', name: 'Slovakia', flag: '🇸🇰' },
  { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: 'SB', name: 'Solomon Islands', flag: '🇸🇧' },
  { code: 'SO', name: 'Somalia', flag: '🇸🇴' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'SS', name: 'South Sudan', flag: '🇸🇸' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'SD', name: 'Sudan', flag: '🇸🇩' },
  { code: 'SR', name: 'Suriname', flag: '🇸🇷' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SY', name: 'Syria', flag: '🇸🇾' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬' },
  { code: 'TO', name: 'Tonga', flag: '🇹🇴' },
  { code: 'TT', name: 'Trinidad and Tobago', flag: '🇹🇹' },
  { code: 'TN', name: 'Tunisia', flag: '🇹🇳' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: 'TV', name: 'Tuvalu', flag: '🇹🇻' },
  { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'VU', name: 'Vanuatu', flag: '🇻🇦' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'YE', name: 'Yemen', flag: '🇾🇪' },
  { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' }
];

function searchCountries(query) {
  if (!query || !query.trim()) return COUNTRIES;
  const q = query.trim().toLowerCase();
  return COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.code.toLowerCase().includes(q)
  );
}



// ==========================================
// Module: js/data/healthLibrary.js
// ==========================================
/**
 * HealthMind AI - Medically Reviewed Health Information Library
 * Structured, evidence-based lifestyle & educational wellness guidance.
 * This library powers the local rule-based recommendation engine.
 */

const HEALTH_CONDITIONS = [
  {
    id: 'diabetes',
    name: 'Diabetes / Blood Sugar Concerns',
    shortName: 'Diabetes',
    category: 'Metabolic',
    icon: 'activity',
    badgeColor: 'sky',
    summary: 'Metabolic balance, glucose stability, and vascular vitality.',
    description: 'Focuses on balancing postprandial glucose levels, consistent meal timing, low-glycemic dietary education, and protecting microvascular and nerve health.',
    whyItMatters: 'Stable glucose levels prevent energy spikes and crashes, support long-term vascular flexibility, and reduce oxidative stress throughout all major organ systems.',
    keyGuidance: [
      'Focus on pairing complex carbohydrates with lean protein and soluble fiber to blunt post-meal glucose spikes.',
      'Maintain consistent meal spacing to avoid extreme glycemic fluctuations.',
      'Incorporate a gentle 10-15 minute walk after meals to stimulate insulin-independent muscular glucose uptake.'
    ],
    redFlags: [
      'Extreme thirst accompanied by frequent urination and confusion (potential hyperosmolar state).',
      'Sudden shakiness, cold sweat, rapid heart rate, or dizziness that does not resolve with glucose.',
      'Non-healing sores, blisters, or loss of sensation in the feet or toes.'
    ]
  },
  {
    id: 'sleep-difficulties',
    name: 'Sleep Difficulties / Insomnia',
    shortName: 'Sleep Difficulties',
    category: 'Neurological & Circadian',
    icon: 'moon',
    badgeColor: 'indigo',
    summary: 'Circadian entrainment, restorative sleep architecture, and nervous system wind-down.',
    description: 'Provides evidence-based sleep hygiene, stimulus control principles, bedroom environmental optimization, and circadian rhythm entrainment.',
    whyItMatters: 'Restorative slow-wave and REM sleep are vital for cellular repair, immune memory consolidation, neuro-waste clearance via the glymphatic system, and endocrine balance.',
    keyGuidance: [
      'Anchor wake time: wake up at the exact same hour daily (including weekends) to stabilize the master circadian pacemaker (SCN).',
      'Implement a 60-minute digital sunset before bed; blue-light spectrum suppresses evening melatonin secretion.',
      'Stimulus control rule: if unable to sleep after 20 minutes, leave the bedroom and engage in dim, quiet activity until drowsiness returns.'
    ],
    redFlags: [
      'Chronic loud snoring punctuated by witnessed pauses in breathing, gasping, or morning dry mouth (indicators of sleep apnea).',
      'Falling asleep uncontrollably during active tasks such as driving.',
      'Severe restless, crawling sensations in the legs relieved only by constant motion.'
    ]
  },
  {
    id: 'depression',
    name: 'Depression / Low Mood',
    shortName: 'Depression or Low Mood',
    category: 'Mental Wellbeing',
    icon: 'sun',
    badgeColor: 'amber',
    summary: 'Neurochemical support, behavioral activation, and psychological safety.',
    description: 'Offers structured behavioral activation, micro-steps for daily routine restoration, sunlight exposure protocols, and compassionate self-care frameworks.',
    whyItMatters: 'Low mood often slows physiological motility, alters monoamine neurotransmission, and triggers social withdrawal. Gentle micro-routines rebuild momentum without overwhelming cognitive bandwidth.',
    keyGuidance: [
      'Practice gentle behavioral activation: break daily tasks into bite-sized 5-minute commitments.',
      'Prioritize 15-20 minutes of outdoor morning sunlight within 60 minutes of waking to boost serotonin and anchor dopamine pathways.',
      'Engage in gentle social connection, even through a brief text or shared silence with a trusted friend.'
    ],
    redFlags: [
      'Thoughts of self-harm, hopelessness, or suicide (requires immediate emergency crisis support).',
      'Complete inability to perform basic self-care, eat, or drink fluids.',
      'Auditory or visual hallucinations or feelings of profound detachment from reality.'
    ]
  },
  {
    id: 'fatigue',
    name: 'Chronic Fatigue & Low Energy',
    shortName: 'Fatigue',
    category: 'Energy & Metabolic',
    icon: 'battery-charging',
    badgeColor: 'emerald',
    summary: 'Mitochondrial pacing, energy banking, and systemic recovery.',
    description: 'Focuses on pacing strategies to prevent post-exertional crashes, restorative rest pauses, cellular hydration, and avoiding overexertion cycles.',
    whyItMatters: 'Chronic fatigue indicates systemic energy depletion. Pacing prevents the "push-crash" cycle where overactivity on good days triggers days of debilitating exhaustion.',
    keyGuidance: [
      'Adopt the "Energy Envelope" pacing technique: budget your daily physical and mental energy at 70% of perceived capacity.',
      'Incorporate scheduled 10-minute horizontal rest breaks midday without screens or cognitive stimulation.',
      'Stay consistently hydrated with electrolyte-balanced fluids; mild dehydration directly impairs cellular ATP production.'
    ],
    redFlags: [
      'Fatigue accompanied by sudden unexplained weight loss, night sweats, or enlarged lymph nodes.',
      'Severe shortness of breath with minimal exertion or upon lying flat.',
      'Sudden profound muscle weakness or inability to lift arms or hold up the head.'
    ]
  },
  {
    id: 'leg-pain',
    name: 'Leg Pain / Heaviness & Swelling',
    shortName: 'Leg Pain',
    category: 'Musculoskeletal & Vascular',
    icon: 'activity',
    badgeColor: 'cyan',
    summary: 'Venous return, posture ergonomics, and safe elevation principles.',
    description: 'Provides critical differentiation between venous congestion, muscular strain, and peripheral circulation, with precise elevation guidance.',
    whyItMatters: 'Lower extremity pain can stem from venous pooling, muscular overuse, or nerve impingement. Applying correct rest, positioning, and movement prevents stagnation.',
    keyGuidance: [
      'Elevation guidance: Elevate legs above heart level for 15-20 minutes in the evening IF pain is related to dependent swelling or prolonged standing.',
      'Contraindication check: Do NOT elevate legs if you experience severe arterial pain that worsens when elevated (foot turns pale or white when raised).',
      'Perform seated ankle pumps and calf circles every 45 minutes to activate the calf muscle venous pump.'
    ],
    redFlags: [
      'Sudden swelling, localized warmth, severe tenderness, or redness in one calf (urgent medical evaluation required for Deep Vein Thrombosis / DVT).',
      'Sudden severe leg pain with coldness, pale or bluish skin, and absent pulses in the foot.',
      'Loss of bladder or bowel control accompanied by numbness in the groin/legs (Cauda Equina emergency).'
    ]
  },
  {
    id: 'hand-pain',
    name: 'Hand & Wrist Pain / Discomfort',
    shortName: 'Hand Pain',
    category: 'Musculoskeletal & Neurological',
    icon: 'shield',
    badgeColor: 'blue',
    summary: 'Neutral wrist ergonomics, tendon gliding, and nocturnal positioning.',
    description: 'Focuses on preventing median/ulnar nerve compression, ergonomic workstation adjustments, gentle tendon gliding, and avoiding hyperflexion during sleep.',
    whyItMatters: 'The carpal tunnel and cubital tunnel are narrow fibro-osseous canals. Flexing wrists tightly during sleep or repetitive typing dramatically spikes intracarpal pressure, leading to ischemia and paresthesia.',
    keyGuidance: [
      'Nocturnal positioning: Maintain a neutral wrist angle (0-15 degrees extension) while sleeping; avoid curling wrists inward under pillows.',
      'Avoid prolonged static pinching or forceful gripping; use ergonomic pens and padded utensil grips.',
      'Perform gentle tendon-gliding exercises (straight hand to hook fist to flat fist) twice daily without forcing through sharp pain.'
    ],
    redFlags: [
      'Rapidly spreading redness, severe heat, and throbbing swelling in a finger or joint (possible tenosynovitis or infection).',
      'Complete numbness or persistent weakness (dropping cups, inability to button clothes).',
      'Hand turning pale, blue, or severely painful upon cold exposure (Raynaud’s phenomenon needing evaluation).'
    ]
  },
  {
    id: 'allergies',
    name: 'Allergies / Environmental & Seasonal',
    shortName: 'Allergies',
    category: 'Immune & Respiratory',
    icon: 'wind',
    badgeColor: 'teal',
    summary: 'Histamine moderation, environmental trigger reduction, and mucosal barrier support.',
    description: 'Provides non-pharmacological allergen minimization, bedroom air filtration guidelines, nasal hygiene, and cross-reactive dietary considerations.',
    whyItMatters: 'Allergic reactions involve mast cell degranulation and histamine release, driving mucosal inflammation, sinus congestion, and systemic fatigue.',
    keyGuidance: [
      'Create a bedroom allergy sanctuary: wash bedsheets weekly at 60°C (140°F) to eliminate dust mites, and enclose pillows in hypoallergenic barrier covers.',
      'Perform gentle isotonic saline nasal rinses after outdoor exposure to physically flush pollen and particulate allergens from nasal mucosa.',
      'Keep bedroom windows closed during peak pollen hours (early morning and windy afternoons); run a True-HEPA air purifier.'
    ],
    redFlags: [
      'Swelling of the lips, tongue, uvula, or throat, or tightness in the chest (emergency anaphylaxis response required).',
      'Stridor (high-pitched whistling sound while inhaling) or severe difficulty breathing.',
      'Hives spreading rapidly across the whole body with lightheadedness or vomiting.'
    ]
  },
  {
    id: 'stress-overthinking',
    name: 'Stress & Overthinking / High Tension',
    shortName: 'Stress and Overthinking',
    category: 'Mental & Autonomic',
    icon: 'zap',
    badgeColor: 'purple',
    summary: 'Autonomic downregulation, vagal nerve activation, and cognitive defusion.',
    description: 'Teaches physiological sigh breathing, grounding exercises, cortisol diurnal education, and nervous system recalibration from sympathetic overdrive.',
    whyItMatters: 'Chronic perceived stress sustains high sympathetic tone and disrupts the hypothalamic-pituitary-adrenal (HPA) axis, impacting digestion, sleep, and blood pressure.',
    keyGuidance: [
      'Practice the physiological sigh: two quick sniffs through the nose, followed by a long, unforced exhale through the mouth. Repeat 3-5 times for instant vagal engagement.',
      'Schedule a dedicated 15-minute "Worry Window" earlier in the afternoon to jot down racing thoughts, preventing bedtime rumination.',
      'Engage in 5-4-3-2-1 sensory grounding when feeling overwhelmed to bring awareness back to somatic reality.'
    ],
    redFlags: [
      'Panic attacks accompanied by chest pain radiating down the arm or jaw (always rule out cardiac causes).',
      'Overwhelming sense of dread with persistent heart palpitations or inability to catch breath at rest.',
      'Inability to function or make basic decisions due to debilitating mental anguish.'
    ]
  },
  {
    id: 'high-blood-pressure',
    name: 'High Blood Pressure / Hypertension',
    shortName: 'High Blood Pressure',
    category: 'Cardiovascular',
    icon: 'heart',
    badgeColor: 'rose',
    summary: 'Cardiovascular ease, sodium-potassium balance, and arterial relaxation.',
    description: 'Emphasizes DASH-aligned dietary patterns, potassium-rich whole foods, stress-induced vascular spasm reduction, and safe aerobic activity.',
    whyItMatters: 'Elevated hydrostatic arterial pressure strains endothelial linings over time. Lifestyle modifications significantly reduce systemic peripheral vascular resistance.',
    keyGuidance: [
      'Emphasize potassium-rich foods (leafy greens, avocados, sweet potatoes) to promote renal sodium excretion and smooth muscle vasodilation.',
      'Limit processed sodium intake and replace with herbs, garlic, and citrus seasonings.',
      'Engage in moderate-intensity rhythmic movement (like brisk walking or swimming) for 30 minutes daily to stimulate nitric oxide synthesis.'
    ],
    redFlags: [
      'Blood pressure reading exceeding 180/120 mmHg (Hypertensive Crisis requires immediate emergency evaluation).',
      'Severe sudden headache ("thunderclap"), blurred vision, chest pain, or shortness of breath.',
      'Sudden weakness or numbness on one side of the face or body.'
    ]
  },
  {
    id: 'thyroid-problems',
    name: 'Thyroid Imbalance / Hypo & Hyper',
    shortName: 'Thyroid Problems',
    category: 'Endocrine',
    icon: 'thermometer',
    badgeColor: 'orange',
    summary: 'Metabolic rate awareness, temperature regulation, and micronutrient support.',
    description: 'Offers lifestyle support for metabolic fluctuations, selenium and zinc dietary education, temperature comfort strategies, and gentle pacing.',
    whyItMatters: 'Thyroid hormones (T3 and T4) regulate cellular basal metabolic rate, body temperature, bowel motility, and cardiac output across all tissues.',
    keyGuidance: [
      'Ensure adequate intake of key co-factors (selenium from Brazil nuts, zinc, and iodine from sea vegetables or iodized salt) after confirming with your doctor.',
      'Dress in breathable layers to manage temperature sensitivity (cold intolerance in hypothyroidism, heat intolerance in hyperthyroidism).',
      'Honor metabolic fatigue: match your daily physical exertion to your internal energy reserves.'
    ],
    redFlags: [
      'Rapid, irregular heart palpitations (atrial fibrillation signs) or resting pulse over 100 bpm with tremors.',
      'Severe unexplained fever accompanied by extreme agitation and confusion (thyroid storm signs).',
      'Rapidly enlarging lump or nodule on the front of the neck causing difficulty swallowing or breathing.'
    ]
  },
  {
    id: 'digestive-problems',
    name: 'Digestive Problems / IBS & Bloating',
    shortName: 'Digestive Problems',
    category: 'Gastrointestinal',
    icon: 'coffee',
    badgeColor: 'amber',
    summary: 'Gut microbiome nourishment, gut-brain motility, and meal hygiene.',
    description: 'Teaches mindful eating mechanics, identifying personal fermentable carbohydrate sensitivities, hydration timing, and soothing herbal infusions.',
    whyItMatters: 'The enteric nervous system communicates bidirectionally with the central nervous system. Stress immediately inhibits digestive enzymes and alters peristaltic rhythm.',
    keyGuidance: [
      'Practice mealtime cephalic phase activation: sit down, chew each bite thoroughly (20-30 times), and avoid drinking large volumes of ice water with meals.',
      'Allow a 3-4 hour window between meals without snacking to activate the Migrating Motor Complex (MMC) that sweeps clean the small intestine.',
      'Sip warm peppermint, chamomile, or ginger tea 30 minutes after meals to ease smooth muscle spasms.'
    ],
    redFlags: [
      'Black tarry stools, bright red rectal bleeding, or persistent vomiting.',
      'Unexplained significant weight loss or chronic diarrhea that wakes you from sleep.',
      'Severe, localized abdominal pain that worsens with movement or is accompanied by high fever.'
    ]
  },
  {
    id: 'headaches',
    name: 'Headaches / Tension & Migraine',
    shortName: 'Headaches',
    category: 'Neurological',
    icon: 'cloud-lightning',
    badgeColor: 'red',
    summary: 'Cervicogenic posture, trigger avoidance, and neurovascular calming.',
    description: 'Addresses upper cervical spine ergonomics, hydration triggers, screen-induced visual strain, and soothing cold/heat sensory modulation.',
    whyItMatters: 'Most common headaches arise from forward-head posture overloading suboccipital muscles, or neurovascular sensitization driven by dehydration, stress, or sensory overload.',
    keyGuidance: [
      'Optimize screen posture: ensure screen is at eye level to eliminate the forward head-tilt that quadruples cervical spine load.',
      'Follow the 20-20-20 rule: every 20 minutes look at an object 20 feet away for 20 seconds to relax ocular ciliary muscles.',
      'Apply a cool compress across the forehead or a warm pad on the back of the neck depending on tension type.'
    ],
    redFlags: [
      'Sudden onset "thunderclap" headache reaching maximal intensity within seconds (call emergency services immediately).',
      'Headache accompanied by fever, stiff neck, confusion, seizure, or focal neurological deficit.',
      'New onset headache starting after age 50 or headache worsening progressively over weeks.'
    ]
  },
  {
    id: 'joint-pain',
    name: 'Joint Pain & Stiffness / Arthritis',
    shortName: 'Joint Pain',
    category: 'Musculoskeletal',
    icon: 'circle-dot',
    badgeColor: 'violet',
    summary: 'Synovial fluid lubrication, low-impact motion, and anti-inflammatory nourishment.',
    description: 'Focuses on non-weight-bearing joint mobility, anti-inflammatory Mediterranean dietary principles, warm morning loosen-up routines, and joint protection.',
    whyItMatters: 'Articular cartilage has no direct blood supply and depends on regular cyclic movement to circulate nutrient-rich synovial fluid throughout the joint capsule.',
    keyGuidance: [
      'Adopt the rule: "Motion is lotion." Low-impact rhythmic movement (walking, stationary cycling, water exercise) nourishes cartilage without wear.',
      'Apply moist warmth (warm shower or heating pad) for 10-15 minutes upon waking to decrease morning joint gelation and stiffness.',
      'Integrate omega-3 rich foods (wild salmon, chia seeds, walnuts) to modulate systemic inflammatory cytokine cascades.'
    ],
    redFlags: [
      'Joint that becomes acutely red, hot, exquisitely swollen, and impossible to bear weight on (possible septic arthritis or gout).',
      'Joint deformity following a fall or trauma.',
      'Joint pain accompanied by prolonged morning stiffness lasting more than 60 minutes across multiple symmetric small joints.'
    ]
  },
  {
    id: 'anemia',
    name: 'Anemia / Iron & Oxygen Transport',
    shortName: 'Anemia',
    category: 'Hematological',
    icon: 'droplet',
    badgeColor: 'rose',
    summary: 'Hemoglobin support, oxygen efficiency, and iron absorption synergy.',
    description: 'Educates on iron bioavailability, vitamin C pairing synergy, avoiding dietary absorption blockers, and managing orthostatic lightheadedness.',
    whyItMatters: 'Hemoglobin in red blood cells carries oxygen to every cell for aerobic metabolism. Lower oxygen saturation forces the heart to pump harder, causing fatigue and shortness of breath.',
    keyGuidance: [
      'Pair iron-rich foods (lentils, dark leafy greens, beans, lean meats) with dietary vitamin C (bell peppers, lemon, berries) to triple non-heme iron absorption.',
      'Avoid drinking coffee, black tea, or calcium supplements within 2 hours of iron-containing meals (tannins and calcium bind iron and block uptake).',
      'Transition slowly when standing up from seated or lying positions to prevent orthostatic dizziness.'
    ],
    redFlags: [
      'Sudden severe dizziness, fainting (syncope), or persistent resting tachycardia (racing heart).',
      'Chest pain or extreme shortness of breath when walking a short distance.',
      'Noticeable pallor inside the lower eyelid, gums, or nail beds accompanied by confusion.'
    ]
  },
  {
    id: 'other-conditions',
    name: 'Other Health Concerns / Custom Symptoms',
    shortName: 'Other Health Conditions',
    category: 'General Wellness',
    icon: 'plus-circle',
    badgeColor: 'slate',
    summary: 'Holistic lifestyle balance and individualized wellness tracking.',
    description: 'Tailored for personal health concerns entered by the user, providing foundational wellness principles and medical consultation framing.',
    whyItMatters: 'Every human body is unique. Clear tracking of personal symptom triggers and timeline empowers fruitful doctor-patient collaboration.',
    keyGuidance: [
      'Keep a detailed 7-day symptom log noting time of day, food consumed, physical activity, and sleep quality.',
      'Focus on foundational wellness pillars: consistent sleep, whole-food nourishment, hydration, and mindful stress reduction.',
      'Discuss specific symptoms openly with your primary healthcare provider.'
    ],
    redFlags: [
      'Any unexplained symptom that is rapidly progressing or severe.',
      'Unexplained weight loss of more than 5% body weight in a few months.',
      'Persistent high fever lasting more than 3 days.'
    ]
  }
];

const SYMPTOM_LIBRARY = [
  {
    id: 'symp-leg-walk',
    label: 'Leg pain or heaviness when walking',
    category: 'Lower Body & Mobility',
    keywords: ['leg pain', 'legs hurt', 'walking', 'walk', 'calf pain', 'heavy legs', 'claudication', 'shin'],
    associatedCondition: 'leg-pain',
    guidance: 'Walking pain can stem from calf muscle fatigue, venous congestion, or circulatory demand. Pacing with short flat walks and wearing supportive footwear reduces strain.',
    restRecommendation: 'Rest seated with legs uncrossed. If legs feel congested or swollen, elevate above hip level when resting at home.',
    redFlag: 'Severe cramp in one calf with redness or heat, or pain that forces you to stop walking within 100 meters (requires vascular check).'
  },
  {
    id: 'symp-hand-sleep',
    label: 'Hands or wrists numb, tingling, or uncomfortable while sleeping',
    category: 'Upper Body & Nerve',
    keywords: ['hands', 'hand pain', 'wrist', 'sleeping', 'numb', 'tingling', 'pins and needles', 'fingers', 'carpal'],
    associatedCondition: 'hand-pain',
    guidance: 'Curling wrists inward while sleeping compresses the carpal tunnel. Keeping wrists straight (neutral position) using a soft resting brace or pillow support prevents nocturnal paresthesia.',
    restRecommendation: 'Avoid sleeping with hands tucked under your head or chest. Place arms along your sides with open, relaxed palms.',
    redFlag: 'Permanent numbness in thumb and index finger, or noticeable muscle thinning at the base of the thumb.'
  },
  {
    id: 'symp-allergies-dust',
    label: 'Sneezing, itchy eyes, or congestion around dust or pollen',
    category: 'Respiratory & Immune',
    keywords: ['sneezing', 'dust', 'pollen', 'itchy eyes', 'runny nose', 'congestion', 'allergy', 'allergies', 'hay fever'],
    associatedCondition: 'allergies',
    guidance: 'Environmental particulates irritate respiratory membranes. HEPA filtration, washing pillowcases frequently at high temperatures, and saline nasal rinses remove physical irritants.',
    restRecommendation: 'Create a dust-free bedroom zone. Keep windows closed on windy days and shower before bed to remove pollen from hair and skin.',
    redFlag: 'Wheezing, chest constriction, or swelling around lips or throat.'
  },
  {
    id: 'symp-frequent-fatigue',
    label: 'Frequent exhaustion or low energy despite resting',
    category: 'Energy & Fatigue',
    keywords: ['tired', 'fatigue', 'exhausted', 'low energy', 'sluggish', 'drained', 'worn out', 'burnout'],
    associatedCondition: 'fatigue',
    guidance: 'Chronic fatigue often involves cellular mitochondrial pacing challenges or disrupted sleep cycles. Prioritize scheduled micro-rest pauses and steady complex carbohydrate fuel.',
    restRecommendation: 'Take 10 minutes of non-sleep deep rest (NSDR) or eyes-closed breathing in the afternoon. Avoid overcompensating with high doses of caffeine.',
    redFlag: 'Extreme fatigue accompanied by night sweats, sudden weight loss, or shortness of breath at rest.'
  },
  {
    id: 'symp-insomnia-latency',
    label: 'Difficulty falling asleep or racing thoughts at bedtime',
    category: 'Sleep & Mind',
    keywords: ['sleep', 'insomnia', 'falling asleep', 'racing thoughts', 'overthinking in bed', 'tossing and turning'],
    associatedCondition: 'sleep-difficulties',
    guidance: 'Cognitive hyperarousal delays melatonin release. A 30-minute analog wind-down, dimming lights, and transferring worries onto paper clears mental loops.',
    restRecommendation: 'Get out of bed if awake for more than 20 minutes. Sit in a comfortable dim chair with a calm book until your eyelids feel heavy.',
    redFlag: 'Chronic sleeplessness leading to daytime disorientation or hallucinations.'
  },
  {
    id: 'symp-headache-screen',
    label: 'Tension headaches or eye strain after computer use',
    category: 'Head & Eyes',
    keywords: ['headache', 'headaches', 'temples', 'head hurts', 'eye strain', 'screen', 'migraine', 'neck tension'],
    associatedCondition: 'headaches',
    guidance: 'Prolonged near-distance screen focus and neck flexion tighten suboccipital muscles. Adjust screen height to eye level and hydrate regularly.',
    restRecommendation: 'Apply a cool cloth over your eyes for 10 minutes in a darkened room, and gently roll shoulders backward.',
    redFlag: 'Sudden catastrophic headache ("worst of your life") or headache with high fever and stiff neck.'
  },
  {
    id: 'symp-joint-stiffness',
    label: 'Stiff, aching knees, hips, or fingers in the morning',
    category: 'Joints & Bones',
    keywords: ['joint', 'joints', 'knees', 'stiffness', 'stiff', 'aching', 'arthritis', 'morning stiffness'],
    associatedCondition: 'joint-pain',
    guidance: 'Synovial fluid is thicker upon waking. Gentle range-of-motion stretching in a warm shower lubricates joint surfaces without heavy axial load.',
    restRecommendation: 'Alternate gentle mobility with supported rest. Avoid sitting in one position for longer than 45 minutes.',
    redFlag: 'A single joint that is red, hot, swollen, and extremely painful to touch.'
  },
  {
    id: 'symp-digestive-bloat',
    label: 'Bloating, gas, or stomach discomfort after meals',
    category: 'Digestive & Gut',
    keywords: ['bloating', 'bloat', 'stomach', 'gas', 'digestive', 'indigestion', 'gut', 'acid reflux', 'heartburn'],
    associatedCondition: 'digestive-problems',
    guidance: 'Eating quickly or during stress hinders enzyme secretion. Sitting upright, chewing slowly, and taking a gentle 10-minute post-meal stroll supports gut motility.',
    restRecommendation: 'Remain upright for at least 2 hours after eating. Avoid tight waistbands that press on the epigastric region.',
    redFlag: 'Severe abdominal cramping with fever, vomiting blood, or black stools.'
  },
  {
    id: 'symp-bp-tension',
    label: 'High blood pressure readings or feeling flushed under stress',
    category: 'Heart & Circulation',
    keywords: ['blood pressure', 'hypertension', 'flushed', 'pounding', 'heart rate', 'pressure'],
    associatedCondition: 'high-blood-pressure',
    guidance: 'Stress releases adrenaline which constricts peripheral arterioles. Slow 4-7-8 breathing activates parasympathetic tone and naturally encourages vascular dilation.',
    restRecommendation: 'Sit quietly with both feet flat on the floor and back supported for 5 minutes before checking blood pressure.',
    redFlag: 'Blood pressure over 180/120, or chest tightness and blurred vision.'
  },
  {
    id: 'symp-anemia-dizzy',
    label: 'Feeling lightheaded when standing up or feeling cold easily',
    category: 'Blood & Oxygen',
    keywords: ['anemia', 'dizziness', 'lightheaded', 'cold hands', 'cold feet', 'pale', 'iron'],
    associatedCondition: 'anemia',
    guidance: 'Low hemoglobin decreases oxygen delivery to peripheral tissues. Pair iron-rich meals with vitamin C and pause 10 seconds before standing from a chair.',
    restRecommendation: 'Pump your ankles a few times before rising from bed to encourage blood flow toward the upper body.',
    redFlag: 'Loss of consciousness (fainting), chest pain, or severe shortness of breath.'
  }
];

/**
 * Multi-Condition Cross-Interaction Synergies
 * Rules that trigger specifically when condition combinations are present!
 */
const MULTI_CONDITION_RULES = [
  {
    id: 'rule-leg-hand-sleep',
    triggers: ['leg-pain', 'hand-pain'],
    title: 'Dual Limb Ergonomics: Sleep Posture & Positioning',
    whyThisSuggestion: 'Because you selected both Leg Pain and Hand Pain, your nighttime posture requires specific alignment to avoid aggravating both upper nerve pathways and lower venous circulation.',
    guidance: [
      'Wrist Neutrality: Keep hands and wrists in a neutral, straight position (like holding a soft rolled washcloth). Never tuck hands beneath your head or bend wrists sharply.',
      'Knee & Leg Alignment: Place a contoured pillow between your knees when side-sleeping to keep the pelvis level and prevent knee/leg compression.',
      'Gentle Elevation: If leg elevation is indicated, use a gradual wedge under the lower calves while keeping wrists relaxed on soft arm pillows.'
    ]
  },
  {
    id: 'rule-leg-elevation-guide',
    triggers: ['leg-pain'],
    title: 'Leg Elevation: When It Helps vs When to Avoid It',
    whyThisSuggestion: 'Because you selected Leg Pain, understanding proper elevation mechanics is essential for safety.',
    guidance: [
      'WHEN TO ELEVATE: Highly beneficial if leg pain is accompanied by evening puffiness, heavy tired legs after standing, or mild venous pooling. Elevate calves above heart level for 15-20 minutes with a slight bend in the knees.',
      'WHEN NOT TO ELEVATE (CAUTION): If you have been told you have peripheral arterial disease (poor arterial blood supply to the feet), or if elevating your legs causes your feet to turn pale or severe aching to worsen, DO NOT keep them elevated; arterial blood needs gravity to reach the toes.',
      'ACTIVE PUMPING: Combine resting with gentle ankle flexion (pointing toes up and down 10-15 times) to engage the natural venous calf pump.'
    ]
  },
  {
    id: 'rule-allergies-sleep',
    triggers: ['allergies', 'sleep-difficulties'],
    title: 'Airway Micro-Climate: Allergy-Proof Sleep Architecture',
    whyThisSuggestion: 'Because you selected both Allergies and Sleep Difficulties, nocturnal allergen exposure is a known trigger for micro-awakenings and fragmented sleep.',
    guidance: [
      'Nasal Congestion & Sleep Architecture: Nasal resistance causes mouth breathing, which triggers snoring, dry throat, and sympathetic nervous system arousal.',
      'Sanctuary Bedroom: Use allergen-proof zippered covers on mattress and pillows. Run a True-HEPA filter continuously on low in the bedroom.',
      'Evening Rinsing: Rinse pollen and dust from hair and face before entering bed so allergens are not transferred to your pillow.'
    ]
  },
  {
    id: 'rule-diabetes-hypertension',
    triggers: ['diabetes', 'high-blood-pressure'],
    title: 'Cardio-Metabolic Synergy: Endothelial & Vascular Protection',
    whyThisSuggestion: 'Because you selected Diabetes and High Blood Pressure, these two conditions share vascular pathways and require coordinated lifestyle support.',
    guidance: [
      'Endothelial Care: High glucose and elevated blood pressure both increase oxidative strain on vessel walls. A Mediterranean dietary pattern rich in olive oil, berries, and leafy greens protects delicate linings.',
      'Sodium & Sugar Interplay: Excessive sodium stiffens arterial walls while refined sugars spike insulin, which prompts kidneys to retain sodium. Reducing both yields compound benefits.',
      'Cautious Foot Inspection: Check feet daily for any pressure spots or friction, as microvascular sensitivity is reduced when both conditions coincide.'
    ]
  },
  {
    id: 'rule-stress-cortisol-sleep',
    triggers: ['stress-overthinking', 'sleep-difficulties'],
    title: 'HPA-Axis & Cortisol Hyperarousal Management',
    whyThisSuggestion: 'Because you selected Stress/Overthinking and Sleep Difficulties, evening cortisol dysregulation directly inhibits deep restorative slow-wave sleep.',
    guidance: [
      'Diurnal Cortisol Inversion: In healthy physiology, cortisol peaks 30 minutes after waking (CAR) and dips to its lowest at bedtime. Stress can elevate evening cortisol, causing physical alertness in bed.',
      'Nocturnal Clock Shielding: Turn all alarm clocks away from your sight. Clock-watching during awakenings spikes adrenaline and resets the arousal cycle.',
      'Somatic De-escalation: Perform the 4-7-8 breathing sequence (inhale 4 sec, hold 7 sec, exhale smoothly for 8 sec) to stimulate the vagus nerve and slow heart rate.'
    ]
  },
  {
    id: 'rule-fatigue-depression',
    triggers: ['fatigue', 'depression'],
    title: 'Energy Conservation & Gentle Behavioral Activation',
    whyThisSuggestion: 'Because you selected Fatigue and Depression/Low Mood, balancing restorative rest with tiny, achievable movements prevents emotional and physical stagnation.',
    guidance: [
      'The 5-Minute Rule: When motivation feels absent, commit to just 5 minutes of a low-energy task (such as sitting near an open window or watering a plant). You have permission to stop after 5 minutes.',
      'Natural Daylight Reset: Spend 10-15 minutes outside in indirect natural light before noon. Daylight stimulates retinal ganglion cells, signaling serotonin production and establishing an evening melatonin timeline.',
      'Self-Compassion Over Productivity: Measure success by presence, not output. Avoid guilt over fatigue.'
    ]
  },
  {
    id: 'rule-joint-fatigue',
    triggers: ['joint-pain', 'fatigue'],
    title: 'Pacing Joint Mobility Without Triggering Exhaustion',
    whyThisSuggestion: 'Because you selected Joint Pain and Fatigue, overexertion can trigger post-activity joint flare-ups, while complete immobility increases stiffness.',
    guidance: [
      'Split Movement Snacks: Instead of one long 30-minute walk, take three gentle 8-minute strolls spread across the day.',
      'Warm Water Therapy: If available, warm pool movement or soaking joints in warm water allows resistance-free motion that lubricates cartilage.',
      'Listen to Pain Signals: A mild muscular stretch is normal, but sharp, stabbing, or joint swelling means you should rest and unload the joint.'
    ]
  },
  {
    id: 'rule-anemia-fatigue',
    triggers: ['anemia', 'fatigue'],
    title: 'Cellular Oxygenation & Iron Absorption Optimization',
    whyThisSuggestion: 'Because you selected Anemia and Fatigue, optimizing oxygen delivery to tissues is your foundational path to feeling energized.',
    guidance: [
      'Synergistic Meal Pairing: Whenever eating iron sources (beans, spinach, fortified grains, eggs, lean meats), always pair them with vitamin C (citrus juice, strawberries, bell peppers) to boost absorption.',
      'Inhibitor Timing: Keep tea, coffee, milk, and calcium tablets at least 90 minutes away from iron-rich meals, as phytates, polyphenols, and calcium strongly bind iron.',
      'Postural Transitions: Sit on the edge of the bed for 15 seconds before standing in the morning to avoid cerebral hypoperfusion and lightheadedness.'
    ]
  },
  {
    id: 'rule-digestive-stress',
    triggers: ['digestive-problems', 'stress-overthinking'],
    title: 'The Gut-Brain Axis: Vagus Nerve & Motility Coordination',
    whyThisSuggestion: 'Because you selected Digestive Concerns and Stress/Overthinking, the bidirectional vagal nerve pathway directly links emotional tension with intestinal motility.',
    guidance: [
      'Enteric Nervous System: The gut houses over 500 million neurons. When the brain senses chronic threat, blood is shunted away from the stomach, slowing enzyme release and causing bloating or spasms.',
      'Cephalic Phase Pause: Take three deep diaphragmatic breaths before taking your first bite of food to switch into "rest and digest" parasympathetic state.',
      'Warm Herbal Spasmolytics: Chamomile, peppermint, and fennel teas relax smooth gastrointestinal muscle walls and ease trapped gas.'
    ]
  }
];

/**
 * Stress, Cortisol and Circadian Rhythm Educational Module
 * Strict medical accuracy: never invents fake cortisol percentages or numbers.
 */
const CORTISOL_EDUCATION = {
  title: 'Understanding Stress, Cortisol & Circadian Rhythms',
  subtitle: 'The Evidence-Based Science of Your Endocrine System',
  disclaimer: 'Important Medical Note: Real cortisol assessment requires licensed clinical testing (such as a 4-point salivary cortisol panel, 24-hour urinary free cortisol, or blood serum testing) ordered by a physician. HealthMind AI provides educational physiological principles and never invents estimated hormone levels or stress percentages.',
  points: [
    {
      heading: 'The Natural Diurnal Cortisol Curve',
      text: 'In healthy physiology, cortisol follows a distinct 24-hour circadian rhythm. It rises sharply upon waking—peaking approximately 30 to 45 minutes after you open your eyes (known as the Cortisol Awakening Response, or CAR)—to provide alertness and mobilize glucose for the day. Throughout the day, cortisol levels gradually decline, reaching their lowest point (nadir) around midnight to allow melatonin to rise and promote deep, restorative sleep.'
    },
    {
      heading: 'What Happens During Prolonged Stress?',
      text: 'When perceived stress is chronic, the hypothalamic-pituitary-adrenal (HPA) axis can remain in a state of high arousal. Instead of declining smoothly in the evening, cortisol may remain elevated at bedtime. This blunts nighttime melatonin release, keeps heart rate slightly elevated, fragments deep slow-wave sleep, and leaves you feeling "tired but wired."'
    },
    {
      heading: 'The Vagus Nerve & Nervous System Downregulation',
      text: 'The vagus nerve is the primary highway of your parasympathetic ("rest, digest, and recover") nervous system. You can physically stimulate vagal tone in minutes through prolonged exhalations, singing, cold water facial immersion, and rhythmic diaphragmatic breathing. By shifting the autonomic balance, you naturally signal your adrenal glands that the body is safe.'
    }
  ]
};

/**
 * Daily Schedule Generator Blueprint
 * Generates an educational, adjustable 7-step schedule adapted to conditions.
 */
function generateDailySchedule(selectedConditionIds, userSymptomList) {
  const hasDiabetes = selectedConditionIds.includes('diabetes');
  const hasSleepIssues = selectedConditionIds.includes('sleep-difficulties');
  const hasLegPain = selectedConditionIds.includes('leg-pain');
  const hasHandPain = selectedConditionIds.includes('hand-pain');
  const hasAllergies = selectedConditionIds.includes('allergies');
  const hasStress = selectedConditionIds.includes('stress-overthinking');
  const hasAnemia = selectedConditionIds.includes('anemia');
  const hasJointPain = selectedConditionIds.includes('joint-pain');
  const hasDigestive = selectedConditionIds.includes('digestive-problems');

  return [
    {
      time: '07:00 AM – 07:45 AM',
      phase: 'Morning Awakening & Circadian Anchor',
      icon: 'sun',
      title: 'Gentle Rise & Hydration',
      actions: [
        'Hydrate: Drink a large glass (300-400ml) of room-temperature water with a squeeze of fresh lemon or a pinch of salt to replenish overnight fluid loss.',
        hasAnemia ? 'Transition slowly: Sit on bed edge for 20 seconds before standing to prevent lightheadedness.' : 'Stand tall and perform 5 deep diaphragmatic breaths.',
        hasJointPain ? 'Warm shower or heat pad: Spend 10 minutes warming stiff morning joints before moving briskly.' : 'Perform gentle neck and shoulder rolls.',
        'Light Exposure: Step outside or sit near a sunny window for 10-15 minutes to set your master circadian clock.'
      ],
      whyThisSuggestion: 'Morning sunlight and prompt hydration stimulate the natural Cortisol Awakening Response while shutting down residual nighttime melatonin.'
    },
    {
      time: '08:00 AM – 08:30 AM',
      phase: 'Nourishing Breakfast',
      icon: 'coffee',
      title: 'Balanced Morning Fuel',
      actions: [
        hasDiabetes 
          ? 'Blood-sugar stabilizing plate: High protein (eggs, Greek yogurt, or tofu) + avocado + chia seeds. Avoid high-glycemic sweetened cereals and fruit juices.'
          : hasDigestive
          ? 'Gentle digestion: Warm oatmeal with cooked berries and flaxseed. Chew each mouthful thoroughly.'
          : 'Sustained energy breakfast: Whole grain sourdough with poached eggs, spinach, and a handful of walnuts.',
        hasAnemia ? 'Iron synergy: Include sliced bell pepper or berries (Vitamin C) alongside your meal; avoid drinking coffee or black tea with this meal.' : 'Sip warm water or herbal tea.',
        'Mindful eating: Eat seated without screens to allow proper cephalic phase digestive enzyme release.'
      ],
      whyThisSuggestion: 'Starting the day with protein and fiber balances metabolic hormones and prevents mid-morning energy crashes.'
    },
    {
      time: '09:00 AM – 12:30 PM',
      phase: 'Daytime Focus & Active Pacing',
      icon: 'briefcase',
      title: 'Productive Work & Ergonomic Breaks',
      actions: [
        hasHandPain ? 'Ergonomic check: Keep keyboard and mouse close to avoid reaching. Keep wrists straight with forearms supported.' : 'Check screen height to ensure eye-level alignment.',
        hasLegPain ? 'Vascular pump: Every 45 minutes, stand up and perform 15 seated calf raises and ankle circles to assist venous return.' : 'Take a 2-minute posture change break every hour.',
        hasAllergies ? 'Air quality check: Keep office/room well ventilated with HEPA air filtration if pollen counts are high.' : 'Keep fresh air circulating.',
        'Hydration pacing: Keep a water bottle within reach and sip steadily.'
      ],
      whyThisSuggestion: 'Frequent micro-breaks reduce static musculoskeletal strain and prevent cognitive fatigue.'
    },
    {
      time: '12:30 PM – 01:30 PM',
      phase: 'Mindful Midday Lunch & Movement',
      icon: 'utensils',
      title: 'Nutrient-Dense Lunch & Gentle Stroll',
      actions: [
        'Balanced plate: 50% colorful vegetables (cruciferous, greens), 25% lean protein, and 25% complex slow-burning carbohydrates.',
        hasDiabetes ? 'Post-meal stroll: Take a gentle 10-minute flat walk right after finishing lunch to shuttle glucose directly into working muscles.' : 'Take a short 10-15 minute walk in fresh air.',
        hasDigestive ? 'Avoid carbonated cold beverages with food; sip warm ginger or peppermint tea 20 minutes after lunch.' : 'Finish with a brief pause before resuming work.'
      ],
      whyThisSuggestion: 'Post-meal movement utilizes muscle contraction to improve insulin sensitivity and stimulates lymphatic flow.'
    },
    {
      time: '03:30 PM – 04:00 PM',
      phase: 'Midday Rest & Recovery Pause',
      icon: 'battery-charging',
      title: 'Restorative Recharge (Pacing)',
      actions: [
        hasLegPain 
          ? 'Leg elevation rest: Lie down with calves comfortably elevated on pillows slightly above heart level for 15 minutes (unless contraindicated by peripheral arterial disease).'
          : 'Horizontal rest pause: Sit in a comfortable reclined chair with eyes closed for 10-15 minutes.',
        hasStress ? 'Physiological sigh session: Perform 3 sets of double-inhale, slow-exhale breathing to reset autonomic tension.' : 'Practice 5 minutes of calm box breathing.',
        'Caffeine boundary: Discontinue caffeinated beverages from this hour onward to protect nighttime sleep architecture.'
      ],
      whyThisSuggestion: 'A brief structured rest pause halts the accumulation of daytime physical and mental fatigue without disturbing night sleep.'
    },
    {
      time: '06:30 PM – 08:30 PM',
      phase: 'Evening Routine & Nourishment',
      icon: 'sunset',
      title: 'Light Dinner & Nervous System Decompression',
      actions: [
        'Light, early evening dinner: Focus on easy-to-digest whole foods, leafy vegetables, and light proteins. Allow at least 2.5 hours between dinner and sleep.',
        hasAllergies ? 'Allergy flush: Wash your face, rinse nasal passages with saline, and change out of outdoor clothing to avoid bringing pollen into living spaces.' : 'Wash face with warm water.',
        hasJointPain ? 'Gentle evening mobility: Light joint circles and warm compress over tight areas to prepare for comfortable rest.' : 'Light full-body gentle stretching.'
      ],
      whyThisSuggestion: 'Eating early allows gastric emptying and metabolic cooling before the body transitions toward sleep.'
    },
    {
      time: '09:00 PM – 10:30 PM',
      phase: 'Bedtime Preparation Sanctuary',
      icon: 'moon',
      title: 'Sleep Hygiene & Bedtime Alignment',
      actions: [
        'Digital sunset: Turn off phones, tablets, and bright overhead lights; switch to warm lamps to cue melatonin release.',
        hasHandPain ? 'Wrist positioning: Sleep with hands in a neutral position (wrists straight, not curled under head or chest). Consider soft nighttime resting splints if advised.' : 'Ensure pillows support a neutral neck position.',
        hasLegPain ? 'Pillow between knees: Place a soft pillow between knees (if on your side) or under knees (if on your back) to align spine and legs.' : 'Keep a cool bedroom temperature (around 18-20°C / 65-68°F).',
        hasSleepIssues ? '20-Minute stimulus control: If you do not fall asleep within 20 minutes, leave the bedroom and read a soothing book in low light until drowsy.' : 'Engage in 5 minutes of gratitude or gentle breathing.'
      ],
      whyThisSuggestion: 'An intentional, low-stimulus bedtime routine lowers core body temperature and prepares the brain for deep stage 3 and REM sleep.'
    }
  ];
}



// ==========================================
// Module: js/engine/recommendationEngine.js
// ==========================================
/**
 * HealthMind AI - Rule-Based Recommendation Engine
 * Synthesizes personal profile, selected health conditions, and specific symptoms
 * into a structured, medically reviewed, personalized wellness guidance plan.
 */



class RecommendationEngine {
  constructor() {
    this.conditionsMap = new Map(HEALTH_CONDITIONS.map(c => [c.id, c]));
  }

  /**
   * Main synthesis pipeline
   */
  generateGuidance(userData) {
    const {
      fullName = '',
      gender = '',
      maritalStatus = '',
      country = '',
      selectedConditionIds = [],
      otherConditionText = '',
      userSymptoms = [],
      freeTextNotes = ''
    } = userData;

    // Extract first name for warm, professional personalization
    const firstName = this.extractFirstName(fullName);

    // Parse free-text notes for additional clinical keywords
    const detectedKeywords = this.parseFreeText(freeTextNotes);

    // Full merged condition set (selected + strongly indicated by text)
    const activeConditionIds = [...new Set([...selectedConditionIds])];
    
    // Retrieve full condition objects
    const conditions = activeConditionIds
      .map(id => this.conditionsMap.get(id))
      .filter(Boolean);

    // Detect multi-condition interaction rules
    const triggeredRules = this.evaluateMultiConditionRules(activeConditionIds, userSymptoms, detectedKeywords);

    // Build personalized sections
    const nutritionGuidance = this.buildNutritionGuidance(activeConditionIds, conditions);
    const sleepGuidance = this.buildSleepGuidance(activeConditionIds, userSymptoms, triggeredRules);
    const activityGuidance = this.buildActivityGuidance(activeConditionIds, userSymptoms);
    const restGuidance = this.buildRestGuidance(activeConditionIds, triggeredRules);
    const stressGuidance = this.buildStressGuidance(activeConditionIds);
    const dailySchedule = generateDailySchedule(activeConditionIds, userSymptoms);
    const redFlags = this.aggregateRedFlags(conditions, userSymptoms, triggeredRules);
    const doctorQuestions = this.generateDoctorQuestions(conditions, userSymptoms);

    return {
      metadata: {
        generatedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        version: '1.2-med-reviewed',
        engine: 'HealthMind Local Rule-Based Inference Engine'
      },
      patientProfile: {
        fullName,
        firstName,
        gender,
        maritalStatus,
        country,
        otherConditionText
      },
      conditionsSummary: conditions,
      symptomsSummary: userSymptoms,
      freeTextNotes,
      detectedKeywords,
      multiConditionSynergies: triggeredRules,
      nutrition: nutritionGuidance,
      sleep: sleepGuidance,
      activity: activityGuidance,
      restRecovery: restGuidance,
      stress: stressGuidance,
      cortisolEducation: CORTISOL_EDUCATION,
      dailySchedule,
      redFlags,
      doctorQuestions
    };
  }

  extractFirstName(fullName) {
    if (!fullName || !fullName.trim()) return 'Friend';
    const parts = fullName.trim().split(/\s+/);
    // Capitalize first letter properly
    return parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  }

  /**
   * Scans user free-text for clinical keywords from the library
   */
  parseFreeText(text) {
    if (!text || typeof text !== 'string') return [];
    const normalized = text.toLowerCase();
    const matches = [];

    SYMPTOM_LIBRARY.forEach(item => {
      for (const kw of item.keywords) {
        if (normalized.includes(kw.toLowerCase())) {
          matches.push({
            keyword: kw,
            matchedSymptom: item.label,
            category: item.category
          });
          break;
        }
      }
    });

    return matches;
  }

  /**
   * Evaluates pairwise and multi-condition rules
   */
  evaluateMultiConditionRules(conditionIds, userSymptoms, detectedKeywords) {
    const matched = [];

    // Also check if symptoms trigger condition concepts
    const effectiveConditionSet = new Set(conditionIds);
    
    // Check keywords to supplement conditions
    detectedKeywords.forEach(k => {
      const symp = SYMPTOM_LIBRARY.find(s => s.label === k.matchedSymptom);
      if (symp && symp.associatedCondition) {
        effectiveConditionSet.add(symp.associatedCondition);
      }
    });

    MULTI_CONDITION_RULES.forEach(rule => {
      // Check if all trigger conditions are present in the effective set
      const isTriggered = rule.triggers.every(t => effectiveConditionSet.has(t));
      if (isTriggered) {
        matched.push(rule);
      }
    });

    return matched;
  }

  /**
   * Nutrition and Hydration Module
   */
  buildNutritionGuidance(conditionIds, conditions) {
    const protocols = [];
    const foodsToPrioritize = [];
    const foodsToModerate = [];

    // Diabetes / Blood Sugar
    if (conditionIds.includes('diabetes')) {
      protocols.push({
        title: 'Glycemic Balance & Fiber Optimization',
        description: 'Focus on low-glycemic, fiber-rich whole foods to prevent postprandial glucose surges and insulin resistance.',
        whyThisSuggestion: 'Because you selected Diabetes / Blood Sugar concerns: Soluble fiber delays carbohydrate absorption and stabilizes vascular endothelia.'
      });
      foodsToPrioritize.push('Legumes & Lentils', 'Chia & Flaxseeds', 'Leafy Cruciferous Greens', 'Wild Salmon / Healthy Omega Fats');
      foodsToModerate.push('Refined flours & white bakery items', 'Sugary fruit juices & sodas', 'High-fructose corn syrups');
    }

    // High Blood Pressure
    if (conditionIds.includes('high-blood-pressure')) {
      protocols.push({
        title: 'DASH Principles: Sodium & Potassium Ratio',
        description: 'Increase dietary potassium to assist renal sodium clearance and promote peripheral arterial smooth muscle relaxation.',
        whyThisSuggestion: 'Because you selected High Blood Pressure: Potassium and magnesium naturally counter intracellular sodium retention.'
      });
      foodsToPrioritize.push('Avocados & Bananas', 'Dark Leafy Greens', 'Cooked Sweet Potatoes', 'Unsalted Pumpkin Seeds');
      foodsToModerate.push('Ultra-processed deli meats', 'Canned broths with high sodium', 'Excessive table salt');
    }

    // Digestive Problems
    if (conditionIds.includes('digestive-problems')) {
      protocols.push({
        title: 'Gentle GI Motility & Fermentation Awareness',
        description: 'Eat warm, thoroughly cooked foods; chew each bite 20-30 times and avoid drinking large volumes of icy liquids during meals.',
        whyThisSuggestion: 'Because you selected Digestive Problems: Cold liquids and rapid swallowing hinder gastric protease activation and cause gas distention.'
      });
      foodsToPrioritize.push('Warm Bone or Vegetable Broth', 'Cooked Carrots & Zucchini', 'Steamed Rice / Quinoa', 'Ginger & Peppermint Infusions');
      foodsToModerate.push('Raw carbonated beverages', 'Deep-fried greasy meals', 'Excessive raw brassicas on an empty stomach');
    }

    // Anemia
    if (conditionIds.includes('anemia')) {
      protocols.push({
        title: 'Non-Heme Iron & Ascorbic Acid Synergy',
        description: 'Pair plant-based iron sources with Vitamin C to increase bioavailability up to three-fold. Separate iron intake from coffee/tea by at least 90 minutes.',
        whyThisSuggestion: 'Because you selected Anemia: Tannins in tea and coffee chelate iron and reduce intestinal absorption.'
      });
      foodsToPrioritize.push('Lentils & Chickpeas with Lemon', 'Spinach paired with Bell Peppers', 'Pumpkin Seeds', 'Lean poultry / fortified grains');
      foodsToModerate.push('Drinking black tea or coffee during meals', 'High calcium supplements taken directly with iron meals');
    }

    // Joint Pain / Allergies (Anti-inflammatory)
    if (conditionIds.includes('joint-pain') || conditionIds.includes('allergies')) {
      protocols.push({
        title: 'Anti-Inflammatory Phytonutrients & Polyphenols',
        description: 'Incorporate quercetin- and polyphenol-dense whole foods to stabilize mast cells and modulate systemic inflammatory cytokines.',
        whyThisSuggestion: 'Because you selected Joint Pain or Allergies: Quercetin and omega-3 fatty acids naturally temper inflammatory prostaglandin pathways.'
      });
      foodsToPrioritize.push('Blueberries & Blackberries', 'Red Onions & Apples (rich in quercetin)', 'Extra Virgin Olive Oil', 'Turmeric with Black Pepper');
      foodsToModerate.push('Industrial seed oils with high omega-6', 'Charred or heavily blackened meats');
    }

    // Default holistic baseline if few specific conditions
    if (protocols.length === 0) {
      protocols.push({
        title: 'Foundational Nutrient Density & Hydration',
        description: 'Focus on a colorful whole-food plate with adequate lean protein, vibrant prebiotic fibers, and clean hydration.',
        whyThisSuggestion: 'Foundational wellness protocol: Whole-food nutrition stabilizes baseline energy and cellular repair mechanisms.'
      });
      foodsToPrioritize.push('Fresh seasonal vegetables', 'Nuts & seeds', 'Whole grains', 'Lean proteins');
      foodsToModerate.push('Ultra-processed snack foods', 'Added refined sugars');
    }

    return {
      hydrationTarget: '2.2 – 2.8 Liters of pure water and herbal infusions daily (adjust with healthcare provider if renal/cardiac restrictions exist).',
      protocols,
      foodsToPrioritize: [...new Set(foodsToPrioritize)],
      foodsToModerate: [...new Set(foodsToModerate)]
    };
  }

  /**
   * Sleep Guidance Module
   */
  buildSleepGuidance(conditionIds, userSymptoms, triggeredRules) {
    const recommendations = [];

    // Check dual limb ergonomics
    const hasDualLimb = triggeredRules.some(r => r.id === 'rule-leg-hand-sleep');
    if (hasDualLimb) {
      recommendations.push({
        title: 'Neutral Limb Alignment During Sleep',
        guidance: 'Position hands alongside your body in soft neutral extension; never tuck hands tightly under your pillow. Place a supportive pillow between your knees to align the pelvis and legs without twisting the lower back.',
        whyThisSuggestion: 'Because you selected both Hand Pain and Leg Pain: This posture eliminates median nerve compression while maintaining optimal lower-extremity spinal alignment.'
      });
    } else {
      if (conditionIds.includes('hand-pain')) {
        recommendations.push({
          title: 'Nocturnal Wrist Protection',
          guidance: 'Keep wrists straight and relaxed. Many people unconsciously curl their wrists inward during REM sleep, triggering severe tingling and pain. Consider a soft resting neutral splint.',
          whyThisSuggestion: 'Because you selected Hand Pain: Neutral wrist posture (0-15° extension) minimizes pressure within the carpal canal.'
        });
      }
      if (conditionIds.includes('leg-pain')) {
        recommendations.push({
          title: 'Lower Extremity Night Comfort',
          guidance: 'Place a contour pillow under your knees when sleeping on your back, or between your knees when on your side. If your doctor recommended elevation for venous swelling, elevate calves gently.',
          whyThisSuggestion: 'Because you selected Leg Pain: Offloads pressure from lumbar nerve roots and prevents knee joint shear.'
        });
      }
    }

    // Allergies
    if (conditionIds.includes('allergies')) {
      recommendations.push({
        title: 'Allergen-Free Sleep Sanctuary',
        guidance: 'Encase mattress and pillows in allergen-barrier covers. Wash bed linen weekly at 60°C (140°F). Keep pets out of the sleeping quarters and run a HEPA air purifier continuously.',
        whyThisSuggestion: 'Because you selected Allergies: Micro-particles on pillows trigger nighttime histamine surges, causing nasal resistance, snoring, and micro-arousals.'
      });
    }

    // Sleep Difficulties / Stress
    if (conditionIds.includes('sleep-difficulties') || conditionIds.includes('stress-overthinking')) {
      recommendations.push({
        title: 'Stimulus Control & The 20-Minute Rule',
        guidance: 'The bed must remain an exclusive cue for sleep and intimacy. If awake after 20 minutes, leave the bed and engage in a calming, low-light activity until sleepiness returns.',
        whyThisSuggestion: 'Because you selected Sleep Difficulties or Stress: Eliminates the classical conditioning where the bed becomes associated with frustration and alertness.'
      });
    }

    // Default
    if (recommendations.length === 0) {
      recommendations.push({
        title: 'Circadian Regularity & Temperature Modulation',
        guidance: 'Maintain a consistent sleep-wake schedule 7 days a week. Keep the bedroom cool (18-20°C / 65-68°F) to facilitate the natural core body temperature drop required for slow-wave sleep.',
        whyThisSuggestion: 'Evidence-based sleep hygiene: Core body cooling is a mandatory biological trigger for melatonin synthesis.'
      });
    }

    return recommendations;
  }

  /**
   * Physical Activity Module
   */
  buildActivityGuidance(conditionIds, userSymptoms) {
    const suggestions = [];

    if (conditionIds.includes('diabetes')) {
      suggestions.push({
        title: 'Post-Meal Glucose Walks',
        type: 'Low-Impact Aerobic',
        frequency: '10–15 minutes after main meals',
        guidance: 'A gentle walk directly following lunch and dinner activates GLUT4 glucose transporters in skeletal muscle without requiring increased insulin secretion.',
        whyThisSuggestion: 'Because you selected Diabetes: Postprandial movement flattens glucose curves and improves insulin sensitivity safely.'
      });
    }

    if (conditionIds.includes('leg-pain') || conditionIds.includes('joint-pain')) {
      suggestions.push({
        title: 'Low-Impact Joint-Preserving Mobility',
        type: 'Non-Weight Bearing / Low Load',
        frequency: '15–20 minutes daily',
        guidance: 'Engage in swimming, water aerobics, recumbent stationary cycling, or gentle flat walking. Avoid sudden high-impact jumps or uneven terrain that jolts joint cartilage.',
        whyThisSuggestion: 'Because you selected Leg/Joint Pain: Cyclic non-impact motion circulates synovial fluid to nourish cartilage without joint wear.'
      });
    }

    if (conditionIds.includes('hand-pain')) {
      suggestions.push({
        title: 'Tendon Gliding & Neural Mobilization',
        type: 'Gentle Mobility',
        frequency: '2–3 times daily',
        guidance: 'Perform smooth tendon-gliding exercises: transition slowly from straight open fingers to a hook fist, tabletop, straight fist, and full fist. Never push into sharp pinching pain.',
        whyThisSuggestion: 'Because you selected Hand Pain: Restores smooth glide of flexor tendons within their synovial sheaths.'
      });
    }

    if (conditionIds.includes('fatigue') || conditionIds.includes('depression')) {
      suggestions.push({
        title: 'Paced Movement Snacks (Energy Banking)',
        type: 'Pacing Strategy',
        frequency: '5–10 minute intervals',
        guidance: 'Do not attempt exhausting workouts that trigger post-exertional crashes. Instead, do brief 5-minute movement snacks like gentle stretching or a garden stroll.',
        whyThisSuggestion: 'Because you selected Fatigue or Low Mood: Prevents the boom-and-bust cycle and gradually rebuilds mitochondrial capacity.'
      });
    }

    if (suggestions.length === 0) {
      suggestions.push({
        title: 'Moderate Daily Rhythmic Movement',
        type: 'Aerobic & Flexibility',
        frequency: '30 minutes most days',
        guidance: 'Brisk walking, light jogging, or yoga to maintain cardiovascular elasticity and mental clarity.',
        whyThisSuggestion: 'General cardiovascular guidance: Regular movement preserves nitric oxide bioavailability and metabolic rate.'
      });
    }

    return suggestions;
  }

  /**
   * Rest and Recovery Module
   */
  buildRestGuidance(conditionIds, triggeredRules) {
    const protocols = [];

    // Specific Leg Elevation Rule
    const elevationRule = triggeredRules.find(r => r.id === 'rule-leg-elevation-guide');
    if (elevationRule) {
      protocols.push({
        title: elevationRule.title,
        guidance: elevationRule.guidance,
        whyThisSuggestion: elevationRule.whyThisSuggestion
      });
    }

    // Workstation & Posture
    if (conditionIds.includes('hand-pain') || conditionIds.includes('headaches')) {
      protocols.push({
        title: 'Ergonomic Workstation Alignment',
        guidance: [
          'Monitor position: Top third of the screen should align with eye level, 50-70cm away, to prevent cervical spine forward bending.',
          'Elbow & Wrist angle: Keep elbows at 90 degrees with forearms supported horizontally. Use light-touch keyboards and vertical ergonomic mice if hand strain persists.',
          'Micro-pauses: Every 30 minutes, let hands drop loosely by your sides and gently shake them for 10 seconds to restore microcirculation.'
        ],
        whyThisSuggestion: 'Because you selected Hand Pain or Headaches: Prevents sustained static muscular loading of cervical and forearm flexors.'
      });
    }

    // General recovery protocol
    if (protocols.length === 0) {
      protocols.push({
        title: 'Restorative Nervous System Pauses',
        guidance: [
          'Take scheduled 5-minute eye-rest breaks away from screens every 60 minutes.',
          'Practice horizontal rest (lying flat with legs comfortably supported) for 10 minutes midday to unload spinal discs.',
          'Avoid checking stressful work messages while in designated recovery spaces.'
        ],
        whyThisSuggestion: 'Foundational musculoskeletal care: Intervertebral discs rehydrate during recumbent resting postures.'
      });
    }

    return protocols;
  }

  /**
   * Stress Management Module
   */
  buildStressGuidance(conditionIds) {
    return {
      title: 'Evidence-Based Autonomic Downregulation',
      overview: 'When perceived stress is elevated, the sympathetic "fight-or-flight" branch speeds up heart rate, tightens skeletal muscles, and increases vigilance. Practicing targeted somatic techniques activates the parasympathetic brake via the vagus nerve.',
      techniques: [
        {
          name: 'The Physiological Sigh (Fast Reset)',
          duration: '60–90 seconds (3–5 cycles)',
          steps: [
            'Take two consecutive quick sniffs through your nose (first deep, second topping off your lungs).',
            'Exhale slowly and completely through your mouth with a soft sigh.',
            'Notice the immediate drop in heart rate as lung alveoli re-inflate and vagal stimulation engages.'
          ],
          whyThisSuggestion: 'Clinically proven to be the fastest voluntary method to reduce physiological arousal and reduce autonomic stress markers.'
        },
        {
          name: 'Box Breathing (Visual Timer)',
          duration: '3–5 minutes',
          steps: [
            'Inhale smoothly for 4 seconds.',
            'Hold lungs gently full for 4 seconds.',
            'Exhale smoothly for 4 seconds.',
            'Hold lungs gently empty for 4 seconds.'
          ],
          whyThisSuggestion: 'Equalizes autonomic tone, stabilizes heart rate variability (HRV), and clears cognitive overwhelm.'
        },
        {
          name: 'Cognitive Worry De-escalation',
          duration: '10–15 minutes (afternoon only)',
          steps: [
            'Designate a specific 15-minute afternoon slot as your official "Worry Time".',
            'Write down all swirling concerns on physical paper with zero judgment.',
            'Categorize into: (A) Things I can take one concrete action on today, and (B) Things outside my direct control right now.',
            'Close the notebook. If thoughts arise in bed, remind yourself: "This has been logged and will be addressed tomorrow at 3 PM."'
          ],
          whyThisSuggestion: 'Transfers mental loops from working memory to external paper, halting nighttime rumination.'
        }
      ]
    };
  }

  /**
   * Aggregates Red Flag Indicators
   */
  aggregateRedFlags(conditions, userSymptoms, triggeredRules) {
    const flags = [];

    conditions.forEach(cond => {
      if (cond.redFlags && cond.redFlags.length > 0) {
        flags.push({
          condition: cond.name,
          items: cond.redFlags
        });
      }
    });

    // Universal emergency guidance
    return {
      urgentWarningHeader: 'When to Seek Immediate Emergency Medical Care',
      urgentWarningText: 'If you or someone around you experiences any of the following symptoms, call emergency services (e.g., 911, 999, 112, or your local emergency number) or proceed to the nearest emergency department immediately:',
      universalRedFlags: [
        'Sudden severe chest pressure, tightness, squeezing, or pain radiating to jaw, neck, back, or arm.',
        'Sudden weakness, numbness, or drooping on one side of your face or body; sudden difficulty speaking or understanding speech.',
        'Sudden severe "thunderclap" headache that peaks in intensity within seconds.',
        'Sudden shortness of breath, severe wheezing, or feeling of suffocation.',
        'Swelling of the lips, tongue, or throat, or sudden widespread hives with dizziness.',
        'Sudden calf swelling that is red, hot, and exquisitely tender (possible deep vein blood clot).',
        'Thoughts of self-harm, severe suicidal ideation, or profound psychological crisis.'
      ],
      conditionSpecificFlags: flags
    };
  }

  /**
   * Generates tailored questions for doctor visits
   */
  generateDoctorQuestions(conditions, userSymptoms) {
    const questions = [
      'Are there any diagnostic lab tests (such as complete blood count, thyroid panel, fasting glucose/HbA1c, or vitamin D/ferritin) you would recommend based on my symptoms?',
      'Do any of my current daily supplements or lifestyle habits interact with my symptoms or health concerns?'
    ];

    if (conditions.some(c => c.id === 'leg-pain')) {
      questions.push('Could my leg symptoms be related to venous circulation, arterial blood flow, or lumbar spine nerve compression? Is leg elevation safe for my specific circulatory status?');
    }

    if (conditions.some(c => c.id === 'hand-pain')) {
      questions.push('Would an occupational therapy consult or a custom nocturnal resting wrist brace help protect my median/ulnar nerves?');
    }

    if (conditions.some(c => c.id === 'allergies')) {
      questions.push('Would formal allergy skin prick or IgE testing help identify my exact environmental or dietary triggers?');
    }

    if (conditions.some(c => c.id === 'fatigue' || c.id === 'sleep-difficulties')) {
      questions.push('Could an overnight sleep study (polysomnography) be warranted to rule out sleep apnea or nocturnal movement disorders?');
    }

    return questions;
  }
}



// ==========================================
// Module: js/components/navigation.js
// ==========================================
/**
 * HealthMind AI - Navigation & Progress Indicator Component
 * Includes brand logo, step indicators, trust badges, and 1-click WhatsApp share button.
 */

class Navigation {
  constructor(app) {
    this.app = app;
  }

  render(currentStep) {
    const steps = [
      { num: 1, label: 'Personal Details', sub: 'Profile' },
      { num: 2, label: 'Health Conditions', sub: 'Select' },
      { num: 3, label: 'Symptoms & Search', sub: 'Describe' },
      { num: 4, label: 'Personalized Guidance', sub: 'Dashboard' }
    ];

    return `
      <!-- Top Brand Header -->
      <header class="bg-white/85 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 transition-all">
        <div class="max-w-6xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
          
          <!-- Logo & Brand -->
          <div class="flex items-center gap-3 cursor-pointer" id="brand-logo-btn" title="Return to Home">
            <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-sky-500/25">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="text-lg sm:text-xl font-black text-slate-900 tracking-tight">HealthMind</span>
                <span class="text-xs font-black px-1.5 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200 uppercase tracking-wider">AI</span>
              </div>
              <p class="text-[10px] text-slate-500 font-medium tracking-wide">Personal Health Guidance Platform</p>
            </div>
          </div>

          <!-- Trust Badges & WhatsApp Share Button -->
          <div class="flex items-center gap-2 sm:gap-3">
            <!-- 100% Client-Side Privacy Badge -->
            <div class="hidden md:flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/70">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>100% Client-Side Privacy</span>
            </div>

            <!-- Medically Reviewed Logic Badge -->
            <div class="hidden lg:flex items-center gap-1.5 text-xs text-sky-800 bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/70">
              <svg class="w-3.5 h-3.5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>Medically Reviewed Logic</span>
            </div>

            <!-- WhatsApp Share Quick Button (Global in Header) -->
            <button 
              type="button" 
              id="nav-share-whatsapp-btn"
              class="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 text-emerald-800 border border-emerald-300/80 font-bold text-xs shadow-xs transition-all cursor-pointer"
              title="Share HealthMind AI on WhatsApp"
            >
              <svg class="w-4 h-4 text-emerald-600 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
              <span class="hidden sm:inline">WhatsApp</span>
              <span class="sm:hidden text-[11px]">Share</span>
            </button>
          </div>
        </div>

        <!-- 4-Step Progress Indicator Bar -->
        <div class="bg-slate-50/90 border-t border-slate-200/60 py-3 px-4">
          <div class="max-w-4xl mx-auto">
            
            <!-- Desktop Steps -->
            <div class="hidden sm:grid grid-cols-4 gap-2">
              ${steps.map(s => {
                const isCompleted = currentStep > s.num;
                const isActive = currentStep === s.num;
                const isClickable = isCompleted || isActive;

                return `
                  <button 
                    type="button" 
                    class="step-nav-btn flex items-center gap-2.5 p-2 rounded-xl text-left transition-all ${
                      isClickable ? 'cursor-pointer hover:bg-white hover:shadow-xs' : 'cursor-default opacity-50'
                    }"
                    data-step="${s.num}"
                    ${!isClickable ? 'disabled' : ''}
                  >
                    <!-- Circle Badge -->
                    <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                      isCompleted 
                        ? 'bg-sky-600 text-white shadow-xs' 
                        : isActive 
                        ? 'bg-sky-600 text-white ring-4 ring-sky-500/20' 
                        : 'bg-slate-200 text-slate-600'
                    }">
                      ${isCompleted 
                        ? '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' 
                        : s.num
                      }
                    </div>

                    <!-- Step Text -->
                    <div class="min-w-0">
                      <p class="text-[10px] uppercase font-bold tracking-wider leading-none ${
                        isActive ? 'text-sky-700' : isCompleted ? 'text-slate-500' : 'text-slate-400'
                      }">
                        Page ${s.num}
                      </p>
                      <p class="text-xs font-semibold truncate leading-tight mt-0.5 ${
                        isActive ? 'text-slate-900 font-bold' : isCompleted ? 'text-slate-800' : 'text-slate-500'
                      }">
                        ${s.label}
                      </p>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Mobile Step Indicator -->
            <div class="sm:hidden flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs font-bold">
                  ${currentStep}
                </span>
                <span class="text-xs font-bold text-slate-800">
                  Page ${currentStep} of 4: ${steps[currentStep - 1].label}
                </span>
              </div>
              <!-- Mini progress dots -->
              <div class="flex items-center gap-1.5">
                ${steps.map(s => `
                  <div class="w-2 h-2 rounded-full transition-all ${
                    currentStep === s.num ? 'w-5 bg-sky-600' : currentStep > s.num ? 'bg-sky-400' : 'bg-slate-300'
                  }"></div>
                `).join('')}
              </div>
            </div>

          </div>
        </div>
      </header>
    `;
  }

  attachEvents() {
    // Brand logo returns to step 1 (with state intact)
    document.getElementById('brand-logo-btn')?.addEventListener('click', () => {
      this.app.navigateTo(1);
    });

    // Step buttons click to navigate to completed steps
    document.querySelectorAll('.step-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetStep = parseInt(btn.getAttribute('data-step'), 10);
        if (targetStep && targetStep <= this.app.state.currentStep) {
          this.app.navigateTo(targetStep);
        }
      });
    });

    // Navigation WhatsApp Share button
    document.getElementById('nav-share-whatsapp-btn')?.addEventListener('click', () => {
      let text = '';
      if (this.app.state.currentStep === 4) {
        text = this.app.getWhatsAppShareMessage();
      } else {
        text = this.app.getPlatformInviteMessage();
      }
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
}


// ==========================================
// Module: js/components/page1Personal.js
// ==========================================
/**
 * HealthMind AI - Page 1 Component: Landing Hero & Personal Details Form
 * Attractive landing presentation, privacy assurance, and confidential profile setup.
 */



class Page1Personal {
  constructor(app) {
    this.app = app;
    this.selectedCountry = null;
    this.countryDropdownOpen = false;
  }

  render() {
    const data = this.app.state.userData;

    return `
      <div class="page-container max-w-5xl mx-auto py-8 px-4 animate-fade-in">
        
        <!-- ATTRACTIVE LANDING HERO SECTION -->
        <section class="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl shadow-sky-950/20 mb-10">
          <div class="relative z-10 max-w-3xl">
            <!-- Hero Eyebrow Pill -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-sky-200 backdrop-blur-md mb-4 border border-white/15">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Evidence-Based Healthcare Guidance Platform</span>
              <span class="text-white/40">•</span>
              <span class="text-white">100% Client-Side Privacy</span>
            </div>

            <!-- Main Title -->
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              Understand Your Health Concerns. <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-blue-200">
                Receive Personalized Guidance.
              </span>
            </h1>

            <!-- Subtitle -->
            <p class="text-sky-100 text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              HealthMind AI synthesizes your selected health conditions and specific symptoms to generate safe, medically reviewed lifestyle protocols, restful sleep ergonomics, and an actionable 7-phase daily wellness schedule.
            </p>

            <!-- Hero Action Buttons -->
            <div class="flex flex-wrap items-center gap-3">
              <a 
                href="#personal-details-section" 
                id="hero-start-btn"
                class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sky-950 bg-white hover:bg-sky-50 active:scale-95 shadow-lg shadow-black/10 transition-all text-sm sm:text-base cursor-pointer"
              >
                <span>Start Health Assessment</span>
                <svg class="w-4 h-4 text-sky-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              </a>

              <button 
                type="button" 
                id="hero-share-whatsapp-btn"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 shadow-md shadow-emerald-950/20 transition-all text-sm sm:text-base cursor-pointer"
              >
                <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
                <span>Share on WhatsApp</span>
              </button>
            </div>
          </div>

          <!-- Decorative Ambient Lighting -->
          <div class="absolute -right-16 -bottom-16 w-80 h-80 bg-sky-400/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -right-10 top-0 w-60 h-60 bg-blue-300/10 rounded-full blur-2xl pointer-events-none"></div>
        </section>

        <!-- 4 CORE VALUE PILLARS -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <!-- Pillar 1: Privacy -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-sm mb-1">100% Client-Side Privacy</h3>
            <p class="text-xs text-slate-500 leading-relaxed">No external AI servers, no telemetry tracking, and zero API keys. Your health details remain entirely within your browser.</p>
          </div>

          <!-- Pillar 2: Multi-Condition -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-sm mb-1">Multi-Condition Logic</h3>
            <p class="text-xs text-slate-500 leading-relaxed">Interlinks complex conditions (e.g., leg pain, sleep difficulties, allergies) to prevent conflicting advice and optimize alignment.</p>
          </div>

          <!-- Pillar 3: Daily Schedule -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-sm mb-1">7-Phase Daily Schedule</h3>
            <p class="text-xs text-slate-500 leading-relaxed">Structured morning, afternoon, and bedtime rhythm with hydration timing, mindful rest pauses, and ergonomic sleep positioning.</p>
          </div>

          <!-- Pillar 4: WhatsApp Sharing -->
          <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h3 class="font-bold text-slate-900 text-sm mb-1">1-Click WhatsApp Sharing</h3>
            <p class="text-xs text-slate-500 leading-relaxed">Easily share your personalized plan with family, doctors, or caregivers. The recipient can open the link instantly without app downloads.</p>
          </div>
        </div>

        <!-- TRUST METRICS STRIP -->
        <div class="bg-slate-100/70 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mb-12 flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <div class="text-xl sm:text-2xl font-black text-sky-800">15</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Condition Categories</div>
          </div>
          <div class="hidden sm:block w-px h-8 bg-slate-300"></div>
          <div>
            <div class="text-xl sm:text-2xl font-black text-sky-800">100+</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Evidence Protocols</div>
          </div>
          <div class="hidden sm:block w-px h-8 bg-slate-300"></div>
          <div>
            <div class="text-xl sm:text-2xl font-black text-sky-800">195</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Countries Supported</div>
          </div>
          <div class="hidden sm:block w-px h-8 bg-slate-300"></div>
          <div>
            <div class="text-xl sm:text-2xl font-black text-emerald-700">100% Free</div>
            <div class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">No API Keys Required</div>
          </div>
        </div>

        <!-- STEP 1 FORM SECTION -->
        <div id="personal-details-section" class="scroll-mt-24">
          <!-- Header -->
          <div class="text-center mb-8">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3 border border-sky-200">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Step 1 of 4 • Confidential Profile
            </span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Personal Details</h2>
            <p class="text-slate-600 mt-2 text-base max-w-xl mx-auto">
              Provide basic profile details so our educational recommendation engine can appropriately calibrate its lifestyle suggestions.
            </p>
          </div>

          <!-- Privacy Assurance Notice -->
          <div class="bg-sky-50/80 border border-sky-200/80 rounded-2xl p-4 sm:p-5 mb-8 flex items-start gap-3.5 text-sky-950 shadow-sm max-w-3xl mx-auto">
            <div class="p-2 bg-sky-600 text-white rounded-xl shadow-sm shrink-0">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div class="text-xs sm:text-sm leading-relaxed">
              <p class="font-bold text-sky-900 mb-0.5">100% Client-Side Privacy Guarantee</p>
              <p class="text-sky-800">Your health and personal information stays strictly within your own browser. We do not use external AI servers, do not transmit data to third parties, and never sell your personal information.</p>
            </div>
          </div>

          <!-- Form Card -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-3xl mx-auto">
            <form id="personal-form" class="space-y-6">
              
              <!-- Field 1: Full Name -->
              <div>
                <label for="input-fullname" class="block text-sm font-semibold text-slate-800 mb-1.5">
                  Full Name <span class="text-rose-500">*</span>
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <input 
                    type="text" 
                    id="input-fullname" 
                    name="fullName"
                    value="${this.escapeHtml(data.fullName || '')}"
                    placeholder="e.g., Sarah Jenkins" 
                    required
                    class="w-full pl-11 pr-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all placeholder:text-slate-400"
                  />
                </div>
                <p class="text-xs text-slate-500 mt-1.5">We will use your first name to personalize your guidance report.</p>
              </div>

              <!-- Field 2: Gender -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">
                  Gender <span class="text-rose-500">*</span>
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  ${[
                    { value: 'Female', label: 'Female', icon: '♀' },
                    { value: 'Male', label: 'Male', icon: '♂' },
                    { value: 'Non-Binary', label: 'Non-Binary', icon: '⚧' },
                    { value: 'Prefer not to say', label: 'Prefer not to say', icon: '•' }
                  ].map(opt => `
                    <label class="relative flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all select-none ${
                      data.gender === opt.value
                        ? 'border-sky-600 bg-sky-50/80 text-sky-900 ring-2 ring-sky-500/30 font-semibold'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                    }">
                      <input 
                        type="radio" 
                        name="gender" 
                        value="${opt.value}" 
                        ${data.gender === opt.value ? 'checked' : ''} 
                        class="sr-only gender-radio"
                      />
                      <span class="mr-1.5 font-bold">${opt.icon}</span>
                      <span>${opt.label}</span>
                    </label>
                  `).join('')}
                </div>
              </div>

              <!-- Field 3: Marital Status (Optional) -->
              <div>
                <label for="select-marital" class="block text-sm font-semibold text-slate-800 mb-1.5">
                  Marital Status <span class="text-xs font-normal text-slate-400">(Optional)</span>
                </label>
                <div class="relative">
                  <select 
                    id="select-marital" 
                    name="maritalStatus" 
                    class="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" ${!data.maritalStatus ? 'selected' : ''}>Prefer not to specify</option>
                    <option value="Single" ${data.maritalStatus === 'Single' ? 'selected' : ''}>Single</option>
                    <option value="Married" ${data.maritalStatus === 'Married' ? 'selected' : ''}>Married</option>
                    <option value="Partnered" ${data.maritalStatus === 'Partnered' ? 'selected' : ''}>In a relationship / Partnered</option>
                    <option value="Separated/Divorced" ${data.maritalStatus === 'Separated/Divorced' ? 'selected' : ''}>Separated / Divorced</option>
                    <option value="Widowed" ${data.maritalStatus === 'Widowed' ? 'selected' : ''}>Widowed</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
              </div>

              <!-- Field 4: Searchable Country Dropdown -->
              <div class="relative" id="country-picker-container">
                <label class="block text-sm font-semibold text-slate-800 mb-1.5">
                  Country <span class="text-rose-500">*</span>
                </label>
                
                <!-- Selected Display / Input Trigger -->
                <div 
                  id="country-selector-btn"
                  tabindex="0"
                  class="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all cursor-pointer flex items-center justify-between"
                >
                  <span id="country-selected-label" class="${data.country ? 'text-slate-900 font-medium' : 'text-slate-400'}">
                    ${data.country ? this.getCountryDisplay(data.country) : 'Select or search your country...'}
                  </span>
                  <svg class="w-4 h-4 text-slate-400 transition-transform dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>

                <!-- Hidden native input to store value -->
                <input type="hidden" id="input-country" name="country" value="${this.escapeHtml(data.country || '')}" required />

                <!-- Dropdown Panel -->
                <div 
                  id="country-dropdown-panel" 
                  class="hidden absolute z-50 left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <!-- Search Box Inside Dropdown -->
                  <div class="p-3 bg-slate-50 border-b border-slate-100">
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </div>
                      <input 
                        type="text" 
                        id="country-search-input" 
                        placeholder="Type country name..." 
                        autocomplete="off"
                        class="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                      <button type="button" id="country-clear-search" class="hidden absolute inset-y-0 right-0 pr-2.5 flex items-center text-slate-400 hover:text-slate-600">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                    </div>
                  </div>

                  <!-- Country List Options -->
                  <div id="country-options-list" class="max-h-60 overflow-y-auto divide-y divide-slate-50 text-sm">
                    <!-- Populated via JS -->
                  </div>
                </div>
              </div>

              <!-- Error message container -->
              <div id="form-error-msg" class="hidden p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-center gap-2">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span id="form-error-text">Please fill out all required fields.</span>
              </div>

              <!-- Action Buttons -->
              <div class="pt-4 flex items-center justify-end">
                <button 
                  type="submit" 
                  id="btn-continue-step1"
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 active:scale-[0.99] transition-all cursor-pointer text-base"
                >
                  <span>Continue to Health Conditions</span>
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  attachEvents() {
    const form = document.getElementById('personal-form');
    const countryBtn = document.getElementById('country-selector-btn');
    const countryPanel = document.getElementById('country-dropdown-panel');
    const countrySearchInput = document.getElementById('country-search-input');
    const countryClearBtn = document.getElementById('country-clear-search');
    const countryOptionsList = document.getElementById('country-options-list');
    const hiddenCountryInput = document.getElementById('input-country');
    const countryLabel = document.getElementById('country-selected-label');
    const errorBox = document.getElementById('form-error-msg');
    const errorText = document.getElementById('form-error-text');

    // Hero WhatsApp share button
    document.getElementById('hero-share-whatsapp-btn')?.addEventListener('click', () => {
      const text = this.app.getPlatformInviteMessage();
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });

    // Populate initial countries
    this.renderCountryList(COUNTRIES, countryOptionsList, hiddenCountryInput, countryLabel, countryPanel);

    // Toggle dropdown
    countryBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !countryPanel.classList.contains('hidden');
      if (isOpen) {
        this.closeCountryDropdown(countryPanel);
      } else {
        this.openCountryDropdown(countryPanel, countrySearchInput);
      }
    });

    // Country search input handler
    countrySearchInput?.addEventListener('input', (e) => {
      const q = e.target.value;
      if (q.trim()) {
        countryClearBtn?.classList.remove('hidden');
      } else {
        countryClearBtn?.classList.add('hidden');
      }
      const filtered = searchCountries(q);
      this.renderCountryList(filtered, countryOptionsList, hiddenCountryInput, countryLabel, countryPanel);
    });

    // Clear search button
    countryClearBtn?.addEventListener('click', () => {
      countrySearchInput.value = '';
      countryClearBtn.classList.add('hidden');
      countrySearchInput.focus();
      this.renderCountryList(COUNTRIES, countryOptionsList, hiddenCountryInput, countryLabel, countryPanel);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#country-picker-container')) {
        this.closeCountryDropdown(countryPanel);
      }
    });

    // Radio selection styles
    document.querySelectorAll('.gender-radio').forEach(radio => {
      radio.addEventListener('change', (e) => {
        document.querySelectorAll('.gender-radio').forEach(r => {
          const parent = r.closest('label');
          if (r.checked) {
            parent.className = 'relative flex items-center justify-center p-3 rounded-xl border text-sm font-semibold cursor-pointer transition-all select-none border-sky-600 bg-sky-50/80 text-sky-900 ring-2 ring-sky-500/30';
          } else {
            parent.className = 'relative flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all select-none border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50';
          }
        });
      });
    });

    // Form submission
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullName = document.getElementById('input-fullname')?.value.trim();
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const maritalStatus = document.getElementById('select-marital')?.value;
      const country = hiddenCountryInput?.value;

      if (!fullName) {
        this.showError('Please enter your full name.', errorBox, errorText);
        document.getElementById('input-fullname')?.focus();
        return;
      }

      if (!gender) {
        this.showError('Please select your gender.', errorBox, errorText);
        return;
      }

      if (!country) {
        this.showError('Please select your country.', errorBox, errorText);
        countryBtn?.focus();
        return;
      }

      errorBox?.classList.add('hidden');

      // Update state
      this.app.updateUserData({
        fullName,
        gender,
        maritalStatus,
        country
      });

      // Move to page 2
      this.app.navigateTo(2);
    });
  }

  openCountryDropdown(panel, searchInput) {
    panel?.classList.remove('hidden');
    setTimeout(() => searchInput?.focus(), 50);
  }

  closeCountryDropdown(panel) {
    panel?.classList.add('hidden');
  }

  renderCountryList(list, container, hiddenInput, labelEl, panel) {
    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="p-4 text-center text-xs text-slate-400">
          No matching countries found.
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(c => `
      <div 
        class="country-option px-3.5 py-2.5 hover:bg-sky-50 hover:text-sky-900 cursor-pointer flex items-center gap-3 transition-colors ${
          hiddenInput.value === c.name ? 'bg-sky-50 font-semibold text-sky-900' : 'text-slate-700'
        }"
        data-code="${c.code}"
        data-name="${c.name}"
        data-flag="${c.flag}"
      >
        <span class="text-xl">${c.flag}</span>
        <span class="flex-1">${c.name}</span>
        <span class="text-xs text-slate-400 font-mono">${c.code}</span>
      </div>
    `).join('');

    // Attach click handlers to options
    container.querySelectorAll('.country-option').forEach(item => {
      item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const flag = item.getAttribute('data-flag');
        hiddenInput.value = name;
        labelEl.innerHTML = `<span class="mr-2">${flag}</span><span>${name}</span>`;
        labelEl.className = 'text-slate-900 font-medium flex items-center';
        this.closeCountryDropdown(panel);
      });
    });
  }

  getCountryDisplay(name) {
    const found = COUNTRIES.find(c => c.name === name);
    if (found) {
      return `<span class="mr-2">${found.flag}</span><span>${found.name}</span>`;
    }
    return name;
  }

  showError(msg, box, textEl) {
    if (box && textEl) {
      textEl.textContent = msg;
      box.classList.remove('hidden');
    }
  }

  escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
}


// ==========================================
// Module: js/components/page2Conditions.js
// ==========================================
/**
 * HealthMind AI - Page 2 Component: Select Health Conditions
 */



class Page2Conditions {
  constructor(app) {
    this.app = app;
    this.selectedIds = new Set(this.app.state?.userData?.selectedConditionIds || []);
  }

  render() {
    const data = this.app.state.userData;
    this.selectedIds = new Set(data.selectedConditionIds || []);
    const count = this.selectedIds.size;

    return `
      <div class="page-container max-w-5xl mx-auto py-8 px-4 animate-fade-in">
        <!-- Header -->
        <div class="text-center mb-8">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            Step 2 of 4 • Health Profile
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Select Health Conditions</h1>
          <p class="text-slate-600 mt-2 text-base max-w-2xl mx-auto">
            Choose any primary conditions or recurring concerns that apply to you. You can select multiple items to generate an integrated guidance plan.
          </p>
        </div>

        <!-- Sticky Counter & Quick Actions Bar -->
        <div class="sticky top-20 z-20 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 mb-8 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-600 text-white font-bold text-xs" id="selected-counter-badge">
              ${count}
            </span>
            <span class="text-sm font-semibold text-slate-800" id="selected-counter-text">
              ${count === 1 ? '1 condition selected' : `${count} conditions selected`}
            </span>
          </div>

          <div class="flex items-center gap-2">
            <button 
              type="button" 
              id="btn-clear-conditions" 
              class="text-xs font-medium text-slate-500 hover:text-rose-600 px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-colors ${count === 0 ? 'invisible' : ''}"
            >
              Clear all
            </button>
            <span class="text-xs text-slate-400 hidden sm:inline">•</span>
            <span class="text-xs text-slate-500 hidden sm:inline">Select all that apply</span>
          </div>
        </div>

        <!-- Conditions Grid (3 columns on lg, 2 on sm, 1 on mobile) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" id="conditions-grid">
          ${HEALTH_CONDITIONS.map(cond => {
            const isSelected = this.selectedIds.has(cond.id);
            return `
              <div 
                class="condition-card group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between ${
                  isSelected 
                    ? 'border-sky-600 bg-sky-50/70 shadow-md ring-2 ring-sky-500/30' 
                    : 'border-slate-200/90 bg-white hover:border-sky-300 hover:shadow-lg hover:-translate-y-0.5'
                }"
                data-id="${cond.id}"
              >
                <div>
                  <div class="flex items-start justify-between gap-3 mb-3">
                    <!-- Icon -->
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isSelected ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30' : 'bg-sky-50 text-sky-600'
                    }">
                      ${this.getConditionIcon(cond.icon)}
                    </div>

                    <!-- Checkmark Badge -->
                    <div class="w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                      isSelected 
                        ? 'border-sky-600 bg-sky-600 text-white' 
                        : 'border-slate-300 bg-white group-hover:border-slate-400'
                    }">
                      <svg class="w-3.5 h-3.5 ${isSelected ? 'opacity-100' : 'opacity-0'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>

                  <!-- Text -->
                  <h3 class="font-bold text-slate-900 text-base mb-1 group-hover:text-sky-700 transition-colors">
                    ${cond.name}
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-3">
                    ${cond.summary}
                  </p>
                </div>

                <!-- Footer Tag -->
                <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600 font-medium">
                  <span class="px-2 py-0.5 rounded-md bg-slate-100">${cond.category}</span>
                  <span class="text-sky-600 group-hover:underline">
                    ${isSelected ? 'Selected' : 'Click to select'}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Custom 'Other' Input Box (Shown if 'other-conditions' is selected) -->
        <div id="other-condition-box" class="mb-8 ${this.selectedIds.has('other-conditions') ? '' : 'hidden'} animate-fade-in">
          <div class="bg-white rounded-2xl p-5 border border-sky-200 shadow-sm">
            <label for="input-other-condition" class="block text-sm font-semibold text-slate-800 mb-1.5">
              Specify your other health condition or concern:
            </label>
            <input 
              type="text" 
              id="input-other-condition" 
              value="${this.escapeHtml(data.otherConditionText || '')}"
              placeholder="e.g., Fibromyalgia, mild scoliosis, seasonal eczema..." 
              class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <p class="text-xs text-slate-500 mt-1">Our engine will factor these specific details into your guidance plan.</p>
          </div>
        </div>

        <!-- Warning / Validation Message -->
        <div id="conditions-error-msg" class="hidden mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm flex items-center gap-2.5">
          <svg class="w-5 h-5 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span>Please select at least one condition or choose "Other health conditions" to continue.</span>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button 
            type="button" 
            id="btn-back-step2"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors text-sm cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <span>Back to Personal Details</span>
          </button>

          <button 
            type="button" 
            id="btn-continue-step2"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 active:scale-[0.99] transition-all cursor-pointer text-base"
          >
            <span>Continue to Describe Symptoms</span>
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    `;
  }

  attachEvents() {
    const grid = document.getElementById('conditions-grid');
    const counterBadge = document.getElementById('selected-counter-badge');
    const counterText = document.getElementById('selected-counter-text');
    const clearBtn = document.getElementById('btn-clear-conditions');
    const otherBox = document.getElementById('other-condition-box');
    const otherInput = document.getElementById('input-other-condition');
    const errorBox = document.getElementById('conditions-error-msg');
    const btnContinue = document.getElementById('btn-continue-step2');
    const btnBack = document.getElementById('btn-back-step2');

    // Card click handler
    grid?.querySelectorAll('.condition-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (this.selectedIds.has(id)) {
          this.selectedIds.delete(id);
        } else {
          this.selectedIds.add(id);
        }

        // Toggle card visual state
        this.updateCardVisual(card, this.selectedIds.has(id));
        this.updateCounter(counterBadge, counterText, clearBtn);

        // Toggle 'other' input visibility
        if (id === 'other-conditions') {
          if (this.selectedIds.has(id)) {
            otherBox?.classList.remove('hidden');
            otherInput?.focus();
          } else {
            otherBox?.classList.add('hidden');
          }
        }

        // Hide error message if user selects something
        if (this.selectedIds.size > 0) {
          errorBox?.classList.add('hidden');
        }
      });
    });

    // Clear all
    clearBtn?.addEventListener('click', () => {
      this.selectedIds.clear();
      grid?.querySelectorAll('.condition-card').forEach(card => {
        this.updateCardVisual(card, false);
      });
      this.updateCounter(counterBadge, counterText, clearBtn);
      otherBox?.classList.add('hidden');
    });

    // Back button
    btnBack?.addEventListener('click', () => {
      this.saveCurrentState(otherInput);
      this.app.navigateTo(1);
    });

    // Continue button
    btnContinue?.addEventListener('click', () => {
      if (this.selectedIds.size === 0) {
        errorBox?.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      this.saveCurrentState(otherInput);
      this.app.navigateTo(3);
    });
  }

  saveCurrentState(otherInput) {
    const selectedArray = Array.from(this.selectedIds);
    const otherText = otherInput ? otherInput.value.trim() : '';

    this.app.updateUserData({
      selectedConditionIds: selectedArray,
      otherConditionText: otherText
    });
  }

  updateCardVisual(card, isSelected) {
    const iconContainer = card.querySelector('.w-12');
    const checkBadge = card.querySelector('.w-6');
    const checkIcon = checkBadge?.querySelector('svg');
    const statusText = card.querySelector('.pt-2 span:last-child');

    if (isSelected) {
      card.className = 'condition-card group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between border-sky-600 bg-sky-50/70 shadow-md ring-2 ring-sky-500/30';
      if (iconContainer) iconContainer.className = 'w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 bg-sky-600 text-white shadow-md shadow-sky-600/30';
      if (checkBadge) checkBadge.className = 'w-6 h-6 rounded-full border flex items-center justify-center transition-all border-sky-600 bg-sky-600 text-white';
      if (checkIcon) checkIcon.classList.remove('opacity-0');
      if (statusText) statusText.textContent = 'Selected';
    } else {
      card.className = 'condition-card group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer select-none flex flex-col justify-between border-slate-200/90 bg-white hover:border-sky-300 hover:shadow-lg hover:-translate-y-0.5';
      if (iconContainer) iconContainer.className = 'w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 bg-sky-50 text-sky-600';
      if (checkBadge) checkBadge.className = 'w-6 h-6 rounded-full border flex items-center justify-center transition-all border-slate-300 bg-white group-hover:border-slate-400';
      if (checkIcon) checkIcon.classList.add('opacity-0');
      if (statusText) statusText.textContent = 'Click to select';
    }
  }

  updateCounter(badge, text, clearBtn) {
    const count = this.selectedIds.size;
    if (badge) badge.textContent = count;
    if (text) text.textContent = count === 1 ? '1 condition selected' : `${count} conditions selected`;
    if (clearBtn) {
      if (count > 0) clearBtn.classList.remove('invisible');
      else clearBtn.classList.add('invisible');
    }
  }

  getConditionIcon(iconName) {
    const icons = {
      'activity': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      'moon': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
      'sun': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
      'battery-charging': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline></svg>',
      'shield': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
      'wind': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>',
      'zap': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
      'heart': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
      'thermometer': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path></svg>',
      'coffee': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
      'cloud-lightning': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline></svg>',
      'circle-dot': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>',
      'droplet': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>',
      'plus-circle': '<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>'
    };

    return icons[iconName] || icons['activity'];
  }

  escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
}



// ==========================================
// Module: js/components/page3Symptoms.js
// ==========================================
/**
 * HealthMind AI - Page 3 Component: Search and Describe Health Problems
 * Fully functional search bar, interactive symptom library, quick-select pills,
 * custom problem manager, and natural language symptom description.
 */



class Page3Symptoms {
  constructor(app) {
    this.app = app;
    this.userSymptoms = [...(this.app.state?.userData?.userSymptoms || [])];
    this.searchResults = [];
  }

  render() {
    const data = this.app.state.userData;

    return `
      <div class="page-container max-w-4xl mx-auto py-8 px-4 animate-fade-in">
        <!-- Header -->
        <div class="text-center mb-8">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            Step 3 of 4 • Symptoms & Details
          </span>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Search & Describe Health Problems</h1>
          <p class="text-slate-600 mt-2 text-base max-w-2xl mx-auto">
            Search our medically reviewed library for matching symptoms, or describe what you are experiencing in your own words.
          </p>
        </div>

        <!-- Section 1: Search Symptom Library (ACTIVE & FUNCTIONAL) -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <label for="symptom-search-input" class="block text-base font-bold text-slate-900 mb-2">
            Search Health Information Library
          </label>
          <p class="text-xs sm:text-sm text-slate-600 mb-4">
            Type keywords like <span class="font-semibold text-sky-700">"legs hurt walking"</span>, <span class="font-semibold text-sky-700">"hands sleeping"</span>, <span class="font-semibold text-sky-700">"sneezing dust"</span>, <span class="font-semibold text-sky-700">"fatigue"</span>, or <span class="font-semibold text-sky-700">"headache"</span>:
          </p>

          <!-- Large Search Bar + Functional Search Button -->
          <div class="relative flex flex-col sm:flex-row gap-2">
            <div class="relative flex-1">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <input 
                type="text" 
                id="symptom-search-input" 
                placeholder="Search symptoms, pain areas, triggers..." 
                autocomplete="off"
                class="w-full pl-12 pr-10 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm sm:text-base focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400"
              />
              <button 
                type="button" 
                id="btn-clear-search" 
                class="hidden absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <button 
              type="button" 
              id="btn-execute-search" 
              class="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-semibold rounded-2xl shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base shrink-0"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <span>Search</span>
            </button>
          </div>

          <!-- Live Search Results Dropdown/Box -->
          <div id="search-results-container" class="hidden mt-4 pt-4 border-t border-slate-100 animate-fade-in">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider" id="search-results-count">
                Matching Guidance & Symptoms
              </span>
              <button type="button" id="btn-close-results" class="text-xs text-slate-400 hover:text-slate-600">Close</button>
            </div>
            <div id="search-results-list" class="space-y-2.5 max-h-80 overflow-y-auto pr-1">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Quick-Select Symptom Suggestion Pills -->
          <div class="mt-6 pt-5 border-t border-slate-100">
            <span class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Quick-Select Common Symptoms (Click to Add):
            </span>
            <div class="flex flex-wrap gap-2" id="quick-select-pills">
              ${[
                { text: 'My legs hurt when I walk', category: 'Mobility' },
                { text: 'My hands feel uncomfortable while sleeping', category: 'Sleep' },
                { text: 'I experience sneezing around dust', category: 'Allergy' },
                { text: 'I feel tired frequently', category: 'Energy' },
                { text: 'I have difficulty sleeping', category: 'Sleep' },
                { text: 'Tension headaches after screen time', category: 'Cranial' },
                { text: 'Stiff morning joints in knees or fingers', category: 'Joints' },
                { text: 'Bloating & digestive gas after eating', category: 'Digestive' },
                { text: 'Racing thoughts and high stress at night', category: 'Stress' }
              ].map(item => `
                <button 
                  type="button" 
                  class="quick-pill group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-800 border border-slate-200 hover:border-sky-300 transition-all cursor-pointer active:scale-95"
                  data-text="${this.escapeHtml(item.text)}"
                  data-category="${item.category}"
                >
                  <span class="text-sky-500 font-bold group-hover:scale-125 transition-transform">+</span>
                  <span>${item.text}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Section 2: Structured 'My Added Concerns & Symptoms' List -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <h2 class="text-lg font-bold text-slate-900">My Added Concerns & Symptoms</h2>
              <p class="text-xs text-slate-500">Specific issues added from search, pills, or custom entry.</p>
            </div>
            
            <!-- 'Add Another Problem' Button -->
            <button 
              type="button" 
              id="btn-add-another-problem" 
              class="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 font-semibold rounded-xl text-xs sm:text-sm border border-sky-200 transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              <span>Add Another Problem</span>
            </button>
          </div>

          <!-- Symptom Items Container -->
          <div id="added-symptoms-list" class="space-y-3 mb-4">
            <!-- Populated via JS -->
          </div>

          <!-- Empty state notice -->
          <div id="empty-symptoms-notice" class="p-6 text-center rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-slate-400 text-xs sm:text-sm ${this.userSymptoms.length > 0 ? 'hidden' : ''}">
            <svg class="w-8 h-8 mx-auto mb-2 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            No specific concerns added yet. Click any quick-select pill above, search the library, or use the button to add a problem.
          </div>
        </div>

        <!-- Section 3: Natural Language Free-Text Symptom Description -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center justify-between mb-2">
            <label for="freetext-symptoms" class="block text-base font-bold text-slate-900">
              Describe Symptoms in Your Own Words
            </label>
            <span class="text-xs text-slate-400 font-mono" id="char-counter">
              ${(data.freeTextNotes || '').length} characters
            </span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 mb-3">
            Tell us more about how these symptoms affect your daily routine, when they worsen, or what feels uncomfortable:
          </p>
          <textarea 
            id="freetext-symptoms" 
            rows="4" 
            placeholder="e.g., My legs hurt when I walk and feel heavy by late afternoon. My hands feel uncomfortable and tingling while sleeping, especially on my right wrist. I also experience sneezing and nasal irritation whenever I am around dust or pollen..." 
            class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all placeholder:text-slate-400 leading-relaxed"
          >${this.escapeHtml(data.freeTextNotes || '')}</textarea>
          <p class="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-sky-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Our rule engine scans this description for clinical keywords to enrich your multi-condition guidance.
          </p>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-between pt-4 border-t border-slate-200">
          <button 
            type="button" 
            id="btn-back-step3"
            class="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors text-sm cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <span>Back to Health Conditions</span>
          </button>

          <button 
            type="button" 
            id="btn-continue-step3"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-lg shadow-sky-600/25 hover:shadow-sky-600/35 active:scale-[0.99] transition-all cursor-pointer text-base"
          >
            <span>Generate Personalized Guidance</span>
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <!-- Inline Modal for 'Add Another Problem' -->
        <div id="modal-add-problem" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div class="bg-white rounded-3xl p-6 sm:p-7 max-w-md w-full shadow-2xl border border-slate-100">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-slate-900">Add Health Problem or Concern</h3>
              <button type="button" id="btn-close-problem-modal" class="text-slate-400 hover:text-slate-600">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <form id="form-custom-problem" class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Problem / Concern Name *</label>
                <input 
                  type="text" 
                  id="modal-problem-title" 
                  placeholder="e.g., Lower back stiffness in morning, foot numbness..." 
                  required
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Severity Level</label>
                <select id="modal-problem-severity" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500">
                  <option value="Mild">Mild – noticeable but does not impede daily activities</option>
                  <option value="Moderate" selected>Moderate – creates discomfort or limits routine</option>
                  <option value="Significant">Significant – strongly impacts sleep or work</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Context / Timing Notes (Optional)</label>
                <input 
                  type="text" 
                  id="modal-problem-notes" 
                  placeholder="e.g., Happens mostly while walking or at bedtime" 
                  class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div class="pt-2 flex justify-end gap-2">
                <button type="button" id="btn-cancel-modal" class="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-medium">
                  Cancel
                </button>
                <button type="submit" class="px-5 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-sm font-semibold shadow-sm">
                  Add to Concerns
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    `;
  }

  attachEvents() {
    const searchInput = document.getElementById('symptom-search-input');
    const searchBtn = document.getElementById('btn-execute-search');
    const clearSearchBtn = document.getElementById('btn-clear-search');
    const resultsContainer = document.getElementById('search-results-container');
    const resultsList = document.getElementById('search-results-list');
    const closeResultsBtn = document.getElementById('btn-close-results');
    const freeTextArea = document.getElementById('freetext-symptoms');
    const charCounter = document.getElementById('char-counter');
    const btnContinue = document.getElementById('btn-continue-step3');
    const btnBack = document.getElementById('btn-back-step3');
    
    // Custom Problem Modal elements
    const addProblemBtn = document.getElementById('btn-add-another-problem');
    const modalAddProblem = document.getElementById('modal-add-problem');
    const btnCloseModal = document.getElementById('btn-close-problem-modal');
    const btnCancelModal = document.getElementById('btn-cancel-modal');
    const formCustomProblem = document.getElementById('form-custom-problem');

    // Initial render of added symptoms
    this.renderAddedSymptoms();

    // 1. Search Bar Execution
    const executeSearch = () => {
      const q = searchInput?.value.trim().toLowerCase();
      if (!q) {
        resultsContainer?.classList.add('hidden');
        return;
      }

      const matches = this.queryLibrary(q);
      this.displaySearchResults(matches, resultsContainer, resultsList);
    };

    searchBtn?.addEventListener('click', executeSearch);

    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        executeSearch();
      }
    });

    searchInput?.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val.trim()) {
        clearSearchBtn?.classList.remove('hidden');
        // Auto-search if at least 2 chars
        if (val.trim().length >= 2) {
          executeSearch();
        }
      } else {
        clearSearchBtn?.classList.add('hidden');
        resultsContainer?.classList.add('hidden');
      }
    });

    clearSearchBtn?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      resultsContainer?.classList.add('hidden');
      searchInput?.focus();
    });

    closeResultsBtn?.addEventListener('click', () => {
      resultsContainer?.classList.add('hidden');
    });

    // 2. Quick-Select Symptom Pills
    document.querySelectorAll('.quick-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const text = pill.getAttribute('data-text');
        const category = pill.getAttribute('data-category') || 'General';
        this.addSymptomItem({
          text,
          category,
          severity: 'Moderate',
          notes: 'Added from quick suggestions'
        });
      });
    });

    // 3. Custom Problem Modal
    addProblemBtn?.addEventListener('click', () => {
      modalAddProblem?.classList.remove('hidden');
      document.getElementById('modal-problem-title')?.focus();
    });

    const closeModal = () => {
      modalAddProblem?.classList.add('hidden');
      if (formCustomProblem) formCustomProblem.reset();
    };

    btnCloseModal?.addEventListener('click', closeModal);
    btnCancelModal?.addEventListener('click', closeModal);

    formCustomProblem?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('modal-problem-title')?.value.trim();
      const severity = document.getElementById('modal-problem-severity')?.value;
      const notes = document.getElementById('modal-problem-notes')?.value.trim();

      if (title) {
        this.addSymptomItem({
          text: title,
          category: 'Personal Concern',
          severity: severity || 'Moderate',
          notes: notes || 'Custom description'
        });
        closeModal();
      }
    });

    // 4. Free Text Counter
    freeTextArea?.addEventListener('input', (e) => {
      if (charCounter) {
        charCounter.textContent = `${e.target.value.length} characters`;
      }
    });

    // 5. Navigation
    btnBack?.addEventListener('click', () => {
      this.saveCurrentState(freeTextArea);
      this.app.navigateTo(2);
    });

    btnContinue?.addEventListener('click', () => {
      this.saveCurrentState(freeTextArea);
      this.app.navigateTo(4);
    });
  }

  queryLibrary(query) {
    const q = query.toLowerCase();
    const results = [];

    // Search symptoms library
    SYMPTOM_LIBRARY.forEach(symp => {
      const labelMatch = symp.label.toLowerCase().includes(q);
      const keywordMatch = symp.keywords.some(k => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()));
      const guidanceMatch = symp.guidance.toLowerCase().includes(q);

      if (labelMatch || keywordMatch || guidanceMatch) {
        results.push({
          type: 'symptom',
          id: symp.id,
          title: symp.label,
          category: symp.category,
          snippet: symp.guidance,
          associatedCondition: symp.associatedCondition
        });
      }
    });

    // Search health conditions library
    HEALTH_CONDITIONS.forEach(cond => {
      if (cond.name.toLowerCase().includes(q) || cond.description.toLowerCase().includes(q) || cond.whyItMatters.toLowerCase().includes(q)) {
        results.push({
          type: 'condition',
          id: cond.id,
          title: `${cond.name} (Guidance Reference)`,
          category: cond.category,
          snippet: cond.summary,
          associatedCondition: cond.id
        });
      }
    });

    return results;
  }

  displaySearchResults(matches, container, listEl) {
    if (!container || !listEl) return;

    if (matches.length === 0) {
      container.classList.remove('hidden');
      listEl.innerHTML = `
        <div class="p-4 rounded-xl bg-slate-50 text-slate-500 text-xs sm:text-sm text-center">
          No direct library matches found for that term. You can describe it freely in the text box below, or click "Add Another Problem".
        </div>
      `;
      return;
    }

    container.classList.remove('hidden');
    const countEl = document.getElementById('search-results-count');
    if (countEl) {
      countEl.textContent = `Found ${matches.length} matching health entries:`;
    }

    listEl.innerHTML = matches.map((item, idx) => `
      <div class="p-3 sm:p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-sky-50/50 hover:border-sky-200 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-sky-800">
              ${item.category}
            </span>
            <h4 class="text-sm font-bold text-slate-900">${item.title}</h4>
          </div>
          <p class="text-xs text-slate-600 line-clamp-2">${item.snippet}</p>
        </div>
        <button 
          type="button" 
          class="btn-add-from-search px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:border-sky-500 hover:bg-sky-600 hover:text-white transition-all shadow-sm cursor-pointer shrink-0"
          data-title="${this.escapeHtml(item.title)}"
          data-cat="${item.category}"
        >
          + Add to Concerns
        </button>
      </div>
    `).join('');

    // Attach click events
    listEl.querySelectorAll('.btn-add-from-search').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const cat = btn.getAttribute('data-cat');
        this.addSymptomItem({
          text: title,
          category: cat,
          severity: 'Moderate',
          notes: 'Added from health library search'
        });
        btn.textContent = '✓ Added';
        btn.classList.add('bg-sky-600', 'text-white', 'border-sky-600');
        setTimeout(() => {
          btn.textContent = '+ Add to Concerns';
          btn.classList.remove('bg-sky-600', 'text-white', 'border-sky-600');
        }, 1500);
      });
    });
  }

  addSymptomItem(item) {
    // Avoid exact duplicate
    const exists = this.userSymptoms.some(s => s.text.toLowerCase() === item.text.toLowerCase());
    if (exists) return;

    this.userSymptoms.push(item);
    this.renderAddedSymptoms();
  }

  removeSymptomItem(index) {
    this.userSymptoms.splice(index, 1);
    this.renderAddedSymptoms();
  }

  renderAddedSymptoms() {
    const list = document.getElementById('added-symptoms-list');
    const emptyNotice = document.getElementById('empty-symptoms-notice');
    if (!list) return;

    if (this.userSymptoms.length === 0) {
      list.innerHTML = '';
      emptyNotice?.classList.remove('hidden');
      return;
    }

    emptyNotice?.classList.add('hidden');
    list.innerHTML = this.userSymptoms.map((s, idx) => `
      <div class="p-3.5 rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="w-2 h-2 rounded-full bg-sky-500"></span>
            <span class="text-sm font-bold text-slate-800">${s.text}</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-slate-500 ml-4">
            <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">${s.category || 'General'}</span>
            <span>•</span>
            <span class="italic text-slate-500">${s.notes || 'User concern'}</span>
          </div>
        </div>

        <div class="flex items-center gap-2 self-end sm:self-center ml-4">
          <!-- Severity Badge Selector -->
          <select 
            class="severity-selector text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none cursor-pointer"
            data-index="${idx}"
          >
            <option value="Mild" ${s.severity === 'Mild' ? 'selected' : ''}>Mild</option>
            <option value="Moderate" ${s.severity === 'Moderate' ? 'selected' : ''}>Moderate</option>
            <option value="Significant" ${s.severity === 'Significant' ? 'selected' : ''}>Significant</option>
          </select>

          <!-- Remove Button -->
          <button 
            type="button" 
            class="btn-remove-symptom p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
            data-index="${idx}"
            title="Remove item"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `).join('');

    // Attach severity changes
    list.querySelectorAll('.severity-selector').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const i = parseInt(sel.getAttribute('data-index'), 10);
        if (this.userSymptoms[i]) {
          this.userSymptoms[i].severity = e.target.value;
        }
      });
    });

    // Attach remove handlers
    list.querySelectorAll('.btn-remove-symptom').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.getAttribute('data-index'), 10);
        this.removeSymptomItem(i);
      });
    });
  }

  saveCurrentState(freeTextArea) {
    const freeText = freeTextArea ? freeTextArea.value.trim() : '';
    this.app.updateUserData({
      userSymptoms: this.userSymptoms,
      freeTextNotes: freeText
    });
  }

  escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
}



// ==========================================
// Module: js/components/page4Dashboard.js
// ==========================================
/**
 * HealthMind AI - Page 4 Component: Personalized Health Guidance Dashboard
 * The core synthesis dashboard featuring all 11 educational wellness modules,
 * multi-condition synergy callouts, adjustable daily schedule, interactive box breathing,
 * "Why this suggestion appears" rationales, red-flag emergency matrix, 1-click WhatsApp sharing,
 * and printable report download.
 */

class Page4Dashboard {
  constructor(app) {
    this.app = app;
    this.guidance = null;
    this.boxBreathingInterval = null;
    this.boxBreathingState = { phase: 'idle', count: 0, cycle: 0 };
  }

  render() {
    // Generate fresh guidance from recommendation engine
    this.guidance = this.app.engine.generateGuidance(this.app.state.userData);
    const g = this.guidance;
    const p = g.patientProfile;
    const isShared = Boolean(this.app.state.isSharedView);

    return `
      <div class="page-container max-w-5xl mx-auto py-8 px-4 animate-fade-in" id="guidance-report-root">
        
        <!-- Top Action Navigation Bar -->
        <div class="bg-white rounded-3xl p-4 sm:p-5 shadow-lg shadow-slate-200/50 border border-slate-100 mb-8 flex flex-wrap items-center justify-between gap-3 no-print">
          <div class="flex items-center gap-2">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Guidance Ready
            </span>
            <span class="text-xs text-slate-400 font-medium hidden sm:inline">• Generated ${g.metadata.generatedAt}</span>
          </div>

          <div class="flex flex-wrap items-center gap-2">
            <!-- WhatsApp Top Quick Share Button -->
            <button 
              type="button" 
              id="btn-top-whatsapp" 
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors cursor-pointer"
              title="Share report on WhatsApp"
            >
              <svg class="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
              <span>WhatsApp</span>
            </button>

            <!-- Edit Button -->
            <button 
              type="button" 
              id="btn-edit-info" 
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              <span>Edit Info</span>
            </button>

            <!-- Download Health Report Button -->
            <button 
              type="button" 
              id="btn-download-report" 
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download Report</span>
            </button>

            <!-- Start Again Button -->
            <button 
              type="button" 
              id="btn-start-again" 
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              title="Reset and start over"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
              <span class="hidden sm:inline">Start Again</span>
            </button>
          </div>
        </div>

        <!-- SHARED ASSESSMENT NOTIFICATION BANNER (When opened via shared WhatsApp link) -->
        ${isShared ? `
          <div class="mb-6 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-emerald-950 shadow-sm no-print">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
              </div>
              <div>
                <p class="font-bold text-sm sm:text-base text-emerald-950">Viewing Shared Health Guidance Plan</p>
                <p class="text-xs text-emerald-800">This personalized plan was generated for <strong>${this.escapeHtml(p.fullName || p.firstName)}</strong> and shared via WhatsApp. You can explore this routine or begin your own assessment anytime.</p>
              </div>
            </div>
            <button 
              type="button" 
              id="btn-shared-start-own"
              class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              Start My Own Assessment →
            </button>
          </div>
        ` : ''}

        <!-- 1. Personalized Welcome Banner -->
        <div class="relative overflow-hidden bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-sky-950/20 mb-8">
          <div class="relative z-10">
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sky-200 backdrop-blur-md mb-3 border border-white/15">
              Evidence-Based Lifestyle Protocol
            </span>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-2">
              Welcome, ${this.escapeHtml(p.firstName)}!
            </h1>
            <p class="text-sky-100 text-sm sm:text-base max-w-2xl leading-relaxed mb-6 font-normal">
              Here is your personalized educational wellness guidance. Our rule-based system has synthesized your selected health conditions and specific symptoms to generate targeted lifestyle, routine, and rest recommendations.
            </p>

            <!-- Profile Summary Tags -->
            <div class="flex flex-wrap items-center gap-2 pt-2 border-t border-white/15 text-xs text-sky-200">
              <span class="px-3 py-1 rounded-lg bg-white/10">Full Name: <strong class="text-white">${this.escapeHtml(p.fullName)}</strong></span>
              <span class="px-3 py-1 rounded-lg bg-white/10">Gender: <strong class="text-white">${this.escapeHtml(p.gender)}</strong></span>
              ${p.maritalStatus ? `<span class="px-3 py-1 rounded-lg bg-white/10">Status: <strong class="text-white">${this.escapeHtml(p.maritalStatus)}</strong></span>` : ''}
              <span class="px-3 py-1 rounded-lg bg-white/10">Country: <strong class="text-white">${this.escapeHtml(p.country)}</strong></span>
            </div>
          </div>
          <!-- Background decorative art -->
          <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute right-10 top-10 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl pointer-events-none"></div>
        </div>

        <!-- PROMINENT WHATSAPP SHARING CARD (Super easy to share & open) -->
        <div class="bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/15 mb-8 no-print">
          <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div class="max-w-xl">
              <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md mb-2.5">
                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
                <span>Instant WhatsApp Share</span>
              </div>
              <h3 class="text-xl sm:text-2xl font-black tracking-tight mb-2">Share Your Health Plan on WhatsApp</h3>
              <p class="text-xs sm:text-sm text-emerald-50 leading-relaxed font-normal">
                Send this personalized health blueprint directly to yourself, family members, or caregivers. The recipient can tap the link and instantly open this exact guidance dashboard on any mobile phone or browser without signing up!
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <!-- Direct WhatsApp Button -->
              <button 
                type="button" 
                id="btn-share-whatsapp-card" 
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-emerald-900 hover:bg-emerald-50 active:scale-95 font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <svg class="w-5 h-5 text-emerald-600 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
                <span>Share via WhatsApp</span>
              </button>

              <!-- Copy Share Link Button -->
              <button 
                type="button" 
                id="btn-copy-share-url" 
                class="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-800/80 hover:bg-emerald-800 text-white font-semibold text-sm border border-emerald-400/40 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                <span id="copy-btn-label">Copy Share Link</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Medical Disclaimer Banner (MANDATORY & PROMINENT) -->
        <div class="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-4 sm:p-5 mb-8 text-amber-950 shadow-sm flex items-start gap-3.5">
          <div class="p-2 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </div>
          <div class="text-xs sm:text-sm leading-relaxed">
            <p class="font-bold text-amber-900 mb-0.5">Important Educational Medical Notice</p>
            <p class="text-amber-800">
              HealthMind AI is an educational wellness platform designed to provide evidence-based lifestyle information. It does <strong>not</strong> provide medical diagnoses, treatment instructions, or drug prescriptions. Always consult a qualified physician or healthcare professional regarding persistent symptoms or before altering any treatment plan.
            </p>
          </div>
        </div>

        <!-- 2 & 3. Summary of Selected Conditions & Additional Concerns -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-bold text-slate-900 flex items-center gap-2">
              <svg class="w-5 h-5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              <span>Selected Health Profile & Symptoms</span>
            </h2>
            <button type="button" class="btn-jump-to-conditions text-xs font-semibold text-sky-600 hover:text-sky-800 hover:underline">
              Edit Selections →
            </button>
          </div>

          <!-- Conditions Badges -->
          <div class="mb-5">
            <span class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Conditions Considered:</span>
            <div class="flex flex-wrap gap-2">
              ${g.conditionsSummary.map(c => `
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-50 text-sky-900 border border-sky-200">
                  <span class="w-2 h-2 rounded-full bg-sky-500"></span>
                  ${c.name}
                </span>
              `).join('')}
              ${p.otherConditionText ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-purple-50 text-purple-900 border border-purple-200">
                  <span class="w-2 h-2 rounded-full bg-purple-500"></span>
                  Other: ${this.escapeHtml(p.otherConditionText)}
                </span>
              ` : ''}
            </div>
          </div>

          <!-- Symptoms & Additional Concerns -->
          ${g.symptomsSummary.length > 0 ? `
            <div class="mb-4 pt-4 border-t border-slate-100">
              <span class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Detailed Concerns & Symptoms:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${g.symptomsSummary.map(s => `
                  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                    <span class="font-semibold text-slate-800">${s.text}</span>
                    <span class="px-2 py-0.5 rounded-md font-bold text-[10px] ${
                      s.severity === 'Significant' ? 'bg-rose-100 text-rose-800' :
                      s.severity === 'Moderate' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'
                    }">${s.severity}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Free-text notes excerpt if provided -->
          ${g.freeTextNotes ? `
            <div class="pt-4 border-t border-slate-100 text-xs text-slate-600 bg-slate-50/50 p-3.5 rounded-xl">
              <strong class="text-slate-800">Your symptom description:</strong> "${this.escapeHtml(g.freeTextNotes)}"
            </div>
          ` : ''}
        </div>

        <!-- MULTI-CONDITION SYNERGIES & CROSS-CUTTING PROTOCOLS -->
        ${g.multiConditionSynergies.length > 0 ? `
          <div class="mb-8 space-y-4">
            <div class="flex items-center gap-2 px-1">
              <span class="p-1.5 rounded-lg bg-sky-600 text-white">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
              </span>
              <h2 class="text-xl font-bold text-slate-900">Multi-Condition Coordinated Guidance</h2>
            </div>

            ${g.multiConditionSynergies.map(rule => `
              <div class="bg-gradient-to-r from-sky-50/80 via-blue-50/40 to-white rounded-3xl p-6 sm:p-7 border border-sky-200 shadow-md">
                <div class="flex items-start justify-between gap-3 mb-2">
                  <h3 class="text-base sm:text-lg font-bold text-sky-950">${rule.title}</h3>
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-200/70 text-sky-900 shrink-0">Synergy Protocol</span>
                </div>

                <!-- Why This Suggestion Appears -->
                <div class="mb-4 p-3 rounded-xl bg-sky-100/70 text-sky-900 text-xs font-medium border border-sky-200/60 flex items-start gap-2">
                  <svg class="w-4 h-4 text-sky-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  <span><strong>Why this suggestion appears:</strong> ${rule.whyThisSuggestion}</span>
                </div>

                <ul class="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  ${rule.guidance.map(item => `
                    <li class="flex items-start gap-2">
                      <span class="text-sky-600 font-bold mt-0.5">•</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- 4. Nutrition & Hydration Education -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">Nutrition & Hydration Education</h2>
              <p class="text-xs text-slate-500">Dietary principles tailored to your metabolic and inflammatory profile.</p>
            </div>
          </div>

          <!-- Hydration Target Card -->
          <div class="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 mb-6 flex items-center gap-3 text-xs sm:text-sm text-sky-950">
            <div class="p-2 bg-sky-600 text-white rounded-xl shrink-0">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
            </div>
            <div>
              <span class="font-bold text-sky-900">Hydration Baseline:</span>
              <p class="text-sky-800">${g.nutrition.hydrationTarget}</p>
            </div>
          </div>

          <!-- Specific Nutrition Protocols -->
          <div class="space-y-4 mb-6">
            ${g.nutrition.protocols.map(prot => `
              <div class="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <h3 class="font-bold text-slate-900 text-sm sm:text-base mb-1">${prot.title}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2.5">${prot.description}</p>
                <div class="text-[11px] text-sky-800 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-100">
                  <strong>Why this suggestion:</strong> ${prot.whyThisSuggestion}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Foods Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <!-- Prioritize -->
            <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <h4 class="font-bold text-emerald-900 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Foods to Prioritize
              </h4>
              <div class="flex flex-wrap gap-1.5">
                ${g.nutrition.foodsToPrioritize.map(f => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-emerald-800 border border-emerald-200 shadow-2xs">${f}</span>
                `).join('')}
              </div>
            </div>

            <!-- Moderate -->
            <div class="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <h4 class="font-bold text-amber-900 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <svg class="w-4 h-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                Foods to Moderate
              </h4>
              <div class="flex flex-wrap gap-1.5">
                ${g.nutrition.foodsToModerate.map(f => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-amber-800 border border-amber-200 shadow-2xs">${f}</span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Sleep Routine Suggestions -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">Sleep Routine & Restorative Alignment</h2>
              <p class="text-xs text-slate-500">Sleep architecture, nocturnal positioning, and circadian entrainment.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${g.sleep.map(item => `
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-slate-900 text-base mb-1.5">${item.title}</h3>
                  <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">${item.guidance}</p>
                </div>
                <div class="text-[11px] text-indigo-900 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100">
                  <strong>Why this suggestion:</strong> ${item.whyThisSuggestion}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 6. Daily Wellness Schedule (ADJUSTABLE & EDUCATIONAL) -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div class="flex items-center gap-3">
              <div class="p-2.5 rounded-xl bg-sky-50 text-sky-600">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-slate-900">Daily Wellness Schedule</h2>
                <p class="text-xs text-slate-500">Adjustable 7-phase daily rhythm designed to support steady energy and recovery.</p>
              </div>
            </div>

            <!-- Schedule Filter Tabs -->
            <div class="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold" id="schedule-tabs">
              <button type="button" class="tab-btn px-3 py-1.5 rounded-lg bg-white text-sky-900 shadow-xs cursor-pointer" data-filter="all">All Phases</button>
              <button type="button" class="tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer" data-filter="morning">Morning</button>
              <button type="button" class="tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer" data-filter="daytime">Daytime</button>
              <button type="button" class="tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer" data-filter="evening">Evening</button>
            </div>
          </div>

          <!-- Schedule Timeline -->
          <div class="space-y-4" id="schedule-timeline-container">
            ${g.dailySchedule.map((item, idx) => {
              const isMorning = item.time.includes('AM');
              const isEvening = item.time.includes('06:30 PM') || item.time.includes('09:00 PM');
              const filterCategory = isMorning ? 'morning' : isEvening ? 'evening' : 'daytime';

              return `
                <div class="timeline-step relative pl-6 sm:pl-8 pb-4 border-l-2 border-sky-200 last:border-l-0" data-phase="${filterCategory}">
                  <!-- Timeline Node Dot -->
                  <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-sky-600"></div>

                  <div class="bg-slate-50/70 hover:bg-sky-50/40 transition-colors p-4 sm:p-5 rounded-2xl border border-slate-200">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span class="text-xs font-bold px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-800 font-mono">
                        ${item.time}
                      </span>
                      <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        ${item.phase}
                      </span>
                    </div>

                    <h3 class="font-bold text-slate-900 text-base mb-2">${item.title}</h3>

                    <ul class="space-y-1.5 text-xs sm:text-sm text-slate-700 mb-3">
                      ${item.actions.map(act => `
                        <li class="flex items-start gap-2">
                          <span class="text-sky-500 font-bold mt-0.5">✓</span>
                          <span>${act}</span>
                        </li>
                      `).join('')}
                    </ul>

                    <div class="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-100">
                      <strong class="text-sky-800">Why this routine:</strong> ${item.whyThisSuggestion}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 7. Stress Management Guidance & Interactive Box Breathing -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-purple-50 text-purple-600">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">Stress & Autonomic Nervous System Regulation</h2>
              <p class="text-xs text-slate-500">Vagal nerve activation and physiological downshifting.</p>
            </div>
          </div>

          <!-- Interactive Box Breathing Tool Card -->
          <div class="mb-6 p-6 rounded-3xl bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white shadow-lg">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
              <div class="max-w-md">
                <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-purple-200 mb-2">
                  Interactive Calming Tool
                </span>
                <h3 class="text-xl font-bold text-white mb-2">4-4-4-4 Box Breathing Exercise</h3>
                <p class="text-xs sm:text-sm text-purple-200 leading-relaxed mb-4">
                  Follow the visual guide to regulate autonomic tone, slow heart rate, and clear mental loops.
                </p>
                <button 
                  type="button" 
                  id="btn-toggle-breathing" 
                  class="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-purple-500 hover:bg-purple-400 active:bg-purple-600 text-white transition-all shadow-md cursor-pointer"
                >
                  Start Box Breathing
                </button>
              </div>

              <!-- Animated Visual Breathing Circle -->
              <div class="flex flex-col items-center justify-center p-4">
                <div 
                  id="breathing-circle" 
                  class="w-36 h-36 rounded-full border-4 border-purple-400/40 bg-purple-500/20 flex flex-col items-center justify-center transition-all duration-1000 shadow-inner"
                >
                  <span id="breathing-phase-text" class="text-sm font-extrabold text-white uppercase tracking-wider">Ready</span>
                  <span id="breathing-counter-num" class="text-2xl font-black text-purple-300 mt-1">4s</span>
                </div>
                <span class="text-[11px] text-purple-300 mt-2 font-mono" id="breathing-instructions">
                  Click start to begin 4-second cycles
                </span>
              </div>
            </div>
          </div>

          <!-- Techniques List -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${g.stress.techniques.map(tech => `
              <div class="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between gap-2 mb-2">
                    <h3 class="font-bold text-slate-900 text-base">${tech.name}</h3>
                    <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">${tech.duration}</span>
                  </div>
                  <ul class="space-y-1.5 text-xs text-slate-600 mb-3">
                    ${tech.steps.map(s => `
                      <li class="flex items-start gap-1.5">
                        <span class="text-purple-600 font-bold">•</span>
                        <span>${s}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
                <div class="text-[11px] text-purple-900 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-100">
                  <strong>Why this suggestion:</strong> ${tech.whyThisSuggestion}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 8 & 9. Physical Activity & Rest / Recovery Protocols -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Physical Activity Suggestions -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2.5 mb-4">
                <div class="p-2 rounded-xl bg-sky-50 text-sky-600">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                </div>
                <h3 class="text-lg font-bold text-slate-900">Physical Activity Suggestions</h3>
              </div>
              <div class="space-y-4 mb-4">
                ${g.activity.map(act => `
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div class="flex items-center justify-between mb-1">
                      <strong class="text-slate-900 text-sm">${act.title}</strong>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">${act.frequency}</span>
                    </div>
                    <p class="text-slate-600 mb-2">${act.guidance}</p>
                    <p class="text-sky-800 text-[11px] bg-sky-50 p-1.5 rounded border border-sky-100">
                      <strong>Why:</strong> ${act.whyThisSuggestion}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Rest & Recovery Information -->
          <div class="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-2.5 mb-4">
                <div class="p-2 rounded-xl bg-teal-50 text-teal-600">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 class="text-lg font-bold text-slate-900">Rest & Recovery Guidelines</h3>
              </div>
              <div class="space-y-4 mb-4">
                ${g.restRecovery.map(rest => `
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <strong class="text-slate-900 text-sm block mb-1.5">${rest.title}</strong>
                    <ul class="space-y-1 text-slate-600 mb-2">
                      ${(Array.isArray(rest.guidance) ? rest.guidance : [rest.guidance]).map(gItem => `
                        <li class="flex items-start gap-1">
                          <span class="text-teal-600 font-bold">•</span>
                          <span>${gItem}</span>
                        </li>
                      `).join('')}
                    </ul>
                    <p class="text-teal-900 text-[11px] bg-teal-50 p-1.5 rounded border border-teal-100">
                      <strong>Why:</strong> ${rest.whyThisSuggestion}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- 10. Relevant Health Education: Stress, Cortisol & Circadian Rhythms -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">${g.cortisolEducation.title}</h2>
              <p class="text-xs text-slate-500">${g.cortisolEducation.subtitle}</p>
            </div>
          </div>

          <!-- Explicit Disclaimer regarding Cortisol Measurement -->
          <div class="mb-5 p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 text-xs leading-relaxed">
            ${g.cortisolEducation.disclaimer}
          </div>

          <!-- Points -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${g.cortisolEducation.points.map(pt => `
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                <h4 class="font-bold text-slate-900 text-sm mb-2 text-sky-950">${pt.heading}</h4>
                <p class="text-xs text-slate-600 leading-relaxed">${pt.text}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 11. When to Consult a Healthcare Professional (RED FLAG MATRIX) -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mb-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2.5 rounded-xl bg-rose-50 text-rose-600">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">When to Consult a Healthcare Professional</h2>
              <p class="text-xs text-slate-500">Recognizing urgent medical red flags and preparing for your clinical visit.</p>
            </div>
          </div>

          <!-- Urgent Warning Alert Box -->
          <div class="p-5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-rose-950 mb-6">
            <h3 class="font-black text-rose-900 text-sm uppercase tracking-wider mb-1 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
              ${g.redFlags.urgentWarningHeader}
            </h3>
            <p class="text-xs text-rose-800 mb-3">${g.redFlags.urgentWarningText}</p>
            <ul class="space-y-1.5 text-xs text-rose-900 font-medium">
              ${g.redFlags.universalRedFlags.map(rf => `
                <li class="flex items-start gap-2">
                  <span class="text-rose-600 font-bold">⚠️</span>
                  <span>${rf}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Condition-Specific Red Flags -->
          ${g.redFlags.conditionSpecificFlags.length > 0 ? `
            <div class="mb-6">
              <h4 class="font-bold text-slate-900 text-sm mb-3">Red Flags for Your Selected Conditions:</h4>
              <div class="space-y-3">
                ${g.redFlags.conditionSpecificFlags.map(item => `
                  <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="text-xs font-bold text-rose-800 block mb-1.5">${item.condition || item.conditionName}</span>
                    <ul class="space-y-1 text-xs text-slate-700">
                      ${(item.items || item.flags || []).map(f => `
                        <li class="flex items-start gap-1.5">
                          <span class="text-rose-500 font-bold">•</span>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Suggested Questions for Doctor Visit -->
          <div class="p-5 rounded-2xl bg-sky-50 border border-sky-100">
            <h4 class="font-bold text-sky-950 text-sm mb-2 flex items-center gap-2">
              <svg class="w-4 h-4 text-sky-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              <span>Suggested Questions for Your Healthcare Provider:</span>
            </h4>
            <p class="text-xs text-sky-800 mb-3">Take these questions to your next clinical consultation:</p>
            <ul class="space-y-2 text-xs text-slate-800">
              ${g.doctorQuestions.map(q => `
                <li class="flex items-start gap-2">
                  <span class="text-sky-600 font-bold">?</span>
                  <span>${q}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- Bottom Action Buttons -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-slate-200 no-print">
          <button 
            type="button" 
            id="btn-bottom-edit" 
            class="px-5 py-3 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm cursor-pointer"
          >
            ← Back to Edit Symptoms
          </button>

          <div class="flex flex-wrap items-center gap-3">
            <!-- WhatsApp Bottom Share Button -->
            <button 
              type="button" 
              id="btn-bottom-whatsapp" 
              class="px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/25 active:scale-[0.99] transition-all cursor-pointer text-sm sm:text-base inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
              <span>Share on WhatsApp</span>
            </button>

            <!-- Download PDF Button -->
            <button 
              type="button" 
              id="btn-bottom-download" 
              class="px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 shadow-lg shadow-sky-600/25 active:scale-[0.99] transition-all cursor-pointer text-sm sm:text-base"
            >
              Download Health Report (PDF)
            </button>
          </div>
        </div>

        <!-- Reset Confirmation Modal -->
        <div id="modal-confirm-reset" class="hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-white rounded-3xl p-6 sm:p-7 max-w-sm w-full shadow-2xl border border-slate-100 text-center">
            <div class="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
            </div>
            <h3 class="text-lg font-bold text-slate-900 mb-1">Start Again?</h3>
            <p class="text-xs text-slate-600 mb-5">This will clear your current profile, conditions, and symptoms so you can begin fresh.</p>
            <div class="flex items-center justify-center gap-2">
              <button type="button" id="btn-cancel-reset" class="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-medium">Cancel</button>
              <button type="button" id="btn-confirm-reset" class="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold shadow-sm">Yes, Reset</button>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  attachEvents() {
    const btnDownload = document.getElementById('btn-download-report');
    const btnBottomDownload = document.getElementById('btn-bottom-download');
    const btnEdit = document.getElementById('btn-edit-info');
    const btnBottomEdit = document.getElementById('btn-bottom-edit');
    const btnJumpConditions = document.querySelectorAll('.btn-jump-to-conditions');
    const btnStartAgain = document.getElementById('btn-start-again');
    const modalReset = document.getElementById('modal-confirm-reset');
    const btnCancelReset = document.getElementById('btn-cancel-reset');
    const btnConfirmReset = document.getElementById('btn-confirm-reset');
    const btnToggleBreathing = document.getElementById('btn-toggle-breathing');

    // WhatsApp Buttons
    const btnTopWhatsApp = document.getElementById('btn-top-whatsapp');
    const btnCardWhatsApp = document.getElementById('btn-share-whatsapp-card');
    const btnBottomWhatsApp = document.getElementById('btn-bottom-whatsapp');
    const btnCopyShareUrl = document.getElementById('btn-copy-share-url');
    const btnSharedStartOwn = document.getElementById('btn-shared-start-own');

    // 1. WhatsApp Sharing Trigger
    const triggerWhatsAppShare = () => {
      const msg = this.app.getWhatsAppShareMessage();
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    };

    btnTopWhatsApp?.addEventListener('click', triggerWhatsAppShare);
    btnCardWhatsApp?.addEventListener('click', triggerWhatsAppShare);
    btnBottomWhatsApp?.addEventListener('click', triggerWhatsAppShare);

    // 2. Copy Share Link Handler
    btnCopyShareUrl?.addEventListener('click', () => {
      const shareUrl = this.app.getShareUrl();
      const label = document.getElementById('copy-btn-label');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          this.app.showToast('Shareable link copied to clipboard! Paste into WhatsApp.', 'success');
          if (label) {
            label.textContent = 'Copied!';
            setTimeout(() => { label.textContent = 'Copy Share Link'; }, 2500);
          }
        }).catch(() => {
          this.fallbackCopy(shareUrl, label);
        });
      } else {
        this.fallbackCopy(shareUrl, label);
      }
    });

    // 3. Shared View "Start My Own Assessment" Button
    btnSharedStartOwn?.addEventListener('click', () => {
      this.app.resetAllData();
      this.app.navigateTo(1);
    });

    // 4. Download Health Report (Print stylesheet / Save as PDF)
    const triggerDownload = () => {
      window.print();
    };

    btnDownload?.addEventListener('click', triggerDownload);
    btnBottomDownload?.addEventListener('click', triggerDownload);

    // 5. Edit Information
    btnEdit?.addEventListener('click', () => {
      this.app.navigateTo(1);
    });

    btnBottomEdit?.addEventListener('click', () => {
      this.app.navigateTo(3);
    });

    btnJumpConditions?.forEach(b => {
      b.addEventListener('click', () => {
        this.app.navigateTo(2);
      });
    });

    // 6. Reset Confirmation Modal
    btnStartAgain?.addEventListener('click', () => {
      modalReset?.classList.remove('hidden');
    });

    btnCancelReset?.addEventListener('click', () => {
      modalReset?.classList.add('hidden');
    });

    btnConfirmReset?.addEventListener('click', () => {
      modalReset?.classList.add('hidden');
      this.stopBoxBreathing();
      this.app.resetAllData();
      this.app.navigateTo(1);
    });

    // 7. Daily Schedule Filtering Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Update tab styles
        document.querySelectorAll('.tab-btn').forEach(b => {
          b.className = 'tab-btn px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 cursor-pointer';
        });
        btn.className = 'tab-btn px-3 py-1.5 rounded-lg bg-white text-sky-900 shadow-xs cursor-pointer font-bold';

        // Filter timeline steps
        document.querySelectorAll('.timeline-step').forEach(step => {
          const phase = step.getAttribute('data-phase');
          if (filter === 'all' || phase === filter) {
            step.classList.remove('hidden');
          } else {
            step.classList.add('hidden');
          }
        });
      });
    });

    // 8. Interactive Box Breathing
    btnToggleBreathing?.addEventListener('click', () => {
      if (this.boxBreathingInterval) {
        this.stopBoxBreathing();
      } else {
        this.startBoxBreathing();
      }
    });
  }

  fallbackCopy(text, labelEl) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      this.app.showToast('Shareable link copied to clipboard!', 'success');
      if (labelEl) {
        labelEl.textContent = 'Copied!';
        setTimeout(() => { labelEl.textContent = 'Copy Share Link'; }, 2500);
      }
    } catch (e) {
      window.prompt('Copy this shareable WhatsApp link:', text);
    }
  }

  startBoxBreathing() {
    const btn = document.getElementById('btn-toggle-breathing');
    const circle = document.getElementById('breathing-circle');
    const phaseText = document.getElementById('breathing-phase-text');
    const counterNum = document.getElementById('breathing-counter-num');
    const instructions = document.getElementById('breathing-instructions');

    if (!btn || !circle) return;

    btn.textContent = 'Pause Box Breathing';
    btn.classList.add('bg-rose-500', 'hover:bg-rose-400');
    btn.classList.remove('bg-purple-500', 'hover:bg-purple-400');

    const phases = [
      { name: 'Inhale', text: 'Breathe in slowly through your nose', scale: 'scale-125 bg-purple-500/40 border-purple-300' },
      { name: 'Hold', text: 'Hold your breath gently full', scale: 'scale-125 bg-indigo-500/40 border-indigo-300' },
      { name: 'Exhale', text: 'Breathe out smoothly through your mouth', scale: 'scale-90 bg-purple-900/60 border-purple-500/30' },
      { name: 'Hold', text: 'Hold lungs calmly empty', scale: 'scale-90 bg-slate-900/80 border-slate-600' }
    ];

    let phaseIndex = 0;
    let secondsLeft = 4;

    const updateUI = () => {
      const cur = phases[phaseIndex];
      if (phaseText) phaseText.textContent = cur.name;
      if (counterNum) counterNum.textContent = `${secondsLeft}s`;
      if (instructions) instructions.textContent = cur.text;
      if (circle) {
        circle.className = `w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center transition-all duration-1000 shadow-inner ${cur.scale}`;
      }
    };

    updateUI();

    this.boxBreathingInterval = setInterval(() => {
      secondsLeft--;
      if (secondsLeft <= 0) {
        secondsLeft = 4;
        phaseIndex = (phaseIndex + 1) % 4;
      }
      updateUI();
    }, 1000);
  }

  stopBoxBreathing() {
    if (this.boxBreathingInterval) {
      clearInterval(this.boxBreathingInterval);
      this.boxBreathingInterval = null;
    }

    const btn = document.getElementById('btn-toggle-breathing');
    const circle = document.getElementById('breathing-circle');
    const phaseText = document.getElementById('breathing-phase-text');
    const counterNum = document.getElementById('breathing-counter-num');
    const instructions = document.getElementById('breathing-instructions');

    if (btn) {
      btn.textContent = 'Resume Box Breathing';
      btn.classList.remove('bg-rose-500', 'hover:bg-rose-400');
      btn.classList.add('bg-purple-500', 'hover:bg-purple-400');
    }
    if (circle) {
      circle.className = 'w-36 h-36 rounded-full border-4 border-purple-400/40 bg-purple-500/20 flex flex-col items-center justify-center transition-all duration-1000 shadow-inner';
    }
    if (phaseText) phaseText.textContent = 'Paused';
    if (counterNum) counterNum.textContent = '4s';
    if (instructions) instructions.textContent = 'Click resume to continue calming cycles';
  }

  escapeHtml(str) {
    return (str || '').replace(/[&<>"']/g, m => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  }
}


// ==========================================
// Module: js/app.js
// ==========================================
/**
 * HealthMind AI - Main Application Controller
 * Manages routing, state storage, URL-based assessment sharing (WhatsApp), and component lifecycles.
 */








const STORAGE_KEY = 'healthmind_ai_user_state_v1';

class HealthMindApp {
  constructor() {
    this.engine = new RecommendationEngine();
    // Initial state must be loaded BEFORE initializing page components
    this.state = this.loadState();

    this.nav = new Navigation(this);
    this.page1 = new Page1Personal(this);
    this.page2 = new Page2Conditions(this);
    this.page3 = new Page3Symptoms(this);
    this.page4 = new Page4Dashboard(this);
  }

  init() {
    this.render();
  }

  /**
   * Safely decodes base64 UTF-8 string
   */
  decodeBase64Utf8(str) {
    try {
      const binary = atob(decodeURIComponent(str));
      const json = decodeURIComponent(
        Array.prototype.map.call(binary, ch => '%' + ('00' + ch.charCodeAt(0).toString(16)).slice(-2)).join('')
      );
      return JSON.parse(json);
    } catch (e) {
      // Fallback decode
      const raw = atob(decodeURIComponent(str));
      return JSON.parse(decodeURIComponent(escape(raw)));
    }
  }

  /**
   * Safely encodes object to base64 UTF-8 string for URLs
   */
  encodeBase64Utf8(obj) {
    const json = JSON.stringify(obj);
    try {
      return encodeURIComponent(
        btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (m, p) => String.fromCharCode('0x' + p)))
      );
    } catch (e) {
      return encodeURIComponent(btoa(unescape(encodeURIComponent(json))));
    }
  }

  loadState() {
    // 1. Check if URL has ?share= parameter (e.g. from WhatsApp click)
    try {
      if (typeof window !== 'undefined' && window.location && window.location.search) {
        const urlParams = new URLSearchParams(window.location.search);
        const shareData = urlParams.get('share');
        if (shareData) {
          const parsed = this.decodeBase64Utf8(shareData);
          if (parsed && (parsed.fn || parsed.ids || parsed.sym)) {
            return {
              currentStep: 4, // Directly lands on Page 4 dashboard!
              isSharedView: true,
              sharedByName: parsed.fn || 'Friend',
              userData: {
                fullName: parsed.fn || '',
                gender: parsed.g || '',
                maritalStatus: parsed.ms || '',
                country: parsed.c || '',
                selectedConditionIds: parsed.ids || [],
                otherConditionText: parsed.ot || '',
                userSymptoms: (parsed.sym || []).map((s, idx) => ({
                  id: 'shared-symp-' + idx,
                  text: typeof s === 'string' ? s : s.text || s.label || '',
                  severity: typeof s === 'object' && s.severity ? s.severity : 'Reported',
                  category: 'Reported Symptom'
                })),
                freeTextNotes: parsed.notes || ''
              }
            };
          }
        }
      }
    } catch (err) {
      console.warn('Could not parse shared assessment query param:', err);
    }

    // 2. Check localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          currentStep: parsed.currentStep || 1,
          isSharedView: false,
          userData: {
            fullName: parsed.userData?.fullName || '',
            gender: parsed.userData?.gender || '',
            maritalStatus: parsed.userData?.maritalStatus || '',
            country: parsed.userData?.country || '',
            selectedConditionIds: parsed.userData?.selectedConditionIds || [],
            otherConditionText: parsed.userData?.otherConditionText || '',
            userSymptoms: parsed.userData?.userSymptoms || [],
            freeTextNotes: parsed.userData?.freeTextNotes || ''
          }
        };
      }
    } catch (e) {
      console.warn('Could not parse saved state:', e);
    }

    // 3. Default empty state
    return {
      currentStep: 1,
      isSharedView: false,
      userData: {
        fullName: '',
        gender: '',
        maritalStatus: '',
        country: '',
        selectedConditionIds: [],
        otherConditionText: '',
        userSymptoms: [],
        freeTextNotes: ''
      }
    };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not persist state:', e);
    }
  }

  resetAllData() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      // Clean up ?share= from URL if present without reloading
      if (typeof window !== 'undefined' && window.history && window.location.search) {
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    } catch (e) {}

    this.state = {
      currentStep: 1,
      isSharedView: false,
      userData: {
        fullName: '',
        gender: '',
        maritalStatus: '',
        country: '',
        selectedConditionIds: [],
        otherConditionText: '',
        userSymptoms: [],
        freeTextNotes: ''
      }
    };
  }

  updateUserData(partialData) {
    this.state.userData = {
      ...this.state.userData,
      ...partialData
    };
    this.saveState();
  }

  navigateTo(stepNumber) {
    if (stepNumber < 1) stepNumber = 1;
    if (stepNumber > 4) stepNumber = 4;
    this.state.currentStep = stepNumber;
    this.saveState();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Generates a portable, shareable URL containing the current assessment
   */
  getShareUrl(userData) {
    const data = userData || this.state.userData;
    const payload = {
      fn: data.fullName || '',
      g: data.gender || '',
      ms: data.maritalStatus || '',
      c: data.country || '',
      ids: data.selectedConditionIds || [],
      ot: data.otherConditionText || '',
      sym: (data.userSymptoms || []).map(s => typeof s === 'string' ? s : s.text || s.label || ''),
      notes: (data.freeTextNotes || '').slice(0, 400)
    };
    const encoded = this.encodeBase64Utf8(payload);
    const origin = (typeof window !== 'undefined' && window.location.origin) || '';
    const pathname = (typeof window !== 'undefined' && window.location.pathname) || '';
    return `${origin}${pathname}?share=${encoded}`;
  }

  /**
   * Builds the formatted WhatsApp message for a generated assessment
   */
  getWhatsAppShareMessage(userData) {
    const data = userData || this.state.userData;
    const firstName = (data.fullName || 'Friend').trim().split(/\s+/)[0];
    const condNames = (data.selectedConditionIds || [])
      .map(id => this.engine.conditionsMap.get(id)?.shortName || id)
      .filter(Boolean);
    
    if (data.otherConditionText) {
      condNames.push(data.otherConditionText);
    }
    
    const shareUrl = this.getShareUrl(data);
    const condStr = condNames.length > 0 ? condNames.join(', ') : 'Personal Health Profile';

    return `🩺 *HealthMind AI – Personalized Health & Wellness Plan*
👤 *Prepared for:* ${firstName}
📋 *Conditions:* ${condStr}

✨ *Personalized Protocols Generated:*
• Rest & sleep ergonomics
• 7-phase daily schedule (Morning, Noon, Evening)
• Nutrition & hydration education
• Safe physical activity & recovery pacing
• Medically reviewed red flag alerts

📲 *Open my complete interactive guidance here:*
${shareUrl}

_(100% private, client-side, medically reviewed)_`;
  }

  /**
   * Builds general WhatsApp invite message for the platform
   */
  getPlatformInviteMessage() {
    const origin = (typeof window !== 'undefined' && window.location.origin) || '';
    const pathname = (typeof window !== 'undefined' && window.location.pathname) || '';
    const url = `${origin}${pathname}`;
    return `🩺 *HealthMind AI – Personal Health Guidance Platform*

Understand your health concerns and receive personalized, safe, educational wellness guidance based on your symptoms!

🔒 100% Client-Side Privacy (No external AI servers, zero tracking)
🧬 Multi-condition synergy protocols (Joints, sleep, allergies, etc.)
🗓️ Custom 7-phase daily wellness schedule
📑 Medically reviewed lifestyle education

📲 Try HealthMind AI free in your browser:
${url}`;
  }

  /**
   * Global toast notification
   */
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const bg = type === 'success' ? 'bg-emerald-600' : type === 'warn' ? 'bg-amber-600' : 'bg-sky-600';
    toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl text-white text-xs sm:text-sm font-semibold shadow-xl shadow-slate-900/20 ${bg} animate-fade-in transition-all`;
    toast.innerHTML = `
      <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  render() {
    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    // Render Navigation
    const navHtml = this.nav.render(this.state.currentStep);

    // Render Current Page
    let pageHtml = '';
    let pageInstance = null;

    switch (this.state.currentStep) {
      case 1:
        pageHtml = this.page1.render();
        pageInstance = this.page1;
        break;
      case 2:
        pageHtml = this.page2.render();
        pageInstance = this.page2;
        break;
      case 3:
        pageHtml = this.page3.render();
        pageInstance = this.page3;
        break;
      case 4:
        pageHtml = this.page4.render();
        pageInstance = this.page4;
        break;
      default:
        pageHtml = this.page1.render();
        pageInstance = this.page1;
    }

    // Render Footer
    const footerHtml = this.renderFooter();

    appRoot.innerHTML = `
      ${navHtml}
      <main id="main-content" class="min-h-[calc(100vh-14rem)]">
        ${pageHtml}
      </main>
      ${footerHtml}
    `;

    // Attach Nav Events
    this.nav.attachEvents();

    // Attach Page Events
    pageInstance.attachEvents();

    // Attach Footer Events
    this.attachFooterEvents();
  }

  renderFooter() {
    return `
      <footer class="bg-white border-t border-slate-200/80 py-10 px-4 text-xs text-slate-500 mt-16 no-print">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-600 flex items-center justify-center text-white font-black text-sm shadow-sm">H</div>
            <div>
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-slate-800 text-sm">HealthMind AI</span>
                <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">PLATFORM</span>
              </div>
              <p class="text-slate-400 text-[11px]">Medically Reviewed Lifestyle & Educational Wellness Guidance</p>
            </div>
          </div>

          <!-- Quick WhatsApp & Trust Actions in Footer -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <button 
              type="button" 
              id="footer-share-whatsapp-btn"
              class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold text-xs transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 1.777.818 2.802.819l.006-.001c3.18 0 5.767-2.586 5.768-5.766 0-3.182-2.587-5.767-5.78-5.767zm3.385 8.165c-.143.403-.833.774-1.15.823-.316.05-.62.062-1.921-.453-1.666-.659-2.736-2.385-2.819-2.496-.083-.112-.676-.901-.676-1.718 0-.817.428-1.219.58-1.385.152-.165.331-.207.442-.207.11 0 .221.002.318.006.103.004.241-.039.377.288.143.344.49 1.196.533 1.284.043.088.072.19.014.305-.058.115-.087.187-.174.288-.087.102-.183.228-.261.306-.088.087-.179.182-.077.357.102.175.454.749.974 1.213.67.596 1.235.78 1.41.867.174.088.277.073.38-.044.103-.117.442-.515.56-.69.117-.175.234-.146.394-.088.16.059 1.015.479 1.189.566.175.088.291.131.334.204.043.073.043.424-.1.827z"></path></svg>
              <span>Share on WhatsApp</span>
            </button>

            <span class="text-slate-300 hidden md:inline">|</span>

            <div class="flex items-center gap-4 text-slate-500 text-xs">
              <span>🔒 100% Client-Side Privacy</span>
              <span>•</span>
              <span>No AI Keys Required</span>
              <span>•</span>
              <span>Vercel Ready</span>
            </div>
          </div>
        </div>

        <div class="max-w-5xl mx-auto mt-6 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400 leading-relaxed">
          Disclaimer: HealthMind AI provides general educational health information and rule-based lifestyle protocols. It is not a substitute for clinical medical evaluation, diagnosis, or treatment by a licensed physician. If you are experiencing a medical emergency, please call your local emergency service immediately.
        </div>
      </footer>
    `;
  }

  attachFooterEvents() {
    document.getElementById('footer-share-whatsapp-btn')?.addEventListener('click', () => {
      let text = '';
      if (this.state.currentStep === 4) {
        text = this.getWhatsAppShareMessage();
      } else {
        text = this.getPlatformInviteMessage();
      }
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }
}

// Global bootstrap
function initApp() {
  if (typeof window === 'undefined') return;
  if (window.HealthMindAppInstance) return;
  const app = new HealthMindApp();
  window.HealthMindAppInstance = app;
  app.init();
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}


})();
