export async function commitsService(username, repo) {

    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch commits');
    }

    return await response.json();
}