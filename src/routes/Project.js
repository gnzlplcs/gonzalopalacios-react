import { useParams } from "react-router-dom";
import { getProject } from "../data/projectsList";

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId));
  return (
    <>
      <h2>{project.name}</h2>
      <p>About: {project.description}</p>
      <p>Rating: {project.rate}</p>
      <p><a href={project.path} target="_blank" rel="noreferrer">Click here to see the repo</a></p>
    </>
  );
}