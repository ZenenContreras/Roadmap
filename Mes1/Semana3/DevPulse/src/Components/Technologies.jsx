import React from 'react'
import TechnologieItem from './TechnologieItem'

function Technologies({technologies, setTechnologies}) {

  function onDelete(item){
    const deleteUser = technologies.filter(tech => tech !== item)
    setTechnologies(deleteUser)
  }

  return (
    <div className='flex flex-col '>
      {technologies.length === 0 ? <span> No technologies yet</span>: technologies.map((tech, index) => (
        <TechnologieItem key={index} tech={tech} onDelete ={onDelete}/>
      ))}
    </div>
  )
}

export default Technologies