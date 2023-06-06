import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

import "./MapPage.css";
import Marker from "./Marker";
import UserInfoCard from "./UserInfoCard/UserInfoCard";

const MapPage = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);
  const cardChooseOption = useSelector((state) => state.map.cardChooseOption);

  const defaultMapProps = {
    center: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoom: 11,
  };

  return (
    <div className="map_page_container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      >
        {onlineUsers.map((user) => (
          <Marker
            lat={user.coords.lat}
            lng={user.coords.lng}
            key={user.socketId}
            myself={user.myself}
            username={user.username}
            coords={user.coords}
          />
        ))}
      </GoogleMapReact>
      {cardChooseOption && (
        <UserInfoCard
          socketId={cardChooseOption.socketId}
          username={cardChooseOption.username}
          userLocation={cardChooseOption.coords}
        />
      )}
    </div>
  );
};

export default MapPage;
