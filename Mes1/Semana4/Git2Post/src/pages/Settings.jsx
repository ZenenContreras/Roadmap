function Settings() {
  return (
    <section className="min-h-screen bg-amber-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <h1 className="text-4xl font-bold">Settings</h1>

        <section className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
          <h2 className="text-xl font-semibold">GitHub Account</h2>
          <p className="mt-2 text-amber-100">Connect your GitHub profile to start generating posts.</p>
        </section>

        <section className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
          <h2 className="text-xl font-semibold">Preferences</h2>
          <p className="mt-2 text-amber-100">Choose how Git2Post formats your content.</p>
        </section>

        <section className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
          <h2 className="text-xl font-semibold">Theme</h2>
          <p className="mt-2 text-amber-100">Light, dark or system appearance.</p>
        </section>

        <section className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
          <h2 className="text-xl font-semibold">Account</h2>
          <p className="mt-2 text-amber-100">Manage your Git2Post account details.</p>
        </section>
      </div>
    </section>
  )
}

export default Settings
