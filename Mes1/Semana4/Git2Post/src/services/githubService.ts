import { GithubUser } from "../types/user"

export async function getUser(username: string): Promise<GithubUser>{
  const response: any = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)

  if (response.status === 404) {
    throw new Error('User not found')
  }

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  const userData = await response.json() as GithubUser

  const data: GithubUser = {
    id: userData.id, 
    login: userData.login, 
    avatar_url: userData.avatar_url, 
    bio: userData.bio
  }
  
  return data
}
