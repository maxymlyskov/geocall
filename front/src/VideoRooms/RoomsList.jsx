import React from "react";
import { useSelector } from "react-redux";
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinButton from "./RoomJoinButton";

import "../MapPage/MapPage.css";

const DUMMY_ROOMS = [
  {
    id: 1,
    participants: [
      {
        socketId: 1,
        peerId: 1,
        username: "Martin",
      },
    ],
  },
  {
    id: 2,
    participants: [
      {
        socketId: 2,
        peerId: 2,
        username: "John",
      },
    ],
  },
];

const RoomsList = () => {
  const rooms = useSelector((state) => state.videoRooms.rooms);
  return (
    <div className="map_page_v_rooms_list">
      <CreateRoomButton />
      {DUMMY_ROOMS.map((room) => (
        <RoomJoinButton
          key={room.id}
          creatorUsername={room.participants[0].username}
          roomId={room.id}
          amountOfParicipants={room.participants.length}
        />
      ))}
    </div>
  );
};

export default RoomsList;
