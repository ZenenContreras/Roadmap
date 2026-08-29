import React from 'react'

function Technologies({technologies}) {


  return (
    <div className='flex flex-col '>
      {technologies.map(tech => (
        <span>{tech}</span>
      ))}
    </div>
  )
}

export default Technologies