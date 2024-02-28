// Script.js
import Cell from "./cell";
import { useState } from "react";
import "./style.css"

const Board = ({numRows, numCols,board, topCat = null, leftCat = null, select = "*"}) => {

    let [mousedown, setMouseDown] = useState(false)
 
    let topElement = ""; 
    let topEntites = []; 
 
    if (topCat != null){
        topElement = topCat.name
        topEntites = topCat.entities; 
   
    }

    let leftEntites = [];
    let leftElement = <div></div>; 
    if (leftCat != null){
        leftEntites = leftCat.entities; 
        leftElement = <span className="leftCategoryText">{leftCat.name}</span>;
   
    }

    //let board =  initializeBoard(numRows, numCols); 
    let elements = renderBoard(numRows, numCols, board, mousedown, topEntites, leftEntites, select);
    return (<div className="board" onMouseDown={()=> setMouseDown(true)} onMouseUp = {() => setMouseDown(false)} onMouseLeave = {() => setMouseDown(false)}>
            
            <div>{topElement}</div>
            {leftElement}
           <div className="board">
           {elements}
           </div>
         
            
            </div>); 


}
 
function initializeBoard(numRows, numCols) {
    let board = []
    for (let i = 0; i < numRows; i++) {
        board[i] = [];
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            let [state, setState] = useState("*")
            board[i][j] = {state: state,  setState: setState};
        }
    }
    
    return board 
  
 
}
 
 
function renderBoard(numRows, numCols, board, mousedown,  topEntities = [], leftEntites = [], select = "*") {

    let elements = []
 
    for (let i = 0; i < numRows; i++) {
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            let topText = ""; 
            let leftText = ""
            if (topEntities.length > 0 && i == 0){
                topText=topEntities[j]
            }
            
            if (leftEntites.length > 0 && j == 0){
                leftText = leftEntites[i]
            }

          
            elements.push(<Cell mousedown={mousedown} select = {select} state = {board[i][j].state} setState = {board[i][j].setState} leftText={leftText} topText={topText} key = {i + "," + j}/>)
            
         
        }

        elements.push(<br key ={i}></br>);
    }

    return elements
}
 
export default Board