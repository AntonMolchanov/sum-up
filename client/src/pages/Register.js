import React from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Field, Form, Formik } from "formik";
import schemas from "../utils/schemas";
import TextInput from "../components/Formik/TextInput";
import Error from "../components/Formik/Error";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { default as MaterialLink } from "@material-ui/core/Link";
import { userActions } from "../redux/user";
import { useStyles } from "./Login";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSingIn = async (form, { setSubmitting }) => {
    dispatch(userActions.register(form, setSubmitting, history.push));
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schemas.register}
          onSubmit={handleSingIn}
        >
          {(formikProps) => (
            <Form className={classes.form} noValidate>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              {formikProps.touched.email && (
                <Error name="email" classes={classes.error} />
              )}
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {formikProps.touched.password && (
                <Error name="password" classes={classes.error} />
              )}
              <Button
                type="submit"
                fullWidth
                disabled={!formikProps.isValid || formikProps.isSubmitting}
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <MaterialLink to="/login" component={Link} variant="body2">
                    {"Already have an account? Sign In"}
                  </MaterialLink>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Register;
