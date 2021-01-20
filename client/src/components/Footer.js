import React from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {Box} from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'copyright © '}
          <Link color="inherit" href="#">
            sum-up
          </Link>{' '}
          | since 2020
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;