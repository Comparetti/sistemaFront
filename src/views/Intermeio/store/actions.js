import services from '@/http'
import * as types from './mutation-types'

export const ActionFindIntermeiolist = ({ commit }) => (
  services.intermeiolist.intermeiolist().then(res => {
    commit(types.SET_INTERMEIO, res.data)
  })
)
