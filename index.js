module.exports.helloWorld = () => "Hello world";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({quiet: true});

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
