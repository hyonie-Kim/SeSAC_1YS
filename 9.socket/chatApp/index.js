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
    io.emit("list", list);
    io.emit("notice", name + "님이 입장하셨습니다.");
  });

  socket.on("send", (json) => {
    // 받은 메세지를 모든 클라이언트에게 전송
    // json = {msg: ~~, to: ~~}
    json["from"] = socket.id;
    // json = {msg: ~~, from: ~~ , to: ~~}
    json["username"] = list[socket.id];
    // json = {msg: ~~, from: ~~, usename: ~~, to: ~~}
    json["is_dm"] = false;
    // json = {msg: ~~, from: ~~, usename: ~~, to: ~~, is_dm:~~}
    if (json.to === "전체") io.emit("newMSG", json);
    else {
      json["is_dm"] = true;
      console.log(
        "objectkey확인",
        Object.keys(list).find((key) => list[key] == json.to)
      );
      const socketID = Object.keys(list).find((key) => list[key] == json.to);
      io.to(socketID).emit("newMSG", json);
      //자신에게만 보내기 sokect
      socket.emit("newMSG", json);
    }
  });

  socket.on("disconnect", () => {
    io.emit("notice", list[socket.id] + "님이 퇴장하셨습니다.");
    delete list[socket.id];
    io.emit("list", list);
  });
});

http.listen(8000, () => {
  console.log("server port:", 8000);
});
