import HeaderForm from '../Components/Header/HeaderForm'
import TranslationHistory from '../Components/Profile/TranslationHistory'
import withAuth from '../hoc/Authentication'

const Profile = () => {
    return (
        <>
        <HeaderForm />
        <TranslationHistory />
        </>
    )
}

export default withAuth(Profile)