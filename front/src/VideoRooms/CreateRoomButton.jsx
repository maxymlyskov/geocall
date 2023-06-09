import React from "react";
import callIcon from "../resources/images/call-icon.svg";
import { createVideoRoom } from "../store/actions/videoRoomAction";

const CreateRoomButton = () => {
  const handleRoomCreate = ()=>{
    createVideoRoom()
  }
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
