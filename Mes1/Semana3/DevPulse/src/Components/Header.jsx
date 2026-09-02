import React from 'react'
import { Activity } from 'lucide-react';


function Header() {
  return (
    <header className='flex justify-between w-full items-center p-8'>
      <div className='flex items-center gap-2'>
      <Activity color='#A8B9DD' />
      <h2 className='text-2xl font-bold '>DevPulse</h2>
      </div>
      <h3 className='text-muted'>Search Github Profiles</h3>
    </header>
  )
}

export default Header