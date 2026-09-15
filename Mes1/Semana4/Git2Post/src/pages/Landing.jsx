import { Link } from 'react-router'
import AppShell from '../components/AppShell'
import { IconBook, IconFile, IconUser } from '../components/icons'

const features = [
  { icon: IconBook, title: 'Repos', description: 'Choose what you recently shipped' },
  { icon: IconFile, title: 'Posts', description: 'Turn activity into a draft' },
  { icon: IconUser, title: 'Share', description: 'Copy content ready to publish' },
]

function Landing() {
  return (
    <AppShell subtitle="Turn GitHub into posts">
      <section className="flex flex-1 flex-col justify-center gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium">Turn your GitHub activity into content.</h1>
          <p className="max-w-md text-foreground-secondary">
            Transform commits, repositories and development work into posts you can share.
          </p>
          <Link
            to="/login"
            className="mt-2 w-fit text-sm font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50"
          >
            Get started
          </Link>
        </div>

        <ul className="flex flex-col gap-4 border-t border-border pt-6 text-sm">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2.5 font-medium">
                <Icon className="text-muted-foreground" />
                {title}
              </span>
              <span className="text-muted-foreground">{description}</span>
            </li>
          ))}
        </ul>
      </section>
    </AppShell>
  )
}

export default Landing
