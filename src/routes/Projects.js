import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { getProjects } from "../data/projectsList";

const Projects = () => {
  let projects = getProjects();
  return (
    <main className="projects">
      <nav className='projects--nav'>
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