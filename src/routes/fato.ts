import { Router} from 'express'
import FatoController from '../controller/FatoContoller'
const fatoRouter = Router()

fatoRouter.post('/fato',FatoController.create)
fatoRouter.get('/fato', FatoController.find)

export default fatoRouter