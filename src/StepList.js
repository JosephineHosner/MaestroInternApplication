import React from "react"
import { makeStyles } from '@material-ui/core/styles';

/*The list of bulleted steps on the game board page*/

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
   
  }));

function StepList(props){
    const classes = useStyles();
    
    return(
       <div className={classes.root}>
            <ul>
                <li>{props.steps}</li>
            </ul>
        </div>
    )
}

export default StepList