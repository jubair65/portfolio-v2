export const ABOUT_ME_CONTENT_TYPE = {
  text: 'text',
  list: 'list',
  image: 'image',
  component: 'component'
} as const;

export const ABOUT_ME_COMPONENT_NAMES = {
  recommendations: 'recommendations',
  competition: 'competition'
} as const;

type AboutMeImageContent = {
  url: string;
  type: 'image';
  title: string;
  width: number;
  height: number;
  tooltip?: string;
  className?: string;
};

type AboutMeListContent = {
  title: string;
  data: string[];
  type: 'list';
};

type AboutMeTextContent = {
  data: string;
  type: 'text';
};

type ABOUT_ME_COMPONENT_NAMES_KEYS = keyof typeof ABOUT_ME_COMPONENT_NAMES;
type AboutMeComponentContent = {
  name: (typeof ABOUT_ME_COMPONENT_NAMES)[ABOUT_ME_COMPONENT_NAMES_KEYS];
  type: 'component';
};

export type AboutMeContentItem =
  | AboutMeTextContent
  | AboutMeListContent
  | AboutMeImageContent
  | AboutMeComponentContent;

export const ABOUT_ME_DATA: {
  heroURL: string;
  content: AboutMeContentItem[];
} = {
  heroURL: '/images/personal-images/profile-2.png',
  content: [
    {
      type: ABOUT_ME_CONTENT_TYPE.text,
      data: "Hi, I'm <strong>Jubair Bin Hasan</strong> \u2014 a 3rd-year Computer Science student at the <strong>University of Asia Pacific</strong> and the founder of <strong>NotesBridge</strong>."
    },
    {
      type: ABOUT_ME_CONTENT_TYPE.text,
      data: "For the past few months, I've been building <strong>NotesBridge</strong> \u2014 a peer-to-peer study resource platform where students upload notes, earn <strong>Karma points</strong> for contributions that actually help others, and climb a tiered leaderboard. It replaced the experience of digging through disorganized Facebook groups and dead Google Drive links for last semester's notes."
    },
    {
      type: ABOUT_ME_CONTENT_TYPE.text,
      data: 'Before NotesBridge, I built a <strong>JavaFX-based Library Management System</strong> from scratch: book check-in/check-out, member tracking, a TableView-driven interface, and input validation that catches bad data instead of crashing on it. It taught me the unglamorous 80% of software \u2014 state management, edge cases, the "what happens when the user does something weird" problems that never show up in a tutorial.'
    },
    {
      type: ABOUT_ME_CONTENT_TYPE.list,
      title: 'Stack & Technologies',
      data: [
        '<strong>Java</strong>, <strong>C++</strong>, <strong>Python</strong>',
        '<strong>Django</strong>, <strong>JavaScript</strong>, <strong>AJAX</strong>',
        '<strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>',
        '<strong>PostgreSQL</strong> (Supabase), <strong>SQL Server</strong>, <strong>SQLite</strong>',
        '<strong>Git</strong>, <strong>GitHub</strong>, <strong>Render</strong> (deployment)',
        '<strong>Competitive Programming</strong> \u2014 Codeforces, Beecrowd'
      ]
    },
    {
      type: ABOUT_ME_CONTENT_TYPE.text,
      data: "I also compete. <strong>Top 500 on Beecrowd</strong>. Active on <strong>Codeforces</strong> (jubair_65), where the scoreboard doesn't care about my GPA \u2014 only whether my solution is correct and fast enough."
    },
    {
      type: ABOUT_ME_CONTENT_TYPE.text,
      data: 'Beyond coding, I received the <strong>EC Award on Pixabay</strong> for an original digital illustration, and I have an ongoing interest in mobile photography and visual content publishing.'
    }
  ]
} as const;
