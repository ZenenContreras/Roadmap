import { useState } from 'react'
import { useNavigate } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'
import AppShell from '../components/AppShell'
import { IconLoader, IconSearch } from '../components/icons'
import useGithub from '../hooks/useGithub'

function Login() {
  const { loading, error, searchUser } = useGithub()
  const navigate = useNavigate()
  const { dispatch } = UseGit2Post()
  const [username, setUsername] = useState('')
  const [queried, setQueried] = useState('')

  async function handleLogin(event) {
    event.preventDefault()
    const github = username.trim()
    if (!github) return

    setQueried(github)
    const data = await searchUser(github)

    if (data) {
      dispatch({
        type: 'SET_USER',
        payload: { name: data.login, img: data.avatar_url }
      })
      navigate('/dashboard')
    }
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
          disabled={loading || !username.trim()}
          className="flex shrink-0 cursor-pointer items-center gap-1.5 py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:text-muted-foreground"
        >
          {loading ? <IconLoader className="animate-spin" /> : 'Search'}
        </button>
      </form>

      {error ? (
        <section className="flex flex-1 flex-col justify-center gap-3">
          <h2 className="font-medium text-destructive">{error}</h2>
          <p className="max-w-md text-foreground-secondary">
            We could not find <span className="text-foreground">@{queried}</span> on GitHub. Check the spelling and try another username.
          </p>
        </section>
      ) : null}
    </AppShell>
  )
}

export default Login
