import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Solutions",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "Brototype",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Enhanced application performance through code refactoring and query optimization, improving data retrieval by 30%.",
      "Developed and maintained web applications using Node.js, Express.js, React, and MongoDB.",
      "Collaborated with a cross-functional team of designers, developers, and managers to deliver high-quality products.",
      "Implemented real-time communication features using Socket.io for seamless user experience.",
    ],
  },
  {
    title: "Bachelor of Computer Applications",
    company_name: "University of Calicut",
    icon: tesla,  // Replace with an appropriate icon
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2023",
    points: [
      "Completed a Bachelor of Computer Applications, focusing on various aspects of software development.",
      "Developed a college admission management application using Flutter and Firebase as a key project.",
      "Gained hands-on experience with front-end and back-end technologies through academic projects.",
      "Engaged in coursework and projects involving data structures, algorithms, and application design.",
    ],
  },
  {
    title: "Higher Secondary in Computer Science",
    company_name: "G.H.S.S. Niramaruthur",
    icon: shopify,  // Replace with an appropriate icon
    iconBg: "#383E56",
    date: "Jan 2018 - Feb 2020",
    points: [
      "Completed Higher Secondary education with a focus on Computer Science.",
      "Studied fundamental programming languages including C++ and Java.",
      "Gained a strong foundation in programming basics and computer science concepts.",
      "Worked on various projects and assignments that enhanced problem-solving and coding skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Muhsin's expertise in web development transformed our project into a polished and highly functional application. His attention to detail and creativity truly made a difference.",
    name: "Aisha",
    designation: "Product Manager",
    company: "Brototype",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    testimonial:
      "Working with Muhsin was a game-changer for us. His ability to adapt and deliver high-quality solutions within tight deadlines was remarkable. Muhsin is a brilliant guy.",
    name: "Rajesh",
    designation: "Colleague",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    testimonial:
      "Muhsin's contributions to our e-commerce platform were exceptional. His skill in integrating complex features and ensuring a seamless user experience exceeded our expectations.",
    name: "Neha",
    designation: "colleague",
    company: "DesignWorks",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];


const projects = [
  {
    name: "Ask Expert",
    description:
      "A robust platform for users to connect with industry experts across various fields. Features include real-time chat, video calling, and secure user authentication.",
    tags: [
      {
        name: "mern-stack",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,  // Replace with the actual image
    source_code_link: "https://github.com/muhsinachipra/AskExpert_Frontend",
    live_link: "https://ask-expert-frontend.vercel.app/",  // Replace with the actual live link
  },
  {
    name: "VatchShop",
    description:
      "An e-commerce platform for selling watches, featuring secure payment options, responsive design, and real-time order tracking.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,  // Replace with the actual image
    source_code_link: "https://github.com/muhsinachipra/vatchShop_Ecommerce",
    live_link: "https://vatchshopecommerce-production.up.railway.app/",  // Replace with the actual live link
  },
  {
    name: "Article Feed",
    description:
      "A dynamic platform where users can view, add, edit, and delete articles. Features include responsive design and user-friendly interfaces.",
    tags: [
      {
        name: "mern-stack",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,  // Replace with the actual image
    source_code_link: "https://github.com/muhsinachipra/ArticlesFeed",
    live_link: "https://articles-feed-rktvalb32-muhsin-achipras-projects.vercel.app",  // Replace with the actual live link
  },
];

export { services, technologies, experiences, testimonials, projects };
