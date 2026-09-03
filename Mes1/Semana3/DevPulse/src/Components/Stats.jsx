function Stats({ repos = 0, followers = 0, following = 0 }) {
  const items = [
    { label: 'Repos', value: repos },
    { label: 'Followers', value: followers },
    { label: 'Following', value: following },
  ]

  return (
    <dl className='mt-6 grid grid-cols-3 divide-x divide-border-soft border-t border-border-soft pt-4'>
      {items.map(({ label, value }) => (
        <div key={label} className='flex flex-col items-center gap-1 px-2'>
          <dd className='text-lg font-semibold text-text'>{value}</dd>
          <dt className='text-xs text-muted'>{label}</dt>
        </div>
      ))}
    </dl>
  )
}

export default Stats
