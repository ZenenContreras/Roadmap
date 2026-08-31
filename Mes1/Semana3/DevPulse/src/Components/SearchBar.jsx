import React from 'react'
import { useState } from 'react'

function SearchBar() {

  const [search, setSearch] = useState("")

  function handleChange(event){
    setSearch(event.target.value)
    console.log(search)
  }

  function handleSubmit(event){
    event.preventDefault()

    if(!search.trim()){
        return
    }
    setSearch("")
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 w-full'>
        <input value={search} onChange={handleChange} className='rounded-xl  w-full py-2 px-4 border' type="text" placeholder='Search Github user'/>
        <button type='submit' disabled={!search.trim()} className='border py-1 px-2 rounded-xl hover:cursor-pointer'>
            Buscar
        </button>
    </form>
  )
}

export default SearchBar