import React from "react";
import { useSelector } from "react-redux";
import CreateRoomButton from "./CreateRoomButton";

import "../MapPage/MapPage.css";

const RoomsList = () => {
  const rooms = useSelector((state) => state.videoRooms.rooms);
  return (
    <div className="map_page_v_rooms_list">
      <CreateRoomButton />
    </div>
  );
};

export default RoomsList;
