import { useState } from 'react'
import { useNavigate } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'
import AppShell from '../components/AppShell'
import { IconBook, IconFile, IconSearch, IconUser } from '../components/icons'

const features = [
  { icon: IconUser, title: 'Profile', description: 'Connect the GitHub account you write from' },
  { icon: IconBook, title: 'Repos', description: 'Pick a project to turn into a post' },
  { icon: IconFile, title: 'Posts', description: 'Drafts from your recent work' },
]

function Login() {
  const navigate = useNavigate()
  const { dispatch } = UseGit2Post()
  const [username, setUsername] = useState('')

  function handleLogin(event) {
    event.preventDefault()
    const github = username.trim()
    if (!github) return

    dispatch({ type: 'SET_USER', payload: { name: github, github } })
    navigate('/dashboard')
  }

  return (
    <AppShell subtitle="Connect a GitHub profile">
      <form onSubmit={handleLogin} className="flex w-full items-center gap-3 border-b border-border">
        <IconSearch className="shrink-0 text-muted-foreground" />
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
          type="text"
          name="username"
          autoComplete="username"
          placeholder="Search a GitHub user…"
        />
        <button
          type="submit"
          disabled={!username.trim()}
          className="flex shrink-0 cursor-pointer items-center py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:text-muted-foreground"
        >
          Search
        </button>
      </form>

      
    </AppShell>
  )
}

export default Login
