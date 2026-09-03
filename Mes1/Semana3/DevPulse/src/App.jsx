import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
import { GitHubCalendar } from 'react-github-calendar';
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import Placeholder from './Components/Placeholder'
import UserNotFound from './Components/UserNotFound'

function App() {

  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const [calendarUser, setCalendarUser] = useState(null)
  const [notFoundUser, setNotFoundUser] = useState(null)

  function handleReset() {
    setUser(null)
    setCalendarUser(null)
    setNotFoundUser(null)
  }

  async function handleSearch (e) {

    e.preventDefault()
    const query = search.trim()
    setIsLoading(true)
    setNotFoundUser(null)

    try {
      const response = await fetch(`https://api.github.com/users/${query}`)

      if (response.status === 404) {
        setUser(null)
        setCalendarUser(null)
        setNotFoundUser(query)
        return
      }

      if(!response.ok){
        throw new Error(`HTTP: ${response.status}`)
      }

      const data = await response.json()

      setUser(data)
      setCalendarUser(data.login)
      
    } catch (error) {
        console.error(error)

    }finally{
      setIsLoading(false)
      setSearch("")
    }

  }


  return (
    <div className='min-h-screen flex flex-col max-w-6xl w-full mx-auto px-4 '>
      <Header onReset={handleReset}/>
      <div className='flex-1 flex flex-col p-8 items-center gap-4 w-full'>
        <SearchBar isLoading={isLoading} handleSearch={handleSearch} search={search} setSearch={setSearch}/>

        {notFoundUser ? <UserNotFound username={notFoundUser} /> : !user ? <Placeholder /> : 
        <>
          <ProfileCard user={user} />
          {calendarUser && (
            <section className='w-full flex justify-center overflow-x-auto rounded-xl border border-border bg-card p-6 text-muted'>
              <GitHubCalendar
                username={calendarUser}
                colorScheme='dark'
                fontSize={12}
                blockSize={11}
                blockMargin={3}
              />
            </section>
          )}
        </>
        }
      </div>
      <Footer />
    </div>
  )
}

export default App
