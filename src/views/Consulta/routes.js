export default [
  {
    name: 'consulta',
    path: '/consulta',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "consulta" */ './Consulta')
  }
]
