import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { formStyles } from "./formStyles";
import BgImg from "./components/Forms/BgImg";
import Header from "./components/Forms/Header";
import Form from "./components/Forms/Form";

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

  const inputs = [
    {
      ariaLabel: "username",
      label: "Username",
      name: "username",
      type: "text",
    },
    {
      ariaLabel: "e-mail address",
      label: "E-mail address",
      type: "email",
      name: "email",
    },
    {
      ariaLabel: "password",
      label: "Password",
      name: "password",
      type: "password",
      isSignUp: true,
    },
    {
      ariaLabel: "password",
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      isSignUp: true,
    },
  ];

  return (
    <Grid className={classes.root} container justifyContent="center">
      <BgImg />
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
            <Form
              handleSubmit={handleRegister}
              formErrorMessage={formErrorMessage}
              inputs={inputs}
              btnText="Create"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
