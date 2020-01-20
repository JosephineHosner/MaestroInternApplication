import React from "react"
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles';
import BoardButton from "./BoardButton.js"
import StepList from "./StepList.js"

/*The second "page" of the project. What the user sees after pressing play: The steps, the board, a submit button, and a new navigation bar*/

const useStyles = makeStyles({
    buttonStyles: {
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: "black",
    },
    tableStyles:{
        display: "inline-block",
        border: "10px solid black",
    },
   
  });

function GameBoard(props){
    const classes = useStyles();
    const theSteps = props.level.steps.map((item) => <StepList key={props.level.id} steps={item}/>)

    return(
        <div>
            <div style={{display: "inline-block", textAlign: "left"}}>
            {theSteps}
            </div>
            <div>
                <p>You will need these dots to complete the puzzle</p>
               <p>{props.level.need} </p>
            </div>
            <div>
                <table className={classes.tableStyles}>
                    <tr>
                        <th><BoardButton dot={props.BoardColors[0]} BoardButtonChange={props.BoardButtonChange}/></th>
                        <th><BoardButton dot={props.BoardColors[1]} BoardButtonChange={props.BoardButtonChange}/></th> 
                        <th><BoardButton dot={props.BoardColors[2]} BoardButtonChange={props.BoardButtonChange}/></th>
                    </tr>
                    <tr>
                        <th><BoardButton dot={props.BoardColors[3]} BoardButtonChange={props.BoardButtonChange}/></th>
                        <th><BoardButton dot={props.BoardColors[4]} BoardButtonChange={props.BoardButtonChange}/></th> 
                        <th><BoardButton dot={props.BoardColors[5]} BoardButtonChange={props.BoardButtonChange}/></th>
                    </tr>
                    <tr>
                        <th><BoardButton dot={props.BoardColors[6]} BoardButtonChange={props.BoardButtonChange}/></th>
                        <th><BoardButton dot={props.BoardColors[7]} BoardButtonChange={props.BoardButtonChange}/></th> 
                        <th><BoardButton dot={props.BoardColors[8]} BoardButtonChange={props.BoardButtonChange}/></th>
                    </tr>
                
                </table>
                <br />
                <Button style={{backgroundColor: "#281da5", color: "white"}} onClick={() => props.submitCheck(props.level.answer1, props.level.answer2, props.level.answer3, props.level.answer4, props.level.answer5, props.level.answer6, props.level.answer7, props.level.answer8, props.level.answer9)}>SUBMIT</Button>
            </div>
        </div>
    )
}

export default GameBoard