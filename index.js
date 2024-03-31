const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("request recieved at", new Date().toISOString());
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
