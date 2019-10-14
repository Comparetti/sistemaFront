import services from '@/http'
import * as types from './mutation-types'

export const ActionFindPhoebuslist = ({ commit }) => (
  services.phoebuslist.phoebuslist().then(res => {
    commit(types.SET_PHOEBUS, res.data)
  })
)
