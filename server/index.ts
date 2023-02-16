import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
;(async () => {
  const app: Express = express()
  const port = process.env.PORT || 3000

  app.listen(port, () => console.log(`Server on http://localhost:${port}`))

  app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'hello world' })
  })

  app.get('/api', (req: Request, res: Response) => {
    res.send({ message: 'ping pong' })
  })
})()
