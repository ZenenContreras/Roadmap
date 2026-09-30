import { Repository } from "../types/repository";

type RepositoryResponse = {
    readonly id: number
    name: string
    html_url: string
    description: string
    topics?: string[]
    default_branch: string 
    owner: {
        login: string
    }
}


export async function getRepositories(username: string): Promise<Repository[]> {

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }

    const repositoryData: RepositoryResponse[] = await response.json()

    const data: Repository[] = repositoryData.map(repository => ({
        id: repository.id,
        name : repository.name,
        html_url : repository.html_url,
        description : repository.description,
        topics : repository.topics,
        default_branch  :repository.default_branch,
        owner: {
            login: repository.owner.login
        }
    }))
    

    return data
}
