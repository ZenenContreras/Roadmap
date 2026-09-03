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
const headers = {
  Accept: 'application/vnd.github+json',
}

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

function mapCommit(data, repo, fallbackDate) {
  const sha = data.sha
  return {
    sha,
    message: (data.commit?.message || data.message || sha.slice(0, 7)).split('\n')[0],
    repo,
    createdAt: data.commit?.author?.date || fallbackDate,
    url: data.html_url || `https://github.com/${repo}/commit/${sha}`,
  }
}

async function fetchCommitBySha(repo, sha, fallbackDate) {
  const response = await fetch(`https://api.github.com/repos/${repo}/commits/${sha}`, { headers })
  if (!response.ok) {
    return {
      sha,
      message: sha.slice(0, 7),
      repo,
      createdAt: fallbackDate,
      url: `https://github.com/${repo}/commit/${sha}`,
    }
  }

  const data = await response.json()
  return mapCommit(data, repo, fallbackDate)
}

async function fetchCommitsFromRepos(username, repos, limit) {
  const collected = []

  for (const repo of repos.slice(0, 3)) {
    const fullName = repo.full_name
    if (!fullName) continue

    const response = await fetch(
      `https://api.github.com/repos/${fullName}/commits?author=${username}&per_page=${limit}`,
      { headers }
    )
    if (!response.ok) continue

    const data = await response.json()
    if (!Array.isArray(data)) continue

    for (const commit of data) {
      collected.push(mapCommit(commit, fullName, commit.commit?.author?.date))
    }
  }

  return collected
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit)
}

export async function getRecentCommits(username, repos = [], limit = 5) {
  const eventsResponse = await fetch(
    `https://api.github.com/users/${username}/events/public?per_page=30`,
    { headers }
  )

  if (eventsResponse.ok) {
    const events = await eventsResponse.json()

    if (Array.isArray(events)) {
      const pushes = events
        .filter((event) => event.type === 'PushEvent' && event.repo?.name && event.payload?.head)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, limit)

      if (pushes.length > 0) {
        return Promise.all(
          pushes.map((event) => {
            const repo = event.repo.name
            const payloadCommits = event.payload.commits

            if (payloadCommits?.length) {
              const commit = payloadCommits.at(-1)
              return {
                sha: commit.sha,
                message: (commit.message || 'Commit').split('\n')[0],
                repo,
                createdAt: event.created_at,
                url: `https://github.com/${repo}/commit/${commit.sha}`,
              }
            }

            return fetchCommitBySha(repo, event.payload.head, event.created_at)
          })
        )
      }
    }
  }

  return fetchCommitsFromRepos(username, repos, limit)
}
