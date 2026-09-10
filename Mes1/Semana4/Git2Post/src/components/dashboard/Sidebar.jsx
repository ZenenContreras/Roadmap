import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import UseGit2Post from '../../hooks/UseGit2Post'

function Sidebar() {
  const navigate = useNavigate()
  const {state, dispatch} = UseGit2Post()

  function handleLogOut(){
    dispatch({type: 'RESET' })
  }

  return (
    <nav className='flex justify-between w-full mx-25 p-6 text-white'>
      <h2 className='font-bold text-xl'>Git 2 Post</h2>

      <div className='flex justify-between gap-4 items-center'>

        <NavLink to='/dashboard' end className={({ isActive}) => `${isActive ? "font-bold" : ""} `}>Dashboard</NavLink>

        <NavLink to='/dashboard/repositories' className={({ isActive}) => `${isActive ? "font-bold" : ""} `}>Repositories</NavLink>

        <NavLink to='/dashboard/posts' className={({ isActive}) => `${isActive ? "font-bold" : ""} `} >Posts</NavLink>

        <NavLink to='/dashboard/settings' className={({ isActive}) => `${isActive ? "font-bold" : ""} `}>Settings</NavLink>

        <button className='bg-amber-50 rounded-lg py-1 px-2 text-black cursor-pointer font-bold' onClick={handleLogOut}>Log Out</button>
      </div>
    </nav>
  )
}

export default Sidebar