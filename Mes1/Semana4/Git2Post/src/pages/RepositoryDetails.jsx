import { Link, useParams } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'

function RepositoryDetails() {
  const { id } = useParams()
  const {state, dispatch} = UseGit2Post()
  const repositories = state.repositories
  const repository = repositories.find((repo) => String(repo.id) === id)

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
        <h1 className="font-medium">{repository.name}</h1>
        <p className="max-w-md text-foreground-secondary">{repository.description}</p>
      </header>
    </section>
  )
}

export default RepositoryDetails
