import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { formStyles } from "./formStyles";
import BgImg from "./components/Forms/BgImg";
import Header from "./components/Forms/Header";
import Form from "./components/Forms/Form";

const Login = ({ user, login }) => {
  const classes = formStyles();
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
      ariaLabel: "password",
      label: "Password",
      name: "password",
      type: "password",
      isLogin: true,
    },
  ];

  return (
    <Grid className={classes.root} container justifyContent="center">
      <BgImg />
      <Grid item md={7} className={classes.container}>
        <Grid container direction="column" className={classes.wrapper}>
          <Header
            text="Don't have an account?"
            btnText="Create account"
            linkTo="/register"
          />
          <Grid
            container
            justifyContent="center"
            direction="column"
            className={classes.content}
          >
            <Typography className={classes.title} variant="h5" component="h1">
              Welcome Back!
            </Typography>
            <Form handleSubmit={handleLogin} inputs={inputs} btnText="Login" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
