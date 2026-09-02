import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
import Technologies from './Components/Technologies'
import Stats from './Components/Stats'
import { GitHubCalendar } from 'react-github-calendar';
import SearchBar from './Components/SearchBar'
import { useState } from 'react'

function App() {

  const [loading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const [calendarUser, setCalendarUser] = useState(null)

  async function handleSearch (e) {

    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${search}`)

      if(!response.ok){
        throw new Error(`HTTP: ${response.status}`)
      }

      const data = await response.json()

      setUser({
        name: data.name,
        rol: data.company,
        country: data.location
      })
      setCalendarUser(search)

      console.log(user)
      
    } catch (error) {
        console.error(error)

    }finally{
      setIsLoading(false)
      setSearch("")
    }

  }


  return (
    <div className='min-h-screen flex flex-col max-w-6xl items-center w-full mx-auto px-4 '>
      <Header />
      <div className='flex-1 flex flex-col justify-center items-center gap-4 '>
        <SearchBar handleSearch={handleSearch} search={search} setSearch={setSearch}/>
        <ProfileCard user={user} /> 
        {calendarUser && <GitHubCalendar username={calendarUser}/>}
      </div>
      <Footer />
    </div>
  )
}

export default App
