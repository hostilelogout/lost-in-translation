import { localSave } from '../LocalStorage/internalStorage'

const apiUrl = "https://incandescent-pastoral-respect.glitch.me"

export const getUser = async (username) => {
    const request = fetch(`${apiUrl}/user?username=${username}`)
     .then(response => response.json())
     .then(results => {
         if (results.length > 0) {
          localSave(results[0].username,results[0])
          return true
       }
     })
     return request
 }

 export const createUser = async (username) => {
    const request = fetch(`${apiUrl}/user`, {
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
 
   return request
 }
 