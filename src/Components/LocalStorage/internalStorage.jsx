export const localSave = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value))
}

export const readFromLocal = (key) => {
    if (sessionStorage.getItem(key)) {return true}
    else {return false}
}
