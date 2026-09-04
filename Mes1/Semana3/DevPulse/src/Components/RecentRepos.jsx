import { formatRelativeTime } from '../utils/github'

function RecentRepos({ repos }) {
  return (
    <section>
      <p className='mb-3 text-sm text-muted-foreground'>Latest updated repositories</p>

      {repos.length === 0 ? (
        <p className='text-sm text-muted-foreground'>No public repositories</p>
      ) : (
        <ul className='divide-y divide-border border-t border-border'>
          {repos.map((repo) => (
            <li key={repo.id} className='py-3'>
              <a
                href={repo.html_url}
                target='_blank'
                rel='noreferrer'
                className='font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50'
              >
                {repo.name}
              </a>

              {repo.description && (
                <p className='mt-1 text-sm text-foreground-secondary'>{repo.description}</p>
              )}

              <p className='mt-1 text-sm text-muted-foreground'>
                {[repo.language, formatRelativeTime(repo.pushed_at || repo.updated_at)]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default RecentRepos
