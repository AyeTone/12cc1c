import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import { formStyles } from "./styles/formStyles";
import SidebarImg from "./components/Forms/SidebarImg";
import Header from "./components/Forms/Header";
import InputGroup from "./components/Forms/InputGroup";

const Signup = ({ user, register }) => {
  const classes = formStyles();
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Grid className={classes.root} container justifyContent="center">
      <SidebarImg />
      <Grid item md={7} className={classes.container}>
        <Grid container direction="column" className={classes.wrapper}>
          <Header
            text="Already have an account?"
            btnText="Login"
            linkTo="/login"
          />
          <Grid
            container
            justifyContent="center"
            direction="column"
            className={classes.content}
          >
            <Typography className={classes.title} variant="h5" component="h1">
              Create an account.
            </Typography>
            <form className={classes.form} onSubmit={handleRegister}>
              <Grid container direction="column" spacing={3}>
                <InputGroup
                  ariaLabel="username"
                  label="Username"
                  name="username"
                  type="text"
                />
                <InputGroup
                  ariaLabel="e-mail address"
                  label="E-mail address"
                  name="email"
                  type="email"
                />
                <InputGroup
                  ariaLabel="password"
                  label="Password"
                  name="password"
                  type="password"
                  isSignUp={true}
                  formErrorMessage={formErrorMessage}
                />
                <InputGroup
                  ariaLabel="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  isSignUp={true}
                  formErrorMessage={formErrorMessage}
                />
                <Button
                  className={classes.formBtn}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Create
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
