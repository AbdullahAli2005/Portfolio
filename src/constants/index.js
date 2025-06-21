import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  sql,
  firebase,
  flutter,
  supabase,
  vibeconnect1,
  vibeconnect2,
  vibeconnect3,
  neurachat1,
  neurachat2,
  neurachat3,
  cryptovault1,
  cryptovault2,
  cryptovault3,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "PostgreSQL",
    icon: sql,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "supabase",
    icon: supabase,
  },
];

const projects = [
  {
    name: "VibeConnect",
    description:
      "VibeConnect is a full-featured real-time chat application built using Flutter and Firebase. It supports seamless user authentication, instant messaging, and advanced image sharing capabilities through Cloudinary integration. The app ensures optimal performance and smooth UX across devices, making it ideal for social or team collaboration use cases. Thoughtful UI, message timestamps, and async media handling reflect real-world scalability and production-readiness.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "cloudinary", color: "pink-text-gradient" },
    ],
    images: [vibeconnect1, vibeconnect2, vibeconnect3],
    source_code_link: "https://github.com/AbdullahAli2005/VibeConnect.git",
  },
  {
    name: "NeuraChat",
    description:
      "NeuraChat is an innovative AI-powered chat app built with Flutter, featuring a conversational chatbot powered by Google's Gemini API, an AI image generator integrated via HuggingFace, and a clean, responsive UI. The app bridges modern AI with intuitive UX, allowing users to interact naturally with AI, generate images from prompts, and explore futuristic possibilities. Designed with modular architecture, it's a robust example of AI integration in mobile Flutter apps.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "geminiapi", color: "green-text-gradient" },
      { name: "huggingface", color: "pink-text-gradient" },
    ],
    images: [neurachat1, neurachat2, neurachat3],
    source_code_link: "https://github.com/AbdullahAli2005/NeuraChat.git",
  },
  {
    name: "CryptoVault",
    description:
      "CryptoVault is a visually engaging and data-driven crypto tracking application developed in Flutter. Users can authenticate securely via Firebase and monitor real-time cryptocurrency metrics including current value, market cap, and 24h, 7d, and 30d historical trends. The coin detail screen provides rich insights with a clean interface. The app demonstrates real-world API integration, reactive UI design, and effective state management — ideal for fintech and data-centric mobile apps.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "restapi", color: "pink-text-gradient" },
    ],
    images: [cryptovault1, cryptovault2, cryptovault3],
    source_code_link: "https://github.com/AbdullahAli2005/CryptoVault.git",
  },
];



export { services, technologies, projects };
