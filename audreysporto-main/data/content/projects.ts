import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Ruang Dosen",
    desc: "Web-based Academic Information System (SIA) prototype designed specifically for lecturers (-⊙⩊⊙)𝇌 ✎",
    img: "/static/projects/ruangdosen.png",
    link: "https://ruangdosen.space/",
    github: "https://github.com/authcar/Ruang-Dosen",
    tags: ["TypeScript", "JavaScript", "CSS"],
  },
  {
    id: 1,
    title: "SLIKA PhotoBooth",
    desc: "Interactive online photobooth website with early 2000s game aesthetic.",
    img: "/static/projects/slika.png",
    github: "https://github.com/authcar/SLIKA",
    tags: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Tsuki-Menstrual Cycle Tracker",
    desc: "Women's Cycle Tracker",
    img: "/static/projects/react-emoji-search.png",
    github: "https://github.com/authcar/Period-tracking",
    tags: ["Dart"],
  },
  {
    id: 3,
    title: "Audrey's Inventory",
    desc: "A simple CRUD inventory management system built with PHP and MySQL",
    img: "/static/projects/audreysinvetory.png",
    github: "https://github.com/authcar/AudreysInventory",
    tags: ["PHP", "Blade"],
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    desc: "",
    img: "/static/projects/madmovies.png",
    github: "https://github.com/authcar/movie-recommendation",
    tags: ["TypeScript", "Javascript", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "8 Ball in your CLI",
    desc: "An 8 ball simulation in your CLI built with Rust!",
    img: "/static/projects/8ball-rust.png",
    github: "https://github.com/BraydenTW/8ball-rust",
    tags: ["Rust", "CLI", "Game"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
