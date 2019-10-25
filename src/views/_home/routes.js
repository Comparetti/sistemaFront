import phoebusRoutes from '../Phoebus/routes'
import analiseRoutes from '../Analise/routes'
import intermeioRoutes from '../Intermeio/routes'
import consultaRoutes from '../Consulta/routes'
import aluguelRoutes from '../Aluguel/routes'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home'),
    meta: { requiresAuth: true },
    children: [
      ...phoebusRoutes,
      ...analiseRoutes,
      ...intermeioRoutes,
      ...consultaRoutes,
      ...aluguelRoutes
    ]
  }
]
