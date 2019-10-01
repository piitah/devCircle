import Api from '../services/api'

export default {
    USER_LOGIN(payload) {
        return Api.post('api/v1/auth/login', payload)
    },
    USER_SIGNUP(payload) {
        return Api.post('api/v1/auth/signup', payload)
    }
}