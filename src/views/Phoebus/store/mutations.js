import * as types from './mutation-types'

export default {
  [types.SET_PHOEBUS] (state, payload) {
    state.phoebuslist = payload
  }
}
