// Script.js
import { useState } from "react";
import Cell from "./cell";
import "./style.css";

export default SubGrid = ({ numRows, numCols, cells, topCat = null, leftCat = null, select = "*" }) => {

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
        displayGrid.push(<div className="topCategoryText" style={{ gridRow: displayRowIdx, gridColumn: headerColumn }} key="-2,0">{topCat.name}</div>)
        displayRowIdx++;
        for (const [i, entity] of topCat.entities.entries()) {
            displayGrid.push(<div key={"-1," + i} className="topEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }}>{entity}</div>);
            displayColIdx++;
        }
        displayRowIdx++;
    }

    if (leftCat != null) {
        let displayColIdx = 1;
        maxRow = leftCat.entities.length + displayRowIdx;
        headerRow = `${displayRowIdx} / ${maxRow}`
        displayGrid.push(<div className="leftCategoryText" style={{ gridRow: headerRow, gridColumn: displayColIdx }} key="0,-2">{leftCat.name}</div>)
    }

    for (let i = 0; i < numRows; i++) {
        let displayColIdx = 1;
        if (leftCat != null) {
            displayColIdx++; // Shift for left category header
            displayGrid.push(<div className="leftEntityText" style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }} key={i + ",-1"}>{leftCat.entities[i]}</div>)
            displayColIdx++;
        }

        for (let j = 0; j < numCols; j++) {
            displayGrid.push(
                <div style={{ gridRow: displayRowIdx, gridColumn: displayColIdx }} key={i + "," + j}>
                    <Cell mousedown={mousedown} select={select} state={cells[i][j].state} setState={cells[i][j].setState} />
                </div>
            );
            displayColIdx++;
        }

        displayRowIdx++
    }

    return (
        <div className="subgrid" onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)} onMouseLeave={() => setMouseDown(false)}>
            <div className="subgrid">
                {displayGrid}
            </div>
        </div>);


}

function initializeSubGrid(numRows, numCols) {
    let subgrid = []
    for (let i = 0; i < numRows; i++) {
        subgrid[i] = [];
        for (
            let j = 0;
            j < numCols;
            j++
        ) {
            let [state, setState] = useState("*")
            subgrid[i][j] = { state: state, setState: setState };
        }
    }

    return subgrid;
}