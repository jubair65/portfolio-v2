import { ROUTES } from '@/shared/constants';

export type ProjectItem = {
  id: number;
  role: string;
  title: string;
  stack: string[];
  isPrivate: boolean;
  url: string | null;
  description: string;
};

export const PROJECTS_DATA: {
  title: string;
  footer: string;
  description: string;
  items: ProjectItem[];
  footerActionLabel: string;
  footerActionURL: (typeof ROUTES)[keyof typeof ROUTES];
} = {
  title: 'Projects',
  footerActionURL: ROUTES.CONTACT_ME,
  footerActionLabel: 'Get in touch with me',
  description: 'A showcase of my software<br />and web projects',
  footer: 'We can create ideas and develop the future together',
  items: [
    {
      id: 1,
      title: 'NotesBridge',
      url: 'https://notesbridge-a87s.onrender.com/',
      role: 'Founder & Full-Stack Developer',
      stack: [
        'Python',
        'Django',
        'PostgreSQL',
        'Supabase',
        'JavaScript',
        'AJAX',
        'Bootstrap'
      ],
      isPrivate: false,
      description:
        'A peer-to-peer study resource platform where students upload notes, earn Karma points for contributions, and climb a tiered leaderboard. Features include AJAX-powered voting, infinite scroll pagination, department-based filtering, email verification via webhook, password reset, and a gamification system that turns passive downloaders into active contributors.'
    },
    {
      id: 2,
      title: 'Library Management System',
      url: 'https://github.com/jubair65/Library-Management-System',
      role: 'Developer',
      stack: ['Java', 'JavaFX', 'OOP'],
      isPrivate: false,
      description:
        'A JavaFX desktop application for managing books, members, and circulation. Eliminated manual check-in/check-out tracking errors with real-time TableView updates, structured input validation, and a SceneBuilder-designed interface. Applied OOP principles to separate business logic from UI.'
    },
    {
      id: 3,
      title: 'Carpool Management System',
      url: 'https://github.com/jubair65/Carpool-Management-System-DBMS',
      role: 'Database Designer & Developer',
      stack: ['SQL', 'Microsoft SQL Server', 'ER Modeling', 'Database Design'],
      isPrivate: false,
      description:
        'A database-driven system designed using ER modeling and SQL to efficiently manage users, rides, payments, and reports. It features a normalized relational database with primary/foreign keys, constraints, and optimized queries.'
    }
  ]
} as const;
