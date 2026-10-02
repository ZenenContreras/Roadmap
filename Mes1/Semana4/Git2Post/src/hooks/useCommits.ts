import { useState } from 'react'
import { commitsService } from '../services/commitsService'

function useCommits() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<String | null>(null)

  async function searchCommits(username: string, repo: string) {
    setLoading(true)
    setError(null)

    try {
      const data = await commitsService(username, repo)
      return data
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch commits'
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, searchCommits }
}

export default useCommits
