import { createContext, useReducer } from 'react'

export const UserContext = createContext()

const initialState = {
  user: null,
  repositories: [],
  selectedRepository: null,
  generatedPost: null,
}

function git2postReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    case 'SET_REPOSITORIES':
      return { ...state, repositories: action.payload }
    case 'SELECT_REPOSITORY':
      return { ...state, selectedRepository: action.payload }
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
