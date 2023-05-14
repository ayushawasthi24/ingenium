import {
  mobile,
  backend,
  creator,
  web,
  arcesium,
  chisquarex,
  devfolio,
  filecoin,
  mowito,
  polygon,
  replit,
  solana,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "sponsors",
    title: "Sponsors",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

const services = [
  {
    title: "Workshops",
    icon: web,
  },
  {
    title: "RoboWars",
    icon: mobile,
  },
  {
    title: "TechTalks",
    icon: backend,
  },
  {
    title: "Hackathons",
    icon: creator,
  },
];

const sponsors = [
  {
    name: "MOWITO",
    icon: mowito,
  },
  {
    name: "ARCESIUM",
    icon: arcesium,
  },
  {
    name: "CHI SQUAREX",
    icon: chisquarex,
  },
  {
    name: "Devfolio",
    icon: devfolio,
  },
  {
    name: "Polygon",
    icon: polygon,
  },
  {
    name: "Filecoin",
    icon: filecoin,
  },
  {
    name: "Replit",
    icon: replit,
  },
  {
    name: "Solana",
    icon: solana,
  },
];

const events = [
  {
    title: "Competitions",
    points: [
      "Buckle up your seat belts and get ready to take part in various competitions in Ingenium orgranized for every domain. Register Quickly.",
    ],
  },
  {
    title: "Tech Talks",
    points: [
      "Get to know about some new technologies, network with some people of other collges and various working professionals through various tech talks. Register Now.",
    ],
  },
  {
    title: "Workshops",
    points: [
      "Polish your tech skills, learn new things, find new persons. Time to increase your curiostiy. Register for various workshops in Ingenium.",
    ],
  },
  {
    title: "Start-Up Expo",
    points: [
      "Starup expo is an event that brings together startups, investors, and other stakeholders in the starup ecosysstem. It features exhibitions, demonstrations, and presentations by startups, as well as networking opportunities and panel discussions with industry experts.",
    ],
  },
  {
    title: "Tech Exhibits",
    points: [
      "TECH EXHIBITS ARE EVENTS OR EXHIBITIONS THAT SHOWCASE THE LATEST TECHNOLOGY AND INNOVATIONS IN A PARTICULAR INDUSTRY OR SECTOR. THEY TYPICALLY FEATURE DEMONSTRATIONS, PRESENTATIONS, AND HANDS-ON EXPERIENCES WITH THE LATEST TECHNOLOGY PRODUCTS, SERVICES, AND SOLUTIONS.",
    ],
  },
];

export { services, sponsors, events };
