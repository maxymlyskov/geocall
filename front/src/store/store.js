import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../MapPage/mapSlice";
import messengerReducer from "../Messenger/messengerSlice";
import videoRoomsSlice from "../realtimeCommunication/videoRoomsSlice";

const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [
          "videoRooms/setLocalStream",
          "videoRooms/setRemoteStream",
        ],
        ignorePaths: ["videoRooms.localStream", "videoRooms.remoteStream"],
      },
    }),
});

export default store;
