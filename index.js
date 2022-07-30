const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(" 드림 커밍 인 도커");
});

app.listen(8080, () => {
  console.log("server is running!");
});
