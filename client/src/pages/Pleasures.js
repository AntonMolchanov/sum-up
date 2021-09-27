import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";
import {pleasureOperations} from '../redux/pleasures/index';
import {pleasuresSelectors} from "../redux/pleasures/index";
import {useDispatch, useSelector} from "react-redux";
import {daysSelectors} from "../redux/days";
import CheckList from "../components/Checklist/CheckList";
import SinglePleasure from "../components/SinglePleasure/SinglePleasure";

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
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    list: {
        marginTop: "20px",
    },
    pleasures: {
        display: "flex",
        flexDirection: "row-reverse"
    },
    noPleasures: {
        marginTop: '20px'
    }
}));

const Pleasures = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const days = useSelector(daysSelectors.all)

    const pleasures = useSelector(pleasuresSelectors.all)
    const {items} = pleasures


    const handleCreatePleasure = (e) => {
        e.preventDefault();

        history.push("/newPleasure");
    };

    useEffect(() => {
        dispatch(pleasureOperations.getPleasures())
    }, [])


    const allPleasures = pleasures.items.map((pleasure, index) => {
        return (
            <Box key={Date.now() * index}>
                <SinglePleasure pleasure={pleasure}/>
            </Box>
        )
    })


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
            <Box className={classes.pleasures}>
                {items.length >= 1
                ?
                    <>
                        <CheckList/>
                        <Box className={classes.list}>
                            {allPleasures}
                        </Box>
                    </>
                    :
                    <Box className={classes.noPleasures}>
                        <Typography color="textPrimary" paragraph>
                            There are no pleasures yet. Click at the cross button to add one.
                        </Typography>
                    </Box>
                }
            </Box>
        </Container>
    );
};

export default Pleasures;
