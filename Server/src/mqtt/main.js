const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
const mqtt=require("mqtt")
/**
 * 连接mqtt服务器
 * mqtt服务自行构建，推荐使用emqtt
 */
const client=mqtt.connect('mqtt://127.0.0.1:1883')
// client


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
// app.use("/lib", express.static(path.join(__dirname, "lib")));
server.listen(3000, () => {
    console.info("App listening on port 3000!");
});
