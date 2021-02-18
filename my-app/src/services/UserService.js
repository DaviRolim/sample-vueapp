export async function getAllUsers() {
    const url = `http://api.addlist.local/api/users`
    const response = await fetch(url);
    return await response.json();
}

export async function createUser(data) {
    const url = `http://api.addlist.local/api/user`
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}