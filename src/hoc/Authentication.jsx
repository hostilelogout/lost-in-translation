import { Navigate } from "react-router-dom"
import { readFromLocal } from "../Components/LocalStorage/internalStorage"

const withAuth = Component => props => {
    const isAuthenticated = () => {
        // TODO: check session instead
        return true // readFromLocal("username") !== false
    }

    if (isAuthenticated()) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default withAuth