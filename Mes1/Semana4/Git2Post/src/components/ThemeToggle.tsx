import { useEffect } from 'react'
import useToggle from '../hooks/useToggle'
import { IconMoon, IconSun } from './icons'

function ThemeToggle() {
  const { value: isDark, toggle } = useToggle(
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="cursor-pointer rounded-md text-muted-foreground transition-colors hover:text-foreground"
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default ThemeToggle
