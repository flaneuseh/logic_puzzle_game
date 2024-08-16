import { useState, useEffect } from "react"
import Select from "react-select";
import React, { Component } from "react";
import { Draggable } from "react-drag-reorder";

let DragElements = ({words, items,  setItems}) => {

    //let [items, setItems] = useState(words)

  getChangedPos = (currentPos, newPos) => {
    // remove item from list \
    let temp = items[currentPos]
    items.splice(currentPos, 1)


    // insert in order 
    items =  [
        ...items.slice(0, newPos),
        temp,
        ...items.slice(newPos)
    ]
    setItems(items)
    console.log(items);
  };


  useEffect(()=>{
    console.log(items)
  }, [items])


    return (
      <div className="flex-container">
        <div className="row">
            <ol>
          <Draggable onPosChange={this.getChangedPos}>
            {words.map((word, idx) => {
              return (
                <li key={idx} className="flex-item">
                  {word}
                </li>
              );
            })}
          </Draggable>
          </ol>
        </div>
      </div>
    );
}








export default RankPuzzles = ({onSubmit}) => {
    let puzzles = ["Lady Rose's Chrysanthemum Ball", "The Great Chili Competition", "The Wild Rose Train"  ] 
    let [diff, setDiff] = useState(puzzles)
    let [engagement, setEngagement] = useState(puzzles)
    let [overall, setOverall] = useState(puzzles) 
    return (<div className="rankings">
        <h1>Final Survey</h1>
        <p>You have played all the puzzles available. Please answer the following questions. The lists can be re-arranged by dragging and dropping.</p>
        <h2>Order the puzzles in terms of: difficulty</h2>
        <DragElements words ={puzzles} items={diff} setItems={setDiff}/>

        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
      />

        <h2>Order the puzzles in terms of: engagement</h2>
        <DragElements words ={puzzles} items={engagement} setItems={setEngagement}/>
        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
      />

        <h2>Order the puzzles in terms of: overall</h2>
        <DragElements words ={puzzles} items={overall} setItems={setOverall}/>
        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
      />



        
        <button onClick={onSubmit}>Submit</button>
        </div>)
}