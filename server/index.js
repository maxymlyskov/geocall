const express = require("express");

const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello");
});

let onlineUsers = {};

io.on("connection", (socket) => {
  console.log("user connected with id: " + socket.id);

  socket.on("user-login", (data) => {
    loginEventHandler(socket, data);
  });

  socket.on("disconnect", () => {
    disconnectEventHandler(socket.id);
    broadDisconnectedUserDetails(socket.id);
  });
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

const disconnectEventHandler = (id) => {
  console.log("user disconnected with id: " + id);
  removeOnlineUser(id);

  broadDisconnectedUserDetails(id);
};

const removeOnlineUser = (id) => {
  if (onlineUsers[id]) {
    delete onlineUsers[id];
  }

  console.log(onlineUsers);
};

const broadDisconnectedUserDetails = (disconnectedUserSocketId) => {
  io.to("logged-users").emit("user-disconnected", disconnectedUserSocketId);
};

const loginEventHandler = (socket, data) => {
  socket.join("logged-users");

  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };

  console.log(onlineUsers);

  io.to("logged-users").emit("online-users", convertOnlineUsersToArray());
};

const convertOnlineUsersToArray = () => {
  const onlineUsersArray = [];

  Object.entries(onlineUsers).forEach(([key, value]) => {
    onlineUsersArray.push({
      socketId: key,
      username: value.username,
      coords: value.coords,
    });
  });

  return onlineUsersArray;
};
