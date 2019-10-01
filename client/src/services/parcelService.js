import Api from '../services/api'

export default {
    CREATE_PARCEL(payload) {
        return Api.post('api/v1/parcels', payload)
    },
    GET_USER_PARCELS() {
        return Api.get('api/v1/parcels')
    },
    CANCEL_USER_PARCEL(parcelId) {
        return Api.patch(`api/v1/parcels/${parcelId}/cancel`)
    },
    CHANGE_USER_PARCEL_DESTINATION(parcelId, payload) {
        return Api.patch(`api/v1/parcels/${parcelId}/destination`, payload)
    }
}