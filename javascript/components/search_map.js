import About from './other/about.jsx';
// import Index from './other/index.jsx';
import Project from './work/project.jsx';
import Experience from './experience/experience.jsx';
import Education from './experience/education.jsx';
import Employment from './experience/employment.jsx';
import Projects from './work/projects.jsx';
import Skills from './work/skills.jsx';
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
    terms: ["education"],
    parent: "experience",
    component: Education
  },
  {
    terms: ["employment"],
    parent: "experience",
    component: Employment
  },
  {
    terms: ["experience", "resume", "background"],
    parent: false,
    component: Experience
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
    terms: ["projects", "work", "recent work", "portfolio"],
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
    component: Skills
  },
  {
    terms: ["wikipedia crawler"],
    parent: "projects",
    component: Project
  }
];

export default SearchMap;
