import UseGit2Post from '../hooks/UseGit2Post'

const rows = [
  { title: 'GitHub account', description: 'Connect your profile to start generating posts.' },
  { title: 'Preferences', description: 'Choose how Git2Post formats your content.' },
  { title: 'Appearance', description: 'Light, dark or follow the system.' },
  { title: 'Account', description: 'Manage your Git2Post details.' },
]

function Settings() {
  const { state } = UseGit2Post()
  const github = state.user?.github || state.user?.name

  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="font-medium">Settings</h1>
        <p className="text-foreground-secondary">
          {github ? `Connected as @${github}.` : 'Manage how Git2Post works for you.'}
        </p>
      </header>

      <ul className="divide-y divide-border border-t border-border">
        {rows.map((row) => (
          <li key={row.title} className="flex items-baseline justify-between gap-4 py-4">
            <h2 className="font-medium">{row.title}</h2>
            <p className="text-right text-sm text-muted-foreground">{row.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Settings
