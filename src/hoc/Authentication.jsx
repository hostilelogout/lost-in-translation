import { Navigate } from "react-router-dom"

const withAuth = Component => props => {
    const isAuthenticated = () => {
        // TODO: check session instead
        return true
    }

    if (isAuthenticated()) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}

export default withAuth