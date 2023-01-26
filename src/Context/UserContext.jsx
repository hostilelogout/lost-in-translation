import {createContext,useState,useContext} from 'react'
import { readLocal } from '../Components/LocalStorage/internalStorage'

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {
    const [user, setUser] = useState(readLocal()?.username || null) // checks to see if there is any data in session and if not return null. this means immediate redirect to login
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider