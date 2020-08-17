const express = require('express')
const http = require('http')
const cors = require('cors')
const socketio = require('socket.io')
const userRouter = require('./routers/User')
const roomRouter = require('./routers/Rooms')
const { json } = require('express')
require('./db/mongoose')

const app = express()


app.use(cors())
app.use(json())
app.use(roomRouter)
app.use(userRouter)

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', ()=>{
    console.log('New user joined')
})

server.listen(5000, ()=>{
    console.log('Listening on port 5000')
})