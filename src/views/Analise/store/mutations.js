import * as types from './mutation-types'

export default {
  [types.SET_ANALISE] (state, payload) {
    state.analiselist = payload
  }
}
