import { MapPin, Building2, Link2, AtSign, CalendarDays } from 'lucide-react'
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
    <article className='flex flex-col gap-6'>
      <div className='flex items-start gap-4'>
        <img
          src={user.avatar_url}
          alt={displayName}
          className='size-14 shrink-0 rounded-md object-cover'
        />

        <div className='min-w-0 flex-1'>
          <div className='flex items-start justify-between gap-4'>
            <div className='min-w-0'>
              <h2 className='font-medium'>{displayName}</h2>
              <a
                href={user.html_url}
                target='_blank'
                rel='noreferrer'
                className='mt-1 text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50'
              >
                @{user.login}
              </a>
            </div>

            <a
              href={user.html_url}
              target='_blank'
              rel='noreferrer'
              className='shrink-0 text-sm text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {user.bio && (
        <p className='text-foreground-secondary leading-relaxed'>{user.bio}</p>
      )}

      {user.hireable && (
        <p className='text-sm text-muted-foreground'>Open to work</p>
      )}

      {meta.length > 0 && (
        <ul className='flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground'>
          {meta.map(({ key, icon: Icon, label, href }) => (
            <li key={key} className='flex items-center gap-1.5'>
              <Icon size={14} strokeWidth={1.75} />
              {href ? (
                <a
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50'
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

      <Stats
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
      />
    </article>
  )
}

export default ProfileCard
