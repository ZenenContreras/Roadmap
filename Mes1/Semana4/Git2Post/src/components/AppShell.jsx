import { Link } from 'react-router'
import ThemeToggle from './ThemeToggle'
import { IconActivity } from './icons'

function XLogo() {
  return (
    <svg viewBox="0 0 1200 1227" xmlns="http://www.w3.org/2000/svg" className="size-3.5 fill-current" aria-hidden="true">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  )
}

export function AppHeader({ subtitle, to = '/' }) {
  return (
    <header className="flex items-start justify-between gap-4">
      <Link to={to} className="text-left">
        <span className="flex items-center gap-2">
          <IconActivity className="text-muted-foreground" />
          <span className="font-medium">Git2Post</span>
        </span>
        {subtitle ? <p className="mt-1 text-muted-foreground">{subtitle}</p> : null}
      </Link>
      <ThemeToggle />
    </header>
  )
}

export function AppFooter() {
  return (
    <footer className="pb-8">
      <a
        href="https://x.com/zenendev"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground underline decoration-foreground/25 underline-offset-[3px] hover:text-foreground hover:decoration-foreground/50"
      >
        <XLogo />
        Zenendev
      </a>
    </footer>
  )
}

function AppShell({ subtitle, children }) {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-175 flex-col gap-10 px-5 pt-8 sm:px-8 md:max-w-201 md:pt-14">
      <AppHeader subtitle={subtitle} />
      <main className="flex flex-1 flex-col">{children}</main>
      <AppFooter />
    </div>
  )
}

export default AppShell
