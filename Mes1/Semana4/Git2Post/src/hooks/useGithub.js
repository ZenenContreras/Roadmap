import { useState } from 'react'
import { getUser } from '../services/githubService'

function useGithub() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchUser(username) {
    setLoading(true)
    setError(null)
    setUser(null)

    try {
      const user = await getUser(username)
      setUser(user)
      return user
    } catch (error) {
      setError(error.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, error, searchUser }
}

export default useGithub
