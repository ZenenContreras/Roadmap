import { Link } from 'react-router'

function Posts() {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-1">
        <h1 className="font-medium">Posts</h1>
        <p className="text-foreground-secondary">Drafts generated from your GitHub activity.</p>
      </header>

      <div className="flex flex-1 flex-col justify-center gap-3 border-t border-border pt-8">
        <h2 className="font-medium">No posts yet</h2>
        <p className="max-w-md text-foreground-secondary">
          Pick a repository first. Git2Post will turn recent work into a draft you can edit and share.
        </p>
        <Link
          to="/dashboard/repositories"
          className="mt-2 w-fit text-sm font-medium underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground/50"
        >
          Browse repositories
        </Link>
      </div>
    </section>
  )
}

export default Posts
