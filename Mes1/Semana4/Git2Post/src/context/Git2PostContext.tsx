import { createContext, ReactNode, useReducer, Dispatch } from 'react'
import { GithubUser } from '../types/user'
import { Repository } from '../types/repository'

type ContextState = {
  user: GithubUser | null
  repositories: Repository[] 
  repositoryCommits: []
  generatedPost: string | null
}

type ContextAction = 
  | {type: 'SET_USER' ; payload: GithubUser | null}
  | {type: 'SET_REPOSITORIES' ; payload: Repository[]}  
  | {type: 'SET_COMMITS' ; payload: []}
  | {type: 'SET_GENERATED_POST' ; payload: string | null}
  | {type: 'RESET'}

type UserContextType = {
  state: ContextState
  dispatch: Dispatch<ContextAction>
}


type Git2PostContextProps = {
  children : ReactNode
}

export const UserContext = createContext< UserContextType | undefined > (undefined)


const initialState: ContextState = {
  user: null,
  repositories: [],
  repositoryCommits: [],
  generatedPost: null,
}

function git2postReducer(state: ContextState, action: ContextAction) {
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

function Git2PostContext({children} : Git2PostContextProps) {
  const [state, dispatch] = useReducer(git2postReducer, initialState)

  return (
    <UserContext.Provider value={{ state , dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default Git2PostContext
