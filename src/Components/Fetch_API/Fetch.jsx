import { localSave } from '../LocalStorage/internalStorage'

export const fetchUser = async (username, apiUrl) => {
    try {
        const request = await fetch(`${apiUrl}/user?username=${username}`)
            .then(response => response.json())
            .then(results => {
                if (results.length > 0) {
                    localSave(results[0].username, results[0])
                    return results[0]
                }
            })
        return request
    } catch (error) {
        console.log(error)
    }
}

export const fetchTranslations = async (userId, apiUrl) => {
    try {
        const request = await fetch(`${apiUrl}/user/${userId}`)
            .then(response => response.json())
            .then(results => {
                return results.translations
            })

        return request

    } catch (error) {
        console.log(error)
    }
}