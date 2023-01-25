import { readLocal } from "../LocalStorage/internalStorage"

//Fetch: get translations for session user from API.
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

//Fetch: update translations for session user in API.
//Either append value to translations.
//Or override value in translations.
export const updateAsync = async (value, append) => {
    try {
        const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
        const userId = readLocal().id
        const got = await getAsync()
        const newValue = append ? [...got, value] : value 
        const options = { 
            method: 'PATCH',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                  translations: newValue
            })
        }
        await fetch(`${apiUrl}/user/${userId}`, options)
        .then(response => response.json())
    } catch (error) {
        console.log(error)
    }
}