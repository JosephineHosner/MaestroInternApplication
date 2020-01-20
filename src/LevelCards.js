import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


/*Where the different levels, their difficulty, and a play button is contained*/

const useStyles = makeStyles({
  card: {
      width: "250px",
    margin: "10px",
    float: "left",
    border: "2px solid #281da5"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>    
        <Typography variant="h5" component="h2">
         Level: {props.item.id}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.item.difficulty}
        </Typography>
      </CardContent>

      <Grid container  direction="row" justify="center" alignItems="center">
      <CardActions >         
          <Button style={{border: "2px solid #281da5"}} onClick={() => props.ChangePage(props.item.id)}>PLAY!</Button>       
      </CardActions>
      </Grid>
    </Card>
  );
}