import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import dataPrettifyer from "../../utils/dataPrettifyer";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { situationsActions } from "../../redux/situations";

const SituationCard = ({ card }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { title, day, reasons, positives, rationals, subconscious } = card;
  const prettyDay = dataPrettifyer(day);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Grid item xs={12} sm={6} md={isOpened ? 12 : 4}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.date}
            color="textSecondary"
            gutterBottom
          >
            {prettyDay}
          </Typography>
          <Typography variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {reasons}
          </Typography>
          {isOpened && (
            <>
              <Typography variant="h6">positives:</Typography>
              <Typography
                component="p"
                color="textSecondary"
                className={classes.pos}
              >
                {positives}
              </Typography>
              <Typography variant="h6">rationals:</Typography>
              <Typography
                component="p"
                color="textSecondary"
                className={classes.pos}
              >
                {rationals}
              </Typography>
              <Typography variant="h6">subconscious:</Typography>
              <Typography
                component="p"
                color="textSecondary"
                className={classes.pos}
              >
                {subconscious}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => setIsOpened(!isOpened)}>
            {isOpened ? "Show Less" : "Show More"}
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(situationsActions.delete(card._id))}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SituationCard;
