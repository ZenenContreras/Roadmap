import { User, BookMarked, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: User,
    title: 'View Profile',
    description: 'Bio, location, links and more',
  },
  {
    icon: BookMarked,
    title: 'Explore Repos',
    description: 'Public repositories and stats',
  },
  {
    icon: CalendarDays,
    title: 'Contributions',
    description: 'Their GitHub calendar at a glance',
  },
]

function Placeholder() {
  return (
    <section className='flex w-full flex-1 flex-col justify-center'>
      <article className='w-full rounded-xl border border-border bg-card p-6'>
        <div className='flex flex-col items-center gap-5 sm:flex-row sm:items-start'>
          <div className='flex size-24 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-input'>
            <img src='github.svg' alt='' className='size-12 opacity-80' />
          </div>

          <div className='flex min-w-0 flex-1 flex-col items-center gap-2 sm:items-start sm:gap-3'>
            <h2 className='text-2xl font-semibold'>Search a GitHub developer</h2>
            <p className='text-sm leading-relaxed text-text-secondary'>
              Enter a username to explore their profile, repositories and contributions.
            </p>
          </div>
        </div>

        <div className='mt-6 grid grid-cols-1 gap-6 border-t border-border-soft pt-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border-soft'>
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className='flex flex-col items-center gap-1.5 px-2 text-center'>
              <Icon size={18} strokeWidth={1.75} className='text-muted' />
              <h3 className='text-sm font-semibold text-text'>{title}</h3>
              <p className='text-xs text-muted'>{description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default Placeholder
