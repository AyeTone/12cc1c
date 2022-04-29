import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import { formStyles } from "./styles/formStyles";
import SidebarImg from "./components/Forms/SidebarImg";
import Header from "./components/Forms/Header";
import InputGroup from "./components/Forms/InputGroup";

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

  return (
    <Grid className={classes.root} container justifyContent="center">
      <SidebarImg />
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
            <form className={classes.form} onSubmit={handleLogin}>
              <Grid container direction="column" spacing={5}>
                <InputGroup
                  ariaLabel="username"
                  label="Username"
                  name="username"
                  type="text"
                />
                <InputGroup
                  ariaLabel="password"
                  label="Password"
                  name="password"
                  type="password"
                  isLogin={true}
                />
                <Button
                  className={classes.formBtn}
                  type="submit"
                  variant="contained"
                  size="large"
                >
                  Login
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
