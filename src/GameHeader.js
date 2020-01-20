import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GameBoardPopUp from './GameBoardPopUp.js'
 
/*The navigation bar for the game board page*/
/*Includes a back arrow to go back to the choosing levels page (done with conditional rendering) and an information icon*/

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  Toolbar: {
      backgroundColor: "#281da5",
  },
 
}));

export default function GameHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.Toolbar}>
        <Grid container justify="flex-start" alignItems="center">
           <Button onClick={()=> props.ChangeBack()}><KeyboardBackspaceIcon style={{color: "white"}}></KeyboardBackspaceIcon></Button>
           <GameBoardPopUp />
        </Grid>          
        </Toolbar>
      </AppBar>
    </div>
  );
}