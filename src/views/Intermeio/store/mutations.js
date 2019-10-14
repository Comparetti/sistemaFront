import * as types from './mutation-types'

export default {
  [types.SET_INTERMEIO] (state, payload) {
    state.intermeiolist = payload
  }
}
