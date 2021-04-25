import { Router } from 'express'
import fato from './fato'
const routes = Router()

routes.use(fato)
routes.get('/inicio', (req, res)=> {
  res.json({message: 'ok'})
})

export default routes