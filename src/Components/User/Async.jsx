import { readLocal } from "../LocalStorage/internalStorage"

export const getAsync = async () => {
    try {
        const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
        const userId = readLocal().id
        const response = await fetch(`${apiUrl}/user/${userId}`)
        const user = await response.json()
        return user.translations
    } catch (error) {
        console.log(error)
    }
}

export const updateAsync = async (value, append) => {
    try {
        const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
        const userId = readLocal().id
        const got = await getAsync()
        const v = append ? [...got, value] : value 
        const options = { 
            method: 'PATCH',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                  translations: v
            })
        }
        await fetch(`${apiUrl}/user/${userId}`, options)
        .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
}