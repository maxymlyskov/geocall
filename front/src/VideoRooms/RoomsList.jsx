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
  const videoRooms = useSelector((state) => state.videoRooms.rooms);
  const converRoomsToArray = () => {
    const rooms = [];

    Object.entries(videoRooms).forEach(([key, value]) => {
      rooms.push({
        id: key,
        creatorUsername: value.participants[0].username,
        amountOfParicipants: value.participants.length,
      });
    });

    return rooms;
  };

  return (
    <div className="map_page_v_rooms_list">
      <CreateRoomButton />
      {converRoomsToArray().map((room) => (
        <RoomJoinButton
          key={room.id}
          creatorUsername={room.creatorUsername}
          roomId={room.id}
          amountOfParicipants={room.amountOfParicipants}
        />
      ))}
    </div>
  );
};

export default RoomsList;
