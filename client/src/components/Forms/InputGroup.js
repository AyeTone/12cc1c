import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { formStyles } from "../../styles/formStyles";

const InputGroup = ({
  ariaLabel,
  label,
  name,
  type,
  isLogin,
  formErrorMessage,
  isSignUp,
}) => {
  const classes = formStyles();

  return (
    <Grid item>
      <FormControl
        className={classes.formControl}
        margin="normal"
        required
        error={isSignUp ? !!formErrorMessage.confirmPassword : null}
      >
        <TextField
          className={isLogin ? classes.password : null}
          aria-label={ariaLabel}
          name={name}
          type={type}
          label={label}
          inputProps={isSignUp ? { minLength: 6 } : { minLength: 0 }}
        />{" "}
        {isLogin && (
          <a
            style={{ textDecoration: "none" }}
            href="/"
            className={classes.forgot}
          >
            Forgot?
          </a>
        )}
        {isSignUp && (
          <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
};

export default InputGroup;
