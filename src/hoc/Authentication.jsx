import { Navigate } from "react-router-dom"
import { useUser } from "../Context/UserContext"

const withAuth = Component => props => {
    const IsAuthenticated = () => {
        return true
        // const {user} = useUser()
        // if (user !== null){return true}
        // else {return false}
    }

    if (IsAuthenticated()) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default withAuth