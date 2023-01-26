
export const localSave = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value)) // saves the given key and stores the given value as a json object
}

export const readLocal = () => {
    const read = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage))) // checks the session data if there are any keys and returns them as a json object 
    if (read !== null || read !== undefined) {return read}
    else {return null}
}

export const deleteLocal = () => {
    sessionStorage.clear() // clears the current data in session
}