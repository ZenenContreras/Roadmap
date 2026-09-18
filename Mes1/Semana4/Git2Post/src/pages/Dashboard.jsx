import { Link } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'
import useGithub from '../hooks/useGithub'

const sections = [
  { to: '/dashboard/repositories', title: 'Repositories', description: 'Your connected GitHub projects.' },
  { to: '/dashboard/posts', title: 'Posts', description: 'Content created from your activity.' },
  { to: '/dashboard/settings', title: 'Settings', description: 'Account, GitHub and preferences.' },
]

function Dashboard() {
  const { state } = UseGit2Post()
  const username =  state.user?.name
  const avatar = state.user?.img

  return (
    <section className="flex flex-col gap-4 md:gap-2">
      <header className="flex flex-col gap-4 md:gap-2">
        <h1 className="font-medium">Dashboard</h1>
        <div className='flex items-center gap-4'>
          {!avatar ? <div className='animate-pulse size-14 bg-muted-foreground/25 shadow rounded-md'></div> : <img src={avatar} alt="" className='size-14 shrink-0 rounded-md object-cover'/>
        }
          <p className="text-foregrgap-2ound-secondary">
            {username ? `Signed in as \n@${username}.` : 'Welcome back.'}
          </p>
        </div>
      </header>

      <ul className="divide-y divide-border border-t border-border">
        {sections.map((section) => (
          <li key={section.to} className="py-4">
            <Link to={section.to} className="group flex items-baseline justify-between gap-4">
              <span className="font-medium underline decoration-foreground/25 underline-offset-[3px] group-hover:decoration-foreground/50">
                {section.title}
              </span>
              <span className="text-right text-sm text-muted-foreground">{section.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Dashboard
