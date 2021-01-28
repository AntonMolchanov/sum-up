import React, {useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {daysActions, daysSelectors} from "../redux/days";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 4, 6),
  }
}))

const Home = ({history}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const days = useSelector(daysSelectors.all);
  
  const handleCreateSituation = (e) => {
    e.preventDefault();
    
    history.push('/new');
  }
  
  useEffect(() => {
    dispatch(daysActions.getAll());
  }, []);
  
  return (
    <>
      <Container className={classes.heroContent}>
        <Typography component="h4" variant="h2" color="textPrimary" gutterBottom>
          All your days
        </Typography>
        <Typography color="textSecondary" paragraph>
          Here you can find all of the days you created. To take a closer look click a 'details' button.
        </Typography>
  
        <Button variant="outlined" onClick={handleCreateSituation}>+</Button>
        
      </Container>
    </>
  );
};

export default Home;