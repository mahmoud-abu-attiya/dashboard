import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const SignInForm = () => {
  const [state, setState] = React.useState({
    remember: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <form>
      <div className="form-head">
        <h2>Nice to see you!</h2>
        <span>Enter your email and password to sign in</span>
      </div>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" placeholder="Enter your email" required/>
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" id="password" placeholder="Enter your password" required/>
      </label>
      <FormControlLabel
        control={
          <Switch
            checked={state.remember}
            onChange={handleChange}
            name="remember"
            color="primary"
          />
        }
        label="Remember me"
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default SignInForm;
