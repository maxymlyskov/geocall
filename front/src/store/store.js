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
});

export default store;
