import React from 'react';
import Container from "@material-ui/core/Container";
import {Field, Form, Formik} from "formik";
import TextInput from "../components/Formik/TextInput";
import Error from "../components/Formik/Error";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {userSelectors} from "../redux/user";
import {useHistory} from "react-router-dom";
import {pleasureOperations} from "../redux/pleasures";
import schemas from './../utils/schemas'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 4, 6),
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    textarea: {
        ...theme.typography.body1,
        boxSizing: "border-box",
        padding: theme.spacing(2, 2),
        width: "100%",
        height: "450px",
        resize: "none",
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        color: theme.palette.error.main,
    },
}));

function NewPleasure(props) {
    const classes = useStyles();
    const error = useSelector(userSelectors.error);
    const history = useHistory()
    const user = useSelector(userSelectors.user);
    const dispatch = useDispatch()


    const handleCreatePleasure = async (form, helpers) => {
        const { setSubmitting, resetForm } = helpers;
        form.author = user._id;

        try {
            await dispatch(pleasureOperations.savePleasure(form,setSubmitting));
            history.push("/pleasures");
        } catch (e) {
            /** TODO:
             * throw error action in redux
             * show error message ontop of the form
             */
            console.dir(e)
            console.error(e);
        } finally {
            resetForm();
        }
    };

    return (
        <Container className={classes.heroContent}>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                validationSchema={schemas.createPleasure}
                onSubmit={handleCreatePleasure}
            >
                {(formikProps) => (
                    <Form className={classes.form} noValidate>
                        <span className={classes.error}>{error}</span>
                        <Field
                            component={TextInput}
                            variant="outlined"
                            margin="normal"
                            multiline
                            // required
                            fullWidth
                            id="title"
                            label="title"
                            name="title"
                        />
                        {formikProps.touched.title && (
                            <Error name="title" classes={classes.error}/>
                        )}
                        <Field
                            component={TextInput}
                            variant="outlined"
                            margin="normal"
                            multiline
                            // required
                            fullWidth
                            id="description"
                            label="description"
                            name="description"
                        />
                        {formikProps.touched.description && (
                            <Error name="description" classes={classes.error}/>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            disabled={!formikProps.isValid || formikProps.isSubmitting}
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Save pleasure
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}

export default NewPleasure;