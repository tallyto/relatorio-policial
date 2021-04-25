import { Router } from 'express'

const routes = Router()

routes.get('/inicio', (req, res)=> {
  res.json({message: 'ok'})
})

export default routes