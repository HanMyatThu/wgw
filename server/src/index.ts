import express, { Request, Response} from 'express'
import http from 'http'
import 'dotenv/config'

import { Server } from 'socket.io'
import { SocketIoInterface } from './interfaces'

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

// socket io server
io.on("connection", (socket) => {
  socket.emit("noArg");
  socket.emit("basicEmit", 1, "2", Buffer.from([3]));
  socket.emit("withAck", "4", (e) => {
  });

  socket.on("chat", async (msg: string) => {
    console.log('message: ' + msg);

  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

io.on("ping", () => {
  // ...
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});