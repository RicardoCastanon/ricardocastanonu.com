import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{"What I've built."}</h2>
        <div className="grid md:grid-cols-2 gap-2">
          <ProjectCard
            title="Mesocast Weather Forecasting"
            i={1}
            framework="NextJS, GoLang, Python"
          />
          <ProjectCard title="Aspiria KC" i={2} framework="Next JS" />
          <ProjectCard
            title="Occidental Management"
            i={3}
            framework="HTML/CSS/JS"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
