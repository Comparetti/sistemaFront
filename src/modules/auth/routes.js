export { default as routes } from './routes'
export default [
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login')
  }
]
