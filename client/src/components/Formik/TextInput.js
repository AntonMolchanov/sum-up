import React from 'react';
import styled from 'styled-components';
import {ErrorMessage, Form} from "formik";
import TextField from "@material-ui/core/TextField";

const TextInput = ({form, field, ...rest}) => {
  const {name} = field;
  
  return (
    <>
      <TextField
        {...field} {...rest}
      />
    </>
  );
};

export default TextInput;