import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import schemas from "../utils/schemas";
import {Field, Form, Formik} from "formik";
import TextInput from "../components/Formik/TextInput";
import Error from "../components/Formik/Error";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import {userSelectors} from "../redux/user";
import TextArea from "../components/Formik/TextArea";
import DateInput from "../components/Formik/DateInput";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 4, 6),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textarea: {
    ...theme.typography.body1,
    boxSizing: 'border-box',
    padding: theme.spacing(2,2),
    width: '100%',
    height: '450px',
    resize: 'none',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    color: theme.palette.error.main
  }
}))

const NewSituation = () => {
  const classes = useStyles();
  const error = useSelector(userSelectors.error);
  
  const handleCreate = (form) => {
    debugger
  };
  
  return (
    <Container className={classes.heroContent}>
      <Formik
        initialValues={{
          situationName: '',
          day: '',
          reasons: '',
          positives: '',
          rationals: '',
          subconscious: ''
        }}
        validationSchema={schemas.createSituation}
        onSubmit={handleCreate}
      >
        {
          formikProps => (
            <Form className={classes.form} noValidate>
              <span className={classes.error}>{error}</span>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                multiline
                required
                fullWidth
                id="situationName"
                label="Situation"
                name="situationName"
                autoFocus
              />
              <Error name='situationName' classes={classes.error}/>
              <Field
                component={DateInput}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="day"
                id="day"
              />
              <Error name='password' classes={classes.error}/>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                multiline
                required
                fullWidth
                id="reasons"
                label="Reasons"
                name="reasons"
                autoFocus
              />
              <Error name='reasons' classes={classes.error}/>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                multiline
                required
                fullWidth
                id="positives"
                label="Positives"
                name="positives"
                autoFocus
              />
              <Error name='positives' classes={classes.error}/>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                multiline
                required
                fullWidth
                id="rationals"
                label="Rationals"
                name="rationals"
                autoFocus
              />
              <Error name='rationals' classes={classes.error}/>
              <Field
                component={TextInput}
                variant="outlined"
                margin="normal"
                multiline
                required
                fullWidth
                id="subconscious"
                label="Subconscious"
                name="subconscious"
                autoFocus
              />
              <Error name='subconscious' classes={classes.error}/>
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
            </Form>
          )
        }
      </Formik>
    </Container>
  );
};

export default NewSituation;