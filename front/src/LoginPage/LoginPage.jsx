import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const onSuccess = (position) => {
    console.log(position);
  };

  const onError = (error) => {
    console.log("error: " + error);
    setLocationErrorOccured(true);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      locationOptions
    );
  }, []);

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
