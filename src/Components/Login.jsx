import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-fileds">
      <label className="user" for="login-username">
          <span className="hidden">Username</span>
          </label>
        <input type="text" className="login-inputfields" />
      </div>
      <div className="login-fileds">
      <label className="user" for="login-username">
          <span className="hidden">Password</span>
          </label>
        <input type="password" className="login-inputfields" />
      </div>
      <div className="login-fileds">
        <button type="button-primary" className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
