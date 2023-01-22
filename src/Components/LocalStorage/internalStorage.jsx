export const localSave = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
}

export const readFromLocal = (key) => {
    if (localStorage.getItem(key)) {return true}
    else {return false}
}
