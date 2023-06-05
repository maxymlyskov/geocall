import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import Logo from "./Logo";

const isUserNameValid = (userName) => {
  return userName.length > 0 && userName.length < 10 && !userName.includes(" ");
};

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/map");
  };
  return (
    <div className="l_page_main_container">
      <div className="l_page_box">
        <Logo />
        <LoginInput userName={userName} setUserName={setUserName} />
        <LoginButton
          disabled={!isUserNameValid(userName)}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};

export default LoginPage;
