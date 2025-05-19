module.exports.helloWorld = () => "Hello world";

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => console.log("server is running on port 3000"));