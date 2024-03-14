/* eslint-disable react-refresh/only-export-components */
import OwnerImage from "@assets/Images/Ankan Saha.png"; // Global App Owner Picture

// Import Skill Icons
import JavascriptImage from "@assets/Icons/Skill_Logo/javascript.png"; // Javascript Logo
import TypescriptImage from "@assets/Icons/Skill_Logo/typescript.png"; // Typescript logo
import AzureImage from "@assets/Icons/Skill_Logo/azure.png"; // Azure Logo
import DockerImage from "@assets/Icons/Skill_Logo/docker.png"; // Docker Logo
import ExpressJSImage from "@assets/Icons/Skill_Logo/expressjs.png"; // ExpressJS Logo
import GitImage from "@assets/Icons/Skill_Logo/git.png"; // Git Logo
import GithubImage from "@assets/Icons/Skill_Logo/github.png"; // Github Logo

// Global App Owner Details
export const OwnerName = "Ankan Saha"; // Global App Owner Name
export const OwnerEmail = "ankansahaofficial@gmail.com"; // Global App Owner Email
export const OwnerLinkedIn = "theankansaha"; // Global App Owner LinkedIn
export const OwnerYoutube = "UC6vLzWN-UCHe28ZMyHkNJf91MKLt-8Eg"; // Global App Owner Youtube
export const OwnerTwitter = "theankansaha"; // Global App Owner Twitter
export const OwnerGithub = "AnkanSaha"; // Global App Owner Github
export const OwnerPicture = OwnerImage; // Import Typescript Icon


export const OwnerSkills = [
    "React (Basic)",
    "Javascript",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Nginx",
    "Linux Shell Scripting",
    "Docker",
    "Typescript",
    "Git & Github",
  ]; // Global Owner Skills

  
  // Global Owner Skills Icons with details
export const OwnerSkillsIcons = [
    {
      name: "Javascript",
      Icons: JavascriptImage,
      description:
        "JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
      Specialty: ["Backend", "Frontend"],
    },
    {
      name: "Typescript",
      Icons: TypescriptImage,
      description:
        "TypeScript is a superset of JavaScript that adds static typing, enhancing code clarity and catching errors early. It compiles to plain JavaScript and supports modern ECMAScript features, making large-scale web development more manageable.",
      Specialty: ["Static Typing", "ES6 Features"],
    },
    {
      name: "Azure",
      Icons: AzureImage,
      description:
        "Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
      Specialty: ["Cloud Computing", "DevOps"],
    },
    {
      name: "Docker",
      Icons: DockerImage,
      description:
        "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
      Specialty: ["Containerization", "DevOps"],
    },
    {
      name: "ExpressJS",
      Icons: ExpressJSImage,
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software. It is designed for building web applications and APIs.",
      Specialty: ["Backend", "API"],
    },
    {
      name: "Git",
      Icons: GitImage,
      description:
        "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
      Specialty: ["Version Control", "Collaboration"],
    },
    {
      name: "Github",
      Icons: GithubImage,
      description:
        "GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management functionality of Git, plus its own features.",
      Specialty: ["Version Control", "Collaboration"],
    }
  ];
  