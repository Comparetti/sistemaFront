import * as types from './mutation-types'

export default {
  [types.SET_CONSULTA] (state, payload) {
    state.consultalist = payload
  }
}
