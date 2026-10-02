import { NavLink } from 'react-router'
import UseGit2Post from '../../hooks/UseGit2Post'
import ThemeToggle from '../ThemeToggle'
import { IconActivity, IconSearch } from '../icons'

const links = [
  { to: '/dashboard', label: 'Dashboard', end: true },
  { to: '/dashboard/repositories', label: 'Repositories' },
  { to: '/dashboard/posts', label: 'Posts' },
  { to: '/dashboard/settings', label: 'Settings' },
]

function Sidebar() {
  const { dispatch } = UseGit2Post()

  function handleLogOut() {
    dispatch({ type: 'RESET' })
  }

  return (
    <header className="flex flex-col gap-4">
      <div className='flex justify-between'>
        <span className="flex items-center gap-2">
          <IconActivity className="text-muted-foreground" />
          <span className="font-medium">Git2Post</span>
        </span>
        <ThemeToggle />
      </div>

      <nav className="flex flex-wrap justify-between md:justify-start items-center gap-x-4 gap-y-2 text-sm ">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'font-medium text-foreground' : 'text-muted-foreground hover:text-foreground'
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={handleLogOut}
            className="cursor-pointer text-muted-foreground hover:text-foreground"
          >
            <IconSearch />
          </button>
        </nav>
    </header>
  )
}

export default Sidebar
