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
  console.log("Server Socket Conneted", socket.id);

  socket.on("disconnect", () => {
    console.log("Server Socket disconnected");
  });
});

http.listen(8000, () => {
  console.log("Server port:", 8000);
});
