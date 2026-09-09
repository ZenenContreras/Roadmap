import { Link } from 'react-router'

function Landing() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-6 bg-amber-950 px-6 text-center text-white">
      <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-amber-100">
        <Link to="/dashboard" className="hover:text-white">
          Dashboard
        </Link>
        <Link to="/dashboard/repositories" className="hover:text-white">
          Repositories
        </Link>
        <Link to="/dashboard/posts" className="hover:text-white">
          Posts
        </Link>
        <Link to="/dashboard/settings" className="hover:text-white">
          Settings
        </Link>
      </nav>

      <p className="text-sm font-semibold tracking-widest uppercase text-amber-200">
        Git2Post
      </p>

      <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
        Turn your GitHub activity into content.
      </h1>

      <p className="max-w-xl text-lg text-amber-100">
        Transform your commits, repositories and development activity into
        professional posts you can share with your audience.
      </p>

      <Link
        to="/dashboard"
        className="rounded-lg border bg-amber-50 px-5 py-2 text-black duration-200 hover:scale-102 active:scale-95"
      >
        Get Started
      </Link>
    </section>
  )
}

export default Landing
