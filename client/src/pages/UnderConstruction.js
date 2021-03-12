import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  page: {
    height: "calc(100vh - 200px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const UnderConstruction = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.page}>
      <Typography component="p" variant="h2" align="center">
        Page is under construction
      </Typography>
    </Container>
  );
};

export default UnderConstruction;
