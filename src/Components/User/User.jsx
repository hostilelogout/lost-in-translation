import { localSave, readLocal } from '../LocalStorage/internalStorage'

const apiUrl = "https://incandescent-pastoral-respect.glitch.me"

export const getUser = async (username) => {
    const request = await fetch(`${apiUrl}/user?username=${username}`)
     .then(response => response.json())
     .then(results => {
         if (results.length > 0) {
          localSave(results[0].username,results[0])
          return results[0]
       }
     })

     return await request
 }

 export const createUser = async (username) => {
    const request = await fetch(`${apiUrl}/user`, {
       method: 'POST',
       headers: {
         'X-API-Key': "w3VMNnfFdElrsd8UdYjf",
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({ 
           username: `${username}`,
           translations: [] 
       })
   })
   return await request.json()
 }

 export const loginUser = async (username) => {
   
    const getLocalSave = readLocal(username)

    if (getLocalSave != false){
        return getLocalSave
    }

    const getUserData =  await getUser(username)

    if (getUserData != undefined){
        return getUserData
    }

    if (getUserData === undefined && getLocalSave === false){
        return await createUser(username)
    }

 }
 