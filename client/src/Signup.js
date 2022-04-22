import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { formStyles } from "./formStyles";
import Bubble from "./assets/bubble.svg";

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
            <Typography item className={classes.loginText}>
              Already have an account?
            </Typography>
            <Link
              item
              style={{ textDecoration: "none" }}
              href="/login"
              to="/login"
            >
              <Button className={classes.headerBtn}>Login</Button>
            </Link>
          </Grid>
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
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl className={classes.formControl}>
                    <TextField
                      label="E-mail address"
                      aria-label="e-mail address"
                      type="email"
                      name="email"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl
                    className={classes.formControl}
                    error={!!formErrorMessage.confirmPassword}
                  >
                    <TextField
                      aria-label="password"
                      label="Password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="password"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl
                    className={classes.formControl}
                    error={!!formErrorMessage.confirmPassword}
                  >
                    <TextField
                      label="Confirm Password"
                      aria-label="confirm password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="confirmPassword"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Button
                  className={classes.formBtn}
                  type="submit"
                  variant="contained"
                  size="large"
                  item
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
