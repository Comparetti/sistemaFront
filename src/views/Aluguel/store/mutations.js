import * as types from './mutation-types'

export default {
  [types.SET_ALUGUEL] (state, payload) {
    state.aluguellist = payload
  }
}
