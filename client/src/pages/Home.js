import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { situationsActions, situationsSelectors } from "../redux/situations";
import SituationCard from "../components/SituationCard/SituationCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 4, 6),
  },
  list: {
    marginTop: "20px",
  },
}));

const Home = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const situations = useSelector(situationsSelectors.all);
  const allSituations = situations.map((situation) => (
    <SituationCard key={situation._id} card={situation} />
  ));

  const handleCreateSituation = (e) => {
    e.preventDefault();

    history.push("/new");
  };

  useEffect(() => {
    dispatch(situationsActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className={classes.heroContent}>
        <Typography
          component="h4"
          variant="h2"
          color="textPrimary"
          gutterBottom
        >
          All your situations
        </Typography>
        <Typography color="textSecondary" paragraph>
          Here you can find all of the situations you created. To take a closer
          look click a 'details' button.
        </Typography>

        <Button variant="outlined" onClick={handleCreateSituation}>
          +
        </Button>

        <Grid container spacing={4} className={classes.list}>
          {allSituations}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
