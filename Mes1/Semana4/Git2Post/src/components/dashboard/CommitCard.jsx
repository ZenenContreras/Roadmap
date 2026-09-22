import {memo} from 'react'

const CommitCard = memo(function CommitCard({commit}) {
  return (
    <li key={commit.sha} className="py-4">
    <a
      href={commit.html_url}
      target='_blank'
      className="font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50 cursor-pointer"
    >
      {commit.commit.message}
    </a>
    <div className='grid grid-cols-2 grid-rows-2 md:flex md:justify-between pt-1'>

      <p className="mt-1 text-sm text-foreground-secondary">{commit.author.login} </p>

      <p className="mt-1 text-sm text-foreground-secondary">  {new Date(commit.commit.author.date).toLocaleString()} </p>

      <p className="mt-1 text-sm text-foreground-secondary">Comments: {commit.commit.comment_count} </p>

      <p className="mt-1 text-sm text-foreground-secondary">{commit.sha.slice(0,7)}</p>

    </div>
  </li>
  )
})

export default CommitCard