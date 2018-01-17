import About from './other/about.jsx';
import Index from './other/index.jsx';

import Experience from './experience/experience.jsx';
import Education from './experience/education.jsx';
import Employment from './experience/employment.jsx';
import Skills from './experience/skills.jsx';
import Additional from './experience/additional.jsx';

import Project from './work/project.jsx';
import Projects from './work/projects.jsx';

import Contact from './contact/contact.jsx';
import Profiles from './contact/profiles.jsx';
import Email from './contact/email.jsx';


const SearchMap = [

  // experience
  {
    terms: ["experience", "resume", "background"],
    parent: false,
    component: Experience
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
    terms: ["additional experience"],
    parent: "experience",
    component: Additional
  },
  {
    terms: ["skills", "languages"],
    parent: "experience",
    component: Skills
  },

  // projects
  {
    terms: ["projects", "work", "recent work", "portfolio"],
    parent: false,
    component: Projects
  },
  {
    terms: ["nhof", "name hall of fame"],
    parent: "projects",
    component: Project
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
    terms: ["wikipedia crawler"],
    parent: "projects",
    component: Project
  },

  //contact
  {
    terms: ["contact", "get in touch"],
    parent: false,
    component: Contact
  },
  {
    terms: ["profiles", "social media", "links"],
    parent: "contact",
    component: Profiles
  },
  {
    terms: ["email & phone", "phone"],
    parent: "contact",
    component: Email
  },

  //other
  {
    terms: ["about me", "bio"],
    parent: false,
    component: About
  },
  {
    terms: ["index", "all"],
    parent: false,
    component: Index
  }

];

export default SearchMap;
