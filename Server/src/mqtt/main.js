const express = require("express");
const path = require("path");
const app = express();
const server = require("http").Server(app);
require("./mqtt_model");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
// app.use("/lib", express.static(path.join(__dirname, "lib")));
server.listen(3000, () => {
    console.info("App listening on port 3000!");
});
