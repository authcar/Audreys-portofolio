import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Ruang Dosen",
    desc: "Web-based Academic Information System (SIA) prototype designed specifically for lecturers",
    img: "/static/projects/ruangdosen.png",
    link: "https://ruangdosen.space/",
    github: "https://github.com/authcar/Ruang-Dosen",
    tags: ["TypeScript", "JavaScript", "HTML","CSS"],
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
    title: "Audrey's Inventory",
    desc: "A simple CRUD inventory management system built with PHP and MySQL",
    img: "/static/projects/audreysinvetory.png",
    github: "https://github.com/authcar/AudreysInventory",
    tags: ["PHP", "Blade"],
  },
  {
    id: 3,
    title: "Movie Recommendation System",
    desc: "",
    img: "/static/projects/madmovies.png",
    github: "https://github.com/authcar/movie-recommendation",
    tags: ["TypeScript", "Javascript", "HTML", "CSS"],
  },
  {
    id: 4,
    title: "Tsuki",
    desc: "Menstrual Cycle Tracker",
    img: "/static/projects/tsuki.png",
    github: "https://github.com/authcar/Period-tracking",
    tags: ["Dart"],
  },
  {
    id: 5,
    title: "More to come!",
    desc: "The chef is cooking..",
    img: "",
    github: "",
    tags: ["?"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
