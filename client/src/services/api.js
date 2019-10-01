import axios from 'axios'
import { getUserToken } from '../../auth/getToken'

export default () => {
    return axios.create({
        baseURL: `https://sendit-it.herokuapp.com/`,
        header: {
            "Authorization": "Bearer Token" + getUserToken,
            "Accept": "application/json",
            "Content-type": "application/json"
        }

    })
}