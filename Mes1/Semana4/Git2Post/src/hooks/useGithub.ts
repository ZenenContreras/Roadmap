import { useState } from 'react'
import { getUser } from '../services/githubService'
import { GithubUser } from '../types/user'

function useGithub() {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<String |null>(null)

  async function searchUser(username: string) {
    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const user = await getUser(username)
      setUser(user)
      return user
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch commits'
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, error, searchUser }
}

export default useGithub
