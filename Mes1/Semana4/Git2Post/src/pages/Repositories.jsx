import { Link } from "react-router"

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
    <section className="min-h-screen bg-amber-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-4xl font-bold">Repositories</h1>

        <ul className="flex justify-between gap-4">
          {mockRepositories.map((repository) => (
            <li
              key={repository.id}
              className="flex-1 rounded-xl border border-amber-800 bg-amber-900/40 p-6 flex flex-col gap-4"
            >
              <span>{repository.id}</span>
              <h2 className="text-xl font-semibold">{repository.name}</h2>
              <p className="mt-2 text-amber-100">{repository.description}</p>
              <Link className="bg-amber-50 py-1 px-2 rounded-lg text-black" to={`${repository.id}`}>Check Repository</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Repositories
