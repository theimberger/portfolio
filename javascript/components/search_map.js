import About from './other/about.jsx';
// import Index from './other/index.jsx';
import Project from './work/project.jsx';
import Projects from './work/projects.jsx';
import Contact from './contact/contact.jsx';
import Profiles from './contact/profiles.jsx';


const SearchMap = [
  {
    terms: ["about me", "bio"],
    parent: false,
    component: About
  },
  {
    terms: ["contact"],
    parent: false,
    component: Contact
  },
  {
    terms: ["experience", "resume", "work history", "background"],
    parent: false,
    component: "./work/experience.jsx"
  },
  {
    terms: ["index", "all"],
    parent: false,
    component: "./other/index.jsx"
  },
  {
    terms: ["nhof", "name hall of fame"],
    parent: "projects",
    component: Project
  },
  {
    terms: ["profiles", "social media", "links"],
    parent: "contact",
    component: Profiles
  },
  {
    terms: ["projects", "work", "portfolio"],
    parent: false,
    component: Projects
  },
  {
    terms: ["relax"],
    parent: "projects",
    component: Project
  },
  {
    terms: ["shiftfour"],
    parent: "projects",
    component: Project
  },
  {
    terms: ["skills", "languages"],
    parent: false,
    component: "./work/skills.jsx"
  },
  {
    terms: ["wikipedia crawler"],
    parent: "projects",
    component: Project
  }
];

export default SearchMap;
