import HeaderView from '../Views/HeaderView'
import TranslationHistory from '../Components/Profile/TranslationHistory'
import withAuth from '../hoc/Authentication'

const Profile = () => {
    return (
        <>
        <HeaderView />
        <TranslationHistory />
        </>
    )
}

export default withAuth(Profile)