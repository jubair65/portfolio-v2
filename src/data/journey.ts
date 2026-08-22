export interface JourneyItem {
  id: number;
  year: number;
  date: string;
  url?: string;
  title: string;
  location: string;
  items?: string[];
  description: string;
}

const JOURNEY_ITEM_DATA: JourneyItem[] = [
  {
    id: 1,
    year: 2021,
    location: 'Sirajganj, Bangladesh',
    date: 'Completed',
    title: 'Higher Secondary Certificate (HSC)',
    description:
      '<p>I completed my Higher Secondary Certificate from <strong>Islamia Government College</strong>, Sirajganj, achieving a GPA of 5.00, demonstrating strong academic performance.</p>'
  },
  {
    id: 2,
    year: 2024,
    location: 'Dhaka, Bangladesh',
    date: 'Ongoing (3rd Year)',
    title: 'BSc in Computer Science & Engineering',
    description:
      '<p>Currently pursuing my undergraduate degree in CSE at the <strong>University of Asia Pacific (UAP)</strong>. Building a strong foundation in programming, software development, and system design.</p>',
    items: [
      "Recipient of the VC Award and Dean's Award for consistent academic excellence at UAP.",
      'Developed multiple projects including NotesBridge, a Library Management System, and a Carpool Management System.'
    ]
  },
  {
    id: 3,
    year: 2024,
    location: 'Online',
    date: 'Ongoing',
    title: 'Competitive Programming',
    description:
      '<p>Actively engaged in solving algorithmic challenges. <strong>Top 500 on Beecrowd</strong>. Active on <strong>Codeforces</strong> (jubair_65), regularly participating in contests to strengthen data structures and algorithmic problem-solving skills.</p>'
  },
  {
    id: 4,
    year: 2025,
    location: 'Online',
    date: 'Achieved',
    title: 'EC Award \u2013 Pixabay',
    url: 'https://pixabay.com/illustrations/fisherman-ocean-lighthouse-sea-6479663/',
    description:
      '<p>Received the <strong>EC Award on Pixabay</strong> for an original digital illustration, recognizing my creativity and visual design quality.</p>'
  },
  {
    id: 5,
    year: 2026,
    location: 'Dhaka, Bangladesh',
    date: 'July 2026 \u2013 Present',
    title: 'NotesBridge \u2013 Founder & Developer',
    url: 'https://notesbridge-a87s.onrender.com/',
    description:
      '<p>Built and launched <strong>NotesBridge</strong>, a peer-to-peer study resource platform. Designed a <strong>Karma-point gamification system</strong> and tiered leaderboard that turns passive downloaders into active contributors.</p>',
    items: [
      'Full-stack development with Django, PostgreSQL (Supabase), and JavaScript.',
      'AJAX-powered voting, infinite scroll pagination, department-based filtering, email verification, and password reset.',
      'Deployed on Render with production-grade configuration.'
    ]
  }
];

export const JOURNEY_DATA = {
  title: 'My Journey',
  description: 'Education & <span className="text-2xl font-bold">Achievements</span>',
  items: JOURNEY_ITEM_DATA
} as const;
