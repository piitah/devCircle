import * as types from '../types'

export const mutations = {
    [types.CREATE_PROFILE_SUCCESS]: (state, payload) => {
        state.profile = payload
        state.loading = false,
            state.disabled = false
    },
    [types.GET_USER_PROFILE_SUCCESS]: (state, payload) => {
        state.profile = payload
    },
    [types.UPDATE_USER_PROFILE_SUCCESS]: (state, payload) => {

    },
    [types.CREATE_EDUCATION_SUCCESS]: (state, payload) => {

    },
    [types.CREATE_EXPERIENCE_SUCCESS]: (state, payload) => {

    },
    [types.SET_LOADING]: (state) => {
        state.loading = true;
        state.disabled = true;
    },
}