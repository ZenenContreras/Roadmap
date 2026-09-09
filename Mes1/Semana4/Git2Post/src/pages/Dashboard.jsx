function Dashboard() {
  return (
    <section className="min-h-screen bg-amber-950 px-6 py-16 text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <header>
          <h1 className="text-4xl font-bold">Git2Post Dashboard</h1>
          <p className="mt-2 text-lg text-amber-100">Welcome back.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
            <h2 className="text-xl font-semibold">Repositories</h2>
            <p className="mt-2 text-amber-100">Your connected GitHub projects.</p>
          </article>

          <article className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
            <h2 className="text-xl font-semibold">Generated Posts</h2>
            <p className="mt-2 text-amber-100">Content created from your activity.</p>
          </article>

          <article className="rounded-xl border border-amber-800 bg-amber-900/40 p-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <p className="mt-2 text-amber-100">Latest commits and updates.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
