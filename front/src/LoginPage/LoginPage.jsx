import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const isUserNameValid = (userName) => {
  return userName.length > 0 && userName.length < 10 && !userName.includes(" ");
};

const Logo = () => <p className="logo">GeoCall</p>;

const LoginInput = ({ userName, setUserName }) => {
  const handleUserInput = (e) => {
    setUserName(e.target.value);
  };
  return (
    <input
      type="text"
      className="l_page_input"
      value={userName}
      onChange={handleUserInput}
    />
  );
};
const LoginButton = ({ onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick} className="l_page_login_button">
    Login
  </button>
);

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
