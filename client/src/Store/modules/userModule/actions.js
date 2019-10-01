import userService from '../../../services/userService'
import * as types from '../types'

export const actions = {
    async [types.USER_LOGIN]({ commit }, payload) {
        try {
            const response = await userService.USER_LOGIN(payload)
            if (!response.data.token) {
                throw ('No token in response')
            }
            window.localStorage.setItem("user_token", response.data.token)
            const decode = JSON.parse(atob(response.data.token.split('.')[1]))
            commit([types.USER_LOGIN_SUCCESS], decode)
        } catch (error) {
            commit([types.USER_LOGIN_FAILED])
        }
    },
    async [types.USER_SIGNUP]({ commit }, payload) {
        try {
            const response = await userService.USER_SIGNUP(payload)
            commit([types.USER_SIGNUP_SUCCESS], response.data)
        } catch (error) {
            commit([types.USER_SIGNUP_FAILED])
        }
    },
    [types.USER_LOGOUT]({ commit }) {
        commit([types.USER_LOGOUT_SUCCESS])
    }
}