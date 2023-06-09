import store from "../store/store";
import { setLocalStream } from "./videoRoomsSlice";
import { Peer } from "peerjs";

let peer;
let peerId;

export const getPeerId = () => {
  return peerId;
};

export const getAccessToLocalStream = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  if (localStream) {
    console.log(localStream);
    store.dispatch(setLocalStream(localStream));
  }
  return Boolean(localStream);
};

export const connectWithPeerServer = () => {
  peer = new Peer(undefined, {
    host: "localhost",
    port: 9000,
    path: "/peer",
  });

  peer.on("open", (id) => {
    console.log("My peer id is: " + id);
    peerId = id;
  });
};
