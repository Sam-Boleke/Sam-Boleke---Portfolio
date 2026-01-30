export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  timeframe: string;
  stack: string[];
  links: { label: string; href: string }[];
  problem: string;
  solution: string;
  highlights: string[];
  screenshots?: { alt: string; src: string }[];
  referenceReady?: boolean;
};

export const profile = {
  name: "Sam Boleke",
  fullName: "Relebohile Samuel Boleke",
  title: "Full-Stack Software Engineer (Flutter • Next.js • Firebase, Backendless, SQL, MongoDB)",
  location: "Free State, South Africa",
  email: "releboleke@gmail.com",
  github: "https://github.com/Sam-Boleke",
  linkedin: "https://www.linkedin.com/in/relebohile-samuel-boleke-58970a1b2/",
  phone: "074 681 8445",
  summary:
    "I’m a young Black South African software engineer in my mid‑20s based in the Free State. I build production-ready web and mobile platforms with clear, accessible UI, strong UX, and solid architecture. I’m comfortable across Flutter and the web stack with backends like Firebase, Backendless, SQL, and MongoDB. My focus is on real-world systems in education, reporting, and service delivery, prioritizing usability, visual clarity, and clear business outcomes—shipping systems that are ready for real production environments.",
};

export type Experience = {
  role: string;
  organization: string;
  timeframe: string;
  description: string;
  topics?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Tutor",
    organization: "Central University of Technology (Disability Unit)",
    timeframe: "Aug 2023 – Oct 2023",
    description: "Tutored Disability Unit students under the IT department, preparing them for tests and exams.",
    topics: ["Software Engineering", "Software Development", "Databases"],
  },
  {
    role: "Student Assistant",
    organization: "Central University of Technology",
    timeframe: "Oct 2022 – Nov 2022",
    description: "Student Assistant for Technical Programming II, supporting students with coursework and assignments.",
    topics: ["Technical Programming II"],
  },
  {
    role: "Supplementary Instructor",
    organization: "Central University of Technology",
    timeframe: "Feb 2022 – Nov 2022",
    description: "Prepared Technical Programming students for their final exam through focused review sessions and practice.",
    topics: ["Technical Programming"],
  },
];

export type Reference = {
  name: string;
  organization: string;
  role: string;
  email?: string;
  phone?: string;
  relationship: string;
};

export const references: Reference[] = [
  {
    name: "Mmusi Semathu",
    organization: "Banture",
    role: "Manager / Team Lead",
    email: "mmusi.semathu@banture.co.za",
    phone: "081 557 6894",
    relationship: "Manager",
  },
  {
    name: "Vikash Soodyall",
    organization: "Apptechnix",
    role: "Project Manager / Team Lead",
    email: "info@apptechnix.co.za",
    phone: "074 667 3422",
    relationship: "Client / Manager",
  },
  {
    name: "Theebetsile Lekoma",
    organization: "Banture",
    role: "Software Developer (Backend)",
    phone: "065 573 0330",
    relationship: "Colleague",
  },
  {
    name: "Mohau Ben Manyarela",
    organization: "Central University of Technology",
    role: "Supervisor (Disability Unit)",
    email: "benmanyarela@cut.ac.za",
    relationship: "Supervisor",
  },
  {
    name: "Gerald Muriithi",
    organization: "Central University of Technology",
    role: "Supervisor",
    email: "gmuriithi@cut.ac.za",
    phone: "078 202 8799",
    relationship: "Supervisor",
  },
];

export const projects: Project[] = [
  {
    slug: "kornerbase",
    name: "KornerBase",
    tagline: "School SaaS platform (Blackboard-style) for SA public schools",
    role: "Founder • Full-stack",
    timeframe: "2025–Present",
    stack: ["Flutter", "Firebase"],
    links: [
      { label: "Live Demo", href: "https://ithute-522ff.web.app/" },
      { label: "Case Study", href: "/projects/kornerbase" },
    ],
    problem:
      "Schools struggle with centralized communication, assignments, and admin workflows across devices.",
    solution:
      "Built a multi-role platform with dashboards, assignments, onboarding, and scalable data structures.",
    highlights: [
      "Role-based access (admin/teacher/student)",
      "Responsive UI + fast onboarding flow",
      "Production-ready deployment pipeline",
    ],
    referenceReady: true,
  },
  {
    slug: "banture-suite",
    name: "Banture & Funeral Software Suite",
    tagline: "Multi-app platform for POS, back-office, and field agents",
    role: "Software Developer • Flutter Developer",
    timeframe: "Jan 2023 – Dec 2025",
    stack: ["Flutter", "REST APIs", "Backend Integrations"],
    links: [
      { label: "Company", href: "https://banture.co.za" },
    ],
    problem:
      "Banture needed integrated tools for retail sales, funeral policy management, and agent operations across different environments.",
    solution:
      "Worked on Flutter front-ends for the POS, office software, and agent app, handling API integrations and UI flows for day-to-day operations.",
    highlights: [
      "Built production Flutter UIs for multiple apps (POS, office, and agent)",
      "Implemented API integrations to connect front-end with existing back-office systems",
      "Collaborated with the team to ship features used in real retail and funeral operations",
    ],
  },
  {
    slug: "chicken-xpress-find-us",
    name: "Chicken Xpress – Find Us Feature",
    tagline: "Store locator and 'Find Us' experience inside the Chicken Xpress mobile app",
    role: "Flutter Developer (Apptechnix)",
    timeframe: "Sep 2023",
    stack: ["Flutter", "PHP", "REST APIs"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.chiken.chiken_xpress&hl=en_ZA&pli=1",
      },
      { label: "Case Study", href: "/projects/chicken-xpress-find-us" },
    ],
    problem:
      "Chicken Xpress needed a simple way for customers to find nearby branches and locations directly from the mobile app.",
    solution:
      "Implemented the Find Us feature using Flutter for the front-end and PHP-backed APIs, integrating maps/location data and building the user-facing flows.",
    highlights: [
      "Built production-ready Flutter UI for the Find Us experience",
      "Integrated Flutter front-end with PHP backend endpoints",
      "Improved customer journey by making store discovery fast and intuitive",
    ],
  },
  {
    slug: "coders-korner",
    name: "Coders Korner Website",
    tagline: "Company marketing site and services presence for Coders Korner",
    role: "Full-stack Developer",
    timeframe: "2024–Present",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Live Demo", href: "https://www.coderskorner.co.za" },
      { label: "Case Study", href: "/projects/coders-korner" },
    ],
    problem:
      "CodersKorner needed a clean, fast, and trustworthy web presence to showcase services and capture new leads.",
    solution:
      "Designed and implemented a responsive marketing site with clear service sections, calls-to-action, and contact flows.",
    highlights: [
      "Modern, mobile-first layout aligned with the CodersKorner brand",
      "Clear information architecture for services and offerings",
      "Optimized performance and SEO-friendly structure",
    ],
  },
  {
    slug: "firesight-za",
    name: "FireSight ZA",
    tagline: "Community-based reporting and early warning concept",
    role: "Product • Engineering",
    timeframe: "2026 (Prototype)",
    stack: ["Flutter", "APIs", "Cloud"],
    links: [{ label: "Case Study", href: "/projects/firesight-za" }],
    problem:
      "Disaster and incident reports are often delayed, fragmented, and difficult to validate.",
    solution:
      "Designed a workflow for multi-user reporting, verification, and dashboards for responders.",
    highlights: [
      "Simple reporting UX for civilians",
      "Dashboards for authorities",
      "Extensible architecture for AI enrichment later",
    ],
  },
];

