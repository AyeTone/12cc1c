import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { formStyles } from "./formStyles";
import Bubble from "./assets/bubble.svg";

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
      <Grid container item md={5} className={classes.Bgimg}>
        <Grid
          className={classes.BgImgCover}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img src={Bubble} alt="Chat Bubble" />
          <Typography className={classes.coverText}>
            {" "}
            Converse with anyone <br /> with any language{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid item md={7} className={classes.container}>
        <Grid container direction="column" className={classes.wrapper}>
          <Grid
            wrap="nowrap"
            className={classes.header}
            container
            alignItems="center"
          >
            <Typography>Don't have an account?</Typography>
            <Link
              item
              style={{ textDecoration: "none" }}
              href="/register"
              to="/register"
            >
              <Button className={classes.headerBtn}>Create account</Button>
            </Link>
          </Grid>
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
                <Grid item>
                  <FormControl
                    className={classes.formControl}
                    margin="normal"
                    required
                  >
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl
                    margin="normal"
                    className={classes.formControl}
                    required
                  >
                    <TextField
                      className={classes.password}
                      label="Password"
                      aria-label="password"
                      type="password"
                      name="password"
                    />
                    <Link
                      item
                      style={{ textDecoration: "none" }}
                      href=""
                      to=""
                      className={classes.forgot}
                    >
                      {" "}
                      Forgot?
                    </Link>
                  </FormControl>
                </Grid>

                <Button
                  className={classes.formBtn}
                  type="submit"
                  variant="contained"
                  size="large"
                  item
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
