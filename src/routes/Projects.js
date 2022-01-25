import { NavLink, Outlet } from "react-router-dom";
import { getProjects } from "../data/projectsList";

function Projects() {
  let projects = getProjects();
  return (
    <>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
          display: 'block'
        }}
      >
        {projects.map(project => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                fontWeight: isActive ? "bold" : ""
              };
            }}
            to={`/projects/${project.number}`}
            key={project.number}
          >
            {project.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
}

export { Projects };