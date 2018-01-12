const SearchMap = [
  {
    terms: ["contact"],
    parent: false,
    component: "./contact/contact.jsx"
  },
  {
    terms: ["experience", "work history"],
    parent: false,
    component: "./work/experience.jsx"
  },
  {
    terms: ["profiles", "social media", "links"],
    parent: "contact",
    component: "./contact/profiles.jsx"
  },
  {
    terms: ["skills"],
    parent: false,
    component: "./work/skills.jsx"
  },
  {
    terms: ["work", "projects"],
    parent: false,
    component: "./work/work.jsx"
  }
];

export default SearchMap;
