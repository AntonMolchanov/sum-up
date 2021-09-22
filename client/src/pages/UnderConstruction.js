import {Container, makeStyles, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {useHistory} from "react-router-dom";
import {pleasuresActions, pleasuresSelectors} from "../redux/pleasures";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    page: {
        height: "calc(100vh - 200px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 4, 6),
    },
    list: {
        marginTop: "20px",
    },
}));

const UnderConstruction = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCreatePleasure = (e) => {
        e.preventDefault();

        history.push("/newPleasure");
    };

    const pleasures = useSelector(pleasuresSelectors.all)

    useEffect(() => {
        dispatch(pleasuresActions.getAll())
    }, [pleasures])


    return (
        <Container className={classes.heroContent}>
            <Typography
                component="h4"
                variant="h2"
                color="textPrimary"
                gutterBottom
            >
                Your pleasures
            </Typography>
            <Typography color="textSecondary" paragraph>
                Here you can find all the pleasures you've added. To take a closer
                look, hover over a pleasure's title.
            </Typography>

            <Button variant="outlined" onClick={handleCreatePleasure}>
                +
            </Button>

            <Grid container spacing={4} className={classes.list}>
                {/*{allSituations}*/}
            </Grid>
        </Container>
    );
};

export default UnderConstruction;
