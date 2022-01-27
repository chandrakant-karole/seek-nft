 const changeCookie = (state = null, action) => {
    if (action.type === "addCookie") {
        return state + action.payload ;
    }
}

export default changeCookie;