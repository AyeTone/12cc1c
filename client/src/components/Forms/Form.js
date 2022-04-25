import React from "react";
import {
  FormControl,
  Grid,
  TextField,
  Button,
  FormHelperText,
} from "@material-ui/core";
import { formStyles } from "../../formStyles";

const Form = ({ handleSubmit, inputs, formErrorMessage, btnText }) => {
  const classes = formStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={5}>
        {inputs.map((input, id) => {
          return (
            <Grid key={id} item>
              <FormControl
                className={classes.formControl}
                margin="normal"
                required
                error={
                  input.isSignUp ? !!formErrorMessage.confirmPassword : null
                }
              >
                <TextField
                  className={input.isLogin ? classes.password : null}
                  aria-label={input.label}
                  name={input.name}
                  type={input.type}
                  label={input.label}
                  inputProps={
                    input.isSignUp ? { minLength: 6 } : { minLength: 0 }
                  }
                />{" "}
                {input.isLogin && (
                  <a
                    style={{ textDecoration: "none" }}
                    href="/"
                    className={classes.forgot}
                  >
                    Forgot?
                  </a>
                )}
                {input.isSignUp && (
                  <FormHelperText>
                    {formErrorMessage.confirmPassword}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          );
        })}

        <Button
          className={classes.formBtn}
          type="submit"
          variant="contained"
          size="large"
        >
          {btnText}
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
