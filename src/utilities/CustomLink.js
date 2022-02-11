import React from 'react';

const CustomLink = ({url, value}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className='clean-link'>{value}</a>
  );
}

export { CustomLink };