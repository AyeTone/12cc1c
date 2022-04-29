import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { formStyles } from "../../styles/formStyles";

const Header = ({ text, btnText, linkTo }) => {
  const classes = formStyles();

  return (
    <Grid
      wrap="nowrap"
      className={classes.header}
      container
      alignItems="center"
    >
      <Typography>{text}</Typography>
      <Link className={classes.headerLink} href={linkTo} to={linkTo}>
        <Button className={classes.headerBtn}>{btnText}</Button>
      </Link>
    </Grid>
  );
};

export default Header;
