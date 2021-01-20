import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core";
import {default as MaterialLink} from "@material-ui/core/Link";
import {useDispatch, useSelector} from "react-redux";
import {userActions, userSelectors} from "../redux/user";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  logo: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    transition: 'color 0.3s',
    '&:visited': {
      color: theme.palette.text.primary
    },
    '&:hover': {
      color: theme.palette.text.hint
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector(userSelectors.isAuth);
  
  const handleLogout = () => dispatch(userActions.logout())
  
  const btn = !isAuth
    ? <Button color="primary" to='/login' component={Link} variant="outlined" className={classes.link}>
      Login
    </Button>
    : <Button color="primary" variant="outlined" className={classes.link} onClick={handleLogout}>
      Logout
    </Button>
  
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link to='/' className={classes.logo}>SUM-UP</Link>
        </Typography>
        <nav>
          <MaterialLink variant="button" color="textPrimary" to="/situations" component={Link} className={classes.link}>
            Situations
          </MaterialLink>
          <MaterialLink variant="button" color="textPrimary" to="/pleasures" component={Link} className={classes.link}>
            Pleasures
          </MaterialLink>
        </nav>
        {btn}
      </Toolbar>
    </AppBar>
  );
};

export default Header;