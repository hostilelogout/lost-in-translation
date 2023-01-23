import { json } from "react-router-dom"

export const localSave = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value))
}

export const readLocal = () => {
    const read = JSON.parse(sessionStorage.getItem(Object.keys(sessionStorage)))
    if (read !== null || read !== undefined) {return read}
    else {return null}
}

export const readFromLocal = (key) => {
    const read = sessionStorage.getItem(key)
    if (read != null) return read
    else return false
}
