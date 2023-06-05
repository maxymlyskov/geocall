import React from "react";

const LoginButton = ({ onClick, disabled }) => (
  <button disabled={disabled} onClick={onClick} className="l_page_login_button">
    Login
  </button>
);

export default LoginButton;
