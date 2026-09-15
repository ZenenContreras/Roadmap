export async function getRepositories(username) {

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch repositories');
    }

    return await response.json();
}