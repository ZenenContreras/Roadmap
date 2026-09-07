import { useContext } from "react"
import UserContext from "../context/Git2PostContext"

function useGit2Post() {

  const {context} = useContext(UserContext)

  if (!context) {
    throw new Error('useGit2Post must be used within a Git2PostProvider')
  }
  const {state, dispatch} = context

  return {state, dispatch}
}

export default useGit2Post