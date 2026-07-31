// Centralized content for the portfolio.
// Edit this file to update any text shown on the site — no component edits required.

export const profile = {
  name: 'Sajib Sarker',
  title: 'Software Engineering Student',
  subtitle: 'Aspiring Software Engineer · AI & Data Science Enthusiast',
  location: 'Dhaka, Bangladesh',
  email: 'sajibeducation@gmail.com',
  phone: '+8801676810635',
  linkedin: 'https://www.linkedin.com/in/sajib1099/',
  github: 'https://github.com/Sajib1099',
  resumeUrl: '/resume.pdf',
  avatar: '/profile-photo.jpg',
  tagline: 'Building scalable software, one experiment at a time.',
  availableForInternship: true,
  roles: [
    'Software Engineering Student',
    'Aspiring Software Engineer',
    'AI & ML Enthusiast',
    'Data Science Enthusiast',
  ],
  bio: `I'm a Software Engineering student at Daffodil International University with a
  practical, build-first approach to learning. Over the last three years I've shipped
  IoT safety systems, inventory platforms, a live-bidding marketplace, and a machine
  learning application that predicts decision regret — each one a chance to turn a
  real problem into working software. I care about clean architecture as much as
  clever models, and I'm currently looking for a Software Engineering internship
  where I can learn from experienced engineers, ship real features, and keep
  compounding what I know about AI, data and full-stack development.`,
  aboutParagraphs: [
    `I'm a Software Engineering undergraduate who splits my attention between two
    things I genuinely enjoy: building reliable full-stack products and exploring
    what machine learning can do when it's pointed at a real dataset. That mix shows
    up in my project list — an embedded safety system, a pharmacy inventory platform,
    a live auction marketplace, and an ML model that predicts regret from decisions.`,
    `My day-to-day toolkit spans Python, JavaScript, and PHP on the code side, and
    React, Flask and MySQL on the systems side. I'm equally comfortable training a
    Random Forest classifier and explaining its predictions with SHAP and LIME, or
    wiring up a REST API and shipping the frontend that consumes it.`,
    `I learn by finishing things. Every project below started as a rough idea and
    ended as software someone could actually use — that habit of continuous learning,
    paired with teamwork and a problem-first mindset, is what I bring to a team.`,
  ],
  highlights: [
    { label: 'Projects Shipped', value: '4' },
    { label: 'Core Languages', value: '6' },
    { label: 'Focus Areas', value: 'AI · Full-Stack' },
  ],
}

export const currentlyWorkingOn = [
  {
    id: 'cwo-ai',
    title: 'AI & Machine Learning',
    description:
      'Deepening my understanding of model evaluation and explainability, building on the SHAP/LIME work from Decision Insight AI.',
  },
  {
    id: 'cwo-swe',
    title: 'Software Engineering',
    description:
      'Strengthening system design and clean-architecture fundamentals so my full-stack projects scale beyond a single semester.',
  },
  {
    id: 'cwo-projects',
    title: 'Personal Projects',
    description:
      'Prototyping new ideas at the intersection of data and full-stack development — shipped, not just sketched.',
  },
  {
    id: 'cwo-learning',
    title: 'Continuous Learning',
    description:
      'Working through coursework and self-directed study in algorithms, cloud fundamentals and modern frontend tooling.',
  },
]

export const github = {
  username: 'Sajib1099',
  statsImage: 'https://github-readme-stats.vercel.app/api?username=Sajib1099&show_icons=true&hide_title=true&count_private=true&theme=transparent',
  streakImage: 'https://github-readme-streak-stats.herokuapp.com/?user=Sajib1099&theme=transparent',
  langImage: 'https://github-readme-stats.vercel.app/api/top-langs/?username=Sajib1099&layout=compact&hide_title=true&theme=transparent',
}

export const education = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Daffodil International University',
    period: '2023 — Present',
    description:
      'Coursework spanning software architecture, algorithms, machine learning, database systems and the full SDLC, applied through project-based coursework each semester.',
  },
  {
    id: 'edu-2',
    degree: 'Higher Secondary Certificate',
    institution: 'Sristy College of Tangail',
    period: '2020',
    description:
      'Science track focused on Physics, Chemistry and Higher Mathematics — the foundation for an engineering-first mindset.',
  },
  {
    id: 'edu-3',
    degree: 'Secondary School Certificate',
    institution: 'Pathrail M.L. High School',
    period: '2018',
    description: 'Completed secondary education with a concentration in science subjects.',
  },
]

export const skillGroups = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'PHP'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Flask', 'PHP', 'REST API'],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['MySQL'],
  },
  {
    id: 'ai-ds',
    title: 'AI & Data Science',
    skills: [
      'Machine Learning',
      'Data Analysis',
      'Data Preprocessing',
      'Feature Engineering',
      'Model Evaluation',
      'Random Forest',
      'Classification',
      'Explainable AI (SHAP & LIME)',
    ],
  },
  {
    id: 'swe',
    title: 'Software Engineering',
    skills: ['OOP', 'SDLC', 'Git', 'GitHub'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['VS Code', 'Arduino IDE', 'Google Colab', 'Jupyter Notebook'],
  },
]

export const softSkills = [
  'Leadership',
  'Communication',
  'Critical Thinking',
  'Problem Solving',
  'Teamwork',
  'Adaptability',
  'Time Management',
]

export const projects = [
  {
    id: 'decision-insight-ai',
    title: 'Decision Insight AI',
    year: '2026',
    tag: 'Machine Learning',
    team: 'Independent Project',
    summary:
      'A machine learning web app that predicts the probability of regretting a decision before you make it.',
    image: 'gradient-ai',
    problem:
      'People routinely make decisions — financial, career, personal — without a structured way to weigh how likely they are to regret the outcome.',
    solution:
      'Built a Random Forest classifier trained on decision-outcome data, served through a Flask API, with a React-driven interface that walks the user through the inputs and visualizes the prediction in real time.',
    features: [
      'Real-time regret-probability prediction',
      'Model explainability via SHAP and LIME',
      'REST API separating model logic from the UI',
      'Dynamic result visualization',
    ],
    technologies: ['Python', 'Flask', 'Random Forest', 'Machine Learning', 'JavaScript'],
    challenges:
      'Balancing model accuracy with interpretability — a black-box prediction is not useful for a decision-support tool, so integrating SHAP/LIME to explain each prediction was the hardest and most valuable part of the build.',
    outcome:
      'A working end-to-end ML product: data pipeline, trained model, API and interface, that turns an abstract prediction into an explainable, actionable result.',
    github: 'https://github.com/Sajib1099',
    demo: '',
  },
  {
    id: 'art-auction-system',
    title: 'Art Auction System',
    year: '2025',
    tag: 'Full-Stack Web',
    team: 'Team Project (3 Members)',
    summary:
      'A real-time online auction platform where buyers and sellers can list, bid on and purchase artwork securely.',
    image: 'gradient-auction',
    problem:
      'Independent artists and collectors need a trustworthy, real-time way to run and participate in auctions without relying on a physical event or a generic marketplace.',
    solution:
      'Designed and built a full-stack auction platform with live bidding, artwork management and secure payment handling, backed by a relational schema for listings, bids and transactions.',
    features: [
      'Live, real-time bidding',
      'Secure payment and transaction flow',
      'Artwork listing and management for sellers',
      'Buyer-facing browse and bid history',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    challenges:
      'Keeping bid state consistent in real time across concurrent users while preventing race conditions on the final bid before an auction closes.',
    outcome:
      'A functioning marketplace end-to-end, from listing an artwork to closing a bid and completing a transaction.',
    github: 'https://github.com/Sajib1099',
    demo: '',
  },
  {
    id: 'drug-management-system',
    title: 'Drug Management System',
    year: '2024',
    tag: 'Full-Stack Web',
    team: 'Team Project (2 Members)',
    summary:
      'A web and mobile-friendly platform for pharmacy inventory, expiry tracking and secure transactions.',
    image: 'gradient-drug',
    problem:
      'Pharmacies often track inventory and expiry dates manually, which leads to stock-outs, expired medicine reaching customers, and slow transactions.',
    solution:
      'Built a medicine inventory system with stock tracking, automated expiry alerts and a secure transaction flow for both pharmacists and customers.',
    features: [
      'Inventory tracking with stock levels',
      'Automated expiry alerts',
      'Secure transaction handling',
      'Separate access for pharmacists and customers',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    challenges:
      'Modeling expiry logic and stock movement in a relational schema that stays accurate as inventory is added, sold and restocked.',
    outcome:
      'A reliable inventory tool that reduces manual tracking errors and surfaces expiring stock before it becomes a problem.',
    github: 'https://github.com/Sajib1099',
    demo: '',
  },
  {
    id: 'smart-kitchen-appliances',
    title: 'Smart Kitchen Appliances',
    year: '2023',
    tag: 'IoT & Embedded',
    team: 'Team Project (5 Members)',
    summary:
      'An IoT-based kitchen safety system that detects gas, flame and temperature hazards and responds automatically.',
    image: 'gradient-iot',
    problem:
      'Kitchen fires and gas leaks are often detected too late for manual intervention, especially when no one is in the room.',
    solution:
      'Integrated flame, gas and temperature sensors with an Arduino controller to detect hazardous conditions and automatically trigger a safety response — alarms, extinguishing control and lighting.',
    features: [
      'Multi-sensor hazard detection (flame, gas, temperature)',
      'Automatic safety response on threshold breach',
      'Remote monitoring support',
      'Low-latency embedded control loop',
    ],
    technologies: ['Arduino', 'IoT', 'Sensors', 'Embedded Systems'],
    challenges:
      'Tuning sensor thresholds to avoid false positives while still responding fast enough to a genuine hazard.',
    outcome:
      'A working prototype that detects hazardous kitchen conditions and reacts automatically, without waiting on a human to notice.',
    github: 'https://github.com/Sajib1099',
    demo: '',
  },
]

export const experience = [
  {
    id: 'exp-1',
    role: 'Software Engineering Student',
    org: 'Daffodil International University',
    period: '2023 — Present',
    current: true,
    points: [
      'Applying coursework in algorithms, databases and machine learning to four shipped personal projects.',
      'Building a portfolio spanning embedded systems, full-stack web apps and applied ML.',
      'Actively seeking a Software Engineering internship to apply these skills in a production environment.',
    ],
  },
  {
    id: 'exp-2',
    role: 'Independent Builder — Decision Insight AI',
    org: 'Personal Project',
    period: '2026',
    current: false,
    points: [
      'Designed and trained a Random Forest model to predict decision-regret probability.',
      'Integrated SHAP and LIME for model explainability.',
      'Shipped a Flask API and JavaScript frontend around the model.',
    ],
  },
  {
    id: 'exp-3',
    role: 'Team Member — Art Auction System',
    org: 'Academic Team Project (3 Members)',
    period: '2025',
    current: false,
    points: [
      'Contributed to a real-time bidding engine with a PHP/MySQL backend.',
      'Helped implement secure payment and transaction handling.',
    ],
  },
  {
    id: 'exp-4',
    role: 'Team Member — Drug Management System',
    org: 'Academic Team Project (2 Members)',
    period: '2024',
    current: false,
    points: [
      'Co-designed a relational schema for inventory, expiry and transactions.',
      'Helped ship expiry alerting to reduce manual tracking errors.',
    ],
  },
  {
    id: 'exp-5',
    role: 'Team Member — Smart Kitchen Appliances',
    org: 'Academic Team Project (5 Members)',
    period: '2023',
    current: false,
    points: [
      'Contributed to sensor integration (flame, gas, temperature) on Arduino.',
      'Collaborated on the automatic safety-response control loop.',
    ],
  },
]

export const achievements = [
  {
    id: 'ach-1',
    title: 'Software Engineering Student',
    description:
      'Pursuing a B.Sc. in Software Engineering at Daffodil International University, applying coursework to real, shipped projects each semester.',
  },
  {
    id: 'ach-2',
    title: 'AI & Machine Learning Projects',
    description:
      'Built and shipped Decision Insight AI — a Random Forest model with SHAP/LIME explainability, served through a Flask API.',
  },
  {
    id: 'ach-3',
    title: 'Full Stack Development Projects',
    description:
      'Designed and built full-stack web platforms end-to-end, including a live-bidding marketplace and a pharmacy inventory system.',
  },
  {
    id: 'ach-4',
    title: 'IoT Development Experience',
    description:
      'Integrated flame, gas and temperature sensors with an Arduino controller to build an automated kitchen safety system.',
  },
  {
    id: 'ach-5',
    title: 'Problem Solving',
    description:
      'Comfortable breaking down ambiguous, real-world problems into a working technical solution, from data pipeline to interface.',
  },
  {
    id: 'ach-6',
    title: 'Team Collaboration',
    description:
      'Delivered three of four major projects as part of a team, contributing to shared codebases, schemas and sprint-style timelines.',
  },
  {
    id: 'ach-7',
    title: 'Continuous Learning',
    description:
      'Actively deepening my understanding of algorithms, system design and modern frontend tooling alongside coursework.',
  },
]

export const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Software Engineering',
  'Web Development',
  'Cloud Computing',
  'Open Source',
  'Technology Research',
  'Competitive Programming',
]

export const languages = [
  { name: 'Bangla', level: 100 },
  { name: 'English', level: 100 },
  { name: 'Hindi', level: 80 },
]

export const socials = [
  { id: 'github', label: 'GitHub', url: profile.github },
  { id: 'linkedin', label: 'LinkedIn', url: profile.linkedin },
  { id: 'email', label: 'Email', url: `mailto:${profile.email}` },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
