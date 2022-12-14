const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/route", function (req, res) {
  res.send("Hello Router <img src='/coffee.jpg'/>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
