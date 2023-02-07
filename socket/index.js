const { createSocket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// 클라이언트 소켓이 연결이 되면 콜백함수가 실행된다.
// socket: 클라이언트 소켓과 연결되고 새로 생성된 소켓
io.on("connection", (socket) => {
  console.log("Server Socket Conneted");

  socket.emit("welcome", { msg: "welcome" });

  socket.on("response", (str) => {
    console.log(str);
  });

  //   socket.emit("hello", { msg: "hello : 안녕하세요!" });
  socket.on("hello", (str) => {
    console.log(str);
    socket.emit("helloRes", "Hello : 안녕하세요!");
  });
  socket.on("study", (str) => {
    console.log(str);
    socket.emit("studyRes", "study: 공부합시다!");
  });

  socket.on("bye", (str) => {
    console.log(str);
    socket.emit("byeRes", "bye : 안녕히가세요!");
  });

  socket.on("disconnect", () => {
    console.log("Server Socket disconnected");
  });
});

http.listen(8000, () => {
  console.log("Server port:", 8000);
});
