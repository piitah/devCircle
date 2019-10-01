import parcelService from '../../../services/parcelService'
import * as types from '../types'

export const actions = {
    async [types.CREATE_PARCEL]({ commit }, payload) {
        try {
            const response = await parcelService.CREATE_PARCEL(payload)
            if (response.status === 201) {
                commit([types.CREATE_PARCEL_SUCCESS], response.data.data)
            }
        } catch (error) {
            throw error
        }
    },
    async [types.GET_USER_PARCEL]({ commit }) {
        try {
            const response = await parcelService.GET_USER_PARCELS()
            if (response.status === 204) {
                return response
            } else {
                commit([types.GET_PARCEL_SUCCESS], response.data.data)
            }
        } catch (error) {
            throw error
        }
    },
    async [types.CANCEL_USER_PARCEL]({ commit }, payload) {
        try {
            const response = await parcelService.CANCEL_USER_PARCEL(payload)
            commit([types.CANCEL_USER_PARCEL_SUCCESS], response.data.data)
        } catch (error) {
            throw error
        }
    },
    async [types.CHANGE_USER_PARCEL_DESTINATION]({ commit }, payload) {
        try {
            const response = await parcelService.CHANGE_USER_PARCEL_DESTINATION(payload)
            commit([types.CHANGE_USER_PARCEL_DESTINATION_SUCCESS], response.data.data)
        } catch (error) {
            throw error
        }
    }
}