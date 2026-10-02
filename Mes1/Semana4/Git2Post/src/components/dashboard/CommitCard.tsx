import {memo} from 'react'
import { Commits } from '../../types/commits'

type CommitCardProps = {
  commit: Commits
}

const CommitCard = memo(function CommitCard({commit} : CommitCardProps) {
  return (
    <li key={commit.sha} className="py-4">
    <a
      href={commit.html_url}
      target='_blank'
      className="font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50 cursor-pointer"
    >
      {commit.message}
    </a>
    <div className='grid grid-cols-2 grid-rows-2 md:flex md:justify-between pt-1'>

      <p className="mt-1 text-sm text-foreground-secondary">{commit.author.login} </p>

      <p className="mt-1 text-sm text-foreground-secondary">  {new Date(commit.date).toLocaleString()} </p>

      <p className="mt-1 text-sm text-foreground-secondary">Comments: {commit.comment_count} </p>

      <p className="mt-1 text-sm text-foreground-secondary">{commit.sha.slice(0,7)}</p>

    </div>
  </li>
  )
})

export default CommitCard