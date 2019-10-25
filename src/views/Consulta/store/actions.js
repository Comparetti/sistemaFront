import services from '@/http'
import * as types from './mutation-types'

export const ActionFindConsultalist = ({ commit }) => (
  services.consultalist.consultalist().then(res => {
    commit(types.SET_CONSULTA, res.data)
  })
)
