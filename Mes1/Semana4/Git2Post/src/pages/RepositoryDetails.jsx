import { Link, useParams } from "react-router"
import {mockRepositories} from './Repositories'

function RepositoryDetails() {

  const {id} = useParams()
  
  const repository = mockRepositories.find((repo) => repo.id == id)

  console.log(repository)
  return (
    <section className="w-full px-6 py-16 text-white flex flex-col gap-4">

      <Link className="bg-amber-50 text-black py-1 px-2 rounded-lg w-fit" to='/dashboard/repositories'>Back to Repositories</Link>

      <div className="flex max-w-4xl flex-col gap-4">
        <h1 className="text-4xl font-bold">Repository Details</h1>
        <p className="text-lg text-amber-100">Repository ID: {id} </p>
        <p className="text-2xl font-semibold">{repository.name}</p>
        <p className="text-xl font-semibold">{repository.description}</p>
      </div>

    </section>
  )
}

export default RepositoryDetails
