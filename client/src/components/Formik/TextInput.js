import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ form, field, ...rest }) => {
  return (
    <>
      <TextField {...field} {...rest} />
    </>
  );
};

export default TextInput;
