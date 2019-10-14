export default [
  {
    name: 'intermeio',
    path: '/intermeio',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "analise" */ './Intermeio')
  }
]
