import { createContext, useReducer } from 'react'
import { GithubUser } from '../types/user'
import { Repository } from '../types/repository'


export const UserContext = createContext<null>(null)

type InitialState = {
  user: GithubUser | null
  repositories: Repository[] 
  repositoryCommits: []
  generatedPost: string | null
}

const initialState: InitialState = {
  user: null,
  repositories: [],
  repositoryCommits: [],
  generatedPost: null,
}

function git2postReducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_REPOSITORIES':
      return { ...state, repositories: action.payload }
    case 'SET_COMMITS':
      return { ...state, repositoryCommits: action.payload }
    case 'SET_GENERATED_POST':
      return { ...state, generatedPost: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function Git2PostContext({children}) {
  const [state, dispatch] = useReducer(git2postReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default Git2PostContext
