import React from 'react'
import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <nav className='flex justify-between'>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/dashboard/repositories'>Repositories</NavLink>
        <NavLink to='/dashboard/posts' >Posts</NavLink>
        <NavLink to='/dashboard/settings'>Settings</NavLink>
    </nav>
  )
}

export default Sidebar