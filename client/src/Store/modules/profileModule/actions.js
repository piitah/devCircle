import profileService from '../../../services/profileService'
import * as types from '../types'

export const actions = {
    async [types.CREATE_PROFILE]({ commit }, payload) {
        try {
            const response = await profileService.CREATE_PROFILE(payload)
            commit(types.CREATE_PROFILE_SUCCESS, response.data)
        } catch (error) {
            alert(error.response.data)
            // throw error
        }
    },
    async [types.GET_USER_PROFILE]({ commit }) {
        try {
            const response = await profileService.GET_USER_PROFILES()
            if (response.status === 204) {
                return response
            } else {
                commit(types.GET_USER_PROFILE_SUCCESS, response.data.data)
            }
        } catch (error) {
            throw error
        }
    },
    async [types.UPDATE_USER_PROFILE]({ commit }, payload) {
        try {
            const response = await profileService.UPDATE_PROFILE(payload)
            commit(types.UPDATE_USER_PROFILE_SUCCESS, response.data.data)
        } catch (error) {
            throw error
        }
    },
    async [types.CREATE_EXPERIENCE]({ commit }, payload) {
        await profileService.CREATE_EXPERIENCE(payload)
            .then(response => {
                commit(types.CREATE_EXPERIENCE_SUCCESS, response.data)
            })
            .catch(error => {
                commit(types.CREATE_EXPERIENCE_FAILED, error.response.data.error)
            })
    },
    async [types.CREATE_EDUCATION]({ commit }, payload) {
        await profileService.CREATE_EDUCATION(payload)
            .then(response => {
                commit(types.CREATE_EDUCATION_SUCCESS, response.data)
            })
            .catch(error => {
                commit(types.CREATE_EDUCATION_FAILED, error.response.data.error)
            })
    }
}