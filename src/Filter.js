import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/*Filters LevelCards by difficulty*/
/*When clicked, a menu of filter options is displayed. Clicking one changes the value of the filter*/

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Filter(props) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');


  const handleChange = event => {
    setFilter(event.target.value);
    if(event.target.value === "easy"){
        
        props.FilterIn("EASY");
    } else if(event.target.value === "medium"){
       
       props.FilterIn("MEDIUM");
    }else if(event.target.value === "hard"){
       
        props.FilterIn("HARD");
    }else{
       
        props.FilterIn("ALL");
    }
  };

  return (
    <div >
      
      
        
      <FormControl className={classes.formControl}>
      
        <Select style={{color: "white"}} value={filter} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
          <MenuItem value="" >
            SHOW ALL
          </MenuItem>
          <MenuItem value={"easy"}>EASY</MenuItem>
          <MenuItem value={"medium"}>MEDIUM</MenuItem>
          <MenuItem value={"hard"}>HARD</MenuItem>
        </Select>
        
      </FormControl>
      
      
     
    </div>
  );
}