import { useState } from 'react'
import { getRepositories } from '../services/repositoriesServices.ts'

function useRepositories() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<String | null>(null)

  async function searchRepositories(username: string ) {
    setLoading(true)
    setError(null)

    try {
      const data = await getRepositories(username)
      return data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch commits'
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, searchRepositories }
}

export default useRepositories
