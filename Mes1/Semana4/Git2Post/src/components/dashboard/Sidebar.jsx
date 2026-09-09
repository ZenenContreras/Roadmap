import React from 'react'
import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <nav className='flex justify-between'>
        <NavLink to='/dashboard' end className={({ isActive}) => `${isActive ? "text-blue-700" : "text-black"} `}>Dashboard</NavLink>

        <NavLink to='/dashboard/repositories' className={({ isActive}) => `${isActive ? "text-blue-700" : "text-black"} `}>Repositories</NavLink>

        <NavLink to='/dashboard/posts' className={({ isActive}) => `${isActive ? "text-blue-700" : "text-black"} `} >Posts</NavLink>
        
        <NavLink to='/dashboard/settings' className={({ isActive}) => `${isActive ? "text-blue-700" : "text-black"} `}>Settings</NavLink>
    </nav>
  )
}

export default Sidebar