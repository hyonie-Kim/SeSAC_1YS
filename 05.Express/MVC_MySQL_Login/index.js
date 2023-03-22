const express = require("express");
const app = express();
const port = 8080;
const router = require("./routes");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", router);

app.get("*", (req, res) => {
  res.send("접근할수 없는 주소 입니다.");
});

app.listen(port, () => {
  console.log("Server Port:", port);
});
