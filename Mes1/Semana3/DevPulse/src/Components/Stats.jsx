import React from 'react'

function Stats({stats}) {

  return (
    <div>
      <h3>Repositories <span className='text-tertiary'>{stats.repositories} </span> </h3>
      <h3>Followers:  <span className='text-tertiary'>{stats.followers}  </span> </h3>
      <h3>Following:  <span className='text-tertiary'>{stats.following} </span> </h3>
    </div>
  )
}

export default Stats