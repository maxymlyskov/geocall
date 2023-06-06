import React from "react";
import locationIcon from "../resources/images/location-icon.svg";

const Marker = ({ myself, socketId, username, coords }) => {
  return (
    <div className="map_page_marker_container">
      <img src={locationIcon} alt={username} className="map_page_marker_img" />
      <p className="map_page_marker_text">{myself ? "Me" : username}</p>
    </div>
  );
};

export default Marker;
