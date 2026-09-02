import React from 'react'
import { useState } from 'react'

function SearchBar({handleSearch, search, setSearch, isLoading}) {

  console.log(search)

  return (
    <form onSubmit={handleSearch} className='flex gap-2 w-full'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='rounded-lg  w-full py-3 px-5 border border-border bg-input' type="text" placeholder='Search Github user...'/>

        <button type='submit' disabled={isLoading || !search.trim()} className='border bg-card border-border py-1 px-4 rounded-lg hover:cursor-pointer text-text-secondary'>
            {isLoading ? <div className='flex items-center gap-2'>
              <div className="h-4 w-4 animate-spin rounded-full border-4 border-solid border-border border-t-transparent"></div>
              Searching
            </div> : 'Search'}
        </button>
    </form>
  )
}

export default SearchBar