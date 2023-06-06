import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMyLocation } from "../MapPage/mapSlice";
import { connectWithSocketIOServer } from "../socketConnection/socketConn";
import { getRandomCoords } from "./FAKE_LOCATIONS";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import Logo from "./Logo";

const isUserNameValid = (userName) => {
  return userName.length > 0 && userName.length < 10 && !userName.includes(" ");
};
const locationOptions = {
  enableHighAcciracy: true,
  timeout: 5000,
  maximumAge: 0,
};

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [locationErrorOccured, setLocationErrorOccured] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myLocation = useSelector((state) => state.map.myLocation);

  const onSuccess = (position) => {
    console.log(position);
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
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

    onSuccess(getRandomCoords());
  }, []);

  useEffect(() => {
    if (myLocation) connectWithSocketIOServer();
  }, [myLocation]);

  const handleLogin = () => {
    navigate("/map");
  };

  return (
    <div className="l_page_main_container">
      <div className="l_page_box">
        <Logo />
        <LoginInput userName={userName} setUserName={setUserName} />
        <LoginButton
          disabled={!isUserNameValid(userName) || locationErrorOccured}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
