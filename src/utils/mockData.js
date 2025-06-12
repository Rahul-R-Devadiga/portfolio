export const landingPageData = {
  title: "Lorem ipsum dolor sit amet.",
  shortAboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam accusamus quisquam delectus. Amet quaerat eligendi a facere, sunt incidunt laudantium, nesciunt velit assumenda alias accusantium consequatur impedit beatae eius accusamus debitis voluptatum labore! Tempore suscipit rerum facere reprehenderit quo provident consectetur excepturi numquam architecto debitis. At voluptatem fugit voluptatibus ratione obcaecati neque aut iusto alias ut, sunt nihil hic.",
};

export const projectCards = [
  {
    name: "Vibe Talk",
    tagline: "A Chating Web App",
    coverImage: "url",
  },

  {
    name: "NetflixGPT",
    tagline: "Movie Recommendation",
    coverImage: "url",
  },

  {
    name: "D-Shiksha",
    tagline: "MutliSchool Management System",
    coverImage: "url",
  },
];

export const links = {
  linkeIn: "url",
  github: "url",
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

    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, magni!",

    paragraph: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores officia neque a aut nulla. Repudiandae, modi, error saepe, sed accusamus quod optio libero cum sit molestias harum sequi culpa aperiam aspernatur eum neque eveniet. Optio, laborum iusto consectetur nihil laudantium hic ex aliquam, earum voluptas distinctio, culpa rerum libero aperiam!",

      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores officia neque a aut nulla. Repudiandae, modi, error saepe, sed accusamus quod optio libero cum sit molestias harum sequi culpa aperiam aspernatur eum neque eveniet. Optio, laborum iusto consectetur nihil laudantium hic ex aliquam, earum voluptas distinctio, culpa rerum libero aperiam!",

      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores officia neque a aut nulla. Repudiandae, modi, error saepe, sed accusamus quod optio libero cum sit molestias harum sequi culpa aperiam aspernatur eum neque eveniet. Optio, laborum iusto consectetur nihil laudantium hic ex aliquam, earum voluptas distinctio, culpa rerum libero aperiam!",
    ],

    links: {
      GitHub: "url",
      Live: "url",
    },

    role: {
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor",
      role: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor accusamus error doloribus delectus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor accusamus error doloribus delectus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor accusamus error doloribus delectus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor accusamus error doloribus delectus.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fuga dolor accusamus error doloribus delectus.",
      ],
    },

    challengesSolutions: [
      {
        challenge: "Lorem ipsum dolor sit amet.",
        solution:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reprehenderit.",
      },
      {
        challenge: "Lorem ipsum dolor sit amet.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque nobis facilis exercitationem a amet.",
      },
      {
        challenge: "lorem ipsum dolor sit amet.",
        solution:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam neque nobis facilis exercitationem a amet.",
      },
      {
        challenge: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        solution: "Laboriosam neque nobis facilis exercitationem a amet.",
      },
    ],

    techStack: [
      "React",
      "Redux",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "Axios",
      "Zustand",
      "JWT",
      "MongoDB",
      "Git",
      "GitHub",
    ],

    output:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nulla tenetur sapiente laboriosam, adipisci voluptatem saepe beatae similique blanditiis ex magni illum possimus molestiae. Hic commodi vel consequuntur, provident consequatur impedit debitis eveniet ad tempore quos rem est distinctio atque adipisci alias tempora quo ex?",
  },

  NetflixGPT: {
    name: "NetflixGPT",

    subtitle: "An AI-powered movie search experience inspired by Netflix UI.",

    paragraph: [
      "NetflixGPT is a modern web application that combines the sleek user experience of Netflix with the power of generative AI using the Gemini API. The app allows users to search for movie recommendations using natural language prompts and displays tailored results in an intuitive, responsive interface.",

      "This project began as a React learning initiative and evolved into a polished frontend product with advanced features like Firebase Authentication, state management via Redux, multilingual GPT queries, and responsive UI with Tailwind CSS.",
    ],

    links: {
      GitHub: "url",
    },

    role: {
      subtitle:
        "As the sole developer, I built and deployed the full project focusing on:",
      role: [
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

    output:
      "NetflixGPT helped reinforce my understanding of React component architecture, state flow using Redux, and working with third-party AI APIs. It also refined my UI implementation and deployment process on Vercel. The project is now available publicly on GitHub for review.",
  },
};
