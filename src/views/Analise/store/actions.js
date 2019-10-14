import services from '@/http'
import * as types from './mutation-types'

export const ActionFindAnaliselist = ({ commit }) => (
  services.analiselist.analiselist().then(res => {
    commit(types.SET_ANALISE, res.data)
  })
)
