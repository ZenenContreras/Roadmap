import React from 'react'

function Technologies() {

  const technologies = ['JavaScript', 'React', 'Node.js', 'PostgreSQL' ]

  return (
    <div className='flex flex-col '>
      {technologies.map(tech => (
        <span>{tech}</span>
      ))}
    </div>
  )
}

export default Technologies