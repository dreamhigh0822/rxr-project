export const setSessionToken = (name, value) => {
    value = value.replace(/"/g, "").replace(/'/g, "");
    sessionStorage.setItem(name, '"' + value.toString() +'"');
    
}

export const clearSessionToke = (name) => {
    sessionStorage.setItem(name, null);
    
}