// Script.js
import { useState } from "react";
import Cell from "./cell";
import "./style.css";

export default Board = ({ numRows, numCols, board, topCat = null, leftCat = null, select = "*" }) => {

    // displayGrid.push(<div style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}><span className="leftCategoryText">{leftCategories[row]}</span></div>)

    let [mousedown, setMouseDown] = useState(false)

    let displayGrid = [];
    let displayRowIdx = 1;

    if (topCat != null) {
        let displayColIdx = 1;
        if (leftCat != null) {
            displayColIdx = 3; // Shift for left category header and entities.
        }
        maxColumn = topCat.entities.length + displayColIdx;
        headerColumn = `${displayColIdx} / ${maxColumn}`
        displayGrid.push(<div className="topCategoryText" style={{ gridRow: displayRowIdx, gridColumn: headerColumn }}>{topCat.name}</div>)
        displayRowIdx++;
        for (const entity of topCat.entities) {
            displayGrid.push(<div className="topEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>{entity}</div>);
            displayColIdx++;
        }
        displayRowIdx++;
    }

    if (leftCat != null) {
        let displayColIdx = 1;
        maxRow = leftCat.entities.length + displayRowIdx;
        headerRow = `${displayRowIdx} / ${maxRow}`
        displayGrid.push(<div className="leftCategoryText" style={{ gridRow: headerRow, gridColumn: displayColIdx }}>{leftCat.name}</div>)
    }

    for (let i = 0; i < numRows; i++) {
        let displayColIdx = 1;
        if (leftCat != null) {
            displayColIdx++; // Shift for left category header
            displayGrid.push(<div className="leftEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>{leftCat.entities[i]}</div>)
            displayColIdx++;
        }

        for (let j = 0; j < numCols; j++) {
            displayGrid.push(
                <div style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>
                    <Cell mousedown={mousedown} select={select} state={board[i][j].state} setState={board[i][j].setState} key={i + "," + j} />
                </div>
            );
            displayColIdx++;
        }

        // cells.push(<br key={i}></br>);
        displayRowIdx++
    }

    return (
        <div className="board" onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} onMouseLeave={() => setMouseDown(false)}>
            <div className="board">
                {displayGrid}
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
            board[i][j] = { state: state, setState: setState };
        }
    }

    return board


}