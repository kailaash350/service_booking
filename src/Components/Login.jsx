import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const Login = (props) => {


  const handleSubmit = (e) => {
    e.preventDefault();
    return(
      props.history.push({
        pathname:'/admin-dashboard',
        state:""
      })
    )
 
}
  return (
    <div className="login-container">
      <div className="login-fields">
        <TextField
          required
          id="outlined-required"
          label="User Name"
          value={""}
          variant="outlined" name="userName"
        />
      </div>
      <div className="login-fields">
        <TextField
          required
          id="outlined-required"
          label="Password"
          value={""}
          variant="outlined" name="password"
        />
      </div>
      <div className="login-fields">
        <Button onClick={handleSubmit} variant="contained" color="primary" className="login-button">
          Login to check updates</Button >
      </div>
    </div>
  );
};
export default Login;
