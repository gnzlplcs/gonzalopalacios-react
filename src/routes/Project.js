import { useParams } from "react-router-dom";
import { getProject } from "../data/projectsList";

export default function Project() {
  let params = useParams();
  let project = getProject(parseInt(params.projectId));
  return (
    <div className='card' style={{width: "18rem"}}>
      {/* <img src={`../data/images/${project.image}`} alt='sample' /> */}
      <h2 className="card-title">{project.name}</h2>
      <p className="card-text">About: {project.description}</p>
      <p className="card-text">Rating: {project.rate}</p>
      <p><a href={project.path} target="_blank" rel="noreferrer" className="btn btn-primary">Open the project</a></p>
      <p><a href={project.repo} target="_blank" rel="noreferrer">Check the code</a></p>
    </div>
  );
}