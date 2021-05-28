import WebSocket from 'ws'

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    ws.send(message)
  })
})
