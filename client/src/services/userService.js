import Api from '../services/api'

export default {
    USER_LOGIN(payload) {
        return Api().post('loginIn', payload)
    },
    USER_SIGNUP(payload) {
        return Api().post('signUp', payload)
    }
}