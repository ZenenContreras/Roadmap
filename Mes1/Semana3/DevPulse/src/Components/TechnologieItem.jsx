import React from 'react'

function TechnologieItem({tech, onDelete}) {
  return (
    <span className='flex gap-2 items-center'>
      {tech}
      <button className='border py-1 px-2 rounded-xl cursor-pointer' onClick={() => onDelete(tech)}>Delete</button>  
    </span>
  )
}

export default TechnologieItem