export const cookiesExists = (cookieName) => {
    return document.cookie.indexOf(cookieName) > 0;
}

export const deleteCookie = (cookieName) => {
    document.cookie = encodeURIComponent(cookieName) + "=; expires=" + new Date().toUTCString(); 
}

