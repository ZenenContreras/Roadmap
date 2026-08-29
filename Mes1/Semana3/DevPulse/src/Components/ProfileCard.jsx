import React from 'react'
import Stats from './Stats'
import Technologies from './Technologies'

function ProfileCard({user}) {

  const stats= {
    repositories: 42,
    followers: 120,
    following: 80
  }

  const technologies = ['JavaScript', 'React', 'Node.js', 'PostgreSQL' ]

  return (
    <div className='rounded-xl p-4 max-w-xl flex flex-col gap-2 shadow-lg items-center border'>
      <div className='flex flex-col '>
        <h2 className='text-4xl font-semibold '>{user.name}</h2>
        <p className='text-tertiary'>{user.rol}</p>
        <p className='text-tertiary '>{user.country}</p>
      </div>

      <div className='flex items-center justify-between w-full flex-wrap'>
        <Stats stats={stats} />
        <Technologies technologies={technologies} />
      </div>   

    </div>
  )
}

export default ProfileCard