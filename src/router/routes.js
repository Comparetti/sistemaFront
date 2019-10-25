import { routes as auth } from '../modules/auth'
import { routes as home } from '../views/_home'
import { routes as phoebus } from '../views/Phoebus'
import { routes as analise } from '../views/Analise'
import { routes as intermeio } from '../views/Intermeio'
import { routes as consulta } from '../views/Consulta'
import { routes as aluguel } from '../views/Aluguel'

export default [
  ...auth,
  ...home,
  ...phoebus,
  ...analise,
  ...intermeio,
  ...consulta,
  ...aluguel
]
