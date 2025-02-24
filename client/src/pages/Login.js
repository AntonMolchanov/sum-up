import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { default as MaterialLink } from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Field, Form, Formik } from "formik";
import schemas from "../utils/schemas";
import TextInput from "../components/Formik/TextInput";
import Error from "../components/Formik/Error";
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelectors } from "../redux/user";
import { Link } from "react-router-dom";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: theme.palette.error.main,
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(userSelectors.error);

  const handleSingIn = async (form, { setSubmitting }) => {

    dispatch(userActions.saveUser(form, setSubmitting));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={schemas.login}
          onSubmit={handleSingIn}
        >
          {(formikProps) => (
            <Form className={classes.form} noValidate>
              <span className={classes.error}>{error}</span>
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
                  <MaterialLink to="/register" component={Link} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </MaterialLink>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
