import { readFromLocal } from "../LocalStorage/internalStorage"

export const updateAsync = async (value) => {
    try {
        console.log("request")
        const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
        const userId = readFromLocal("userid")
        const options = { 
            method: 'PATCH',
            headers: {
                'X-API-Key': "w3VMNnfFdElrsd8UdYjf",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                  translations: value
            })
        }
        await fetch(`${apiUrl}/user/${userId}`, options)
        .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
}