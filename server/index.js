import WebSocket from 'ws'
import express from 'express'

const PORT = process.env.PORT || 8080

const server = express()

server.set('port', PORT)

server.use((_, res) => res.send('test'))

server.get('/', (_, res) => {
  res.send('adad')
})

server.listen(PORT, () => {
  console.log('listening on port 8080')
})

const wss = new WebSocket.Server({ port: PORT })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(message)
  })
})
