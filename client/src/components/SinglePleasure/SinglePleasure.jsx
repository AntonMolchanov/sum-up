import React, {useState} from 'react';
import {Box, FormGroup, makeStyles, Modal, TextField, Tooltip, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {generateStyle} from "./generateStyle";
import schemas from "../../utils/schemas";
import { Field, Form, Formik } from "formik";
import {useDispatch} from "react-redux";
import {pleasureOperations} from "../../redux/pleasures";

function SinglePleasure({pleasure}) {
    const useStyles = makeStyles(generateStyle)
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const deletePleasure = () => {
        dispatch(pleasureOperations.deletePleasure(pleasure._id))
        handleClose()
    }
    const updatePleasure = (values) => {
        dispatch(pleasureOperations.updatePleasure(pleasure._id,values))
        handleClose()
    }
    return (
        <Box>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className={classes.modal}>
                        <Formik
                            initialValues={{
                                title: pleasure.title,
                                description: pleasure.description,
                            }}
                            validationSchema={schemas.editPleasure}
                            onSubmit={(values)=> updatePleasure(values)}
                        >
                            {(formikProps) => (
                                <Form className={classes.form} noValidate>
                                    <FormGroup>
                                        <Field
                                            label="Edit your pleasure's title"
                                            variant="filled"
                                            name="title"
                                            as={TextField}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Field
                                            label="Edit your pleasure's description"
                                            variant="filled"
                                            name="description"
                                            as={TextField}
                                        />
                                    </FormGroup>
                                <Box style={{display: "flex",justifyContent: "center"}}>
                                    <Button type="submit">Save</Button>
                                    <Button type="button" onClick={deletePleasure}>Delete</Button>
                                </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Modal>
            </div>
            <Box
                onClick={handleOpen}
                className={classes.pleasure}

            >
                <Tooltip title={pleasure.description} placement="bottom-start">
                    <Typography
                        component="p"
                        variant="h4"
                        color="textPrimary"
                        gutterBottom
                    >
                        {pleasure.title}
                    </Typography>
                </Tooltip>
            </Box>
        </Box>
    );
}

export default SinglePleasure;