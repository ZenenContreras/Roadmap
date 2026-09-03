function Stats({ repos = 0, followers = 0, following = 0 }) {
  const items = [
    { label: 'repos', value: repos },
    { label: 'followers', value: followers },
    { label: 'following', value: following },
  ]

  return (
    <dl className='flex flex-wrap gap-x-6 gap-y-1 text-sm'>
      {items.map(({ label, value }) => (
        <div key={label} className='flex items-baseline gap-1.5'>
          <dd className='font-medium'>{value}</dd>
          <dt className='text-muted-foreground'>{label}</dt>
        </div>
      ))}
    </dl>
  )
}

export default Stats
