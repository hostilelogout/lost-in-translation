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