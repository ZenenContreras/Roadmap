export interface Commits{
    sha: number
    html_url: string
    message: string
    author: {
        login: string,
        date: string
        comment_count: number
    }
}