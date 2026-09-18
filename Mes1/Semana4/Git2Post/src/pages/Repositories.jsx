import { Link } from 'react-router'
import useRepositories from '../hooks/useRepositories'
import UseGit2Post from '../hooks/UseGit2Post'
import { useEffect } from 'react'
import { IconLoader } from '../components/icons'

function Repositories() {
  const {state, dispatch} = UseGit2Post()
  const { loading, searchRepositories} = useRepositories()

  const username = state.user?.name

  useEffect(() => {

    if(!username) return

    async function repositories(){

      try {
        const data = await searchRepositories(username)

        if(data) {
          dispatch({ 
            type: 'SET_REPOSITORIES',
            payload: data})
        }
      } catch (error) {
        console.error(error)
      }

    }

    repositories()
  }, [username])

  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="font-medium">Repositories</h1>
        <p className="text-foreground-secondary">Projects you can turn into a post.</p>
      </header>

      {loading ? 
        <IconLoader className="animate-spin" />  
      : (state.repositories?.length === 0 ? 
          <span>No public repositories found.</span> 
      : (<ul className="divide-y divide-border border-t border-border">
          {state.repositories.map((repository) => (
            <li key={repository.id} className="py-4">
              <Link
                to={`${repository.id}`}
                className="font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50"
              >
                {repository.name}
              </Link>
              <p className="mt-1 text-sm text-foreground-secondary">{repository.description}</p>
            </li>
          ))}
        </ul>)
        )
      }

    </section>
  )
}

export default Repositories
