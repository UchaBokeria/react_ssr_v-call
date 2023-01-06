export default async (server)=> {
    const { Server } = require("socket.io");
    const io = new Server(server);

    io.on("connection", socket => {
        socket.on("join-room", (room, i) => {
            room && socket.join(room);
            io.sockets.adapter.rooms.get(room)?.size > 1 &&
                socket.nsp.to(room).emit("Other-join");
            socket.emit("Whoami", i == 1)
        })

        socket.on("Set-offer-candidates", (room, prop) => socket.to(room).emit("Get-offer-candidates", prop))

        socket.on("Set-offer", (room, prop) => socket.to(room).emit("Get-offer", prop))

        socket.on("Set-answer-candidates", (room, prop) => socket.to(room).emit("Get-answer-candidates", prop))

        socket.on("Set-answer", (room, prop) => socket.to(room).emit("Get-answer", prop))

        socket.on("Disconnect", room => socket.to(room).emit("Disconnect"))
    })
}