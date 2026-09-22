import useRepositories from '../hooks/useRepositories'
import UseGit2Post from '../hooks/UseGit2Post'
import { useEffect } from 'react'
import { IconLoader } from '../components/icons'
import RepositoryCard from '../components/dashboard/RepositoryCard'

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
          <span className='text-sm border-t border-border pt-4'>No public repositories found.</span> 
      : (<ul className="divide-y divide-border border-t border-border">
          {state.repositories.map((repository) => (
            <RepositoryCard repository={repository} key={repository.id}/>
          ))}
        </ul>)
        )
      }

    </section>
  )
}

export default Repositories
