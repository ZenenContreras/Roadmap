import { Link } from "react-router"
import { memo } from "react"

const RepositoryCard = memo(function RepositoryCard({repository}) {
    return (
        <li key={repository.id} className="py-4">
            <Link
            to={`${repository.id}`}
            className="font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50"
            >
                {repository.name}
            </Link>

            <p className="mt-1 text-sm text-foreground-secondary">{repository.description}</p>
        </li>

    )
})

export default RepositoryCard