const SearchMap = [
  {
    terms: ["about me", "bio"],
    parent: false,
    component: "./other/about.jsx"
  },
  {
    terms: ["contact"],
    parent: false,
    component: "./contact/contact.jsx"
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
    component: "./work/project.jsx"
  },
  {
    terms: ["profiles", "social media", "links"],
    parent: "contact",
    component: "./contact/profiles.jsx"
  },
  {
    terms: ["projects", "work"],
    parent: false,
    component: "./work/work.jsx"
  },
  {
    terms: ["relax"],
    parent: "projects",
    component: "./work/project.jsx"
  },
  {
    terms: ["shiftfour"],
    parent: "projects",
    component: "./work/project.jsx"
  },
  {
    terms: ["skills", "languages"],
    parent: false,
    component: "./work/skills.jsx"
  },
  {
    terms: ["wikipedia crawler"],
    parent: "projects",
    component: "./work/project.jsx"
  }
];

export default SearchMap;
