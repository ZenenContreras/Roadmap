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

      const data = {
        id: user.id, 
        login: user.login, 
        avatar_url: user.avatar_url, 
        bio: user.bio
      }

      setUser(data)
      return data
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
