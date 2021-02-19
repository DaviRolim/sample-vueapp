export async function getAllUsers() {
    const response = await fetch(`http://api.addlist.local:3000/api/users`);
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`http://api.addlist.local:3000/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}