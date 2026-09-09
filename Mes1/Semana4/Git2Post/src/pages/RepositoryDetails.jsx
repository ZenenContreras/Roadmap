import { Link, useParams } from "react-router"
import {mockRepositories} from './Repositories'

function RepositoryDetails() {

  const {id} = useParams()
  
  const repository = mockRepositories.find((repo) => repo.id == id)

  console.log(repository)
  return (
    <section className="min-h-screen bg-amber-950 px-6 py-16 text-white">
      <Link to='/dashboard'>Back to Dashboard</Link>
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        <h1 className="text-4xl font-bold">Repository Details</h1>
        <p className="text-lg text-amber-100">Repository ID: {id} </p>
        <p className="text-2xl font-semibold">{repository.name}</p>
        <p className="text-xl font-semibold">{repository.description}</p>
      </div>
    </section>
  )
}

export default RepositoryDetails
