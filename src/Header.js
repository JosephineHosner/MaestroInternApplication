import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Filter from "./Filter.js";
import PopUp from "./PopUp.js";
import PopUp2 from "./PopUp2.js";

/*The navigation bar on the choosing levels page. Contains a filter and a help icon*/

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  Toolbar: {
      backgroundColor: "#281da5",
  },
 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
          <Toolbar className={classes.Toolbar}>
          <Grid container justify="flex-end" alignItems="center">
              <PopUp />
             
          <Filter FilterIn={props.FilterIn}/>
          <PopUp2 />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}