import { Commits } from "../types/commits";

type CommitsResponseT = {
    sha: string
    html_url: string
    commit: {
        message: string
        comment_count: number
        author: {
            date: string
        }
    }
    author: {
        login: string,
    }

}

export async function commitsService(username: string, repo: string): Promise<Commits[]> {

    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch commits');
    }

    const commitsResponse: CommitsResponseT[] = await response.json()

    const data = commitsResponse.map(commits => ({
        sha: commits.sha,
        html_url: commits.html_url,
        message: commits.commit.message,
        comment_count: commits.commit.comment_count,
        date: commits.commit.author.date ,
        author: {
            login: commits.author.login
        }
    }))


    return data
}