import { fetchUser } from '../Fetch_API/Fetch'
import { postUser } from '../Fetch_API/Post'
import { readLocal } from '../LocalStorage/internalStorage'

// logic for creating a user and or finding existing once.
// if no user is found create a new one and return it.
 export const loginUser = async (username) => {
   
    // stores the session data 
    const getLocalSave = readLocal()
    // checks if session data is valid and exist.
    if (getLocalSave !== null){
        return getLocalSave // returns the saved session data
    }
    
    // waits for the Fetch API and stores whatever it finds.
    const getUserData =  await fetchUser(username,"https://incandescent-pastoral-respect.glitch.me")
    // checks to see if the user data is defined or not
    if (getUserData !== undefined){
        return getUserData // returns the user data
    }
    // checks to see if userdata and local save do not exist. and if so create a new user
    if (getUserData === undefined && getLocalSave === null){
        return await postUser(username,"https://incandescent-pastoral-respect.glitch.me") // waits for the created user to return.
    }

 }
 