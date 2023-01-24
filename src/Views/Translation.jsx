import HeaderForm from '../Components/Header/HeaderForm'
import TranslationForm from '../Components/Translation/TranslationForm'
import withAuth from '../hoc/Authentication'

const Translation = () => {
    return (
        <>
        <HeaderForm />
        <TranslationForm />
        </>
    )
}

export default withAuth(Translation)