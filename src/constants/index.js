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
  stone,
  todo,
  jobportal,
  cgpa,
  mailsender,
  food,
  ecom,
} from "../assets";
import postman from "../assets/tech/postman.png";
import sql from "../assets/tech/sql.png";
import intelij from "../assets/tech/intelij.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "FullStack Developer", icon: mobile },
  { title: "React Developer", icon: web },
  { title: "Backend Developer", icon: creator },
  { title: "Web Designer", icon: tailwind },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: creator },
  { name: "React JS", icon: reactjs },
  { name: "Spring", icon: mobile },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "IntelliJ", icon: intelij },
  { name: "MongoDB", icon: mongodb },
  { name: "Postman", icon: postman },
  { name: "Git", icon: git },
  { name: "SQL", icon: sql },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Local Startup",
    icon: web,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Assisted in developing and maintaining web applications using HTML, CSS, and JavaScript.",
      "Contributed to the implementation of responsive design and cross-browser compatibility.",
      "Participated in team meetings and provided feedback on project progress.",
      "Gained practical experience in version control and collaborative development environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stone Paper Scissors",
    description: "A classic game of rock, paper, scissors implemented with interactive features.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
    ],
    image: stone,
    source_code_link: "https://github.com/yourusername/paperscissors",
  },
  {
    name: "Food App",
    description: "An application for exploring and ordering food from various restaurants with Stripe payment.",
    tags: [
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Stripe", color: "orange-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
      { name: "JWT & OAuth2", color: "green-text-gradient" },
    ],
    image: food,
    source_code_link: "https://github.com/yourusername/foodapp",
  },
  {
    name: "E-Commerce App",
    description: "A comprehensive e-commerce platform with features like product listing, shopping cart, and checkout.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: ecom,
    source_code_link: "https://github.com/yourusername/ecommerceapp",
  },
  {
    name: "Email Sender",
    description: "An application to send emails using a Java backend and React.",
    tags: [
      { name: "Java", color: "orange-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
    ],
    image: mailsender,
    source_code_link: "https://github.com/yourusername/emailsender",
  },
  {
    name: "Job Portal",
    description: "A platform for job seekers to search and apply for jobs and for recruiters to post job openings.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
    ],
    image: jobportal,
    source_code_link: "https://github.com/yourusername/jobportal",
  },
  {
    name: "CGPA Calculator",
    description: "An application to calculate CGPA based on grades and credit hours using JWT and MySQL for storing student data.",
    tags: [
      { name: "Spring Boot", color: "green-text-gradient" },
      { name: "Spring Security", color: "green-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "java MailSender", color: "orange-text-gradient" },
      { name: "MySQL", color: "orange-text-gradient" },
      { name: "JWT & OAuth2", color: "green-text-gradient" },
    ],
    image: cgpa,
    source_code_link: "https://github.com/yourusername/cgpacalculator",
  },
  {
    name: "ToDo List",
    description: "A task management application for creating, updating, and deleting tasks.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
    ],
    image: todo,
    source_code_link: "https://github.com/yourusername/todolist",
  },
];

export { services, technologies, experiences, testimonials, projects };
