import { Navigate } from "react-router-dom"
import { readFromLocal } from "../Components/LocalStorage/internalStorage"

const withAuth = Component => props => {
    const isAuthenticated = () => {
        return readFromLocal("userid") !== false
    }

    if (isAuthenticated()) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default withAuth