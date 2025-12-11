import React from "react";
import Image from "next/image";
import Link from "next/link";
import { kebabCase } from "@/utils/utils";
import { Github } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div
      className="group mx-auto flex max-w-sm flex-col items-center md:items-start md:justify-center"
      key={project.id}
    >
      {/* Project Image */}
      <a
        href={project.link || project.github}
        target="_blank"
        rel="noreferrer"
        className="relative w-full overflow-hidden rounded-xl border-2 border-fun-gray bg-gradient-to-br from-fun-gray/5 to-transparent p-3 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-medium-pink hover:shadow-2xl hover:shadow-medium-pink/20 will-change-transform"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-lg transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </a>

      {/* Project Info */}
      <div className="mt-6 w-full">
        <div className="flex items-center justify-between">
          <a
            href={project.link || project.github}
            target="_blank"
            rel="noreferrer"
            className="group/title"
          >
            <h3 className="text-lg font-bold transition-colors duration-200 group-hover/title:text-medium-pink">
              {project.title}
            </h3>
          </a>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 transition-all duration-200 hover:bg-medium-pink/10 hover:scale-110"
                aria-label="Visit project"
              >
                <SquareArrowOutUpRight className="w-5 h-5"/>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full p-1.5 transition-all duration-200 hover:bg-medium-pink/10 hover:scale-110"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-left text-sm leading-relaxed text-fun-gray">
          {project.desc}
        </p>

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Link href={`/projects/tag/${kebabCase(tag)}`}>
                <div className="cursor-pointer rounded-full bg-gradient-to-r from-light-pink to-medium-pink px-3 py-1.5 text-xs font-medium shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 hover:from-medium-pink hover:to-dark-pink">
                  {tag}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
