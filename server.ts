const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
const PORT = 3000;
app.use(express.static(__dirname + "/public"));

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello from test endpoint" });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server this time through API path" });
});

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Listening on ${PORT} 🚀`);
});
