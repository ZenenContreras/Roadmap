import React from 'react'
import { useState } from 'react'

function SearchBar({handleSearch, search, setSearch}) {

console.log(search)
  return (
    <form onSubmit={handleSearch} className='flex gap-2 w-full'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='rounded-xl  w-full py-2 px-4 border' type="text" placeholder='Search Github user'/>
        <button type='submit' disabled={!search.trim()} className='border py-1 px-2 rounded-xl hover:cursor-pointer'>
            Buscar
        </button>
    </form>
  )
}

export default SearchBar