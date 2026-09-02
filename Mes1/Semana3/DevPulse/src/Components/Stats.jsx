import React from 'react'

function Stats({stats, followers}) {

  return (
  
    <div>
      <h3>Repositories <span className='text-muted'>{stats.repositories} </span> </h3>
      <h3>Followers:  <span className='text-muted'>{followers}  </span> </h3>
      <h3>Following:  <span className='text-muted'>{stats.following} </span> </h3>
    </div>
  )
}

export default Stats