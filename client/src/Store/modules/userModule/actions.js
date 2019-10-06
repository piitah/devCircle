import userService from '../../../services/userService'
import * as types from '../types'
import router from "../../../router"

export const actions = {
    async [types.USER_LOGIN](context, payload) {
        await userService.USER_LOGIN(payload)
            .then(response => {
                window.localStorage.setItem("user_token", response.data.token)
                const decode = JSON.parse(atob(response.data.token.split('.')[1]))
                context.commit(types.USER_LOGIN_SUCCESS, decode)
                router.push({ path: '/signup' })
            })
            .catch(error => {
                context.commit(types.USER_LOGIN_FAILED, error.response.data.error)
            })
    },
    async [types.USER_SIGNUP](context, payload) {
        await userService.USER_SIGNUP(payload)
            .then(response => {
                context.commit(types.USER_SIGNUP_SUCCESS, response.data)
                router.push({ path: '/login' })
            })
            .catch(error => {
                context.commit(types.USER_SIGNUP_FAILED, error.response.data.message)
            })
    },
    [types.USER_LOGOUT](context) {
        context.commit(types.USER_LOGOUT_SUCCESS)
    }
}