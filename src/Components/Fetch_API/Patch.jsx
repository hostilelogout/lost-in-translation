import { readLocal } from "../LocalStorage/internalStorage"
import { fetchTranslations } from "./Fetch"


export const patchTranslations = async (value, append) => {
    try {
        const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
        const userId = readLocal().id 
        const got = await fetchTranslations(userId,apiUrl)
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