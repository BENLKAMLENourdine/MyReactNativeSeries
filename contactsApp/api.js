const procesContact = (contact) => {
    return {
        phone: contact.phone,
        name: `${contact.name.first} ${contact.name.last}`
    }
}


export const fetchUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?nat=us&results=20')
        const result = await response.json()
        return result.results.map(procesContact)
}

export const login = async (username, password) => {
    const response = await fetch('http://192.168.0.130:8888/', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({username, password }) 
    })

    if (response.ok) return true

    const errorMessage = await response.text()
    throw new Error(errorMessage)
}