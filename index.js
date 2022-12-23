// const express = require('express')
// const app = express()
// const http = require('http').createServer(app)

// const PORT = process.env.PORT || 3000

// http.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })
// //use to serve static files like style.css , chat.png ***
// app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// //socket
// const io = require('socket.io')(http)
// io.on('connection',(socket)=>{
//     console.log("connected...")
//     socket.on('message' ,(msg)=>{
//        //socket.broadcast send msg to all connected socket except one sending
//        socket.broadcast.emit('message', msg)
//     })
// })


const express = require('express')
const app = express()
const http = require('http').createServer(app)

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
   
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})