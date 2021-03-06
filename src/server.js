#!/usr/bin/env node
import app from './app'
import debug from 'debug'
import http from 'http'
import io from 'socket.io'

io()
debug('src:server')

const port = normalizePort(process.env.PORT || '3000')

app.set('port', port)

const server = http.createServer(app)

io(server)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

console.log('Express %s server listening on %s:%s', app.get('env'), app.get('host'), app.get('port'))

if (app.get('env') === 'development') {
    require('../webpack/server')()
}


function normalizePort(val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

function onError(error) {
  if (error.syscall !== 'listen') { throw error }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}
