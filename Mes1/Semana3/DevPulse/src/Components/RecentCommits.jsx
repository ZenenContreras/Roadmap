import { formatRelativeTime } from '../utils/github'

function RecentCommits({ commits }) {
  return (
    <section>
      <p className='mb-3 text-sm text-muted-foreground'>Last commits</p>

      {commits.length === 0 ? (
        <p className='text-sm text-muted-foreground'>No recent public commits</p>
      ) : (
        <ul className='divide-y divide-border border-t border-border'>
          {commits.map((commit) => (
            <li key={commit.sha} className='py-3'>
              <a
                href={commit.url}
                target='_blank'
                rel='noreferrer'
                className='font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50'
              >
                {commit.message}
              </a>
              <p className='mt-1 text-sm text-muted-foreground'>
                {commit.repo} · {formatRelativeTime(commit.createdAt)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default RecentCommits
