import React, { useState } from "react";
import "./Login.scss";
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { auth, provider } from "../firebase";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    signIn: true,
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const onchangeHandler = (e, type) => {
    setValues({ ...values, [type]: e.target.value });
  };

  const signInHandler = () => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .catch((error) => alert(error.message));

    setValues({ ...values, password: "", email: "" });
  };

  const SignUpHandler = () => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((authUser) => console.log(authUser))
      .catch((error) => alert(error.message));
    setValues({ ...values, password: "", email: "" });
  };

  const changeLoginTypeHandler = () => {
    setValues({ ...values, signIn: !values.signIn });
  };

  const loginWithGoogle = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="loginpage_conatainer">
        <div className="loginpage_heading">
          <h2>
            <strong>{values.signIn ? "Sign In" : "Sign Up"}</strong>
          </h2>
        </div>
        <div>
          <TextField
            className="outlined-basic"
            value={values.email}
            type="email"
            label="Email"
            variant="filled"
            onChange={(e) => onchangeHandler(e, "email")}
          />
        </div>
        <div className="mt-2 ml-0">
          <FormControl style={{ width: "100%" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              className="outlined-basic"
              id="filled-adornment-password"
              value={values.password}
              onChange={(e) => onchangeHandler(e, "password")}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="login_button ">
          <button
            className="btn btn-primary"
            onClick={values.signIn ? signInHandler : SignUpHandler}
          >
            {values.signIn ? "Sign In" : "Sign Up"}
          </button>
          <hr style={{ backgroundColor: "white" }} />
          <button className="btn btn-danger" onClick={loginWithGoogle}>
            <strong>{values.signIn ? "SignIn" : "SignUp"} with Google</strong>
          </button>
        </div>
        <div className="login_type">
          <p>
            {values.signIn ? "New User? " : "Existing User? "}
            <span onClick={changeLoginTypeHandler}>
              {values.signIn ? "Sign Up now" : "Sign In now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
