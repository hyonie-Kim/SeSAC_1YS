const express = require("express");
const { disconnect } = require("process");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// {소켓아이디 : 닉네임, 소켓아이디:닉네임} 키와 벨루형식으로..
let list = {};

io.on("connection", (socket) => {
  console.log("Sever Socket Connected");

  socket.emit("info", socket.id);

  // io.emit("notice", socket.id + "님이 입장하셨습니다.");
  socket.on("username", (name) => {
    console.log("name : ", name);
    list[socket.id] = name;
    io.emit("notice", name + "님이 입장하셨습니다.");
  });
  socket.on("disconnect", () => {
    io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
  });

  socket.on("send", (json) => {
    // 받은 메세지를 모든 클라이언트에게 전송
    // json = {msg: ~~}
    json["from"] = socket.id;
    json["username"];
    io.emit("newMSG", json);
  });
});

http.listen(8000, () => {
  console.log("server port:", 8000);
});
