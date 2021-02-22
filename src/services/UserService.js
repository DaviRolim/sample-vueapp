// const axios = require('axios')
export async function getAllUsers() {
    const response = await fetch('https://cro4nlummb.execute-api.us-east-2.amazonaws.com/prod/users');
    try{
        return await response.json();
    }
    catch(err) {
        console.log(err);
        return response.status(501).send(err.message)
    }
}

export async function createUser(data) {
    const response = await fetch(`https://cro4nlummb.execute-api.us-east-2.amazonaws.com/prod/users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })

    try{
        return await response.json();
    }
    catch(err) {
        console.log(err);
        return response.status(501).send(err.message)
    }
}