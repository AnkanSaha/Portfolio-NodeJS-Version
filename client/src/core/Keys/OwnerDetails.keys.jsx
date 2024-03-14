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
import MongoDBImage from "@assets/Icons/Skill_Logo/mongodb.png"; // MongoDB Logo
import NginxImage from "@assets/Icons/Skill_Logo/nginx.png"; // Nginx Logo
import NodeJSImage from "@assets/Icons/Skill_Logo/nodejs.png"; // NodeJS Logo
import ReactImage from "@assets/Icons/Skill_Logo/react.png"; // React Logo
import ShellImage from "@assets/Icons/Skill_Logo/shell.png"; // Shell Logo
import TailwindImage from "@assets/Icons/Skill_Logo/tailwind.png"; // TailwindCSS Logo
import DenoImage from "@assets/Icons/Skill_Logo/deno.png"; // Deno Logo
import ServerlessImage from "@assets/Icons/Skill_Logo/serverless.png"; // Serverless Logo

// Global App Owner Details
export const OwnerName = "Ankan Saha"; // Global App Owner Name
export const OwnerEmail = "ankansahaofficial@gmail.com"; // Global App Owner Email
export const OwnerLinkedIn = "theankansaha"; // Global App Owner LinkedIn
export const OwnerFacebook = "theankansaha"; // Global App Owner Facebook
export const OwnerYoutube = "@javascriptalks"; // Global App Owner Youtube
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
  "template engines (EJS, Pug)",
  "Azure (Basic)",
  "Tailwind CSS",
  "Deno (Basic)",
  "Serverless (Basic)",
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
  },
  {
    name: "MongoDB",
    Icons: MongoDBImage,
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    Specialty: ["Database", "NoSQL"],
  },
  {
    name: "Nginx",
    Icons: NginxImage,
    description:
      "Nginx is a web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache. The software was created by Igor Sysoev and first publicly released in 2004.",
    Specialty: ["Web Server", "Reverse Proxy"],
  },
  {
    name: "NodeJS",
    Icons: NodeJSImage,
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    Specialty: ["Backend", "API"],
  },
  {
    name: "React",
    Icons: ReactImage,
    description:
      "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
    Specialty: ["Frontend", "UI"],
  },
  {
    name: "Linux Shell Scripting",
    Icons: ShellImage,
    description:
      "A shell script is a computer program designed to be run by the Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be scripting languages.",
    Specialty: ["Automation", "Scripting"],
  },
  {
    name: "Tailwind CSS",
    Icons: TailwindImage,
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
    Specialty: ["CSS", "Utility"],
  },
  {
    name: "Deno",
    Icons: DenoImage,
    description:
      "Deno is a simple, modern, and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It is a secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.",
    Specialty: ["Backend", "Security"],
  },
  {
    name: "Serverless",
    Icons: ServerlessImage,
    description:
      "Serverless computing is a cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity.",
    Specialty: ["Cloud Computing", "DevOps"],
  },
];

// Owner Education Details
export const OwnerEducation = [
  {
    Date: "JANUARY 2013 - JUL 2019",
    SchoolName: "Daluabari Kalipur Anchalik Shiksha Pratishtan",
    Degree: "Secondary",
    Description:
      "I have completed my secondary education from Daluabari Kalipur Anchalik Shiksha Pratishtan, a school in my hometown. I have been a good student in my school. I Scored 282 out of 700 in my secondary examination. that is 40.28%. i know it is not a good score just because of my wrong decision i got this score. but i have learned from my mistake and i will not repeat it again.",
  },
  {
    Date: "JULY 2019 - JUN 2021",
    SchoolName: "Daluabari Kalipur Anchalik Shiksha Pratishtan (H.S)",
    Degree: "Higher Secondary",
    Description:
      "I have completed my higher secondary education from Daluabari Kalipur Anchalik Shiksha Pratishtan, a school in my hometown. I Scored 263 out of 500 in my higher secondary examination. that is 52.6%. i know it is not a good score just because of i passed my higher secondary during the covid-19 pandamic and my 12th exam was cancelled and i got this score based on my 10th exam.",
  },
  {
    Date: "JULY 2021 - PRESENT",
    SchoolName: "University of Kalyani",
    Degree: "Bachelor of Arts (B.A)",
    Description:
      "I am currently pursuing my Bachelor of Arts (B.A) from University of Kalyani, a university in West Bengal, India. I was Studying Bengali, Political Science & History. It was my 6th & last semester, throughout my college is deferent than any other college student. i was studying in B.A but i have high interest in computer science and i have learned many things from the internet and i have started my career as a web developer.",
  },
];
