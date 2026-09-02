import React from 'react'
import { User, BookMarked, Star  } from 'lucide-react';

function Placeholder() {
  return (
    <div className='h-full flex-1 w-full flex flex-col items-center justify-center gap-20'>
        <div className='flex flex-col items-center gap-3'>
            <img src="github-svgrepo-com (1).svg" alt="" width={100} />
            <h2 className='text-4xl font-bold'>Search For a github developer</h2>
            <p className='text-text-secondary'>Enter a username to explore their profile, repositories and more</p>
        </div>
        <div className='flex items-center justify-between gap-10'>
            <div className='flex flex-col gap-2 m-15'>
                <User size={40} />
                <h3 className='text-lg text-text'>View Profile</h3>
                <p className='text-muted'>See their details <br/>and bio </p>
            </div>
            <div className='flex flex-col gap-2 px-15 border-x border-border'>
                <BookMarked size={40}/>
                <h3 className='text-lg text-text'>Explore Repositories</h3>
                <p className='text-muted'>Check their public <br/>repo</p>
            </div>
            <div className='flex flex-col gap-2 m-15'>
                <Star size={40}/>
                <h3 className='text-lg text-text'>Discover technologies</h3>
                <p className='text-muted'>See what they  <br/>work with </p>
            </div>
        </div>
    </div>
  )
}

export default Placeholder