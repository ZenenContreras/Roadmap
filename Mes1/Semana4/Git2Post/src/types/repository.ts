export interface Repository {
    readonly id: number
    name: string
    html_url: string
    description: string
    topics?: string[]
    default_branch: string 
}