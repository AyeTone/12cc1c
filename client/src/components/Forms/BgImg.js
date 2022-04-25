import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { formStyles } from "../../styles/formStyles";
import Bubble from "../../assets/bubble.svg";

const BgImg = () => {
  const classes = formStyles();

  return (
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
  );
};

export default BgImg;
