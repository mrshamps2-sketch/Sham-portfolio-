import { SkillItem, ProjectItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Harisham PS',
  title: 'CSE (IoT & AI) Student',
  college: 'GM University',
  year: '2nd Year',
  branch: 'CSE – IoT & AI',
  location: 'Karnataka, India',
  headline: 'Turning Ideas Into Intelligent Solutions.',
  shortDescription:
    '2nd-year CSE (IoT & AI) student at GM University, passionate about programming, Artificial Intelligence, IoT, and building practical technology solutions for real-world challenges.',
  aboutMeParagraphs: [
    'I’m Harisham PS, a 2nd-year CSE (IoT & AI) student at GM University, driven by curiosity and a passion for turning ideas into practical technology solutions. I work with C, C++, Java, Python, SQL, HTML, and CSS, with a growing focus on Artificial Intelligence and IoT.',
    'I enjoy building technology that addresses real-world challenges, from smart home automation and AI-powered crop detection to sustainable energy and smart transportation concepts. My participation in Smart India Hackathon 2025, being a finalist at Agri Nova Hackathon, and participating in Hack with Devices has strengthened my problem-solving, teamwork, and innovation skills.',
    'I’m continuously learning, experimenting, and building — with the goal of becoming a skilled AI & IoT developer who creates meaningful and impactful solutions.'
  ],
  contact: {
    email: 'harishampatils@gmail.com',
    phone: '8618116711',
    instagramHandle: '@thenameisshamma',
    instagramUrl: 'https://www.instagram.com/thenameisshamma/',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://www.linkedin.com'
  }
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'Intelligence',
    iconName: 'Brain',
    proficiency: 88,
    highlight: 'Neural networks, computer vision, predictive intelligence',
    color: 'yellow'
  },
  {
    id: 'iot',
    name: 'IoT',
    category: 'Systems & IoT',
    iconName: 'Cpu',
    proficiency: 90,
    highlight: 'Microcontrollers, sensor telemetry, edge automation',
    color: 'red'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Languages',
    iconName: 'Terminal',
    proficiency: 86,
    highlight: 'AI/ML scripting, automation pipelines, data analysis',
    color: 'yellow'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Languages',
    iconName: 'Binary',
    proficiency: 85,
    highlight: 'Object-oriented architecture, performance optimization',
    color: 'red'
  },
  {
    id: 'c',
    name: 'C',
    category: 'Languages',
    iconName: 'Code2',
    proficiency: 84,
    highlight: 'Embedded firmware, low-level memory & hardware logic',
    color: 'yellow'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages',
    iconName: 'FileCode',
    proficiency: 82,
    highlight: 'OOP principles, robust backend algorithms, data structures',
    color: 'red'
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Web & Data',
    iconName: 'Database',
    proficiency: 85,
    highlight: 'Relational databases, schema modeling, query optimization',
    color: 'yellow'
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Web & Data',
    iconName: 'Layers',
    proficiency: 92,
    highlight: 'Semantic web structure, accessible markup, modern layout DOM',
    color: 'yellow'
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Web & Data',
    iconName: 'Palette',
    proficiency: 88,
    highlight: 'Futuristic responsive design, glassmorphism, 3D animations',
    color: 'red'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'smart-home',
    number: '01',
    title: 'SMART HOME',
    role: 'IoT & Software Developer',
    description:
      'A smart home system focused on automation, convenience, security, and energy efficiency.',
    technologies: ['IoT', 'Sensors', 'C/C++', 'Python'],
    outcome:
      'Developed a concept for smart monitoring and automated control of household devices.',
    accent: 'yellow',
    highlights: [
      'Automated device relay switching with real-time feedback',
      'Continuous sensor telemetry monitoring temperature & security',
      'Low-latency communication protocols for power efficiency'
    ],
    systemSpecs: [
      { label: 'Architecture', value: 'Edge Gateway + Distributed Microcontrollers' },
      { label: 'Core Protocols', value: 'MQTT / HTTP / Serial Bus' },
      { label: 'Key Telemetry', value: 'Environmental & Current Consumption Sensing' }
    ]
  },
  {
    id: 'osmotic-power',
    number: '02',
    title: 'OSMOTIC POWER / RED ENERGY',
    role: 'Research & Project Developer',
    description:
      'An innovative project exploring electricity generation using Reverse Electrodialysis (RED) and osmotic power technology.',
    technologies: [
      'RED Cells',
      'Ion-Exchange Membranes',
      'Electrochemical Energy Generation'
    ],
    outcome:
      'Studied the working principle and potential of RED-based electricity generation as a renewable energy solution.',
    accent: 'red',
    highlights: [
      'Researched salinity gradient chemical potential to electric power',
      'Evaluated membrane durability and ion selectivity parameters',
      'Explored sustainable zero-emission alternative energy generation'
    ],
    systemSpecs: [
      { label: 'Domain', value: 'Electrochemical & Clean Renewable Energy' },
      { label: 'Mechanism', value: 'Salinity Gradient / Reverse Electrodialysis' },
      { label: 'Potential Application', value: 'Coastal & Estuary Clean Energy Harvesting' }
    ]
  },
  {
    id: 'kochi-metro',
    number: '03',
    title: 'KOCHI METRO PROJECT',
    role: 'IoT & AI Project Developer',
    description:
      'A technology-based project focused on improving metro transportation through smart and efficient solutions.',
    technologies: ['IoT', 'AI', 'Sensors', 'Automation'],
    outcome:
      'Proposed smart technology solutions aimed at improving transportation efficiency, monitoring, and passenger experience.',
    accent: 'yellow',
    highlights: [
      'Smart crowd-density tracking with sensor networks',
      'Predictive coach load distribution and rapid telemetry analysis',
      'Automated transit flow optimizations for modern urban rail'
    ],
    systemSpecs: [
      { label: 'Focus', value: 'Intelligent Urban Transit & Commuter Safety' },
      { label: 'AI Function', value: 'Passenger Traffic & Flow Pattern Optimization' },
      { label: 'IoT Layer', value: 'Multi-Sensor Train Carriage Telemetry' }
    ]
  },
  {
    id: 'crop-detector',
    number: '04',
    title: 'FARMERS CROP DETECTOR',
    role: 'AI/ML Developer',
    description:
      'An AI/IoT-based solution designed to help farmers detect and identify crop-related issues using technology.',
    technologies: ['Python', 'AI/ML', 'IoT', 'Image Processing', 'Sensors'],
    outcome:
      'Designed a technology-driven approach for early identification of crop issues to support faster and better farming decisions.',
    accent: 'red',
    highlights: [
      'Computer vision image classification for crop disease identification',
      'Soil & climate sensor data fusion for early warning diagnostics',
      'Accessible recommendations tailored for rapid agricultural decision-making'
    ],
    systemSpecs: [
      { label: 'AI Core', value: 'Convolutional Vision Models & Leaf Feature Extraction' },
      { label: 'IoT Sensing', value: 'Soil Moisture, Humidity & Ambient Temperature' },
      { label: 'Impact', value: 'Prevents Yield Loss Through Early Intervention' }
    ]
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon (SIH) 2025',
    badge: 'National Innovation Arena',
    year: '2025',
    status: 'Participant',
    description:
      'Selected to participate in the prestigious nationwide technical hackathon, tackling complex real-world challenges through intelligent software engineering and embedded innovation.',
    icon: 'trophy',
    tag: 'National Hackathon'
  },
  {
    id: 'agri-nova',
    title: 'Agri Nova Hackathon',
    badge: 'Agritech Innovation Award',
    year: '2024–2025',
    status: 'Finalist',
    description:
      'Ranked as Finalist for pitching and prototyping an AI & IoT-driven agricultural crop protection and diagnostic ecosystem for empowering regional farming communities.',
    icon: 'award',
    tag: 'Finalist • AgriTech'
  },
  {
    id: 'hack-devices',
    title: 'Hack with Devices',
    badge: 'Hardware & IoT Challenge',
    year: '2024',
    status: 'Participant',
    description:
      'Competed in a rigorous device engineering hackathon creating rapid microcontroller prototypes, sensor integrations, and edge telemetry hardware solutions.',
    icon: 'medal',
    tag: 'Hardware & Systems'
  }
];
