import React, { useReducer } from 'react'
import { createContext, useState } from 'react'

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
      return {...state, user: action.payload}
    case 'SET_REPOSITORIES': {
      return {...state, repositories: action.payload}
    }
    case 'SELECT_REPOSITORY': {
      return {...state, repository: action.payload}
    }
    case 'SET_GENERATED_POST': {
      return {...state, post: action.payload}
    }
    case 'RESET': {
      return initialState
    }
    

  }
}

function Git2PostContext({children}) {
  const [state, dispatch] = useReducer(git2postReducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch}} >
        {children}
    </UserContext.Provider>
  )
}

export default Git2PostContext