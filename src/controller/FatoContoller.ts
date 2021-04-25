import { Request, Response } from 'express'
import FatoSchema from '../schemas/fato'
class FatoController {
  static async create(req: Request, res: Response) {
    const { body } = req
    const fato = await FatoSchema.create(body)
    res.json(fato)
  }

  static async find(req: Request, res: Response){
    const fato = await FatoSchema.find()
    res.json(fato)
  }
}

export default FatoController