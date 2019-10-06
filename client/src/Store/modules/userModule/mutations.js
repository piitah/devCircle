import * as types from '../types'

export const mutations = {
    [types.USER_LOGIN_SUCCESS]: (state, payload) => {
        state.user = payload;
        state.msg = ''
        state.loading = false;
        state.disabled = false
    },
    [types.USER_LOGIN_FAILED]: (state, payload) => {
        state.msg = payload;
        state.loading = false;
        state.disabled = false
    },
    [types.USER_SIGNUP_SUCCESS]: (state, payload) => {
        state.loading = false;
        state.disabled = false
    },
    [types.USER_SIGNUP_FAILED]: (state, payload) => {
        state.msg = payload;
        state.loading = false;
        state.disabled = false
    },
    [types.SET_LOADING]: (state) => {
        state.loading = true;
        state.disabled = true;
    },
    [types.CANCEL_ALL_MESSAGES]: (state) => {
        state.msg = ""
    }
}
