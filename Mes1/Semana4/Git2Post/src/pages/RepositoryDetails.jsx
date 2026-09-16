import { Link, useParams } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'
import { useEffect } from 'react'
import useCommits from '../hooks/useCommits'
import { IconLoader } from '../components/icons'


function RepositoryDetails() {
  const { id } = useParams()
  const {state, dispatch} = UseGit2Post()
  const repositories = state.repositories
  const repository = repositories.find((repo) => String(repo.id) === id)
  const {loading, error, searchCommits} = useCommits()

  useEffect(() => {

    if(!repository){
      return
    }

    async function commits(){
      try {
        const data = await searchCommits(repository.owner.login, repository.name )
        if(data){
          dispatch({type: 'SET_COMMITS', payload: data})
        }

      } catch (error) {
        console.error(error)
      }
    }

    commits()

  }, [repository])

  console.log(state.repositoryCommits)

  if (!repository) {
    return (
      <section className="flex flex-col gap-3">
        <h1 className="font-medium">Repository not found</h1>
        <Link
          to="/dashboard/repositories"
          className="w-fit text-sm text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:text-foreground hover:decoration-foreground/50"
        >
          Back to repositories
        </Link>
      </section>
    )
  }

  return (
    <section className="flex flex-col gap-8">
      <Link
        to="/dashboard/repositories"
        className="w-fit text-sm text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:text-foreground hover:decoration-foreground/50"
      >
        Back to repositories
      </Link>

      <header className="flex flex-col gap-2">
        <div className='flex gap-4'>
          <h1 className="font-medium">{repository.name}</h1>
          <a href={repository.html_url} target='_blank' className='text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:text-foreground hover:decoration-foreground/50 cursor-pointer'>Github</a>
        </div>
        <p className=" text-foreground-secondary">{repository.description}</p>
        <p className=" text-foreground-secondary">Default Branch: <span className='underline'>{repository.default_branch}</span></p>
      </header>

      {loading ? <IconLoader className="animate-spin" />  : (

      <ul className="divide-y divide-border border-t border-border">
        {state.repositoryCommits.map((commit) => (
          <li key={commit.id} className="py-4">
            <a
              href={commit.html_url}
              target='_blank'
              className="font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50 cursor-pointer"
            >
              {commit.commit.message}
            </a>
            <div className='flex gap-1'>

              <p className="mt-1 text-sm text-foreground-secondary">{commit.author.login} • </p>

              <p className="mt-1 text-sm text-foreground-secondary">  {new Date(commit.commit.author.date).toLocaleString()} •</p>

              <p className="mt-1 text-sm text-foreground-secondary">Comments: {commit.commit.comment_count}</p>

            </div>
          </li>
        ))}
      </ul>
      )}
    </section>
  )
}

export default RepositoryDetails
