import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

/*A single grid square. Displays an image of a dot - color specified by user*/
/*When clicked, a menu of color options is displayed so that the dot color can be changed*/

const useStyles = makeStyles({
    buttonStyles: {
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: "black",
    },
    
  });

export default function BoardButton(props) {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
   
    setAnchorEl(null);
    
   
    
  };
  
  return (
    <div>
      <Button className={classes.buttonStyles} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src={props.dot.color} style={{width: "75px", height: "75px", visibility: (props.dot.color === "") ? "hidden" : "visible"}} alt="dot"/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("pink", props.dot.id)}>PINK</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("yellow", props.dot.id)}>YELLOW</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("lightblue", props.dot.id)}>LIGHT BLUE</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("green", props.dot.id)}>GREEN</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("orange", props.dot.id)}>ORANGE</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("darkblue", props.dot.id)}>DARK BLUE</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("teal", props.dot.id)}>TEAL</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("purple", props.dot.id)}>PURPLE</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("grey", props.dot.id)}>GREY</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("gold", props.dot.id)}>GOLD</MenuItem>
        <MenuItem onClick={handleClose} onClick={() => props.BoardButtonChange("", props.dot.id)}>REMOVE</MenuItem>
      </Menu>
    </div>
  );
}