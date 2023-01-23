import {createContext,useState,useContext} from 'react'
import { readLocal } from '../Components/LocalStorage/internalStorage'

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

const UserProvider = ({children}) => {
    const [user, setUser] = useState(readLocal()?.username || null)
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