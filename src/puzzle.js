import Board from "./subgrid";
import Category from "./categoryModel";
import { useState,useEffect } from "react";
import StateSelector from "./stateSelector";
import Hints from "./hints";
import FinishButtons from "./EndPuzzleButtons";

function initializeBoard(numRows, numCols, boards) {
    let board = []
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            let [state, setState] = useState("*", ()=> recordBoard(boards))
            board[i][j] = {state: state,  setState: setState};
        }
    }
    
    return board 
}

const rowToString = (row, isFirst = false) => {
    let str = ""

    for (let c = 0; c < row[0][0].length * row.length + row.length + 1; c ++){
        str += "-"
    
    }
    str += "\n"
    
    for(let r =0; r < row[0].length; r++){
        str += "|"
        for(let board = 0; board < row.length; board++){
            for (let c = 0; c < row[board][0].length; c ++){
                str += row[board][r][c].state 
            }

            str += "|"
        }
        str+= "\n"
    }



    return str 
}

const puzzleToString = (boards) =>{
    str = ""
    for(let row = 0; row < boards.length; row ++){
        str += rowToString(boards[row], isFirst = row == 0)
    }
    return str 
} 

const amountCorrect = (boards, solution) => {
    let gameState = puzzleToString(boards) 

    console.log(solution)
    if (gameState.length != solution.length){
        console.log("Incorrect formatting for puzzle")
        console.log(gameState)
        console.log(solution)
        return [0, 0, 0]
    }else{
        let correct = 0 
        let incorrect = 0 
        let total = 0 
        for(let i = 0; i < gameState.length; i ++){
            if (gameState[i] == "X" || gameState[i] == "O"){
                total ++; 
                if(gameState[i] == solution[i]){
                    correct ++; 
                }else{
                    incorrect ++ 
                }
            }else if (gameState[i] == "*" || gameState[i] == "!" || gameState[i] == "?"){
                total++ 
            }
        }

        return [correct, incorrect, total]
    }
}

const isSolved = (boards, solution) =>{
    let gameState = puzzleToString(boards) 
    let [correct, incorrect, total] = amountCorrect(boards, solution) 

    if (gameState.length != solution.length){
        console.log("Incorrect formatting for puzzle")
        console.log(gameState)
        console.log(solution)
        return [0, 0]
    }else{
        let correct = 0; 
        let total = 0 
        for(let i = 0; i < gameState.length; i ++){
            if(solution[i] == "O"){
                total++ 
                if(solution[i] == gameState[i]){
                    correct ++;
                }
            }
        }

        return total == correct && incorrect == 0
    }
}

const recordBoard = (boards, solution, time) =>{
    let newTime = new Date()
    let ms = newTime - time 
    console.log("Time since start:" + ms)
    str = puzzleToString(boards)
    console.log(str)
    let [correct, incorrect, total ] = amountCorrect(boards, solution)
    console.log("Correct: " + correct + ", incorrect: " + incorrect + ", total:" + total) 
    console.log("Is solved: " + isSolved(boards, solution));
}

let clearBoards = (boards, setStrikes) =>{
    console.log("Clear Boards");
    for (r in  boards){
        let row = boards[r]
        for(b in row){
            let board = row[b]

            for (let i = 0; i < board.length; i++) {
                for (
                    let j = 0;
                    j < board[i].length;
                    j++
                ) {
                    board[i][j].setState("*");
                }
            }
        }
        
    }

    for(strike in setStrikes){
        setStrikes[strike](false);
    }
    
}

export default Puzzle =({p, time})=>{



    let rows = [[]]
    let boards = [[]]
    let [select, setSelect] = useState("O"); 
    
    // top row 
    for(let i =0; i < p.leftRight.length; i++){
        let leftCat = null; 
        if(i == 0){
            leftCat = p.topBottom[0]
        }

        let board = initializeBoard(p.numEnt, p.numEnt, boards)
        boards[0][i] = board 

        rows[0][i] = <Board numCols={p.numEnt} numRows={p.numEnt} board = {board} topCat={p.leftRight[i]} leftCat={leftCat} select ={select} key = {"0," + i}/>
    }

    let rowLength = p.leftRight.length-1; 

    for(let row = 1; row < p.topBottom.length; row++){
        rows[row] = []
        boards[row] = []
        for(let col = 0; col < rowLength; col++){
            let leftCat = null; 
            if(col == 0){
                leftCat = p.topBottom[row]
            }
            let board = initializeBoard(p.numEnt, p.numEnt, boards)
            boards[row][col] = board 
            rows[row][col] = <Board numCols={p.numEnt} numRows={p.numEnt} board = {board} leftCat={leftCat} select ={select} key = {row + "," + col}/>
        }
        rowLength --; 
        
    }

    let elements = rows.map((row, idx) => {return <div className="boardRow" key = {idx}>{row}</div>});


    useEffect(() => {
        // run something every time name changes
        recordBoard(boards, p.solutionString, time)
      }, [boards]);

      /*setInterval(() => {
        setTime( 1)
    }, 1000);*/ 

    let setStrikes = []


    return (<div className="puzzleArea">
        <div>
        <h1>Puzzle</h1>
        {elements} 

        <h1>Selector</h1>
            <StateSelector selected = {select} setSelect={setSelect} /> 
        </div>
        

        <div>
            <Hints hints={p.hints} time={time} setStrikes ={setStrikes}/>
            <FinishButtons 
                giveUp={() => {console.log("Player gave up")}}
                isCorrect = {() => isSolved(boards, p.solutionString)}
                clearBoard = {() => clearBoards(boards, setStrikes)}
                finish = {() => console.log("Finish puzzle")}

                />
        </div>

           
    
        </div>);

}