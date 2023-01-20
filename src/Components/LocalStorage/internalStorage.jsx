export const localSave = (key,value) => {
    localStorage.setItem(key,JSON.stringify(value))
}

export const readFromLocal = key => {
    const data = localStorage.getItem(key)
    if (data) {
        return JSON.parse(data)
    }

    return false
}
