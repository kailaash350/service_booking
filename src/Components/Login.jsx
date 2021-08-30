import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-fileds">
        <TextField
          required
          id="outlined-required"
          label="User Name"
          value={""}
          variant="outlined" name="userName"
        />
      </div>
      <div className="login-fileds">
        <TextField
          required
          id="outlined-required"
          label="Password"
          value={""}
          variant="outlined" name="password"
        />
      </div>
      <div className="login-fileds">
        <Button varient="contained" color="primary" className="login-button">
          Login</Button>
      </div>
    </div>
  );
};
export default Login;
