function socketFuc(server) {
    const io = require("socket.io")(server);
    io.on("connection", socket => {
        console.info("user 连接成功");
        socket.on("disconnect", function() {
            console.log("user 连接失败");
        });
        socket.on("login", msg => {
            console.log(msg);
            // socket.broadcast.emit("join", msg);//广播消息（不包括自己）
            io.sockets.emit("join", msg); //广播消息（包括自己）
            // socket.emit("join", msg);
        });

        socket.on("chat message", function(msg) {
            console.log("用户发送msg: " + msg);
            const inof = `Server_${msg}`;
            console.log(inof);
            io.sockets.emit("serverMessages", inof);
        });
    });
}

module.exports = socketFuc;
