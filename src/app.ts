import express from "express"
import cors from 'cors'
import routes from './routes'
import mongoose from 'mongoose';

class App {
  public server: express.Application
  constructor() {
    this.server = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares() {
    this.server.use(express.json())
    this.server.use(cors())
  }
  private routes() {
    this.server.use(routes)
  }

  private async database() {
    await mongoose.connect('mongodb://localhost/relatorio_policial', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }, (err) => {
      if (err) console.log({ message: 'erro ao conectar ao banco de dados' })
      console.log({message: 'banco de dados conectado com sucesso'})
    });
  }
}

export default new App().server