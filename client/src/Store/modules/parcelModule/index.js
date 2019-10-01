import state from '../parcelModule/states'
import { actions } from '../parcelModule/actions'
import { mutations } from '../parcelModule/mutations'

const namespaced = true;

export default {
    namespaced,
    state,
    actions,
    mutations
}