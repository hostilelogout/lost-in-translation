export const localSave = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value))
}

export const readLocal = () => {
    const read = sessionStorage.getItem(Object.keys(sessionStorage))
    if (read != null) {return read}
    else {return false}
}
