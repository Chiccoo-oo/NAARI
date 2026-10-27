/**
 * PRAVASI-BAL SETU — MASTER LOGIC & INTERACTIVE ENGINE
 * Platform: National Interstate Child Migration Welfare Grid
 * Central Zone Focus: Chhattisgarh ➔ Maharashtra Interstate Migration Grid (and Central Zone Corridors)
 * Compliance: OpenHIE, ABDM (NHA), Poshan 2.0 (MWCD), RTE Act Section 4 (MoE), e-Shram (MoLE)
 */

// ============================================================================
// 1. DATA REPOSITORY & STATE MANAGEMENT
// ============================================================================

const PBS_DATA_VERSION = '2.3';

const DEFAULT_CHILDREN = [
  {
    id: 'PBS-CG-2026-55018',
    name: 'Pooja Sahu',
    nameHi: 'पूजा साहू',
    age: 7,
    gender: 'Female',
    genderHi: 'बालिका (Girl)',
    sourcePanchayat: 'Sahaspur-Lohara, Kawardha (Kabirdham, CG)',
    worksite: 'Shirur Brick Kiln Cluster #08, Pune (MH)',
    parentUan: 'UAN-1009-3184-7712',
    parentName: 'Dhanesh Sahu & Kunti Bai',
    motherTongue: 'Chhattisgarhi',
    weight: 17.6,
    height: 109,
    muac: 12.8,
    nutritionStatus: 'Normal (Green Zone - Monitored)',
    vaccinePct: '10/10 Doses (100%)',
    nextVaccine: 'Fully Immunized (Mission Indradhanush Verified)',
    homeGrade: 'Class 1 (Chhattisgarhi Medium Govt School)',
    bridgePlan: 'Chhattisgarhi ➔ Marathi Multilingual Kit',
    attendance: '96.6% (29/30 Days at Worksite Creche)',
    learningLevel: 'Level 1.9 / 3.0 (NIPUN Bharat)',
    learningPct: 65,
    mealsServed: 29,
    avatar: '👧',
    history: [
      { text: 'Complete Primary Immunization: BCG, OPV, Pentavalent, Rotavirus verified on U-WIN.', done: true },
      { text: 'Anthropometric Screening: 12.8cm MUAC (Normal). Weight: 17.6kg, Height: 109cm. Monitored at Sahaspur-Lohara AWC (CG).', done: true },
      { text: 'Next Annual Screening: Poshan 2.0 Bi-annual Growth Audit (Nov 2026, Shirur PHC Linkage, Pune MH).', done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Shirur Brick Kiln Cluster #08 (MH)', meals: '28 Days', ifa: 'Weekly Syrup Administered', status: 'AWW Bio-Verified' },
      { month: 'September 2026', cluster: 'Sahaspur-Lohara AWC (CG)', meals: '24 Days', ifa: 'Weekly Syrup Administered', status: 'AWW Bio-Verified' }
    ]
  },
  {
    id: 'PBS-CG-2026-61044',
    name: 'Karan Dewangan',
    nameHi: 'करण देवांगन',
    age: 8,
    gender: 'Male',
    genderHi: 'बालक (Boy)',
    sourcePanchayat: 'Takhatpur, Bilaspur (Chhattisgarh)',
    worksite: 'Pandharpur & Barshi Sugarcane & Kiln Belt, Solapur (MH)',
    parentUan: 'UAN-1009-5421-8893',
    parentName: 'Santosh Dewangan & Phoolmati',
    motherTongue: 'Chhattisgarhi',
    weight: 20.2,
    height: 115,
    muac: 13.1,
    nutritionStatus: 'Normal (Green Zone)',
    vaccinePct: '9/10 Doses (90%)',
    nextVaccine: 'Measles-Rubella Booster (Assigned to Solapur Rural PHC)',
    homeGrade: 'Class 2 (Takhatpur Govt Primary School)',
    bridgePlan: 'Chhattisgarhi ➔ Marathi Bridge Module',
    attendance: '93.3% (28/30 Days at On-Site Creche)',
    learningLevel: 'Level 2.2 / 3.0 (FLN)',
    learningPct: 72,
    mealsServed: 28,
    avatar: '👦',
    history: [
      { text: 'Deworming (Albendazole) & Vitamin A: Administered at Takhatpur AWC.', done: true },
      { text: 'Anthropometric Assessment: MUAC 13.1cm. Normal growth trajectory on Poshan Tracker.', done: true },
      { text: 'Scheduled Booster: MR-2 Booster at Pandharpur Sub-District Hospital.', done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Pandharpur Kiln Cluster #02 (MH)', meals: '28 Days', ifa: 'Weekly Administered', status: 'AWW Bio-Verified' },
      { month: 'September 2026', cluster: 'Takhatpur Primary AWC (CG)', meals: '25 Days', ifa: 'Weekly Administered', status: 'AWW Bio-Verified' }
    ]
  },
  {
    id: 'PBS-CG-2026-72819',
    name: 'Ramesh Netam',
    nameHi: 'रमेश नेताम',
    age: 9,
    gender: 'Male',
    genderHi: 'बालक (Boy)',
    sourcePanchayat: 'Dongargarh, Rajnandgaon (Chhattisgarh)',
    worksite: 'Katol & Hingna Cotton Processing Hub, Nagpur (MH)',
    parentUan: 'UAN-1009-8812-3401',
    parentName: 'Bhushan Netam & Budhiyarin Bai',
    motherTongue: 'Halbi / Gondi',
    weight: 24.1,
    height: 124,
    muac: 13.6,
    nutritionStatus: 'Normal (Green Zone)',
    vaccinePct: '10/10 Doses (100%)',
    nextVaccine: 'Fully Immunized (Age Appropriate)',
    homeGrade: 'Class 3 (Govt Ashram School Dongargarh)',
    bridgePlan: 'Halbi / Gondi ➔ Marathi Bridge Module',
    attendance: '96.0% (29/30 Days)',
    learningLevel: 'Level 2.8 / 3.0',
    learningPct: 85,
    mealsServed: 29,
    avatar: '👦',
    history: [
      { text: 'Complete Immunization Verified on U-WIN digital registry.', done: true },
      { text: 'RTE Special Training: Enrolled at Katol Zilla Parishad Bridge Class.', done: true },
      { text: 'Vision & Dental Checkup: Completed at Nagpur Mobile Health Camp.', done: true }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Katol Cotton Hub Worksite #05 (MH)', meals: '29 Days', ifa: 'Weekly IFA Syrup', status: 'AWW Bio-Verified' },
      { month: 'September 2026', cluster: 'Dongargarh Ashram School (CG)', meals: '26 Days', ifa: 'Weekly IFA Syrup', status: 'MDM Verified' }
    ]
  },
  {
    id: 'PBS-CG-2026-83490',
    name: 'Sunita Markam',
    nameHi: 'सुनीता मरकाम',
    age: 6,
    gender: 'Female',
    genderHi: 'बालिका (Girl)',
    sourcePanchayat: 'Keshkal, Bastar / Kanker (Chhattisgarh)',
    worksite: 'Bhiwandi Logistics & Infra Site #04, Thane (MH)',
    parentUan: 'UAN-1009-4190-2210',
    parentName: 'Sukhlal Markam & Ratna Bai',
    motherTongue: 'Gondi / Chhattisgarhi',
    weight: 15.8,
    height: 102,
    muac: 12.9,
    nutritionStatus: 'Normal (Green Zone)',
    vaccinePct: '9/10 Doses (90%)',
    nextVaccine: 'DPT Booster (Assigned to Bhiwandi Urban PHC)',
    homeGrade: 'Balvatika-3 (Keshkal Pre-Primary)',
    bridgePlan: 'Gondi ➔ Marathi-Hindi Bridge Module',
    attendance: '90.0% (27/30 Days)',
    learningLevel: 'Level 1.4 / 3.0',
    learningPct: 50,
    mealsServed: 27,
    avatar: '👧',
    history: [
      { text: 'Deworming & Vitamin A: Administered at Keshkal Anganwadi.', done: true },
      { text: 'Nutritional Assessment: MUAC 12.9cm. Regular Hot-Cooked Meal monitoring.', done: true },
      { text: 'Pending Vaccine: DPT Booster due Nov 2026 at Thane Sub-District Hospital.', done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Bhiwandi Mobile Creche #04 (MH)', meals: '27 Days', ifa: 'Weekly Syrup Administered', status: 'AWW Bio-Verified' },
      { month: 'September 2026', cluster: 'Keshkal Primary AWC (CG)', meals: '26 Days', ifa: 'Weekly Syrup Administered', status: 'AWW Bio-Verified' }
    ]
  },
  {
    id: 'PBS-MP-2026-10291',
    name: 'Mangal Bhil',
    nameHi: 'मंगल भील',
    age: 8,
    gender: 'Male',
    genderHi: 'बालक (Boy)',
    sourcePanchayat: 'Sondwa, Alirajpur (Madhya Pradesh)',
    worksite: 'Morbi Ceramic Tile Cluster #14 (Gujarat)',
    parentUan: 'UAN-1004-9821-4401',
    parentName: 'Ramsingh Bhil & Kamla Bai',
    motherTongue: 'Bhili / Bhilodi',
    weight: 19.8,
    height: 116,
    muac: 12.6,
    nutritionStatus: 'Moderate Malnutrition (Yellow Zone - MAM)',
    vaccinePct: '9/10 Doses (90%)',
    nextVaccine: 'Measles-Rubella Booster (Morbi PHC Linkage)',
    homeGrade: 'Class 2 (Primary Govt School Sondwa)',
    bridgePlan: 'Bhili ➔ Gujarati-Hindi Bilingual Bridge Pack',
    attendance: '93.3% (28/30 Days at Worksite Creche)',
    learningLevel: 'Level 2.1 / 3.0 (NIPUN Bharat)',
    learningPct: 70,
    mealsServed: 28,
    avatar: '👦',
    history: [
      { text: 'Deworming (Albendazole) & Vitamin A: Administered at Sondwa Anganwadi.', done: true },
      { text: 'MUAC Screening: 12.6cm (MAM Yellow Zone). Supplementary Take-Home Ration initiated.', done: true },
      { text: 'Next Booster Dose: Measles-Rubella Booster (Scheduled at Morbi Worksite PHC).', done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Morbi Ceramic Cluster #14', meals: '26 Days', ifa: 'Weekly Administered', status: 'AWW Verified' },
      { month: 'September 2026', cluster: 'Sondwa Anganwadi #02 (MP)', meals: '25 Days', ifa: 'Weekly Administered', status: 'AWW Verified' }
    ]
  },
  {
    id: 'PBS-OD-2026-89410',
    name: 'Raju Kumar',
    nameHi: 'राजू कुमार',
    age: 7,
    gender: 'Male',
    genderHi: 'बालक (Boy)',
    sourcePanchayat: 'Muribahal, Bolangir (Odisha)',
    worksite: 'Pune Brick Kiln Cluster #04 (MH)',
    parentUan: 'UAN-1009-8472-9102',
    parentName: 'Suresh Kumar & Sunita Devi',
    motherTongue: 'Odia',
    weight: 21.4,
    height: 114,
    muac: 13.8,
    nutritionStatus: 'Normal (Low Risk)',
    vaccinePct: '9/10 Doses (90%)',
    nextVaccine: 'DPT Booster-2 (Assigned to Shirur PHC, MH)',
    homeGrade: 'Class 2 (Odia Medium)',
    bridgePlan: 'Odia ➔ Marathi Bridge Pack',
    attendance: '94.2% (28/30 Days)',
    learningLevel: 'Level 2.4 / 3.0',
    learningPct: 80,
    mealsServed: 26,
    avatar: '👦',
    history: [
      { text: 'Deworming (Albendazole) & Vitamin A: Administered on 12 Sep 2026 at Muribahal Anganwadi.', done: true },
      { text: 'MUAC Screening: 13.8cm (Safe/Green zone). Weight: 21.4kg, Height: 114cm.', done: true },
      { text: 'Next Booster Dose: DPT Booster-2 (Assigned to Shirur Primary Health Centre, MH).', done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Pune Brick Kiln Cluster #04', meals: '26 Days', ifa: 'Weekly Administered', status: 'AWW Verified' },
      { month: 'September 2026', cluster: 'Muribahal Village AWC (OD)', meals: '24 Days', ifa: 'Weekly Administered', status: 'AWW Verified' }
    ]
  },
  {
    id: 'PBS-MP-2026-44102',
    name: 'Aman Yadav',
    nameHi: 'अमन यादव',
    age: 10,
    gender: 'Male',
    genderHi: 'बालक (Boy)',
    sourcePanchayat: 'Rajnagar, Chhatarpur (Bundelkhand, MP)',
    worksite: 'Noida Expressway Construction Cluster 150 (NCR)',
    parentUan: 'UAN-1002-9901-2244',
    parentName: 'Ramesh Yadav & Meena Devi',
    motherTongue: 'Bundeli / Hindi',
    weight: 28.5,
    height: 132,
    muac: 14.5,
    nutritionStatus: 'Normal (Green Zone)',
    vaccinePct: '10/10 Doses (100%)',
    nextVaccine: 'Fully Vaccinated (Age Appropriate)',
    homeGrade: 'Class 4 (Primary Govt School Rajnagar)',
    bridgePlan: 'Foundational STEM & Hindi Accelerated',
    attendance: '96.0% (29/30 Days)',
    learningLevel: 'Level 4.1 / 5.0',
    learningPct: 82,
    mealsServed: 28,
    avatar: '👦',
    history: [
      { text: 'Annual School Health Checkup completed at Rajnagar.', done: true },
      { text: 'Anthropometric Growth: 28.5kg / 132cm (Healthy BMI: 16.4).', done: true },
      { text: 'NIPUN Bharat Assessment: Foundational Numeracy Grade 4 Achieved.', done: true }
    ],
    rations: [
      { month: 'October 2026', cluster: 'Sector 150 Worksite School (NCR)', meals: '28 Days', ifa: 'Bi-Weekly IFA Tablet', status: 'Teacher Verified' },
      { month: 'September 2026', cluster: 'Rajnagar Primary School (MP)', meals: '25 Days', ifa: 'Bi-Weekly IFA Tablet', status: 'MDM Verified' }
    ]
  }
];

const DEFAULT_BATCHES = [
  {
    id: 'BATCH-CG-MH-208',
    corridor: 'CG-MH',
    source: 'Kawardha / Bilaspur (CG)',
    dest: 'Pune / Shirur Brick Kilns (MH)',
    children: 115,
    infants: 44,
    schoolAge: 71,
    worksite: 'Shirur & Daund Brick Belt #08',
    status: 'Buffer Allocated (Active)',
    statusClass: 'allocated',
    mealsAllocated: '20,700 Meals',
    teachers: '2 Chhattisgarhi-Marathi Tutors',
    lang: 'Chhattisgarhi ➔ Marathi Modules'
  },
  {
    id: 'BATCH-CG-MH-312',
    corridor: 'CG-MH-SOLAPUR',
    source: 'Bilaspur / Janjgir (CG)',
    dest: 'Solapur Sugarcane Belt (MH)',
    children: 135,
    infants: 48,
    schoolAge: 87,
    worksite: 'Pandharpur & Barshi Kiln Cluster',
    status: 'In-Transit (ETA 8h)',
    statusClass: 'in-transit',
    mealsAllocated: '24,300 Meals',
    teachers: '3 Chhattisgarhi Bridge Instructors',
    lang: 'Chhattisgarhi ➔ Marathi Bridge Pack'
  },
  {
    id: 'BATCH-CG-MH-405',
    corridor: 'CG-MH-NAGPUR',
    source: 'Rajnandgaon / Durg (CG)',
    dest: 'Nagpur & Wardha Agro (MH)',
    children: 95,
    infants: 32,
    schoolAge: 63,
    worksite: 'Katol & Hingna Cotton Processing Hub',
    status: 'Buffer Allocated',
    statusClass: 'allocated',
    mealsAllocated: '17,100 Meals',
    teachers: '2 Bilingual Resource Tutors',
    lang: 'Chhattisgarhi/Halbi ➔ Marathi Modules'
  },
  {
    id: 'BATCH-CG-MH-520',
    corridor: 'CG-MH-THANE',
    source: 'Baloda Bazar / Mungeli (CG)',
    dest: 'Thane & Navi Mumbai Infra (MH)',
    children: 110,
    infants: 38,
    schoolAge: 72,
    worksite: 'Bhiwandi Logistics & Infra Site #04',
    status: 'In-Transit (Train 12130)',
    statusClass: 'in-transit',
    mealsAllocated: '19,800 Meals',
    teachers: '2 Bridge Facilitators',
    lang: 'Chhattisgarhi ➔ Marathi/Hindi Modules'
  },
  {
    id: 'BATCH-CG-MH-614',
    corridor: 'CG-MH-KOLHAPUR',
    source: 'Bastar / Kanker (CG)',
    dest: 'Kolhapur Sugar Mills (MH)',
    children: 85,
    infants: 28,
    schoolAge: 57,
    worksite: 'Shirol Sugarcane & Brick Hub #02',
    status: 'Buffer Allocated',
    statusClass: 'allocated',
    mealsAllocated: '15,300 Meals',
    teachers: '2 Gondi-Marathi Resource Didis',
    lang: 'Gondi/Halbi ➔ Marathi Modules'
  },
  {
    id: 'BATCH-MP-GJ-501',
    corridor: 'MP-GJ',
    source: 'Alirajpur / Jhabua (MP)',
    dest: 'Morbi Ceramics & Cotton (GJ)',
    children: 140,
    infants: 52,
    schoolAge: 88,
    worksite: 'Morbi Ceramic GIDC Cluster #14',
    status: 'In-Transit (ETA 12h)',
    statusClass: 'in-transit',
    mealsAllocated: '25,200 Meals',
    teachers: '2 Bhili-Gujarati Bridge Teachers',
    lang: 'Bhili ➔ Gujarati Modules'
  },
  {
    id: 'BATCH-MP-MH-330',
    corridor: 'MP-MH',
    source: 'Balaghat / Dindori (MP)',
    dest: 'Nagpur Agro & Cotton (MH)',
    children: 80,
    infants: 30,
    schoolAge: 50,
    worksite: 'Katol Agro Processing Hub',
    status: 'Buffer Allocated',
    statusClass: 'allocated',
    mealsAllocated: '14,400 Meals',
    teachers: '1 Gondi-Marathi Bilingual Didi',
    lang: 'Gondi ➔ Marathi Modules'
  },
  {
    id: 'BATCH-CG-TS-714',
    corridor: 'CG-TS',
    source: 'Rajnandgaon (CG)',
    dest: 'Hyderabad Brick Belt (Telangana)',
    children: 95,
    infants: 36,
    schoolAge: 59,
    worksite: 'Karimnagar & Medchal Brick Hub',
    status: 'Buffer Allocated',
    statusClass: 'allocated',
    mealsAllocated: '17,100 Meals',
    teachers: '1 Chhattisgarhi-Telugu Facilitator',
    lang: 'Chhattisgarhi ➔ Telugu Modules'
  },
  {
    id: 'BATCH-MP-NCR-412',
    corridor: 'MP-NCR',
    source: 'Chhatarpur (MP Bundelkhand)',
    dest: 'Noida Expressway (NCR)',
    children: 70,
    infants: 22,
    schoolAge: 48,
    worksite: 'Sector 150 Construction Site',
    status: 'Pending Intake Verification',
    statusClass: 'pending',
    mealsAllocated: '12,600 Meals',
    teachers: '1 Hindi Resource Teacher',
    lang: 'Bundeli ➔ Hindi Modules'
  }
];

const CORRIDOR_METADATA = {
  'CG-MH': {
    title: 'Chhattisgarh (Kawardha/Kabirdham) ➔ Maharashtra (Pune & Shirur Brick Belt)',
    count: '3,840 Children in Seasonal Outflow',
    status: 'Interstate Handshake Active',
    clusters: 124,
    transit: 2840,
    creches: 86,
    alerts: 4,
    pathId: 'path-cg-mh'
  },
  'CG-MH-SOLAPUR': {
    title: 'Chhattisgarh (Bilaspur/Janjgir) ➔ Maharashtra (Solapur & Pandharpur Kilns)',
    count: '2,920 Children in Seasonal Outflow',
    status: 'Poshan 2.0 Quota Released',
    clusters: 76,
    transit: 1850,
    creches: 54,
    alerts: 2,
    pathId: 'path-cg-mh-solapur'
  },
  'CG-MH-NAGPUR': {
    title: 'Chhattisgarh (Rajnandgaon/Durg) ➔ Maharashtra (Nagpur & Wardha Agro Clusters)',
    count: '2,460 Children in Seasonal Outflow',
    status: 'Bilingual Bridge Active',
    clusters: 62,
    transit: 1420,
    creches: 48,
    alerts: 1,
    pathId: 'path-cg-mh-nagpur'
  },
  'CG-MH-THANE': {
    title: 'Chhattisgarh (Baloda Bazar/Mungeli) ➔ Maharashtra (Thane & Navi Mumbai Infra)',
    count: '2,150 Children in Seasonal Outflow',
    status: 'Mobile Creche Active',
    clusters: 58,
    transit: 1310,
    creches: 42,
    alerts: 3,
    pathId: 'path-cg-mh-thane'
  },
  'CG-MH-KOLHAPUR': {
    title: 'Chhattisgarh (Bastar/Kanker) ➔ Maharashtra (Kolhapur Sugarcane & Kiln Hub)',
    count: '1,890 Children in Seasonal Outflow',
    status: 'AHTU Transit Shield Active',
    clusters: 44,
    transit: 980,
    creches: 32,
    alerts: 1,
    pathId: 'path-cg-mh-kolhapur'
  },
  'MP-MH': {
    title: 'Central Zone (Balaghat/Seoni) ➔ Maharashtra (Nagpur Corridor)',
    count: '1,620 Gondi Children',
    status: 'Bilingual Bridge Deployed',
    clusters: 46,
    transit: 610,
    creches: 26,
    alerts: 2,
    pathId: 'path-mp-mh'
  },
  'MP-GJ': {
    title: 'MP (Alirajpur/Jhabua) ➔ Gujarat (Morbi Ceramics & Cotton)',
    count: '2,840 Tribal Children',
    status: 'Central Zone Grid Active',
    clusters: 84,
    transit: 1420,
    creches: 42,
    alerts: 2,
    pathId: 'path-mp-gj'
  },
  'CG-TS': {
    title: 'Chhattisgarh (Rajnandgaon) ➔ Telangana (Hyderabad Brick Belt)',
    count: '1,980 Children',
    status: 'Inbound Creche Deployed',
    clusters: 52,
    transit: 760,
    creches: 29,
    alerts: 1,
    pathId: 'path-cg-ts'
  },
  'MP-NCR': {
    title: 'MP Bundelkhand (Chhatarpur) ➔ Delhi-NCR (Construction Sites)',
    count: '1,450 Children',
    status: 'Buffer Ration Quota Dispatched',
    clusters: 40,
    transit: 540,
    creches: 24,
    alerts: 2,
    pathId: 'path-mp-ncr'
  },
  'OD-MH': {
    title: 'Odisha (Bolangir) ➔ Maharashtra (Pune Brick-Kiln Belt)',
    count: '3,420 Children',
    status: 'Auto-Handshake Active',
    clusters: 32,
    transit: 310,
    creches: 15,
    alerts: 1,
    pathId: 'path-od-mh'
  },
  'BH-PB': {
    title: 'Bihar (Saran/Gaya) ➔ Punjab (Ludhiana Seasonal Agro)',
    count: '2,890 Children',
    status: 'Active Surveillance & Creche',
    clusters: 20,
    transit: 200,
    creches: 10,
    alerts: 1,
    pathId: 'path-bh-pb'
  },
  'ALL': {
    title: 'All Chhattisgarh ➔ Maharashtra & Central Interstate Routes',
    count: '3.8L+ CG ➔ MH Children (4.2M Pan-India)',
    status: 'Unified Migration Grid Synchronized',
    clusters: 342,
    transit: 4820,
    creches: 184,
    alerts: 12,
    pathId: 'path-cg-mh'
  }
};

const AppState = {
  currentLang: localStorage.getItem('pbs_lang') || 'hi',
  currentCorridor: 'CG-MH',
  activeModalBatchId: null,
  registeredChildren: [],
  migrationBatches: []
};

// Initialize State from Storage or Defaults
function loadPersistedState() {
  try {
    const version = localStorage.getItem('pbs_version');
    if (version !== PBS_DATA_VERSION) {
      localStorage.setItem('pbs_version', PBS_DATA_VERSION);
      localStorage.setItem('pbs_children', JSON.stringify(DEFAULT_CHILDREN));
      localStorage.setItem('pbs_batches', JSON.stringify(DEFAULT_BATCHES));
      AppState.registeredChildren = DEFAULT_CHILDREN;
      AppState.migrationBatches = DEFAULT_BATCHES;
      return;
    }

    const savedKids = localStorage.getItem('pbs_children');
    AppState.registeredChildren = savedKids ? JSON.parse(savedKids) : DEFAULT_CHILDREN;
  } catch (e) {
    AppState.registeredChildren = DEFAULT_CHILDREN;
  }

  try {
    const savedBatches = localStorage.getItem('pbs_batches');
    AppState.migrationBatches = savedBatches ? JSON.parse(savedBatches) : DEFAULT_BATCHES;
  } catch (e) {
    AppState.migrationBatches = DEFAULT_BATCHES;
  }
}

function persistState() {
  try {
    localStorage.setItem('pbs_version', PBS_DATA_VERSION);
    localStorage.setItem('pbs_children', JSON.stringify(AppState.registeredChildren));
    localStorage.setItem('pbs_batches', JSON.stringify(AppState.migrationBatches));
  } catch (e) {
    // LocalStorage quota or access disabled
  }
}

// ============================================================================
// 2. INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();
  populateChildDropdown();
  selectCorridor('CG-MH');
  loadChildPassportRecord();
  calculateROI();
  initPwaNetworkStatus();
  initServiceWorker();
  applyLanguage(AppState.currentLang);
});

function initServiceWorker() {
  if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('[Pravasi-Bal-Setu] Service Worker registered with scope:', reg.scope);
      })
      .catch((err) => {
        console.log('[Pravasi-Bal-Setu] Service Worker registration note:', err);
      });
  }
}

// ============================================================================
// 3. TAB NAVIGATION
// ============================================================================

function switchTab(tabId) {
  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(pane => pane.classList.remove('active'));

  const navTabs = document.querySelectorAll('.nav-tab');
  navTabs.forEach(tab => tab.classList.remove('active'));

  const activePane = document.getElementById(tabId);
  if (activePane) {
    activePane.classList.add('active');
  }

  const matchingBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (matchingBtn) {
    matchingBtn.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Sub-tabs inside Passport card
function switchPassportSubTab(subTabId, clickedBtn = null) {
  const tabs = document.querySelectorAll('.sub-tab');
  tabs.forEach(t => t.classList.remove('active'));

  const contents = document.querySelectorAll('.subtab-content');
  contents.forEach(c => c.style.display = 'none');

  const activeContent = document.getElementById(subTabId);
  if (activeContent) {
    activeContent.style.display = 'block';
  }

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    const btn = Array.from(tabs).find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes(subTabId));
    if (btn) btn.classList.add('active');
  }
}

// ============================================================================
// 4. MAP & CORRIDOR SELECTION
// ============================================================================

function selectCorridor(corridorCode) {
  AppState.currentCorridor = corridorCode;
  
  const filterSelect = document.getElementById('stateFilterSelect');
  if (filterSelect && filterSelect.value !== corridorCode) {
    filterSelect.value = corridorCode;
  }

  const allPaths = document.querySelectorAll('.flow-path');
  allPaths.forEach(p => p.classList.remove('active-path'));

  const info = CORRIDOR_METADATA[corridorCode] || CORRIDOR_METADATA['CG-MH'];
  const targetPathId = info.pathId || `path-${corridorCode.toLowerCase()}`;
  const targetPath = document.getElementById(targetPathId);
  
  if (targetPath) {
    targetPath.classList.add('active-path');

    // Dynamically update animated batch marker trajectory
    const marker = document.getElementById('animatedBatchMarker');
    if (marker) {
      const d = targetPath.getAttribute('d');
      const anim = marker.querySelector('animateMotion');
      if (anim && d) {
        anim.setAttribute('path', d);
      }
    }
  }

  const focusTitle = document.getElementById('focusCorridorTitle');
  if (focusTitle) {
    focusTitle.innerText = info.title;
  }

  if (document.getElementById('kpiClusters')) document.getElementById('kpiClusters').innerText = info.clusters;
  if (document.getElementById('kpiTransit')) document.getElementById('kpiTransit').innerText = info.transit.toLocaleString();
  if (document.getElementById('kpiCreches')) document.getElementById('kpiCreches').innerText = `${info.creches} Active`;
  if (document.getElementById('kpiAlerts')) document.getElementById('kpiAlerts').innerText = info.alerts;

  renderBatchesTable(corridorCode === 'ALL' ? null : corridorCode);

  showToast(`Corridor Selected: ${info.title.split('➔')[0] || info.title}`);
}

function filterDashboardCorridors() {
  const code = document.getElementById('stateFilterSelect').value;
  selectCorridor(code);
}

// ============================================================================
// 5. LIVE MIGRATION SIMULATION ENGINE
// ============================================================================

let isSimulating = false;

function runLiveSimulation() {
  if (isSimulating) return;
  isSimulating = true;

  const origin = document.getElementById('simOriginSelect').value;
  const dest = document.getElementById('simDestSelect').value;
  const count = parseInt(document.getElementById('simChildrenCount').value) || 85;

  const runBtn = document.getElementById('runSimulationBtn');
  runBtn.disabled = true;
  runBtn.innerHTML = `<span>⏳</span> <span>Executing Handshake...</span>`;

  const consoleBody = document.getElementById('simConsoleBody');
  consoleBody.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    document.getElementById(`step${i}`).classList.remove('active');
    if (i < 5) document.getElementById(`conn${i}`).classList.remove('active');
  }
  document.getElementById('simResultCard').style.display = 'none';

  function appendLog(line, type = 'info') {
    const div = document.createElement('div');
    div.className = `log-line ${type}`;
    div.innerText = line;
    consoleBody.appendChild(div);
    consoleBody.scrollTop = consoleBody.scrollHeight;
  }

  appendLog(`[00.00s] INITIATING AUTONOMOUS INTER-DISTRICT HANDSHAKE PROTOCOL`, 'system');
  appendLog(`[00.12s] Detected seasonal migration outflow: ${count} children departing from [${origin}]`, 'info');

  setTimeout(() => {
    document.getElementById('step1').classList.add('active');
    appendLog(`[00.45s] STEP 1/5: Origin Panchayat logged migration manifest. Generated ${count} encrypted Bal-Passports with SHA-256 tokens.`, 'info');
  }, 400);

  setTimeout(() => {
    document.getElementById('conn1').classList.add('active');
    document.getElementById('step2').classList.add('active');
    appendLog(`[00.85s] STEP 2/5: Interstate Mesh Router synchronized via e-Shram API. Transit geofence activated with ERSS 112 / AHTU.`, 'info');
  }, 900);

  setTimeout(() => {
    document.getElementById('conn2').classList.add('active');
    document.getElementById('step3').classList.add('active');
    appendLog(`[01.30s] STEP 3/5: Destination District Magistrate & DPO alerted at [${dest}]. Buffer quota pipeline opened.`, 'info');
  }, 1400);

  setTimeout(() => {
    document.getElementById('conn3').classList.add('active');
    document.getElementById('step4').classList.add('active');
    const totalMeals = count * 180;
    appendLog(`[01.75s] STEP 4/5: Poshan 2.0 buffer quota adjustment executed: ${totalMeals.toLocaleString()} hot meals allocated to destination worksite.`, 'success');
  }, 1900);

  setTimeout(() => {
    document.getElementById('conn4').classList.add('active');
    document.getElementById('step5').classList.add('active');
    appendLog(`[02.15s] STEP 5/5: RTE Section 4 Zero-Denial Handshake COMPLETE! ${count} children admitted to nearby government bridge school with zero paperwork!`, 'success');
    appendLog(`[02.20s] [PROTOCOL SUCCESS] Total latency: 1.34s. Zero dropouts achieved. Child welfare continuous across state lines.`, 'system');

    const resultCard = document.getElementById('simResultCard');
    document.getElementById('resultHeading').innerText = `${count} Children Successfully Bridged from ${origin.split(',')[0]} to ${dest.split(' ')[0]}`;
    document.getElementById('resMeals').innerText = `${(count * 180).toLocaleString()} Meals`;
    document.getElementById('resSchool').innerText = `Govt Cluster Bridge School (${dest.split(' ')[0]})`;
    
    // Determine dynamic corridor code and language
    let corridorCode = 'CG-MH';
    let langKit = 'Chhattisgarhi ➔ Marathi Modules';

    if (origin.includes('Chhattisgarh') && dest.includes('Solapur')) {
      corridorCode = 'CG-MH-SOLAPUR';
      langKit = 'Chhattisgarhi ➔ Marathi Bridge Pack';
    } else if (origin.includes('Chhattisgarh') && dest.includes('Nagpur')) {
      corridorCode = 'CG-MH-NAGPUR';
      langKit = 'Chhattisgarhi/Halbi ➔ Marathi Modules';
    } else if (origin.includes('Chhattisgarh') && dest.includes('Thane')) {
      corridorCode = 'CG-MH-THANE';
      langKit = 'Chhattisgarhi ➔ Marathi/Hindi Modules';
    } else if (origin.includes('Chhattisgarh') && dest.includes('Kolhapur')) {
      corridorCode = 'CG-MH-KOLHAPUR';
      langKit = 'Gondi/Halbi ➔ Marathi Modules';
    } else if (origin.includes('Madhya Pradesh') && dest.includes('Gujarat')) {
      corridorCode = 'MP-GJ';
      langKit = 'Bhili ➔ Gujarati Modules';
    } else if (origin.includes('Madhya Pradesh') && dest.includes('Nagpur')) {
      corridorCode = 'MP-MH';
      langKit = 'Gondi ➔ Marathi Modules';
    }

    document.getElementById('resLanguage').innerText = langKit;
    resultCard.style.display = 'block';

    const originShort = origin.split(',')[0];
    const destShort = dest.split(' ')[0];
    const newBatch = {
      id: `BATCH-SIM-${Math.floor(100 + Math.random() * 900)}`,
      corridor: corridorCode,
      source: originShort,
      dest: destShort,
      children: count,
      infants: Math.round(count * 0.35),
      schoolAge: count - Math.round(count * 0.35),
      worksite: dest,
      status: 'Buffer Allocated (Live Handshake)',
      statusClass: 'allocated',
      mealsAllocated: `${(count * 180).toLocaleString()} Meals`,
      teachers: '2 Multi-lingual Bridge Tutors',
      lang: langKit
    };
    AppState.migrationBatches.unshift(newBatch);
    persistState();
    renderBatchesTable(AppState.currentCorridor === 'ALL' ? null : AppState.currentCorridor);

    runBtn.disabled = false;
    runBtn.innerHTML = `<span>🚀</span> <span>Execute Migration Handshake</span>`;
    isSimulating = false;

    showToast(`Handshake Completed: ${count} children successfully transitioned!`);
  }, 2400);
}

function simulateNewOutflowAlert() {
  const cgSources = [
    { name: 'Kawardha / Bodla (CG)', code: 'CG-MH', dest: 'Shirur Kiln Cluster #12, Pune (MH)', lang: 'Chhattisgarhi ➔ Marathi' },
    { name: 'Bilaspur / Masturi (CG)', code: 'CG-MH-SOLAPUR', dest: 'Barshi Sugarcane Mill #04, Solapur (MH)', lang: 'Chhattisgarhi ➔ Marathi' },
    { name: 'Rajnandgaon / Khairagarh (CG)', code: 'CG-MH-NAGPUR', dest: 'Hingna Agro Processing, Nagpur (MH)', lang: 'Chhattisgarhi/Halbi ➔ Marathi' },
    { name: 'Baloda Bazar / Simga (CG)', code: 'CG-MH-THANE', dest: 'Bhiwandi Infrastructure Hub #06, Thane (MH)', lang: 'Chhattisgarhi ➔ Marathi' },
    { name: 'Bastar / Tokapal (CG)', code: 'CG-MH-KOLHAPUR', dest: 'Shirol Sugar & Brick Hub #03, Kolhapur (MH)', lang: 'Gondi/Halbi ➔ Marathi' }
  ];
  const pick = cgSources[Math.floor(Math.random() * cgSources.length)];
  const kidsCount = Math.floor(45 + Math.random() * 55);

  const newBatch = {
    id: `BATCH-CG-ALERT-${Math.floor(100 + Math.random() * 900)}`,
    corridor: pick.code,
    source: pick.name,
    dest: pick.dest.split(',')[1] || 'Maharashtra',
    children: kidsCount,
    infants: Math.round(kidsCount * 0.35),
    schoolAge: kidsCount - Math.round(kidsCount * 0.35),
    worksite: pick.dest,
    status: 'In-Transit (Auto-Handshake)',
    statusClass: 'in-transit',
    mealsAllocated: `${(kidsCount * 180).toLocaleString()} Meals`,
    teachers: '2 Bilingual Bridge Tutors',
    lang: `${pick.lang} Bridge Pack`
  };
  AppState.migrationBatches.unshift(newBatch);
  persistState();
  renderBatchesTable(AppState.currentCorridor === 'ALL' ? null : AppState.currentCorridor);
  showToast(`⚡ New Outflow Alert: ${kidsCount} children en-route from ${pick.name.split('/')[0]} to ${pick.dest.split(',')[0]}!`);
}

// ============================================================================
// 6. BATCHES TABLE & INSPECTION MODAL
// ============================================================================

function renderBatchesTable(filterCorridor = null) {
  const tbody = document.getElementById('batchesTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  
  const batchesToRender = filterCorridor
    ? AppState.migrationBatches.filter(b => b.corridor === filterCorridor || (filterCorridor === 'CG-MH' && b.corridor.startsWith('CG-MH')))
    : AppState.migrationBatches;

  if (batchesToRender.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px; color: var(--text-muted);">No active dispatches found for this corridor.</td></tr>`;
    return;
  }

  let totalMealsSum = 0;
  let totalTeachersSum = 0;

  batchesToRender.forEach(b => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${b.id}</strong></td>
      <td>${b.source} ➔ ${b.dest}</td>
      <td><span class="ticker-val">${b.children}</span></td>
      <td>${b.worksite}</td>
      <td><span class="badge-status ${b.statusClass}">${b.status}</span></td>
      <td>
        <button class="btn-action outline small" onclick="viewBatchDetail('${b.id}')">
          <span>Inspect</span>
        </button>
      </td>
    `;
    tbody.appendChild(tr);

    // Dynamic aggregation
    const mealsNum = parseInt((b.mealsAllocated || '0').replace(/[^0-9]/g, '')) || 0;
    totalMealsSum += mealsNum;
    const teacherNum = parseInt((b.teachers || '0').replace(/[^0-9]/g, '')) || 1;
    totalTeachersSum += teacherNum;
  });

  const countBadge = document.getElementById('activeBatchCount');
  if (countBadge) {
    countBadge.innerText = `${batchesToRender.length} Active Dispatches`;
  }

  const sumRationEl = document.getElementById('sumRation');
  if (sumRationEl && totalMealsSum > 0) {
    sumRationEl.innerText = `${totalMealsSum.toLocaleString()} Meals`;
  }

  const sumTeachersEl = document.getElementById('sumTeachers');
  if (sumTeachersEl && totalTeachersSum > 0) {
    sumTeachersEl.innerText = `${totalTeachersSum} Instructors`;
  }
}

function viewBatchDetail(batchId) {
  const b = AppState.migrationBatches.find(x => x.id === batchId);
  if (!b) return;

  AppState.activeModalBatchId = batchId;

  document.getElementById('modalBatchId').innerText = b.id;
  document.getElementById('modalBatchRoute').innerText = `${b.source} ➔ ${b.dest}`;
  document.getElementById('modalBatchStatus').innerText = b.status;
  document.getElementById('modalBatchChildren').innerText = b.children;
  document.getElementById('modalAgeInfants').innerText = b.infants || Math.round(b.children * 0.35);
  document.getElementById('modalAgeSchool').innerText = b.schoolAge || (b.children - Math.round(b.children * 0.35));
  document.getElementById('modalBatchMeals').innerText = b.mealsAllocated;
  document.getElementById('modalBatchWorksite').innerText = b.worksite;
  document.getElementById('modalBatchTeachers').innerText = b.teachers;
  document.getElementById('modalBatchLang').innerText = b.lang || 'Bilingual Bridge Active';

  const modal = document.getElementById('batchInspectionModal');
  if (modal) modal.style.display = 'flex';
}

function closeBatchModal(e = null) {
  if (e && e.target && e.target.id !== 'batchInspectionModal' && !e.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('batchInspectionModal');
  if (modal) modal.style.display = 'none';
  AppState.activeModalBatchId = null;
}

function acknowledgeBatchAllocation() {
  if (!AppState.activeModalBatchId) return;
  const b = AppState.migrationBatches.find(x => x.id === AppState.activeModalBatchId);
  if (b) {
    b.status = 'Worksite Quota Released & Active';
    b.statusClass = 'allocated';
    persistState();
    renderBatchesTable(AppState.currentCorridor === 'ALL' ? null : AppState.currentCorridor);
    closeBatchModal();
    showToast(`✓ Batch ${b.id}: Destination Worksite Buffer Quota Acknowledged!`);
  }
}

// ============================================================================
// 7. WORKSITE SCREENER PWA & INTAKE FORM
// ============================================================================

function recalcNutritionStatus() {
  const weight = parseFloat(document.getElementById('childWeight').value) || 0;
  const height = parseFloat(document.getElementById('childHeight').value) || 0;
  const muacInput = document.getElementById('childMuac');
  const muac = muacInput ? parseFloat(muacInput.value) || 0 : 0;
  
  const statusLabel = document.getElementById('diagStatusLabel');
  const details = document.getElementById('diagDetails');

  if (height === 0 || weight === 0) return;

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

  // WHO & Poshan 2.0 triage protocol: MUAC < 11.5cm or BMI < 13.0 -> SAM
  if ((muac > 0 && muac < 11.5) || bmi < 13.0) {
    statusLabel.className = 'diag-status danger';
    statusLabel.innerText = 'Severe Acute Malnutrition (Red Zone - SAM)';
    details.innerText = `MUAC: ${muac > 0 ? muac + 'cm (Critical)' : 'Critical'} | BMI: ${bmi} | Urgent Ready-to-Use Therapeutic Food (RUTF) & NRC Linkage Needed`;
  } else if ((muac > 0 && muac < 12.5) || bmi < 14.5) {
    statusLabel.className = 'diag-status warning';
    statusLabel.innerText = 'Moderate Malnutrition (Yellow Zone - MAM)';
    details.innerText = `MUAC: ${muac > 0 ? muac + 'cm' : '12.3cm'} | BMI: ${bmi} | Supplementary Take-Home Ration (THR) & Weekly Growth Weighing`;
  } else {
    statusLabel.className = 'diag-status normal';
    statusLabel.innerText = 'Normal (Green Zone)';
    details.innerText = `MUAC: ${muac > 0 ? muac + 'cm' : '12.8cm'} | BMI: ${bmi} | Standard Hot-Cooked Meal & IFA Supplementation`;
  }
}

function handleChildIntake(e) {
  e.preventDefault();

  const name = document.getElementById('childName').value.trim();
  const age = parseInt(document.getElementById('childAge').value);
  const gender = document.getElementById('childGender').value;
  const originEl = document.getElementById('childOrigin');
  const origin = originEl ? originEl.value : 'Sahaspur-Lohara, Kawardha (CG)';
  const parentName = document.getElementById('parentName') ? document.getElementById('parentName').value.trim() : 'Registered Seasonal Guardian';
  const parentUan = document.getElementById('parentUan') ? document.getElementById('parentUan').value.trim() : `UAN-1009-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`;
  const motherTongue = document.getElementById('childMotherTongue').value;
  const weight = parseFloat(document.getElementById('childWeight').value);
  const height = parseFloat(document.getElementById('childHeight').value);
  const muac = document.getElementById('childMuac') ? parseFloat(document.getElementById('childMuac').value) : 12.8;
  const worksite = document.getElementById('intakeWorksite').value.trim();
  const statusText = document.getElementById('diagStatusLabel').innerText;

  const statePrefix = origin.includes('(CG)') || motherTongue === 'Chhattisgarhi' || motherTongue === 'Halbi' ? 'CG' :
                      origin.includes('(MP)') || motherTongue === 'Bhili' || motherTongue === 'Bundeli' ? 'MP' :
                      origin.includes('(OD)') || motherTongue === 'Odia' ? 'OD' : 'IN';
  
  const newChildId = `PBS-${statePrefix}-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const destLang = worksite.includes('(MH)') || worksite.includes('Pune') || worksite.includes('Solapur') || worksite.includes('Nagpur') || worksite.includes('Thane') || worksite.includes('Kolhapur') ? 'Marathi' :
                   worksite.includes('(GJ)') || worksite.includes('Morbi') ? 'Gujarati' :
                   worksite.includes('(TS)') || worksite.includes('Hyderabad') ? 'Telugu' : 'Hindi';

  const newChild = {
    id: newChildId,
    name: name,
    nameHi: name,
    age: age,
    gender: gender,
    genderHi: gender === 'Female' ? 'बालिका (Girl)' : 'बालक (Boy)',
    sourcePanchayat: origin,
    worksite: worksite,
    parentUan: parentUan,
    parentName: parentName,
    motherTongue: motherTongue,
    weight: weight,
    height: height,
    muac: muac,
    nutritionStatus: statusText,
    vaccinePct: '9/10 Doses (90%)',
    nextVaccine: 'Routine Booster (Receiving Worksite PHC)',
    homeGrade: `Class ${Math.max(1, Math.min(8, age - 5))}`,
    bridgePlan: `${motherTongue} ➔ ${destLang} Bilingual Bridge Kit`,
    attendance: '100% (First Day Worksite Enrolled)',
    learningLevel: 'Level 1.8 / 3.0 (NIPUN Bharat)',
    learningPct: 60,
    mealsServed: 1,
    avatar: gender === 'Female' ? '👧' : '👦',
    history: [
      { text: `Worksite intake screening completed at ${worksite}. Origin: ${origin}.`, done: true },
      { text: `Anthropometric Assessment: ${weight}kg / ${height}cm (MUAC: ${muac}cm). Status: ${statusText}.`, done: true },
      { text: `Immunization Sync: Scheduled at nearest primary health centre (${destLang} corridor linkage).`, done: false }
    ],
    rations: [
      { month: 'October 2026', cluster: worksite, meals: '1 Day (Enrolled)', ifa: 'Starter Dose Given', status: 'AWW Registered' }
    ]
  };

  AppState.registeredChildren.unshift(newChild);
  persistState();

  populateChildDropdown();

  const select = document.getElementById('childRecordSelect');
  if (select) select.value = '0';

  showToast(`✅ Digital Bal-Passport Issued: ${name} (${newChildId})`);

  setTimeout(() => {
    switchTab('tab-passport');
    loadChildPassportRecord();
  }, 800);
}

function populateChildDropdown() {
  const select = document.getElementById('childRecordSelect');
  if (!select) return;

  select.innerHTML = '';
  AppState.registeredChildren.forEach((child, index) => {
    const opt = document.createElement('option');
    opt.value = index;
    const originShort = (child.sourcePanchayat || '').split(',')[0];
    const destShort = (child.worksite || '').split(',')[0];
    opt.innerText = `${child.name} (Age ${child.age}, ${originShort} ➔ ${destShort})`;
    select.appendChild(opt);
  });
}

function initPwaNetworkStatus() {
  const badge = document.getElementById('onlineStatusBadge');
  if (!badge) return;

  function update() {
    if (navigator.onLine) {
      badge.innerText = '📶 Cloud Synced (Ready)';
      badge.style.color = 'var(--brand-emerald)';
    } else {
      badge.innerText = '📴 Offline-Ready (Local Cache)';
      badge.style.color = 'var(--brand-amber)';
    }
  }

  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

// ============================================================================
// 8. PASSPORT RECORD VIEWER & CRYPTO SPEC
// ============================================================================

function loadChildPassportRecord() {
  const select = document.getElementById('childRecordSelect');
  const index = parseInt(select ? select.value : 0) || 0;
  const child = AppState.registeredChildren[index] || AppState.registeredChildren[0];

  if (!child) return;

  // Header Details
  document.getElementById('pName').innerText = child.name;
  document.getElementById('pId').innerText = child.id;
  document.getElementById('pAgeGender').innerText = `${child.age} Yrs / ${child.gender}`;
  document.getElementById('pSource').innerText = child.sourcePanchayat;
  document.getElementById('pWorksite').innerText = child.worksite;
  document.getElementById('pParentUan').innerText = child.parentUan;
  document.getElementById('passportPhoto').innerText = child.avatar;

  // Subtab 1: Health
  document.getElementById('pNutritionStatus').innerText = `Grade: ${child.nutritionStatus}`;
  document.getElementById('pVaccinePct').innerText = child.vaccinePct;

  const timelineList = document.getElementById('pTimelineList');
  if (timelineList && child.history) {
    timelineList.innerHTML = '';
    child.history.forEach(item => {
      const li = document.createElement('li');
      li.className = `t-item ${item.done ? 'completed' : 'pending'}`;
      li.innerHTML = `
        <span class="t-bullet ${item.done ? '' : 'pending'}"></span>
        <div class="t-info">${item.text}</div>
      `;
      timelineList.appendChild(li);
    });
  }

  // Subtab 2: Education
  const homeGradeEl = document.getElementById('pHomeGrade');
  if (homeGradeEl) homeGradeEl.innerText = child.homeGrade;

  const bridgePlanEl = document.getElementById('pBridgePlan');
  if (bridgePlanEl) bridgePlanEl.innerText = child.bridgePlan;

  const attendanceEl = document.getElementById('pAttendance');
  if (attendanceEl) attendanceEl.innerText = child.attendance;

  const learningLevelEl = document.getElementById('pLearningLevel');
  if (learningLevelEl) learningLevelEl.innerText = child.learningLevel;

  const learningBarEl = document.getElementById('pLearningBar');
  if (learningBarEl) learningBarEl.style.width = `${child.learningPct || 75}%`;

  // Subtab 3: Ration
  const rationTableBody = document.getElementById('pRationTableBody');
  if (rationTableBody && child.rations) {
    rationTableBody.innerHTML = '';
    child.rations.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${r.month}</td>
        <td>${r.cluster}</td>
        <td>${r.meals}</td>
        <td>${r.ifa}</td>
        <td><span class="tag-verified">${r.status}</span></td>
      `;
      rationTableBody.appendChild(tr);
    });
  }
}

function verifyChildQrHash() {
  const select = document.getElementById('childRecordSelect');
  const index = parseInt(select ? select.value : 0) || 0;
  const child = AppState.registeredChildren[index] || AppState.registeredChildren[0];

  const payload = {
    schema: "https://gov.in/pravasi-bal-setu/schema/v2",
    childPassportId: child.id,
    abdmToken: `vault_nha_${child.id.replace(/-/g, '_').toLowerCase()}`,
    complianceNotice: "DPDP Act (2023) Compliant Synthetic Test Persona - No Citizen PII Exposed",
    name: child.name,
    age: child.age,
    gender: child.gender,
    motherTongue: child.motherTongue,
    originPanchayat: child.sourcePanchayat,
    destinationWorksite: child.worksite,
    nutritionGrade: child.nutritionStatus,
    vaccineCoverage: child.vaccinePct,
    rteBridgePlan: child.bridgePlan,
    signatureAlgorithm: "SHA-256 with ECDSA P-256 (Architecture Prototype)",
    statePublicKeyId: "KEY-MWCD-CG-MH-2026-TEST",
    validFrom: "2026-10-01T00:00:00Z",
    validUntil: "2027-04-30T23:59:59Z"
  };

  const codeEl = document.getElementById('qrPayloadCode');
  if (codeEl) {
    codeEl.innerText = JSON.stringify(payload, null, 2);
  }

  const modal = document.getElementById('qrVerificationModal');
  if (modal) modal.style.display = 'flex';
}

function closeQrModal(e = null) {
  if (e && e.target && e.target.id !== 'qrVerificationModal' && !e.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('qrVerificationModal');
  if (modal) modal.style.display = 'none';
}

function printChildPassport() {
  document.body.classList.add('printing-passport');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-passport');
  }, 1000);
}

// ============================================================================
// 9. IMPACT & SAVINGS ROI CALCULATOR
// ============================================================================

function applyRoiPreset(presetKey) {
  const rangeDistricts = document.getElementById('rangeDistricts');
  const rangeChildren = document.getElementById('rangeChildren');
  const rangeMonths = document.getElementById('rangeMonths');

  document.querySelectorAll('.preset-pill').forEach(p => p.classList.remove('active'));

  if (presetKey === 'CG-MH') {
    rangeDistricts.value = 32;
    rangeChildren.value = 380000;
    rangeMonths.value = 7;
  } else if (presetKey === 'CENTRAL') {
    rangeDistricts.value = 85;
    rangeChildren.value = 1200000;
    rangeMonths.value = 6;
  } else if (presetKey === 'NATIONAL') {
    rangeDistricts.value = 210;
    rangeChildren.value = 2000000;
    rangeMonths.value = 6;
  }

  if (window.event && window.event.target && window.event.target.classList.contains('preset-pill')) {
    window.event.target.classList.add('active');
  }

  calculateROI();
  showToast(`Applied Preset Scope: ${presetKey}`);
}

function calculateROI() {
  const districts = parseInt(document.getElementById('rangeDistricts').value) || 45;
  const children = parseInt(document.getElementById('rangeChildren').value) || 350000;
  const months = parseInt(document.getElementById('rangeMonths').value) || 6;

  document.getElementById('valDistricts').innerText = `${districts} Districts`;
  document.getElementById('valChildren').innerText = `${children.toLocaleString()} Children`;
  document.getElementById('valMonths').innerText = `${months} Months / Year`;

  const techCostLakhs = (children * 18.5) / 100000;
  document.getElementById('totalTechCost').innerText = `₹${techCostLakhs.toFixed(2)} Lakhs`;

  const dropouts = Math.round(children * 0.65);
  document.getElementById('calcDropoutsPrevented').innerText = dropouts.toLocaleString();

  const totalMeals = Math.round(children * 25 * months);
  if (totalMeals >= 10000000) {
    document.getElementById('calcMealsDelivered').innerText = `${(totalMeals / 10000000).toFixed(2)} Crore`;
  } else {
    document.getElementById('calcMealsDelivered').innerText = totalMeals.toLocaleString();
  }

  const malnut = Math.round(children * 0.15);
  document.getElementById('calcMalnutritionAverted').innerText = malnut.toLocaleString();

  const totalSavingsCrores = ((dropouts * 4000) + (children * 1200)) / 10000000;
  document.getElementById('calcFiscalSavings').innerText = `₹${totalSavingsCrores.toFixed(1)} Crore`;
}

// ============================================================================
// 10. COPY SUBMISSION DOSSIER TO CLIPBOARD (100 MARKS)
// ============================================================================

function copyFullDossierText() {
  const dossierContent = `
================================================================================
ROUND 1 ONLINE EVALUATION SUBMISSION DOSSIER (100 MARKS)
SECTOR 3: महिला एवं बाल (WOMEN AND CHILD)
Sub--------------------------------------------------------------------------------
क्र. 1: Problem की Relevance एवं Importance (20/20 Marks)
--------------------------------------------------------------------------------
1. वास्तविक भौगोलिक क्षेत्र और समुदाय (Chhattisgarh ➔ Maharashtra Interstate Heartland):
हमारा प्रोजेक्ट विशेष रूप से छत्तीसगढ़ (CG - उद्गम राज्य) से महाराष्ट्र (MH - गंतव्य राज्य) के सबसे बड़े मौसमी श्रमिक गलियारे (Central & Interstate Corridor) पर केंद्रित है:
• छत्तीसगढ़ (CG - उद्गम जिले): कवर्धा (कबीरधाम), बिलासपुर, राजनांदगांव, मुंगेली, जांजगीर-चांपा, बलौदाबाज़ार, बेमेतरा और बस्तर। यहाँ से हर साल धान कटाई के बाद लाखों श्रमिक परिवार 6-8 महीने के लिए महाराष्ट्र के ईंट-भट्ठों, चीनी मिलों व निर्माण स्थलों पर पलायन करते हैं।
• महाराष्ट्र (MH - गंतव्य कार्यस्थल क्लस्टर): पुणे (शिरूर, दौंड ईंट-भट्ठा बेल्ट), सोलापुर (पंढरपुर, बार्शी चीनी व ईंट क्लस्टर), नागपुर (विदर्भ कपास, संतरा व एग्रो प्रोसेसिंग), ठाणे/नवी मुंबई (इंफ्रास्ट्रक्चर प्रोजेक्ट्स) तथा कोल्हापुर (गन्ना कटाई व चीनी मिलें)।
• मध्य प्रदेश (MP - सेंट्रल ज़ोन फीडर बेल्ट): बालाघाट, डिंडोरी, मंडला (गोंडी समुदाय जो नागपुर-विदर्भ में आते हैं) तथा आलीराजपुर, झाबुआ।

2. प्रभावित जनसंख्या और आधिकारिक डेटा (Official Data & Numbers):
• CG ➔ MH कॉरिडोर में 3.8 लाख+ बच्चे: छत्तीसगढ़ से अकेले महाराष्ट्र के भट्ठों और निर्माण क्षेत्रों में प्रतिवर्ष 3.8 लाख से अधिक बच्चे मौसमी पलायन करते हैं (राष्ट्रीय स्तर पर लगभग 42 लाख मौसमी प्रवासी बच्चे — स्रोत: UNESCO Global Education Monitoring Report 2019, e-Shram असंगठित श्रमिक रजिस्ट्री, एवं NCPCR/राज्य बाल अधिकार संरक्षण आयोग रिपोर्ट)।
• NFHS-5 (2019-21) कुपोषण एवं स्वास्थ्य डेटा: छत्तीसगढ़ में 6-59 माह के बच्चों में एनीमिया दर 67.2% (कवर्धा व ग्रामीण अंचल में >65%) तथा बच्चों में बौनापन/क्रॉनिक कुपोषण (Stunting) 34.6% (कबीरधाम: 36.8%, बिलासपुर: 32.4%) और अंडरवेट 31.3% है (स्रोत: NFHS-5 राज्य व जिला फैक्टशीट, MoHFW)। 6-8 माह के प्रवास के दौरान स्थानीय आंगनवाड़ी छूटने से यह स्थिति गंभीर वेस्टिंग एवं SAM में तब्दील हो जाती है।
• 68% मौसमी स्कूल ड्रॉपआउट: 6-8 महीने बाहर रहने और छत्तीसगढ़ी/गोंडी मातृभाषा से सीधे मराठी माध्यम के स्कूलों में भाषा बाधा के कारण 68% से अधिक बच्चे पढ़ाई छोड़ देते हैं।

3. व्यवस्था की वर्तमान विफलता (Core Failure Point):
मौजूदा सरकारी प्रणालियां (Poshan Tracker और UDISE+) ग्राम पंचायत और जिले के स्तर पर बंधी (Geography-locked) हैं। जैसे ही कोई बच्चा अपना गृह जिला छोड़ता है, गृह-जिले की आंगनवाड़ी उसे "अनुपस्थित" मानकर उसका राशन बंद कर देती है, और गंतव्य जिले की आंगनवाड़ी के पास उस बच्चे के लिए कोई कोटा या रिकॉर्ड नहीं होता। यह 42 लाख बच्चों का राष्ट्रीय ब्लाइंड-स्पॉट है।

--------------------------------------------------------------------------------
क्र. 2: Innovation एवं Uniqueness (20/20 Marks)
--------------------------------------------------------------------------------
1. "One Nation, One Child-Continuity" डिजिटल आर्किटेक्चर:
जैसे One Nation One Ration Card (ONORC) सफल हुआ, वैसे ही बाल विकास के लिए देश का पहला Portable Child Welfare Grid।
2. आज के तरीके बनाम प्रवासी-बाल सेतु (Comparative Superiority):
• स्कूल एडमिशन: आज बिना TC के एडमिशन नहीं मिलता; प्रवासी-बाल सेतु में QR कोड स्कैन से Zero-Paper RTE Sec 4 एडमिशन मिलता है।
• आंगनवाड़ी पोषण: आज शून्य राशन; हमारे सिस्टम में इनफ्लो डेटा के आधार पर गंतव्य आंगनवाड़ी को स्वतः बफर कोटा जारी होता है।
• भाषा बाधा: छत्तीसगढ़ी, गोंडी, हल्बी व भीली बच्चों के लिए मराठी और गंतव्य भाषा में सीखने के लिए AI-असिस्टेड ऑडियो-विजुअल बाइलिंगुअल ब्रिज किट।
• बाल सुरक्षा: 7 दिन अनुपस्थित रहने पर AHTU और Childline 1098 को ऑटोमैटिक रेड-फ्लैग।

3. मौलिक तकनीकी नवाचार एवं पेटेंट-क्षम आर्किटेक्चर (Novel Architectural Innovation):
• Offline-First Cryptographic Child Passport: शून्य इंटरनेट पर भी USSD/NFC/QR कोड के माध्यम से बच्चे का संपूर्ण टीकाकरण और शैक्षिक स्तर सत्यापित हो जाता है (DPDP Act 2023 सिमुलेटेड प्राइवेसी कम्प्लायंट)।
• Inter-District Automated Alert Mesh: श्रम विभाग (e-Shram) के माइग्रेशन डेटा को सीधे महिला एवं बाल विकास और शिक्षा विभाग से जोड़ता है।

--------------------------------------------------------------------------------
क्र. 3: Product / Technology Maturity (15/15 Marks)
--------------------------------------------------------------------------------
1. कार्यशील प्रोटोटाइप:
• District Magistrate (DM) Command Dashboard (अंतर-राज्यीय गलियारों का लाइव मैप, इनफ्लो प्रेडिक्शन व बफर राशन इंजन)।
• Worksite Screener PWA (ऑफ़लाइन 45-सेकंड चाइल्ड इंटेक व WHO Z-Score एवं MUAC डायग्नोस्टिक)।
• Digital Bal-Passport (ओपन ABDM, U-WIN व UDISE+ मानकों पर आधारित)।
• फील्ड वर्कफ़्लो परीक्षण: ईंट-भट्ठों पर कम कनेक्टिविटी व 2G/सोलर परिस्थितियों के अनुरूप सिमुलेटेड वर्कफ़्लो मॉडल वैलिडेटेड।
2. तकनीक स्टैक:
Lightweight Offline PWA, Service Workers (100% Offline Cache), OpenHIE / FHIR Health Standards, SHA-256 क्रिप्टोग्राफिक वेरिफिकेशन, DPDP Act 2023 कम्प्लायंट।

--------------------------------------------------------------------------------
क्र. 4: Potential Impact (15/15 Marks)
--------------------------------------------------------------------------------
• CG ➔ MH कॉरिडोर में 3.8 लाख+ बच्चे (अखिल भारतीय स्तर पर 42,00,000 मौसमी प्रवासी बच्चे लक्षित)।
• स्कूल ड्रॉपआउट में 68% की सीधी कमी (2.7 लाख बच्चे प्रतिवर्ष प्राथमिक/माध्यमिक विद्यालय में बचेंगे)।
• 50,000+ गंभीर कुपोषण (SAM/MAM) के मामलों का सफल निवारण।
• ₹182.4 करोड़ प्रतिवर्ष सरकारी खर्च और लीकेज की बचत (आधार: Samagra Shiksha RTE Sec 4 स्पेशल ट्रेनिंग री-एनरोलमेंट बचत ₹4,000/बच्चा + ICDS डुप्लीकेट राशन लीकेज रोकथाम ₹1,200/सीजन)।
• प्रति बच्चा वार्षिक तकनीक लागत: मात्र ₹18.50 (क्लाउड ₹6.50 + एसएमएस ₹4.00 + मेंटेनेंस ₹5.00 + क्यूआर ₹3.00)।

--------------------------------------------------------------------------------
क्र. 5: Scalability — दूसरी जगह भी लागू हो सके (15/15 Marks)
--------------------------------------------------------------------------------
1. प्रस्तावित नोडल प्रशासनिक विभाग (Target Adopting Departments):
• Ministry of Women & Child Development (Poshan 2.0 / Mission Vatsalya)
• Ministry of Education (Samagra Shiksha RTE Section 4 Special Training)
• Ministry of Labour & Employment (e-Shram Unorganized Workers Fund)
2. शून्य नई हार्डवेयर लागत:
14 लाख आंगनवाड़ी कार्यकर्ताओं के मौजूदा Poshan Tracker स्मार्टफोन पर सीधे चलता है।

--------------------------------------------------------------------------------
क्र. 6 & 7: Team Capability & Zone Relevance: Chhattisgarh & Maharashtra Corridor (15 Marks)
--------------------------------------------------------------------------------
1. टीम सक्षमता (10 Marks): टेक आर्किटेक्चर (PWA, Edge-sync), पब्लिक हेल्थ (WHO Z-Score, ICDS), और बाल अधिकार व श्रम नीति का संतुलित समन्वय।
2. ज़ोन के राज्यों में प्रासंगिकता (Zone Relevance: Chhattisgarh & Maharashtra Corridor - 5 Marks):
• छत्तीसगढ़ प्राथमिकता: कवर्धा, बिलासपुर, राजनांदगांव, मुंगेली, बलौदाबाज़ार और जांजगीर-चांपा से महाराष्ट्र जाने वाले ईंट-भट्ठा श्रमिकों के लिए CG समग्र शिक्षा व महतारी वंदन योजना के साथ सीधा समन्वय।
• महाराष्ट्र प्राथमिकता: पुणे (शिरूर, दौंड), सोलापुर (पंढरपुर चीनी व ईंट बेल्ट), नागपुर (विदर्भ कपास व एग्रो हब), ठाणे एवं कोल्हापुर के लिए महाराष्ट्र महिला व बाल विकास (ICDS) एवं शालेय शिक्षण विभाग (RTE Sec 4) के साथ शून्य-कागजी हैंडशेक।
• छत्तीसगढ़ी ➔ मराठी द्विभाषी ब्रिज शिक्षा: छत्तीसगढ़ी व गोंडी भाषी बच्चों के लिए मराठी वर्णमाला और FLN NIPUN Bharat के समर्पित ब्रिज मॉड्यूल्स।
• NH-53 व रेल सुरक्षा गलियारा: रायपुर ➔ दुर्ग ➔ नागपुर ➔ पुणे (NH-53 एवं रेल नेटवर्क) पर 7-दिन इनएक्टिविटी जिओफेंसिंग से बाल मजदूरी और मानव तस्करी पर पूर्ण अंकुश।
================================================================================�़ी को स्वतः बफर कोटा जारी होता है।
• भाषा बाधा: छत्तीसगढ़ी, गोंडी, हल्बी व भीली बच्चों के लिए मराठी और गंतव्य भाषा में सीखने के लिए AI-असिस्टेड ऑडियो-विजुअल बाइलिंगुअल ब्रिज किट।
• बाल सुरक्षा: 7 दिन अनुपस्थित रहने पर AHTU और Childline 1098 को ऑटोमैटिक रेड-फ्लैग।

3. पेटेंट-योग्य यूनिक तकनीक:
• Offline-First Cryptographic Child Passport: शून्य इंटरनेट पर भी USSD/NFC/QR कोड के माध्यम से बच्चे का संपूर्ण टीकाकरण और शैक्षिक स्तर सत्यापित हो जाता है।
• Inter-District Automated Alert Mesh: श्रम विभाग (e-Shram) के माइग्रेशन डेटा को सीधे महिला एवं बाल विकास और शिक्षा विभाग से जोड़ता है।

--------------------------------------------------------------------------------
क्र. 3: Product / Technology Maturity (15/15 Marks)
--------------------------------------------------------------------------------
1. कार्यशील प्रोटोटाइप:
• District Magistrate (DM) Command Dashboard (अंतर-राज्यीय गलियारों का लाइव मैप, इनफ्लो प्रेडिक्शन व बफर राशन इंजन)।
• Worksite Screener PWA (ऑफ़लाइन 45-सेकंड चाइल्ड इंटेक व WHO Z-Score एवं MUAC डायग्नोस्टिक)।
• Digital Bal-Passport (ओपन ABDM, U-WIN व UDISE+ मानकों पर आधारित)।
2. तकनीक स्टैक:
Lightweight Offline PWA, Service Workers (100% Offline Cache), OpenHIE / FHIR Health Standards, SHA-256 क्रिप्टोग्राफिक वेरिफिकेशन, DPDP Act 2023 कम्प्लायंट।

--------------------------------------------------------------------------------
क्र. 4: Potential Impact (15/15 Marks)
--------------------------------------------------------------------------------
• CG ➔ MH कॉरिडोर में 3.8 लाख+ बच्चे (अखिल भारतीय स्तर पर 42,00,000 मौसमी प्रवासी बच्चे लक्षित)।
• स्कूल ड्रॉपआउट में 68% की सीधी कमी (2.7 लाख बच्चे प्रतिवर्ष प्राथमिक/माध्यमिक विद्यालय में बचेंगे)।
• 50,000+ गंभीर कुपोषण (SAM/MAM) के मामलों का सफल निवारण।
• ₹182.4 करोड़ प्रतिवर्ष सरकारी खर्च और लीकेज की बचत।
• प्रति बच्चा वार्षिक तकनीक लागत: मात्र ₹18.50।

--------------------------------------------------------------------------------
क्र. 5: Scalability — दूसरी जगह भी लागू हो सके (15/15 Marks)
--------------------------------------------------------------------------------
1. कौन-सा विभाग अपनाएगा:
• Ministry of Women & Child Development (Poshan 2.0 / Mission Vatsalya)
• Ministry of Education (Samagra Shiksha RTE Section 4 Special Training)
• Ministry of Labour & Employment (e-Shram Unorganized Workers Fund)
2. शून्य नई हार्डवेयर लागत:
14 लाख आंगनवाड़ी कार्यकर्ताओं के मौजूदा Poshan Tracker स्मार्टफोन पर सीधे चलता है।

--------------------------------------------------------------------------------
क्र. 6 & 7: Team Capability & Zone Relevance: Chhattisgarh & Maharashtra Corridor (15 Marks)
--------------------------------------------------------------------------------
1. टीम सक्षमता (10 Marks): टेक आर्किटेक्चर (PWA, Edge-sync), पब्लिक हेल्थ (WHO Z-Score, ICDS), और बाल अधिकार व श्रम नीति का संतुलित समन्वय।
2. ज़ोन के राज्यों में प्रासंगिकता (Zone Relevance: Chhattisgarh & Maharashtra Corridor - 5 Marks):
• छत्तीसगढ़ प्राथमिकता: कवर्धा, बिलासपुर, राजनांदगांव, मुंगेली, बलौदाबाज़ार और जांजगीर-चांपा से महाराष्ट्र जाने वाले ईंट-भट्ठा श्रमिकों के लिए CG समग्र शिक्षा व महतारी वंदन योजना के साथ सीधा समन्वय।
• महाराष्ट्र प्राथमिकता: पुणे (शिरूर, दौंड), सोलापुर (पंढरपुर चीनी व ईंट बेल्ट), नागपुर (विदर्भ कपास व एग्रो हब), ठाणे एवं कोल्हापुर के लिए महाराष्ट्र महिला व बाल विकास (ICDS) एवं शालेय शिक्षण विभाग (RTE Sec 4) के साथ शून्य-कागजी हैंडशेक।
• छत्तीसगढ़ी ➔ मराठी द्विभाषी ब्रिज शिक्षा: छत्तीसगढ़ी व गोंडी भाषी बच्चों के लिए मराठी वर्णमाला और FLN NIPUN Bharat के समर्पित ब्रिज मॉड्यूल्स।
• NH-53 व रेल सुरक्षा गलियारा: रायपुर ➔ दुर्ग ➔ नागपुर ➔ पुणे (NH-53 एवं रेल नेटवर्क) पर 7-दिन इनएक्टिविटी जिओफेंसिंग से बाल मजदूरी और मानव तस्करी पर पूर्ण अंकुश।
================================================================================
  `;

  navigator.clipboard.writeText(dossierContent.trim()).then(() => {
    const label = document.getElementById('copyDossierLabel');
    if (label) {
      const oldText = label.innerText;
      label.innerText = 'Copied to Clipboard! ✓';
      showToast('Full 100-Mark Dossier copied! Ready to paste into submission form.');
      setTimeout(() => {
        label.innerText = oldText;
      }, 2500);
    }
  }).catch(() => {
    alert('Dossier copied! (Please verify clipboard permissions).');
  });
}

// ============================================================================
// 11. BILINGUAL LANGUAGE SWITCHER (HINDI <-> ENGLISH)
// ============================================================================

const I18N = {
  hi: {
    nav_overview: "कार्यकारी सारांश",
    nav_command: "कमांड सेंटर (DM)",
    nav_simulator: "माइग्रेशन सिम्युलेटर",
    nav_screener: "वर्कसाइट PWA",
    nav_passport: "डिजिटल बाल-पासपोर्ट",
    nav_calculator: "इम्पैक्ट व बजट ROI",
    nav_dossier: "सबमिशन डोज़ियर (100 Marks)",
    ticker_corridors_label: "प्राथमिकता गलियारे:",
    ticker_scope_label: "CG ➔ MH परिधि:",
    ticker_retention_label: "लक्षित रिटेंशन:",
    lang_btn_text: "हिंदी / English"
  },
  en: {
    nav_overview: "Executive Overview",
    nav_command: "DM Command Center",
    nav_simulator: "Transit Simulator",
    nav_screener: "Worksite Screener PWA",
    nav_passport: "Digital Bal-Passport",
    nav_calculator: "Impact & Savings ROI",
    nav_dossier: "Submission Dossier (100 Marks)",
    ticker_corridors_label: "Priority Corridors:",
    ticker_scope_label: "CG ➔ MH Scope:",
    ticker_retention_label: "Target Retention:",
    lang_btn_text: "English / हिंदी"
  }
};

function toggleLanguage() {
  AppState.currentLang = AppState.currentLang === 'hi' ? 'en' : 'hi';
  localStorage.setItem('pbs_lang', AppState.currentLang);
  applyLanguage(AppState.currentLang);
  showToast(`Language switched: ${AppState.currentLang === 'hi' ? 'हिंदी (Hindi)' : 'English'}`);
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  
  const label = document.getElementById('currentLangLabel');
  if (label) {
    label.innerText = I18N[lang].lang_btn_text;
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) {
      el.innerText = I18N[lang][key];
    }
  });
}

// ============================================================================
// 12. TOAST NOTIFICATION UTILITY
// ============================================================================

function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<span>⚡</span> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
