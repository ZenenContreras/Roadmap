const divisions = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
]

const relativeTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export function formatRelativeTime(isoDate) {
  if (!isoDate) return ''

  let duration = (new Date(isoDate).getTime() - Date.now()) / 1000

  for (const division of divisions) {
    if (Math.abs(duration) < division.amount) {
      return relativeTime.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }

  return ''
}

export function extractRecentCommits(events, limit = 5) {
  const commits = []

  for (const event of events) {
    if (event.type !== 'PushEvent' || !event.payload?.commits?.length) continue

    const repo = event.repo?.name
    const ordered = [...event.payload.commits].reverse()

    for (const commit of ordered) {
      commits.push({
        sha: commit.sha,
        message: (commit.message || 'Commit').split('\n')[0],
        repo,
        createdAt: event.created_at,
        url: `https://github.com/${repo}/commit/${commit.sha}`,
      })

      if (commits.length >= limit) return commits
    }
  }

  return commits
}
