import WebSocket from 'ws'
import express from 'express'

const PORT = 8081

const server = express()

server.use((_, res) => res.send('test'))

server.listen(PORT, () => {
  console.log('listening on port 8080')
})

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(message)
  })
})
