import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiFastapi, SiSpacy } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

export const links = [
  { id: nanoid(), href: "#home", text: "Home" },
  { id: nanoid(), href: "#skills", text: "Skills" },
  { id: nanoid(), href: "#about", text: "About" },
  { id: nanoid(), href: "#projects", text: "Projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in crafting responsive, user-centric websites using HTML5 and CSS3, focusing on cross-browser compatibility and SEO best practices.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript, with expertise in building dynamic and interactive web applications using ES6+ features.",
  },
  {
    id: nanoid(),
    title: "React & Next.js",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced in React and Next.js, creating scalable front-end applications with a focus on performance optimization and best practices.",
  },
  {
    id: nanoid(),
    title: "Node.js & Express.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in developing secure, scalable back-end services using Node.js and Express.js, with a focus on RESTful API design.",
  },
  {
    id: nanoid(),
    title: "Python & FastAPI",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Specialized in Python and FastAPI, delivering high-performance back-end services and real-time data processing solutions.",
  },
  {
    id: nanoid(),
    title: "Docker & CI/CD",
    icon: <FaDocker className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Docker, CI/CD pipelines, and DevOps practices, ensuring seamless integration and deployment in cloud environments.",
  },
  {
    id: nanoid(),
    title: "MongoDB & NoSQL",
    icon: <SiMongodb className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in MongoDB and NoSQL databases, optimizing data models and ensuring high availability for scalable applications.",
  },
  {
    id: nanoid(),
    title: "Artificial Intelligence & Machine Learning",
    icon: <GiArtificialIntelligence className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in AI and ML technologies, with experience in NLP, computer vision, and real-time data analysis using tools like spaCy and OpenCV.",
  },
  {
    id: nanoid(),
    title: "MySQL & SQL",
    icon: <FaDatabase className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in MySQL and SQL databases, with a focus on database design, query optimization, and secure data management.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alamissaoui.me/ecommerce-platform",
    github: "https://github.com/declared-as-ala/ecommerce-platform",
    title: "E-commerce Platform",
    text: "Developed a Next.js-based e-commerce platform with a secure payment gateway, user account management, and an intuitive admin interface.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alamissaoui.me/communication-platform",
    github: "https://github.com/declared-as-ala/communication-platform",
    title: "Real-time Communication Platform",
    text: "Built a real-time communication platform with user group management, instant messaging, and real-time updates using Node.js and React.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alamissaoui.me/invoice-management",
    github: "https://github.com/declared-as-ala/invoice-management",
    title: "Invoice Management System",
    text: "Engineered a comprehensive invoice and quotation management system with a React-based dashboard for managing products, users, and clients.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alamissaoui.me/job-matching-system",
    github: "https://github.com/declared-as-ala/job-matching-system",
    title: "AI-Driven Job Matching System",
    text: "Developed an AI-driven system to match candidates with job descriptions, enhancing recruitment efficiency using React, Redux, and spaCy.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://alamissaoui.me/ai-security-monitoring",
    github: "https://github.com/declared-as-ala/ai-security-monitoring",
    title: "AI Security Monitoring System",
    text: "Developed an AI-driven security camera monitoring system with real-time alerts for potential threats, utilizing FastAPI and OpenCV.",
  },
];
