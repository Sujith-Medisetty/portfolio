//Used accross multiple Screens

export const MyName = "Sujith Medisetty";
export const MyRole = "Full-Stack Developer";

// Header.jsx
export const navItems = [
  { label: "Home", path: "#home" },
  { label: "Certifications", path: "#Certifications" },
  { label: "Education", path: "#Education" },
  { label: "Experience", path: "#Experience" },
  { label: "Skills", path: "#Skills" },
  // { label: "Profile", path: "#profile" },
  { label: "Projects", path: "#projects" },
  { label: "Contact", path: "#contact" },
];

// Introduction.jsx
export const IntroProfessionalDetails = [
  {
    text: "Linked-In",
    href: "https://www.linkedin.com/in/sujith-m-185b01237/",
  },
  {
    text: "Download CV",
    href: "/portfolio/Resume.pdf",
  },
];

export const IntroDesc =
  "I am a self-starter with strong interpersonal skills, seeking a position in a software company. With over 4 years of experience, I work efficiently both as an individual contributor and as part of a team. I embrace new challenges and think creatively to find out-of-the-box solutions to problems. My experience spans various technologies, including HTML, CSS, React.js, Spring Framework, JavaScript, MongoDB, MySQL, Ruby on Rails, Mockito, Flask, AWS, Docker, and Jenkins. I am proficient in coding with Java, C++, and Python. I believe in character, values, vision, and action. As a quick learner, I am committed to learning from my mistakes, a virtue that I believe will propel me forward in my life and career.";

// About.jsx
export const AboutDesc =
  "I am a self-starter with strong interpersonal skills, seeking a position in a software company. With over 4 years of experience, I work efficiently both as an individual contributor and as part of a team. I embrace new challenges and think creatively to find out-of-the-box solutions to problems. My experience spans various technologies, including HTML, CSS, React.js, Spring Framework, JavaScript, MongoDB, MySQL, Ruby on Rails, Mockito, Flask, AWS, Docker, and Jenkins. I am proficient in coding with Java, C++, and Python. I believe in character, values, vision, and action. As a quick learner, I am committed to learning from my mistakes, a virtue that I believe will propel me forward in my life and career.";

//Profile.jsx
export const ProfileContentBoxDescSize = 50;

export const ProfileDetails = [
  {
    category: "Certifications",
    icon: "SchoolIcon",
    timelines: [
      {
        title: "AWS Certified Developer – Associate ",
        org: "",
        startYear: "",
        endYear: "",
        desc: "",
        link: "https://www.credly.com/badges/eb0dc14b-1932-4823-98fa-247af41f19fb"
      },
      {
        title: "Database Programming with SQL from Oracle Academy",
        org: "",
        startYear: "",
        endYear: "",
        desc: "",
        link: "https://github.com/Sujith-Medisetty/certificates/blob/main/OracleSQL_certificate.pdf"
      },
    ],
  },
  {
    category: "Education",
    icon: "SchoolIcon",
    timelines: [
      {
        title: "Graduation",
        org: "University Of Memphis, Memphis, TN38152",
        startYear: "",
        endYear: "",
        desc: "Completed my Master's in Computer Science at the University of Memphis with a CGPA of 3.8, gaining expertise in software development and system design",
      },
      {
        title: "UnderGraduation",
        org: "Anurag Group Of Institutions, Hyderabad, TG, India",
        startYear: "",
        endYear: "",
        desc: "Graduated with a Bachelor of Technology degree in Information Technology from Anurag Group Of Institutions, Hyderabad, India in 2021 with an aggregate of 3.7",
      },
    ],
  },
  {
    category: "Experience",
    icon: "WorkHistoryIcon",
    timelines: [
      {
        title: "Software Development Engineer",
        org: "Sabre Corporation",
        startYear: "Dec 2024",
        endYear: "Present",
        desc: "Contributing to the development of internal tools and services, including an EDIFACT parser for troubleshooting customer issues. Responsible for designing Spring Boot services, automating data processing, and optimizing React-based dashboards to enhance real-time data visualization and debugging efficiency.",
      },
      {
        title: "Software Development Engineer",
        org: "Amadeus Software Labs",
        startYear: "Feb 2019",
        endYear: "Dec 2022",
        desc: "Developed Java Spring Boot APIs integrated with AWS RDS, contributing to real-time data delivery. Worked on survey and feedback platforms, real-time feed visualization tools, and refactored monolithic applications into microservices to improve maintainability. Built reusable UI components in React, optimizing performance and state management.",
      },
    ],
  },
  {
    category: "Skills",
    icon: "DisplaySettingsIcon",
    timelines: [
      {
        title: "Languages",
        desc: "Java, Python, C, C++, HTML, CSS, JavaScript, JQuery, SQL",
      },
      {
        title: "Frameworks & Libraries",
        desc: "React JS, Spring Boot, Spring Security, Spring JPA, Hibernate",
      },
      {
        title: "Cloud, DevOps, Build & config tools..etc",
        desc: "AWS (SQS, SNS, S3, EC2, Lambda, CloudFormation, ECS, RDS, Code Pipeline, Code Deploy, Code Build, Kinesis Data streams), Docker, Jenkins",
      },
    ],
  },
];

// Project.jsx
export const ProjectContentBoxDescSize = 20;

export const projects = [
  {
    title: "Restaurent Management System",
    desc: "Developed a comprehensive Restaurant Management System consisting of Customer, Admin, Kitchen Master, and Supervisor modules. Customers can seamlessly browse, customize, and place orders via an intuitive interface while Admins possess full control over menu items, staff, and supervisors. Chefs adeptly fulfill orders, and Supervisors handle inquiries",
    techStack: ["Angular 10", "Spring Boot", "Hibernate 5.3", "Log4J"],
    url: "https://github.com/Sujith-Medisetty/Restaurant-Management-System",
  },
  {
    title: "Information-Security-Management-System",
    desc: "A foundational web application prioritizing security to thwart potential breaches. Employed AES encryption for secure resource storage, and encoded passwords and keys in the database. Only authorized personnel can access portals. Implemented CAPTCHA for DoS attack prevention, fortified against SQL injections with parameterized queries and JPA. Incorporated notification functionality for private communication. The site operates over HTTPS using a self-signed and trusted certificate. Committed to a secure user experience.",
    techStack: ["Angular", "Spring Boot", "Hibernate", "Spring Security"],
    url: "https://github.com/Sujith-Medisetty/ISMS",
  },
  {
    title: "Self-Portfolio",
    desc: "Explore my professional journey, including a detailed Profile, accomplished Projects, and background About me",
    techStack: ["React JS", "Material UI"],
    url: "https://github.com/Sujith-Medisetty/portfolio",
  },
  {
    title: "Weather Tracker",
    desc: "Reports Current Weather Condition by accessing Geo Location , provides 7-day forecast information and hourly forecast for next 24 hours. (This application works on both Android and IOS)",
    techStack: ["Flutter", "SQ-Lite"],
    url: "https://github.com/Sujith-Medisetty/Weather_App",
  },
  {
    title: "Retail Management System",
    desc: "This application maintains the statistics of Teller and helps supervisors to monitor their performance.",
    techStack: ["Spring Boot", "MY-SQL Database", "Bootstrap & JS"],
    url: "https://github.com/Sujith-Medisetty/Spring-RMS-1",
  },
];

// contact.jsx

export const myEmail = "sujithmedisetty012@gmail.com";
export const phone = "+1 (901)-264-7157";
