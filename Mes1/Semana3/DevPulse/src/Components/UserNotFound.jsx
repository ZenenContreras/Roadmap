function UserNotFound({ username }) {
  return (
    <section className='flex flex-1 flex-col justify-center gap-3'>
      <h2 className='font-medium'>User not found</h2>
      <p className='max-w-md text-foreground-secondary'>
        We couldn’t find{' '}
        <span className='text-foreground'>@{username}</span> on GitHub. Check the
        spelling and try another username.
      </p>
    </section>
  )
}

export default UserNotFound
