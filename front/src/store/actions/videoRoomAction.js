import { v4 as uuid } from "uuid";
import {
  setInRoom,
  setRooms,
} from "../../realtimeCommunication/videoRoomsSlice";
import * as socketConn from "../../socketConnection/socketConn";
import store from "../store";

export const createVideoRoom = async () => {
  const newRoomId = uuid();

  store.dispatch(setInRoom(newRoomId));

  socketConn.createVideoRoom({
    peerId: 1,
    newRoomId,
  });
};

export const videoRoomsListHandler = (videoRooms) => {
  store.dispatch(setRooms(videoRooms));
};
