// Script.js
import { useState } from "react";
import Cell from "./cell";
import "./style.css";

export default Board = ({ numRows, numCols, board, topLabels = null, leftLabels = null, select = "*" }) => {

    let [mousedown, setMouseDown] = useState(false)

    let displayGrid = [];

    let displayRowIdx = 1;
    let displayColIdx = 1;
    if (leftLabels != null) {
        displayColIdx++; // Shift for left labels.
    }
    if (topLabels != null) {
        for (const label of topLabels) {
            displayGrid.push(<div className="topEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>{label}</div>);
            displayColIdx++;
        }
        displayRowIdx++;
    }

    for (let i = 0; i < numRows; i++) {
        displayColIdx = 1;
        if (leftLabels != null) {
            displayGrid.push(<div className="leftEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>{leftLabels[i]}</div>)
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