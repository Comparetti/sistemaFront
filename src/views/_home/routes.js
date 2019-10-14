import phoebusRoutes from '../Phoebus/routes'
import analiseRoutes from '../Analise/routes'
import intermeioRoutes from '../Intermeio/routes'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './Home'),
    meta: { requiresAuth: true },
    children: [
      ...phoebusRoutes,
      ...analiseRoutes,
      ...intermeioRoutes
    ]
  }
]
