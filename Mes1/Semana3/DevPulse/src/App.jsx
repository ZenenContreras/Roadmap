import Header from './Components/Header'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfileCard'
import { GitHubCalendar } from 'react-github-calendar'
import SearchBar from './Components/SearchBar'
import { useState } from 'react'
import Placeholder from './Components/Placeholder'
import UserNotFound from './Components/UserNotFound'
import RecentCommits from './Components/RecentCommits'
import RecentRepos from './Components/RecentRepos'
import useTheme from './hooks/useTheme'
import { getRecentCommits } from './utils/github'

const calendarTheme = {
  light: ['#f5f5f5', '#d4d4d4', '#a3a3a3', '#525252', '#171717'],
  dark: ['#262626', '#404040', '#737373', '#a3a3a3', '#fafafa'],
}

function App() {
  const { theme, toggleTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState('')
  const [calendarUser, setCalendarUser] = useState(null)
  const [notFoundUser, setNotFoundUser] = useState(null)
  const [commits, setCommits] = useState([])
  const [repos, setRepos] = useState([])

  function handleReset() {
    setUser(null)
    setCalendarUser(null)
    setNotFoundUser(null)
    setCommits([])
    setRepos([])
  }

  async function handleSearch(e) {
    e.preventDefault()
    const query = search.trim()
    setIsLoading(true)
    setNotFoundUser(null)
    setCommits([])
    setRepos([])

    try {
      const response = await fetch(`https://api.github.com/users/${query}`)

      if (response.status === 404) {
        setUser(null)
        setCalendarUser(null)
        setNotFoundUser(query)
        return
      }

      if (!response.ok) {
        throw new Error(`HTTP: ${response.status}`)
      }

      const data = await response.json()

      setUser(data)
      setCalendarUser(data.login)

      const [commitsResponse, reposResponse] = await Promise.all([
        getRecentCommits(data.login, [], 5),
        fetch(`https://api.github.com/users/${data.login}/repos?sort=pushed&per_page=5`),
      ])

      const latestRepos = reposResponse.ok ? await reposResponse.json() : []
      setRepos(Array.isArray(latestRepos) ? latestRepos : [])

      if (commitsResponse.length > 0) {
        setCommits(commitsResponse)
      } else if (Array.isArray(latestRepos) && latestRepos.length > 0) {
        const fallbackCommits = await getRecentCommits(data.login, latestRepos, 5)
        setCommits(fallbackCommits)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      setSearch('')
    }
  }

  return (
    <div className='mx-auto flex min-h-svh w-full max-w-175 md:max-w-201 flex-col gap-10 px-5 pt-8 sm:px-8 md:pt-14'>
      <Header onReset={handleReset} theme={theme} toggleTheme={toggleTheme} />
      <SearchBar
        isLoading={isLoading}
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />

      <main className='flex flex-1 flex-col'>
        {notFoundUser ? (
          <UserNotFound username={notFoundUser} />
        ) : !user ? (
          <Placeholder />
        ) : (
          <div className='flex flex-col gap-10'>
            <ProfileCard user={user} />
            {calendarUser && (
              <section className='w-full overflow-x-auto text-muted-foreground'>
                <p className='mb-3 text-sm'>Contributions</p>
                <GitHubCalendar
                  username={calendarUser}
                  colorScheme={theme}
                  fontSize={12}
                  blockSize={11}
                  blockMargin={3}
                  theme={calendarTheme}
                />
              </section>
            )}
            <RecentCommits commits={commits} />
            <RecentRepos repos={repos} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
