import React from 'react';
import { CustomLink } from '../utilities/CustomLink';

const Card = ({ project }) => {
  return (
    <div className='card-project'>
      <div className='project-info'>
        <h2>{project.name}</h2>
        <p>About: {project.description}</p>
        <p>Rating: {project.rate}</p>
      </div>
      <div className='project-links'>
        <button><CustomLink url={project.path} value='Open the project'/></button>
        <p><CustomLink url={project.repo} value='Check the code'/></p>
      </div>
    </div>
  );
}

export { Card };