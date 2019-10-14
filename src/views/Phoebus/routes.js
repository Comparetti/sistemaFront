export default [
  {
    name: 'phoebus',
    path: '/phoebus',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "phoebus" */ './Phoebus')
  }
]
