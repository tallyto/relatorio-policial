import app from './app'

const PORT = process.env.PORT ?? 3001;
const HOST = process.env.HOST ?? 'localhost'

app.listen(PORT, ()=> {
  console.log(`server running at http://${HOST}:${PORT}`)
})