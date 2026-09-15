export async function getUser(username) {

    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch user');
    }

    return await response.json();
}