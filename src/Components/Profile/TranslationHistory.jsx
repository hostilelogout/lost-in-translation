import { useEffect } from "react";
import { useState } from "react";
import { fetchTranslations } from "../Fetch_API/Fetch";
import { patchTranslations } from "../Fetch_API/Patch";
import { readLocal } from "../LocalStorage/internalStorage";


//Component for the main profile page.
//Display translations from API.
//Clear translations in API.
const TranslationHistory = () => {
    const [ translations, setTranslations] = useState([]);
    useEffect(() => {
        const getTranslations = async () => {
            setTranslations(await fetchTranslations(readLocal().id,"https://incandescent-pastoral-respect.glitch.me"))
        }
        getTranslations()
    }, [])

    //Create list items from translations array for display.
    const translationList = () => {
        const listItems = translations.slice(-10).reverse().map((translation, index) =>
            <li className="list-group-item" key={index}>{translation}</li>
          );
          return <ul className="list-group">{listItems}</ul>;
    }
    
    //Handle clear translations event.
    //Clears translations in API.
    //Clears translations in state.
    const handleSubmit = (event) => {
        event.preventDefault()
        patchTranslations([], false)
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

