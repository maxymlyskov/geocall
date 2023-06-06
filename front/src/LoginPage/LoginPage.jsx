import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMyLocation } from "../MapPage/mapSlice";
import { connectWithSocketIOServer } from "../socketConnection/socketConn";
import LoginButton from "./LoginButton";
import { getFakeLocation } from "./FAKE_LOCATIONS";

import LoginInput from "./LoginInput";
import Logo from "./Logo";
import { proceedWithLogin } from "../store/actions/loginPageActions";

const isUserNameValid = (userName) => {
  return userName.length > 0 && userName.length < 10 && !userName.includes(" ");
};
const locationOptions = {
  enableHighAcciracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [locationErrorOccured, setLocationErrorOccured] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myLocation = useSelector((state) => state.map.myLocation);

  const onSuccess = (position) => {
    console.log(position);
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };

  const onError = (error) => {
    console.log("error: " + error);
    setLocationErrorOccured(true);
  };
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(
    //   onSuccess,
    //   onError,
    //   locationOptions
    // );

    onSuccess(getFakeLocation());
  }, []);

  useEffect(() => {
    if (myLocation) connectWithSocketIOServer();
  }, [myLocation]);

  const handleLogin = () => {
    proceedWithLogin({
      username,
      coords: {
        lng: myLocation.lng,
        lat: myLocation.lat,
      },
    });
    navigate("/map");
  };

  return (
    <div className="l_page_main_container">
      <div className="l_page_box">
        <Logo />
        <LoginInput userName={username} setUserName={setUserName} />
        <LoginButton
          disabled={!isUserNameValid(username) || locationErrorOccured}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
