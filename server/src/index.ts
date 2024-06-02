import express, { Request, Response} from 'express'
import http from 'http'
import path from 'path'
import 'dotenv/config'

import { Server } from 'socket.io'
import amqp, { Channel, Connection } from 'amqplib';

import { SocketIoInterface } from './interfaces'

import { router as ViewRoutes } from './routes/view'

const PORT = process.env.PORT || 3000

const app: express.Application = express()
const server = http.createServer(app)
const io = new Server<
  SocketIoInterface.ClientToServerEvents,
  SocketIoInterface.ServerToClientEvents,
  SocketIoInterface.InterServerEvents,
  SocketIoInterface.SocketData
>(server)

/**
 * Bind Views
 */
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set("view engine","jade");

// middlewares
app.use(express.json())

// routes
app.use('/', ViewRoutes)

app.get('/', (req: Request, res: Response) => {
  return res.send({
    message: "Socket IO Message App"
  })
})

// rabbitMQ set up
const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost:5672/';
const QUEUE = 'test';

let rabbitMqChannel: Channel;

async function connectRabbitMQ() {
  try {
    const connection: Connection = await amqp.connect(RABBITMQ_URL);
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(QUEUE, { durable: false });
    console.log('rabbit mq is connected')
    rabbitMqChannel = channel;
  } catch (error) {
    console.error('Failed to connect to RabbitMQ', error);
  }
}

// socket io server
io.on("connection", (socket) => {
  socket.emit("noArg");
  socket.emit("basicEmit", 1, "2", Buffer.from([3]));
  socket.emit("withAck", "4", (e) => {
  });

  socket.on("chat", async (msg: string) => {
    if (rabbitMqChannel) {
      rabbitMqChannel.sendToQueue(QUEUE, Buffer.from(msg));
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

async function consumeMessages() {
  try {
    const connection: Connection = await amqp.connect(RABBITMQ_URL);
    const channel: Channel = await connection.createChannel();
    await channel.assertQueue(QUEUE, { durable: false });
    channel.consume(QUEUE, (msg) => {
      if (msg !== null) {
        io.emit('chatsuccess', msg.content.toString())
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error('Failed to consume messages from RabbitMQ', error);
  }
}

connectRabbitMQ().catch(console.error);
consumeMessages().catch(console.error);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});