import Board from "./subgrid";
import Category from "./categoryModel";
import { useState,useEffect } from "react";
import StateSelector from "./stateSelector";
import Hints from "./hints";

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

const recordBoard = (boards, time) =>{
    let newTime = new Date()
    let ms = newTime - time 
    console.log("Time since start:" + ms)
    str = ""
    for(let row = 0; row < boards.length; row ++){
        str += rowToString(boards[row], isFirst = row == 0)
    }

    console.log(str)
    
}

export default Puzzle =({p, time})=>{



    let rows = [[]]
    let boards = [[]]
    let [select, setSelect] = useState("O"); 
    
    // top row 
    for(let i =0; i < p.leftRight.length; i++){
        let leftCat = null; 
        if(i == 0){
            leftCat = p.topButtom[0]
        }

        let board = initializeBoard(p.numEnt, p.numEnt, boards)
        boards[0][i] = board 

        rows[0][i] = <Board numCols={p.numEnt} numRows={p.numEnt} board = {board} topCat={p.leftRight[i]} leftCat={leftCat} select ={select} key = {"0," + i}/>
    }

    let rowLength = p.leftRight.length-1; 

    for(let row = 1; row < p.topButtom.length; row++){
        rows[row] = []
        boards[row] = []
        for(let col = 0; col < rowLength; col++){
            let leftCat = null; 
            if(col == 0){
                leftCat = p.topButtom[row]
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
        recordBoard(boards, time)
      }, [boards]);

      /*setInterval(() => {
        setTime( 1)
    }, 1000);*/ 


    return (<div className="puzzleArea">
        <div>
        <h1>Puzzle</h1>
        {elements} 

        <h1>Selector</h1>
            <StateSelector selected = {select} setSelect={setSelect}/> 
        </div>
        
        <Hints hints={p.hints} time={time}/>
           
    
        </div>);

}