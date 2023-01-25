import { fetchUser } from '../Fetch_API/Fetch'
import { postUser } from '../Fetch_API/Post'
import { readLocal } from '../LocalStorage/internalStorage'

 export const loginUser = async (username) => {
   
    const getLocalSave = readLocal()
        
    if (getLocalSave !== null){
        return getLocalSave
    }
    
    const getUserData =  await fetchUser(username,"https://incandescent-pastoral-respect.glitch.me")

    if (getUserData !== undefined){
        return getUserData
    }
   
    if (getUserData === undefined && getLocalSave === null){
        return await postUser(username,"https://incandescent-pastoral-respect.glitch.me")
    }

 }
 