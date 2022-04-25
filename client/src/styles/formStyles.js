import { makeStyles } from "@material-ui/core";
import Image from "../assets/bg-img.png";

// Both login & signup styles
export const formStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      overflow: "hidden",
    },
  },

  Bgimg: {
    position: "absolute",
    minHeight: "100%",
    width: "100%",
    opacity: ".1",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("md")]: {
      opacity: "1",
      position: "relative",
    },
  },

  BgImgCover: {
    display: "none",
    width: "100%",
    height: "100%",

    [theme.breakpoints.up("md")]: {
      display: "flex",
      background: "linear-gradient(180deg, #3A8DFFDE 0%, #86B9FFA1 100%)",
      textAlign: "center",
    },
  },

  coverText: {
    color: "white",
    fontSize: "24px",
    lineHeight: "40px",
    fontWeight: "400",
    marginTop: "40px",
  },

  container: {
    width: "85%",
    [theme.breakpoints.up("md")]: {
      width: "unset",
    },
  },

  wrapper: {
    marginTop: "30px",
    [theme.breakpoints.up("md")]: {
      padding: "30px 120px",
      margin: "unset",
      minHeight: "100vh",
    },
  },

  header: {
    justifyContent: "end",
  },

  loginText: {
    color: "#B0B0B0",
    whiteSpace: "nowrap",
  },

  headerBtn: {
    marginLeft: "30px",
    color: "#3A8DFF",
    textDecoration: "none",
    padding: "10px",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    borderRadius: "5px",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      padding: "18px 80px",
    },
  },

  content: {
    marginTop: "40px",
    flexGrow: "1",

    [theme.breakpoints.up("md")]: {
      margin: "unset",
    },
  },

  title: {
    marginBottom: "30px",
  },

  form: {
    width: "100%",
  },

  formControl: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  },

  password: {
    position: "relative",
  },

  forgot: {
    position: "absolute",
    right: "0",
    bottom: "6px",
    color: "#508BF7",
  },

  formBtn: {
    padding: "10px 20px",
    marginTop: "40px",
    backgroundColor: "#3A8DFF",
    color: "white",
    fontWeight: "700",
    borderRadius: "3px",
    width: "50%",
    alignSelf: "center",

    [theme.breakpoints.up("md")]: {
      width: "unset",
      padding: "15px 50px",
    },
  },
}));
