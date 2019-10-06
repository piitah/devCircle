import state from '../profileModule/states'
import { actions } from '../profileModule/actions'
import { mutations } from '../profileModule/mutations'

const namespaced = true;

export default {
    namespaced,
    state,
    actions,
    mutations
}