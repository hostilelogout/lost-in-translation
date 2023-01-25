import { useEffect } from "react";
import { useState } from "react";
import { getAsync, updateAsync } from "../User/Async";

//Component for the main profile page.
//Display translations from API.
//Clear translations in API.
const TranslationHistory = () => {
    const [ translations, setTranslations] = useState([]);
    useEffect(() => {
        const getTranslations = async () => {
            setTranslations(await getAsync())
        }
        getTranslations()
    }, [])

    //Create list items from translations array for display.
    const translationList = () => {
        const listItems = translations.map((translation, index) =>
            <li className="list-group-item" key={index}>{translation}</li>
          );
          return <ul className="list-group">{listItems}</ul>;
    }
    
    //Handle clear translations event.
    //Clears translations in API.
    //Clears translations in state.
    const handleSubmit = (event) => {
        event.preventDefault()
        updateAsync([], false)
        setTranslations([])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group d-grid mt-3 gap-3">
                <h2>Your translation history:</h2>
                {translations.length ? translationList() : <p className="text-muted">No translations.</p>}
                <button type="submit" className="btn btn-outline-secondary m-auto" disabled={translations.length < 1}>Clear history</button>
            </div>
        </form>
    )
}

export default TranslationHistory

