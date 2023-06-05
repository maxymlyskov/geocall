import React from "react";

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

export default LoginInput;
