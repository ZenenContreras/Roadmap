import { MapPin, Building2, Link2, AtSign, CalendarDays, ExternalLink } from 'lucide-react'
import Stats from './Stats'

function formatJoinedDate(isoDate) {
  if (!isoDate) return null

  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

function normalizeUrl(url) {
  if (!url) return null
  return url.startsWith('http') ? url : `https://${url}`
}

function ProfileCard({ user }) {
  const displayName = user.name || user.login
  const blogUrl = normalizeUrl(user.blog)
  const joined = formatJoinedDate(user.created_at)

  const meta = [
    user.location && {
      key: 'location',
      icon: MapPin,
      label: user.location,
    },
    user.company && {
      key: 'company',
      icon: Building2,
      label: user.company,
    },
    blogUrl && {
      key: 'blog',
      icon: Link2,
      label: user.blog.replace(/^https?:\/\//, ''),
      href: blogUrl,
    },
    user.twitter_username && {
      key: 'twitter',
      icon: AtSign,
      label: user.twitter_username,
      href: `https://x.com/${user.twitter_username}`,
    },
    joined && {
      key: 'joined',
      icon: CalendarDays,
      label: `Joined ${joined}`,
    },
  ].filter(Boolean)

  return (
    <article className='w-full rounded-xl border border-border bg-card p-6'>
      <div className='flex flex-col gap-5 sm:flex-row sm:items-start'>
        <img
          src={user.avatar_url}
          alt={displayName}
          className='size-24 shrink-0 rounded-xl border border-border-soft object-cover'
        />

        <div className='flex min-w-0 flex-1 flex-col gap-3'>
          <div className='flex items-start justify-between gap-4'>
            <div className='min-w-0'>
              <h2 className='truncate text-2xl font-semibold'>{displayName}</h2>
              <a
                href={user.html_url}
                target='_blank'
                rel='noreferrer'
                className='text-sm text-text-secondary transition-colors hover:text-primary'
              >
                @{user.login}
              </a>
            </div>

            <a
              href={user.html_url}
              target='_blank'
              rel='noreferrer'
              className='inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-input px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-primary hover:text-text'
            >
              GitHub
              <ExternalLink size={14} />
            </a>
          </div>

          {user.bio && (
            <p className='text-sm leading-relaxed text-text-secondary'>{user.bio}</p>
          )}

          {user.hireable && (
            <span className='w-fit rounded-full border border-success/20 bg-success/10 px-2.5 py-0.5 text-xs text-success'>
              Available for hire
            </span>
          )}

          {meta.length > 0 && (
            <ul className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted'>
              {meta.map(({ key, icon: Icon, label, href }) => (
                <li key={key} className='flex items-center gap-1.5'>
                  <Icon size={14} strokeWidth={1.75} />
                  {href ? (
                    <a
                      href={href}
                      target='_blank'
                      rel='noreferrer'
                      className='transition-colors hover:text-text-secondary'
                    >
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Stats
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
    </article>
  )
}

export default ProfileCard
