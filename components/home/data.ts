export const EMAIL = 'suryamaheshguduri@gmail.com';
export const GITHUB = 'https://github.com/SuryaMahesh04';
export const LINKEDIN = 'https://linkedin.com/in/suryamahesh004';

export const ROLES = ['Full-Stack Engineer', 'Applied AI Engineer', 'Voice-Agent Builder', 'Systems Architect'];

export const MENU_ITEMS = [
  { label: 'About', ariaLabel: 'Jump to About', link: '#about' },
  { label: 'Skills', ariaLabel: 'Jump to Skills', link: '#arsenal' },
  { label: 'Projects', ariaLabel: 'Jump to Projects', link: '#work' },
  { label: 'Experience', ariaLabel: 'Jump to Experience', link: '#experience' },
  { label: 'Contact', ariaLabel: 'Jump to Contact', link: '#contact' }
];

export const SOCIAL_ITEMS = [
  { label: 'GitHub', link: GITHUB },
  { label: 'LinkedIn', link: LINKEDIN }
];

/** Headline numbers, all taken from the Professional Profile document. */
export const STATS = [
  { to: 500, suffix: 'K+', label: 'Lines of production code' },
  { to: 5, suffix: '', label: 'Production platforms' },
  { to: 20, suffix: '', label: 'MCP tools shipped' }
];

export type Feature = {
  id: string;
  title: string;
  tagline: string;
  genre: string;
  scale: string;
  logline: string;
  cast: string[];
  hue: string;
};

/** The five production platforms: the main features. */
export const FEATURES: Feature[] = [
  {
    id: '01',
    title: 'NinjaCompares',
    tagline: 'Every bank in the UAE. One honest number.',
    genre: 'Fintech',
    scale: '~94K LOC · 34 API route files · 4 pricing engines',
    logline:
      'A UAE loan and credit-card comparison and origination platform across the country’s major banks. Four pure-function pricing engines re-price on every keystroke, a thirteen-state application journey runs through to bank submission, and the whole product speaks English and Arabic.',
    cast: ['Next.js 16', 'React 19', 'TypeScript', 'MongoDB', 'Tailwind CSS 4', 'GSAP', 'Three.js', 'jose'],
    hue: '#f59e0b'
  },
  {
    id: '02',
    title: 'Hotel AI Suite',
    tagline: 'The concierge that listens',
    genre: 'Voice AI · Hospitality',
    scale: '~37K LOC · 67 API routes · 20 MCP tools',
    logline:
      'A voice-first guest system for a five-star property: guests check in, order room service and book the spa by talking to it. A hand-written Gemini Live audio client, RAG over Pinecone, two MCP servers, and seven staff dashboards sit behind it.',
    cast: ['Next.js 14', 'Gemini Live', 'ElevenLabs', 'Pinecone', 'MCP SDK', 'MongoDB'],
    hue: '#8b5cf6'
  },
  {
    id: '03',
    title: 'HumanEQ EDU',
    tagline: 'The interview before the interview',
    genre: 'AI · EdTech',
    scale: '~15K LOC · 49 API handlers · 7 data models',
    logline:
      'AI voice mock interviews at batch scale for university placement cells. A live Gemini interviewer, Whisper and Gemini grading with itemised feedback, resume gap analysis, and in-browser proctoring with on-device face detection.',
    cast: ['Next.js 16', 'Gemini', 'Whisper', 'TensorFlow.js', 'AWS S3', 'Three.js'],
    hue: '#22d3ee'
  },
  {
    id: '04',
    title: 'Merzado',
    tagline: 'A marketplace that pitches for you',
    genre: 'B2B Marketplace',
    scale: 'Platform ~324K LOC · ~572 API handlers · 71 models',
    logline:
      'A B2B trade marketplace for buyers, sellers, and logistics partners: a Razorpay and RazorpayX payments layer with automated split payouts, a generative-AI pipeline that turns one seller photo into a talking-head video pitch, six role dashboards, a campaign engine, and a mobile app.',
    cast: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'RazorpayX', 'OpenAI', 'fal.ai'],
    hue: '#f43f5e'
  },
  {
    id: '05',
    title: 'Aarsha Foundation',
    tagline: 'Every gift, seen through',
    genre: 'Non-profit',
    scale: '~21K LOC · 41 pages · 31 API endpoints',
    logline:
      'A donation and donor-management platform for an Indian NGO. Signature-verified Razorpay donations, and an impact loop that emails and WhatsApps donors photographs of the work their gift funded.',
    cast: ['Next.js 14', 'TypeScript', 'MongoDB', 'Razorpay', 'WhatsApp API', 'Vercel Blob'],
    hue: '#10b981'
  }
];

export type Short = { title: string; genre: string; logline: string; cast: string[] };

/** Earlier projects: the shorts programme. */
export const SHORTS: Short[] = [
  {
    title: 'CodeRefine',
    genre: 'AI · Full-Stack',
    logline: 'A browser-based editor with an autonomous agent that plans across files, writes code, and corrects itself.',
    cast: ['Next.js', 'Gemini API', 'Monaco']
  },
  {
    title: 'Gestura',
    genre: 'Computer Vision',
    logline: 'Hands-free desktop control through voice commands and hand gestures mapped to system actions.',
    cast: ['Python', 'Computer Vision', 'Voice']
  },
  {
    title: 'Smart Wearable',
    genre: 'IoT · Hardware',
    logline: 'A safety wearable that triggers emergency alerts from sensor patterns, with live GPS and Bluetooth.',
    cast: ['IoT Sensors', 'GPS', 'Bluetooth']
  },
  {
    title: 'AgriChain',
    genre: 'Blockchain',
    logline: 'Supply-chain traceability that writes crop data to an immutable ledger from farm to distribution.',
    cast: ['Solidity', 'Smart Contracts', 'APIs']
  }
];

export const EXPERIENCE = {
  role: 'Full Stack Developer',
  company: 'Morphius AI',
  period: 'May 2025 — Present',
  summary:
    'Shipping five production platforms across fintech, voice AI, edtech, B2B commerce, and the non-profit sector: 500K+ lines of code.',
  bullets: [
    'Integrated Razorpay subscription payments and designed a credit-based internal payment system.',
    'Built role-based dashboards with interactive charts and geospatial views to track revenue and performance.',
    'Optimized image upload and storage workflows with backend compression strategies.',
    'Designed a modular, multi-tenant LMS backend for courses and assessments.'
  ],
};
