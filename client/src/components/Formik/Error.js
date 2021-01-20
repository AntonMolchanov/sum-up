import React from 'react';
import {ErrorMessage} from "formik";

const Error = ({name, classes, error}) => {
  return (
    <ErrorMessage name={name} render={msg => <span className={classes}>{error || msg}</span>}/>
  );
};

export default Error;