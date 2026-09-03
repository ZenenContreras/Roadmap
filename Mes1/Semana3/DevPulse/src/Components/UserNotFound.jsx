import { UserRoundX } from 'lucide-react'

function UserNotFound({ username }) {
  return (
    <section className='flex w-full flex-1 flex-col'>
      <article className='flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-6 text-center'>
        <UserRoundX size={40} strokeWidth={1.5} className='text-error' />

        <h2 className='text-4xl  text-error font-semibold'>User not found</h2>
        <p className='max-w-md text-sm leading-relaxed text-text-secondary'>
          We couldn't find{' '}
          <span className='text-text'>@{username}</span> on GitHub. Check the
          spelling and try another username.
        </p>
      </article>
    </section>
  )
}

export default UserNotFound
