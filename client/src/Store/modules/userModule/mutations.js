import * as types from '../types'

export const mutations = {
    [types.USER_LOGIN_SUCCESS]: (state, payload) => {
        state.user = payload;
        state.isAuthenticated = true
    },
    [types.USER_LOGOUT_SUCCESS]: (state) => {
        state.user = {};
        state.isAuthenticated = false;
    }
}