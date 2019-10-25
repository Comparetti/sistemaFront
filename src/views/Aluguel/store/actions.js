import services from '@/http'
import * as types from './mutation-types'

export const ActionFindAluguellist = ({ commit }) => (
  services.aluguellist.aluguellist().then(res => {
    commit(types.SET_ALUGUEL, res.data)
  })
)
