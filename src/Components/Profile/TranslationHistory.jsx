import { useEffect } from "react";
import { useState } from "react";
import { localSave, readFromLocal } from "../LocalStorage/internalStorage";

const TranslationHistory = () => {
    //localSave("id",1) //TODO: remove from here.
    const [ translations, setTranslations] = useState(false);
    useEffect(() => {
        const getAsync = async () => {
            try {
                const response = await fetch("https://hickory-quilled-actress.glitch.me/computers")
                const users = await response.json()
                setTranslations(users.filter(x => x.id === readFromLocal("id"))[0].specs)
            } catch (error) {
                console.log(error)
            }
        }

        getAsync()

    }, [])

    const clearTranslations = () => {
        //TODO: delete translations in API
        setTranslations(false)
        return
    }

    const translationList = () => {
        const listItems = translations.map((translation, index) =>
            <li className="list-group-item" key={index}>{translation}</li>
          );
          return <ul className="list-group">{listItems}</ul>;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        clearTranslations()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group d-grid mt-3 gap-3">
                <h2>Your translation history:</h2>
                {translations ? translationList() : <p className="text-muted">No translations.</p>}
                <button type="submit" className="btn btn-outline-secondary m-auto" disabled={translations === false}>Clear history</button>
            </div>
        </form>
    )
}

export default TranslationHistory

