import React from 'react';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {Typography} from "@material-ui/core";

const TextInput = ({form, field, ...rest}) => {
  const {name} = field;
  const {label} = rest;
  
  return (
    <>
      <Typography>{label}</Typography>
      <TextareaAutosize
        name={name}
        rowsMax={10}
        aria-label="maximum height"
        {...field} {...rest}
      />
    </>
  );
};

export default TextInput;