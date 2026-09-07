import React from 'react'
import { createContext, useState } from 'react'

export const UserContext = createContext()

function Git2PostContext({children}) {

  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}} >
        {children}
    </UserContext.Provider>
  )
}

export default Git2PostContext