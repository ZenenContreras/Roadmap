import { Link } from 'react-router'

function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-amber-950 px-6 text-center text-white">
      <p className="text-6xl font-bold">404</p>
      <h1 className="text-2xl font-semibold">Page not found.</h1>
      <Link
        to="/dashboard"
        className="mt-4 rounded-lg border bg-amber-50 px-5 py-2 text-black duration-200 hover:scale-102 active:scale-95"
      >
        Back to Dashboard
      </Link>
    </section>
  )
}

export default NotFound
