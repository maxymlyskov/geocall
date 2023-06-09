import React from "react";
import { useSelector } from "react-redux";
import callIcon from "../resources/images/call-icon.svg";
import { createVideoRoom } from "../store/actions/videoRoomAction";

const CreateRoomButton = () => {
  const inRoom = useSelector((state) => state.videoRooms.inRoom);

  const handleRoomCreate = () => {
    if (inRoom) {
      return alert("You are alredy in the room.");
    }
    createVideoRoom();
  };
  return (
    <img
      src={callIcon}
      alt="call"
      className="map_page_card_img"
      onClick={handleRoomCreate}
    />
  );
};

export default CreateRoomButton;
