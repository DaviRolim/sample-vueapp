const axios = require('axios')
export async function getAllUsers() {
    const response = await axios.get(`http://api.addlist.local:3000/api/users`);
    return await response.json();
}

export async function createUser(data) {
    const response = await axios.post(`http://api.addlist.local:3000/api/user`, {
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}