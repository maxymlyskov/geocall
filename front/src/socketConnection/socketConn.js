import io from "socket.io-client";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log("socket connected to the server");
  });

  socket.on("online-users", (usersData) => {
    console.log(usersData);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};
