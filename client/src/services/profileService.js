import Api from '../services/api'

export default {
    CREATE_PROFILE(payload) {
        return Api().post('Profile', payload)
    },
    GET_USER_PROFILES() {
        return Api().get('Profile')
    },
    UPDATE_PROFILE(payload) {
        return Api().post('updateProfile', payload)
    },
    CREATE_EDUCATION() {
        return Api().get('education', payload)
    },
    CREATE_EXPERIENCE(payload) {
        return Api().patch(`experience`, payload)
    }
}