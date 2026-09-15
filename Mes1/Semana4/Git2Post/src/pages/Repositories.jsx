import { Link } from 'react-router'

export const mockRepositories = [
  {
    id: 1,
    name: 'DevPulse',
    description: 'Track developer activity and shipping velocity.',
  },
  {
    id: 2,
    name: 'Git2Post',
    description: 'Turn GitHub activity into shareable content.',
  },
  {
    id: 3,
    name: 'Portfolio',
    description: 'Personal projects and case studies.',
  },
]

function Repositories() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="font-medium">Repositories</h1>
        <p className="text-foreground-secondary">Projects you can turn into a post.</p>
      </header>

      <ul className="divide-y divide-border border-t border-border">
        {mockRepositories.map((repository) => (
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
      </ul>
    </section>
  )
}

export default Repositories
