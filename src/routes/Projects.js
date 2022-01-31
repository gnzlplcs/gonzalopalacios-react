import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { getProjects } from "../data/projectsList";

function Projects() {
  let projects = getProjects();
  return (
    <main>
      <nav>
        {projects.map(project => (
          <NavLink
            to={`/projects/${project.number}`}
            key={project.number}
          >
            {project.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}

export { Projects };