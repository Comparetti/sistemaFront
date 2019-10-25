export default [
  {
    name: 'aluguel',
    path: '/aluguel',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "aluguel" */ './Aluguel')
  }
]
