import React from 'react'

function Stats({stats, followers}) {

  return (
  
    <div>
      <h3>Repositories <span className='text-tertiary'>{stats.repositories} </span> </h3>
      <h3>Followers:  <span className='text-tertiary'>{followers}  </span> </h3>
      <h3>Following:  <span className='text-tertiary'>{stats.following} </span> </h3>
    </div>
  )
}

export default Stats