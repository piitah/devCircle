import axios from 'axios'
// import getUserToken from '../../auth/getToken'

let token;
if (window.localStorage.getItem('user_token') !== null) {
    token = window.localStorage.getItem('user_token')
} else {
    token = "no token found"
}
export default () => {
    return axios.create({
        baseURL: `http://localhost:3030/`,
        headers: {
            "Authorization": token,
            "Accept": "application/json",
            "Content-type": "application/json"
        }

    })
}