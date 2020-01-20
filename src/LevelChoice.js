import React from "react"
import Header from "./Header.js"
import Levels from "./LevelData.js"
import LevelCards from "./LevelCards.js"
import GameHeader from './GameHeader.js';
import GameBoard from './GameBoard.js';
import BoardData from "./BoardData.js"

/*The only class based component. Prompts for the display of either the levels or the game board*/
/*Also contains all methods for the project*/

class LevelChoice extends React.Component{
    constructor() {
        super()
        this.state = {
            LevelInfo: Levels,
            filterStatus: "ALL",
            ChangePage: false,
            currentLevel: null,
            boardDat: BoardData,
            current1: "",
            current2: "",
            current3: "",
            current4: "",
            current5: "",
            current6: "",
            current7: "",
            current8: "",
            current9: "",
                      
        }
        this.ChangePage = this.ChangePage.bind(this)
        this.ChangeBack = this.ChangeBack.bind(this)
        this.FilterIn = this.FilterIn.bind(this)
        this.BoardButtonChange = this.BoardButtonChange.bind(this)
        this.submitCheck = this.submitCheck.bind(this)
        
    }

    /*Changes the color of the dot for a grid square
    and updates the current color for a particular position 
    on the grid - will be used to verify correct answers*/
    BoardButtonChange(colorChange, position){
        if(position === 1){
            this.setState({current1: colorChange})
        }
        else if(position === 2){
            this.setState({current2: colorChange})
        }
        else if(position === 3){
            this.setState({current3: colorChange})
        }
        else if(position === 4){
            this.setState({current4: colorChange})
        }
        else if(position === 5){
            this.setState({current5: colorChange})
        }
        else if(position === 6){
            this.setState({current6: colorChange})
        }
        else if(position === 7){
            this.setState({current7: colorChange})
        }
        else if(position === 8){
            this.setState({current8: colorChange})
        }
        else{
            this.setState({current9: colorChange})
        }
        
        this.setState(prevState => {
            const updatedColors = prevState.boardDat.map(item => {
                if (item.id === position) {
                    if(colorChange === ""){
                        return{
                            ...item,
                            color: ""
                        }
                    }
                    else{
                    return {
                        ...item,
                        color: colorChange + ".png"
                    }
                }
                }
                return item
            })
            
            return {
                boardDat: updatedColors
            }
        })
        
    }

    /* Checks to see if all current colors on the grid match the hard-coded 
    answers from LevelData.js 
    Alerts user whether they are correct or not*/
    submitCheck(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9){
        let correct = false
        
        if((answer1 === this.state.current1) && (answer2===this.state.current2) && (answer3===this.state.current3) && (answer4===this.state.current4) && (answer5===this.state.current5) && (answer6===this.state.current6) && (answer7===this.state.current7) && (answer8===this.state.current8) && (answer9===this.state.current9)){
            correct = true        
        }
        
        if(correct === true){
            alert("CONGRATULATIONS! YOU SOLVED THE PUZZLE!")
        }
        else{
            alert("HMM... NOT QUITE. TRY AGAIN!")
        }
    }

    /*Directs the program to the gameboard page and initializes the board*/
    ChangePage(id){
       this.setState({ChangePage : true})
       this.setState({currentLevel : id})
       this.setState(prevState => {
           const clearColors = prevState.boardDat.map(item => {
               return{
                   ...item,
                   color: ""
               }
           })
           return {
               boardDat: clearColors
           }
       })
    }

    /*Directs the program to the choosing levels page and resets 
    current colors and level chosen*/
    ChangeBack(){
        this.setState({ChangePage : false})
        this.setState({currentLevel : null})
        this.setState({filterStatus: "ALL"})
        this.setState({current1: ""})
        this.setState({current2: ""})
        this.setState({current3: ""})
        this.setState({current4: ""})
        this.setState({current5: ""})
        this.setState({current6: ""})
        this.setState({current7: ""})
        this.setState({current8: ""})
        this.setState({current9: ""})
     }

     /*sets the filter status to a user specified status*/
    FilterIn(filterValue){
       
        this.setState({filterStatus : filterValue})
       
    }

    render(){
        let filteredItems = this.state.LevelInfo;
        

        if (this.state.filterStatus === "EASY") {
            filteredItems = this.state.LevelInfo.filter((item) => item.difficulty === "EASY")
        } else if (this.state.filterStatus === "MEDIUM") {
            filteredItems = this.state.LevelInfo.filter((item) => item.difficulty === "MEDIUM")
        } else if (this.state.filterStatus === "HARD") {
            filteredItems = this.state.LevelInfo.filter((item) => item.difficulty === "HARD")
        }


        const levelcardThings = filteredItems.map(item => <LevelCards key={item.id} item={item} ChangePage={this.ChangePage}/>)
        if(this.state.ChangePage === false)
        {
            return(
                <div>
                    <Header FilterIn={this.FilterIn}/>
                    {levelcardThings}
                </div>
            )
        }
        else{
            return(
                <div>
                    
                    <GameHeader ChangeBack={this.ChangeBack}/>
                    <GameBoard correct={this.state.correctAnswer} submitCheck={this.submitCheck} BoardColors={this.state.boardDat} BoardButtonChange={this.BoardButtonChange} level={this.state.LevelInfo[this.state.currentLevel -1]}/>
                </div>
                

            )
        }
    }
}

export default LevelChoice