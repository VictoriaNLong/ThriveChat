const { Socket } = require("socket.io")

const io = require("socket.io")(3000,{
    cors:{
        origin:"http://localhost:3000/"
    }
})

io.on("connection", (socket) => {
    console.log("user connected")
})