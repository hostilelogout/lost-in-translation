import HeaderView from '../Views/HeaderView'
import TranslationForm from '../Components/Translation/TranslationForm'
import withAuth from '../hoc/Authentication'

const Translation = () => {
    return (
        <>
        <HeaderView />
        <TranslationForm />
        </>
    )
}

export default withAuth(Translation)