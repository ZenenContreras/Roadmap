import { BookMarked, CalendarDays, Search, User } from 'lucide-react'

const features = [
  {
    icon: User,
    title: 'Profile',
    description: 'Bio, location, links and more',
  },
  {
    icon: BookMarked,
    title: 'Repos',
    description: 'Public repositories and stats',
  },
  {
    icon: CalendarDays,
    title: 'Activity',
    description: 'Contribution calendar at a glance',
  },
]

function Placeholder() {
  return (
    <section className='flex flex-1 flex-col justify-center gap-10'>
      <div className='flex flex-col gap-3'>
        <Search size={18} strokeWidth={1.75} className='text-muted-foreground' />
        <h2 className='font-medium'>Search a GitHub developer</h2>
        <p className='max-w-md text-foreground-secondary'>
          Enter a username to explore their profile, repositories and contributions.
        </p>
      </div>

      <ul className='flex flex-col gap-4 border-t border-border pt-6 text-sm'>
        {features.map(({ icon: Icon, title, description }) => (
          <li key={title} className='flex items-center justify-between gap-4'>
            <span className='flex items-center gap-2.5 font-medium'>
              <Icon size={15} strokeWidth={1.75} className='text-muted-foreground' />
              {title}
            </span>
            <span className='text-muted-foreground'>{description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Placeholder
