export interface Commits{
    sha: number
    html_url: string
    message: string
    comment_count: number
    date: string
    author: {
        login: string,
    }
}