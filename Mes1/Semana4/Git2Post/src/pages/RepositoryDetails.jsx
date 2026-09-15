import { Link, useParams } from 'react-router'
import { mockRepositories } from './Repositories'

function RepositoryDetails() {
  const { id } = useParams()
  const repository = mockRepositories.find((repo) => String(repo.id) === id)

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
