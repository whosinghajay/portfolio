import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaNodeJs } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import groupMessaging from "@/public/groupMessaging.png";
import portfolio from "@/public/portfolio.png";
import threadClone from "@/public/threadClone.jpg";
import taskify from "@/public/taskify.png";
import foodDelivery from "@/public/foodDelivery.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "India",
    description:
      "In 2023, I graduated and initiated self-improvement during college, actively enhancing skills for a well-rounded professional foundation.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "India",
    description:
      "I commenced my journey with front-end technologies—HTML, CSS, and JavaScript. Subsequently, I transitioned to React, concurrently fostering an interest in backend development.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "India",
    description:
      "As a self-driven full-stack developer, I proficiently utilize React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities and collaborations.",
    icon: React.createElement(FaNodeJs),
    date: "present",
  },
  // {
  //   title: "Mobile App Developer",
  //   location: "India",
  //   description:
  //     "Evolved from MERN and Next.js web development to immerse in React Native, now crafting seamless cross-platform experiences in the dynamic realm of mobile app development.",
  //   icon: React.createElement(GiSmartphone),
  //   date: "present",
  // },
] as const;

export const projectsData = [
  {
    title: "Group Messaging App",
    description:
      "Streamlined communication for teams with real-time chat, multimedia sharing, and user-friendly features for efficient collaboration and connection.",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: groupMessaging,
    githubLink: "https://github.com/whosinghajay/discord-clone",
  },
  {
    title: "Thread Clone",
    description:
      "Recreating dynamic threaded conversations with a modern touch, fostering engaging and organized communication in a user-friendly interface.",
    tags: ["React", "Nodejs", "Express", "MongoDB"],
    imageUrl: threadClone,
    githubLink: "https://github.com/whosinghajay/ThreadClone",
  },
  {
    title: "Taskify",
    description:
      "Efficient task management web app: streamline productivity with intuitive design and seamless collaboration features.",
    tags: ["React", "Next.js", "Tailwind", "Typescript"],
    imageUrl: taskify,
    githubLink: "https://github.com/whosinghajay/taskify",
  },
  // {
  //   title: "Personal Portfolio",
  //   description:
  //     "Dynamic personal portfolio showcasing my expertise in Web development and a passion for continuous learning.",
  //   tags: ["React", "Next.js", "Tailwind", "Framer", "Typescript"],
  //   imageUrl: portfolio,
  //   githubLink: "https://github.com/whosinghajay/portfolio-nextjs",
  // },
  // {
  //   title: "Food Delivery(Mobile App)",
  //   description:
  //     "Crafted a visually appealing Food Delivery mobile app UI using React Native for a delightful user experience.",
  //   tags: ["React Native", "Tailwind", "Typescript"],
  //   imageUrl: foodDelivery,
  //   githubLink: "https://github.com/whosinghajay/foodDelivery",
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express.js",
  "Framer Motion",
  "Shadcn/UI",
  "C++",
  "React Native",
] as const;
