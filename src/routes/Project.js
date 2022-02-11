import React from 'react';
import { useParams } from "react-router-dom";
import { Card } from '../components/Card';
import { getProject } from "../data/projectsList";

const Project = () => {
  let params = useParams();
  let project = getProject(parseInt(params.projectId));
  return (
    <main>
      <Card project={project} />
    </main>
  );
}

export { Project };