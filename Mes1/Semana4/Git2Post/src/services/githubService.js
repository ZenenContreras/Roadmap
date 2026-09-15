export async function getUser(username) {
  const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)

  if (response.status === 404) {
    throw new Error('User not found')
  }

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return response.json()
}
