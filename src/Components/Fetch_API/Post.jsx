import { localSave } from '../LocalStorage/internalStorage'

export const postUser = async (username, apiUrl) => {
    try {
        const request = await fetch(`${apiUrl}/user`, {
            method: 'POST',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: `${username}`,
                translations: []
            })

        })
            .then(response => response.json()
                .then(results => {
                    localSave(results.username, results)
                    return results
                }))

        return request

    } catch (error) {
        console.log(error)
    }

}