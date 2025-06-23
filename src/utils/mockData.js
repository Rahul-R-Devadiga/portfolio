import { loadScreenshots } from "./loadScreenshots";

export const landingPageData = {
  title: "Web Apps. React UIs. APIs. Performance. MERN Stack. & More.",
  shortAboutMe:
    "I’m Rahul, a developer who helps businesses turn ideas into responsive, high-performance web apps. From UI to backend, I deliver clean code that works.",
};

export const projectCards = [
  {
    id: "vibe_talk",
    name: "Vibe Talk",
    tagline: "A Chating Web App",
    coverImage: "/src/assets/Vibe_Talk_mockup.png",
  },

  {
    id: "NetflixGPT",
    name: "NetflixGPT",
    tagline: "Movie Recommendation",
    coverImage: "/src/assets/Netflix_Recommendation_mockup.png",
  },

  {
    id: "D_Shiksha",
    name: "D-Shiksha",
    tagline: "MutliSchool Management System",
    coverImage: "/src/assets/DShiksha_mockup.png",
  },
];

export const links = {
  LinkedIn: "https://www.linkedin.com/in/rahul-r-devadiga/",
  GitHub: "https://github.com/Rahul-R-Devadiga",
};

export const ListOfQualifications = [
  {
    course: "MCA",
    college: "Online Manipal University, Jaipur",
    year: "2023-present",
  },
  {
    course: "BCA",
    college: "SDM College of Business Management, Mangalore",
    year: "2019-2022",
  },
];

export const ListOfExperiences = [
  {
    role: "Full Stack Developer",
    employer: "Freelance",
    year: "2025-present",
  },
  {
    role: "VR Developer",
    employer: "Freelance",
    year: "Sep 2024-Oct 2024",
  },
  {
    role: "Unity Programmer",
    employer: "Karanji Infotech Pvt. Ltd.",
    year: "Apr 2023-Aug 2024",
  },
  {
    role: "QA Intern",
    employer: "Supremo Astute Technologies Pvt. Ltd",
    year: "Aug 2022-Jan 2023",
  },
];

export const ListofProjectDetails = {
  vibe_talk: {
    name: "Vibe Talk",

    subtitle: "A full-stack chat application built with the MERN stack.",

    paragraph: [
      "VibeTalk is a real-time messaging platform where users can sign up, create conversations, and chat securely with others in a responsive and modern UI. Designed for performance and simplicity, it reflects real-world implementation of full-stack development using MongoDB, Express, React, and Node.js.",

      "This project was a major step in applying backend concepts like authentication, protected routes, RESTful APIs, and database modeling — all while maintaining a sleek and responsive user experience on the frontend.",
    ],

    links: {
      GitHub: "https://github.com/Rahul-R-Devadiga/VibeTalk-MERN",
      Live: "https://vibetalk-mern.onrender.com/",
    },

    role: {
      subtitle:
        "As the sole developer, I was responsible for building the application end-to-end:",
      roles: [
        "Developed a RESTful API using Express.js + MongoDB (Mongoose)",
        "Built the frontend with React and Tailwind CSS",
        "Handled user authentication using JWT-based Auth",
        "Created protected routes and session handling",
        "Designed chat UI with dynamic conversation rendering",
        "Implemented context-based state management",
        "Ensured responsive design across devices",
      ],
    },

    challengesSolutions: [
      {
        challenge: "Managing real-time feel without WebSockets",
        solution:
          "Since this version was built without Socket.io, I simulated real-time feel with polling and dynamic UI updates - planned WebSocket integration for the future.",
      },
      {
        challenge: "Authentication Flow",
        solution:
          "Built a secure JWT system for login and route protection. Also ensured token persistence and logout handling using localStorage and middleware.",
      },
      {
        challenge: "Database Design",
        solution:
          "Modeled MongoDB collections to handle users, messages, and conversations efficiently, allowing easy scalability for future features like group chats or message attachments.",
      },
    ],

    techStack: [
      "React",
      "Postman",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Axios",
      "Zustand",
      "JWT",
      "MongoDB",
      "Mongoose",
      "Git",
      "GitHub",
      "Vercel & Render",
    ],

    screenshots: loadScreenshots("vibe_talk"),

    output:
      "VibeTalk sharpened my backend skills, especially in API design and authentication logic. It also helped me better understand frontend-backend coordination and deploying full-stack apps. The result is a clean, minimal chat experience - scalable and developer-friendly.",
  },

  NetflixGPT: {
    name: "NetflixGPT",

    subtitle: "An AI-powered movie search experience inspired by Netflix UI.",

    paragraph: [
      "NetflixGPT is a modern web application that combines the sleek user experience of Netflix with the power of generative AI using the Gemini API. The app allows users to search for movie recommendations using natural language prompts and displays tailored results in an intuitive, responsive interface.",

      "This project began as a React learning initiative and evolved into a polished frontend product with advanced features like Firebase Authentication, state management via Redux, multilingual GPT queries, and responsive UI with Tailwind CSS.",
    ],

    links: {
      GitHub: "https://github.com/Rahul-R-Devadiga/Netflix-GPT",
    },

    role: {
      subtitle:
        "As the sole developer, I built and deployed the full project focusing on:",
      roles: [
        "Creating a responsive Netflix-like UI using React.js + Tailwind CSS",
        "Implementing Firebase Email Auth",
        "Managing global state using Redux Toolkit",
        "Optimizing performance via memoization to reduce API overuse",
        "Mobile-first design and multi-language GPT support in the search section",
      ],
    },

    challengesSolutions: [
      {
        challenge: "Gemini API request flooding",
        solution:
          "Solved using conditional rendering and Redux store checks to prevent unnecessary calls.",
      },
      {
        challenge: "Security warning on deployment",
        solution:
          "Vercel flagged the live site as “unsafe” submitted the URL for Google Safe Browsing review and replaced the link in public posts with the GitHub repo.",
      },
      {
        challenge: "Firebase limitations",
        solution:
          "Chose email-only auth (no Google/GitHub OAuth) for simplicity. Designed with scalability in mind if needed in future.",
      },
    ],

    techStack: [
      "React",
      "Redux",
      "TailwindCSS",
      "Firebase Auth",
      "Gemini API",
      "Vercel",
      "JavaScript (ES6+)",
      "Git",
      "GitHub",
    ],

    screenshots: loadScreenshots("netflixgpt"),

    output:
      "NetflixGPT helped reinforce my understanding of React component architecture, state flow using Redux, and working with third-party AI APIs. It also refined my UI implementation and deployment process on Vercel. The project is now available publicly on GitHub for review.",
  },

  D_Shiksha: {
    name: "D-Shiksha",
    subtitle:
      "An integrated multi-school management system built with Django and MySQL.",

    paragraph: [
      "D-Shiksha is a full-stack school management platform designed to simplify administrative workflows and improve the educational ecosystem across multiple institutions. The system handles key modules like student records, teacher dashboards, course structures, and school-level segregation — all from a unified platform.",

      "The project was developed using Python (Django) for backend logic and MySQL for database handling, along with HTML, CSS, JavaScript, and Bootstrap 5 for responsive UI.",
    ],

    role: {
      subtitle: "I led both frontend and backend development, focusing on:",
      roles: [
        "Designing modular views and forms using Django templates",
        "Writing backend logic in Python to manage school-specific data and operations",
        "Creating structured databases using MySQL",
        "Styling the UI with Bootstrap 5 for a responsive and modern look",
        "Adding JavaScript-based interactivity to improve the user experience",
        "Using Git & GitHub for version control and collaboration",
      ],
    },

    challengesSolutions: [
      {
        challenge: "Multi-School Segregation",
        solution:
          "Built a scalable architecture in Django to allow school-specific data access, improving role-based control and reducing redundancy.",
      },
      {
        challenge: "Manual Admin Tasks",
        solution:
          "Automated key admin workflows like attendance, grade records, and user management - reducing manual intervention by over 40%.",
      },
      {
        challenge: "Clean UI on Complex Forms",
        solution:
          "Leveraged Bootstrap5’s grid and form utilities to maintain a simple, user-friendly design even with large datasets and inputs.",
      },
    ],

    techStack: [
      "Django",
      "Python",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Git",
      "GitHub",
      "VS Code",
    ],

    screenshots: loadScreenshots("d_shiksha"),

    output:
      "D-Shiksha provided a structured, scalable solution for multi-school coordination. It helped reduce repetitive administrative tasks and improved efficiency through automation and intuitive design. This project deepened my understanding of MVC architecture and real-world full stack development using Django.",
  },
};

export const aboutPageData = {
  title:
    "Full Stack Developer specializing in scalable web applications and user-centric design.",
  paragraph: [
    "I’m Rahul, a developer passionate about building fast, responsive, and maintainable web applications using the MERN stack - MongoDB, Express.js, React.js, and Node.js. With hands-on experience in both frontend and backend development, I thrive on solving real-world problems through clean architecture and thoughtful design.",

    "My journey started in QA and testing, giving me a strong foundation in product reliability and detail orientation. Today, I specialize in crafting seamless user experiences on the frontend while ensuring solid API and data architecture on the backend.",

    "I’ve worked on freelance projects in virtual reality and developed full-stack apps like NetflixGPT and VibeTalk, incorporating features like authentication, search, state management, and API integrations. Whether it’s building from scratch or scaling existing systems, I bring focus, adaptability, and clean code to every project.",

    "I’m currently open to full-time opportunities, freelance collaborations, or tech-focused startups where I can make an impact through strong engineering and creative problem-solving.",
  ],

  experiences: [
    {
      role: "Full stack Developer",
      employer: "Freelance",
      years: "2025 - Present",
    },
    {
      role: "VR Developer",
      employer: "Freelance",
      years: "Sept 2024 - Oct 2024",
    },
    {
      role: "Unity Programmer",
      employer: "Karanji Infotech Pvt. Ltd.",
      years: "Apr 2023 - Aug 2024",
    },
    {
      role: "QA Intern",
      employer: "Supremo Astute Technologies",
      years: "Aug 2022 - Jan 2023",
    },
  ],

  educations: [
    {
      course: "Master of Computer Application (MCA)",
      college: "Online Manipal University, Jaipur",
      years: "2023 - present",
    },

    {
      course: "Bachelor of Computer Application (BCA)",
      college: "SDM College of Business Management, Mangalore",
      years: "2019 - 2022",
    },
  ],

  techStack: [
    {
      tech: "Front end",
      skills: [
        "React.js",
        "Redux",
        "Tailwind CSS",
        "Zustand",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
      ],
    },

    {
      tech: "Back end",
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    },

    {
      tech: "Tools",
      skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
    },
  ],

  disciplines: [
    "Full Stack Web Development",
    "Frontend UI Engineering",
    "Project Architecture",
    "Performance Optimization",
    "API Development & Integration",
  ],
};
