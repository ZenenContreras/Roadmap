import { Link } from 'react-router'
import AppShell from '../components/AppShell'

function NotFound() {
  return (
    <AppShell subtitle="Page not found">
      <section className="flex flex-1 flex-col justify-center gap-3">
        <p className="text-sm text-muted-foreground">404</p>
        <h1 className="font-medium">This page does not exist.</h1>
        <p className="max-w-md text-foreground-secondary">
          The URL may be wrong, or the page was moved.
        </p>
        <Link
          to="/"
          className="mt-4 w-fit text-sm font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50"
        >
          Back to Git2Post
        </Link>
      </section>
    </AppShell>
  )
}

export default NotFound
