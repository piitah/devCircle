exports.Token = function () {
    let token = window.localStorage.getItem('user_token')
    if (token) {
        return token
    } else {
        return "no token found"
    }
}