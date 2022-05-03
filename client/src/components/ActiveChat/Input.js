import React, { useState } from "react";
import { FormControl, FilledInput, Grid, FormLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../assets/ic-file.png";
import axios from "axios";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    position: "relative",
    height: 70,
    backgroundColor: "#F4F6FA",
    borderTopLeftRadius: "8",
    borderTopRightRadius: "8",
  },
  imgInputLabel: {
    position: "absolute",
    top: "25px",
    right: "24px",
  },
  imgInput: {
    display: "none",
  },
  selectFile: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  preview: {
    backgroundColor: "#F4F6FA",
    marginBottom: "20px",
    borderBottomLeftRadius: "8",
    borderBottomRightRadius: "8",
  },
  imgPreview: {
    maxHeight: "150px",
    maxWidth: "150px",
    padding: "10px 10px",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const addImages = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "interview-stack");

    const instance = await axios.create();
    const res = await instance.post(
      "https://api.cloudinary.com/v1_1/dhhkde2kj/image/upload",
      formData
    );
    const data = await res.data;

    setImages((prev) => {
      return [...prev, data.url];
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      attachments: images,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText("");
    setImages([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <FormLabel className={classes.imgInputLabel}>
          <FilledInput
            onChange={addImages}
            className={classes.imgInput}
            type="file"
            accept="image/*"
            name="file"
          />
          <img className={classes.selectFile} src={Image} alt="Add File" />
        </FormLabel>
      </FormControl>
      {images.length > 0 && (
        <Grid container className={classes.preview}>
          {images.map((image, id) => {
            return (
              <img
                key={id}
                className={classes.imgPreview}
                src={image}
                alt="Cannot Display"
              />
            );
          })}
        </Grid>
      )}
    </form>
  );
};

export default Input;
