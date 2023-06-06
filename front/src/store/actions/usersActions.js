import { setOnlineUsers, removeDisconnectedUser } from "../../MapPage/mapSlice";
import store from "../store";

export const onlineUsersHandler = (socketId, usersData) => {
  store.dispatch(
    setOnlineUsers(
      usersData.map((user) => {
        if (socketId === user.socketId) {
          user.myself = true;
        }
        return user;
      })
    )
  );
};

export const userDisconnectedHandler = (disconnectedUserSocketId) => {
  store.dispatch(removeDisconnectedUser(disconnectedUserSocketId));
};
