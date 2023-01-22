import { useEffect } from "react";
import { useState } from "react";
import { readFromLocal } from "../LocalStorage/internalStorage";
import { updateAsync } from "../User/UpdateAsync";

const TranslationHistory = () => {
    const [ translations, setTranslations] = useState(["test"]);
    useEffect(() => {
        const getAsync = async () => {
            try {
                console.log("request")
                const apiUrl = "https://incandescent-pastoral-respect.glitch.me"
                const userId = readFromLocal("userid")
                const response = await fetch(`${apiUrl}/user/${userId}`)
                const user = await response.json()
                setTranslations(user.translations)
            } catch (error) {
                console.log(error)
            }
        }
        getAsync()
    }, [])

    const translationList = () => {
        const listItems = translations.map((translation, index) =>
            <li className="list-group-item" key={index}>{translation}</li>
          );
          return <ul className="list-group">{listItems}</ul>;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        updateAsync([])
        setTranslations([])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group d-grid mt-3 gap-3">
                <h2>Your translation history:</h2>
                {translations.length ? translationList() : <p className="text-muted">No translations.</p>}
                <button type="submit" className="btn btn-outline-secondary m-auto" disabled={translations === false}>Clear history</button>
            </div>
        </form>
    )
}

export default TranslationHistory

