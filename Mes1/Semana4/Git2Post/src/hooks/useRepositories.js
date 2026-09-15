import { useState } from 'react'
import { getRepositories } from '../services/repositoriesServices'

function useRepositories() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchRepositories(username) {
    setLoading(true)
    setError(null)

    try {
      const data = await getRepositories(username)
      return data
    } catch (error) {
      setError(error.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, searchRepositories }
}

export default useRepositories
