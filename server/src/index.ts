import express, { Request, Response} from 'express'
import http from 'http'
import 'dotenv/config'

import { Server } from 'socket.io'
import { SocketIoInterface } from 'interfaces'

const PORT = process.env.PORT || 3000

const app: express.Application = express()
const server = http.createServer(app)
const io = new Server<
  SocketIoInterface.ClientToServerEvents,
  SocketIoInterface.ServerToClientEvents,
  SocketIoInterface.InterServerEvents,
  SocketIoInterface.SocketData
>(server)

// middlewares
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  return res.send({
    message: "Socket IO Message App"
  })
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});