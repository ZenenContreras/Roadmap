import { Activity, Moon, Sun } from 'lucide-react'

function Header({ onReset, theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className='flex items-start justify-between gap-4'>
      <button type='button' onClick={onReset} className='cursor-pointer text-left'>
        <span className='flex items-center gap-2'>
          <Activity size={16} strokeWidth={1.75} className='text-muted-foreground' />
          <h1 className='font-medium'>DevPulse</h1>
        </span>
        <p className='mt-1 text-muted-foreground'>Search GitHub profiles</p>
      </button>

      <button
        type='button'
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className='cursor-pointer rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground'
      >
        {isDark ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
      </button>
    </header>
  )
}

export default Header
