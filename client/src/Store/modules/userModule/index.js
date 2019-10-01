import state from '../userModule/states'
import { actions } from '../userModule/actions'
import { mutations } from '../userModule/mutations'

const namespaced = true

export default {
    namespaced,
    state,
    mutations,
    actions
}