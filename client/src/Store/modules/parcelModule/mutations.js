import * as types from '../types'

export const mutations = {
    [types.CREATE_PARCEL_SUCCESS]: (state, payload) => {
        state.parcel = payload
    },
    [types.GET_PARCEL_SUCCESS]: (state, payload) => {
        state.parcel = payload
    },
    [types.CANCEL_USER_PARCEL_SUCCESS]: (state, payload) => {

    },
    [types.CHANGE_USER_PARCEL_DESTINATION_SUCCESS]: (state, payload) => {

    }
}