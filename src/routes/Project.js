import React from 'react';
import { useParams } from "react-router-dom";
import { getProject } from "../data/projectsList";

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId));
  return (
    <main>
      {/* <img src={`../data/images/${project.image}`} alt='sample' /> */}
      <h2>{project.name}</h2>
      <p>About: {project.description}</p>
      <p>Rating: {project.rate}</p>
      <p><a href={project.path} target="_blank" rel="noopener noreferrer">Open the project</a></p>
      <p><a href={project.repo} target="_blank" rel="noopener noreferrer">Check the code</a></p>
    </main>
  );
}