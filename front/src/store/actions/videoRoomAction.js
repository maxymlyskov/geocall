import { v4 as uuid } from "uuid";
import {
  setInRoom,
  setRooms,
} from "../../realtimeCommunication/videoRoomsSlice";
import * as socketConn from "../../socketConnection/socketConn";
import store from "../store";
import {
  getAccessToLocalStream,
  getPeerId,
} from "../../realtimeCommunication/webRTCHandler";

export const createVideoRoom = async () => {
  const success = await getAccessToLocalStream();

  if (!success) return;

  const newRoomId = uuid();

  store.dispatch(setInRoom(newRoomId));

  socketConn.createVideoRoom({
    peerId: getPeerId(),
    newRoomId,
  });
};

export const videoRoomsListHandler = (videoRooms) => {
  store.dispatch(setRooms(videoRooms));
};
