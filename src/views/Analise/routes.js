export default [
  {
    name: 'analise',
    path: '/analise',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "analise" */ './Analise')
  }
]
