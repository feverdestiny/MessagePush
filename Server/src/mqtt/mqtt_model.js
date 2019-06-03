/**
 * 连接mqtt服务器
 * mqtt服务自行构建，推荐使用emqtt
 */
const mqtt = require("mqtt");

const client = mqtt.connect("mqtt://127.0.0.1:1883");
// client

client.on("connect", function() {
    const name = "mqttTopic";
    client.subscribe(name, function(err) {
        if (!err) {
            client.publish(name, `${name} connect success!`);
        }
    });
});

client.on("reconnect", function() {
    console.log("mqtt reconnect!");
});

client.on("close", function() {
    console.log("mqtt close!");
});

client.on("disconnect", function(packet) {
    console.log("mqtt disconnect!");
});

client.on("offline", function() {
    console.log("mqtt offline!");
});
client.on("error", function(error) {
    console.log("mqtt error!");
});
client.on("end", function() {
    console.log("mqtt end!");
});
client.on("disconnect", function() {
    console.log("mqtt disconnect!");
});

client.on("message", function(topic, message, packet) {
    console.log("Topic:", topic);
    console.log("Message:", message);
});
