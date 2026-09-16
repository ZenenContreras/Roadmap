import { useState } from 'react'
import { commitsService } from '../services/commitsService'

function useCommits() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function searchCommits(username, repo) {
    setLoading(true)
    setError(null)

    try {
      const data = await commitsService(username, repo)
      return data
    } catch (error) {
      setError(error.message)
      return null
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, searchCommits }
}

export default useCommits
