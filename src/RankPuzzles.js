import { useState, useEffect } from "react"
import Select from "react-select";
import React, { Component } from "react";
import { Draggable } from "react-drag-reorder";
import { createRankingInstance, updateRankingInstance, updateRankingComment } from "./Firestore/sendData";
import { async } from "@firebase/util";

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
            {items.map((word, idx) => {
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




function shuffleArray(a) {

    let array = a.slice()

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array 
  }



export default RankPuzzles = ({onSubmit}) => {
    let puzzles = ["Lady Rose's Chrysanthemum Ball", "The Great Chili Competition", "The Wild Rose Train"  ] 

    let [diff, setDiff] = useState(shuffleArray(puzzles))
    let [narrative, setNarrative] = useState(shuffleArray(puzzles))
    let [enjoyment, setEnjoyment] = useState(shuffleArray(puzzles)) 
    let [instanceId, setInstanceId] = useState(null)


    useEffect(() => {
        async function fetchData() {
            createRankingInstance(diff, narrative, enjoyment).then((data) => { setInstanceId(data); })
        }
        fetchData()
    }, []);


    useEffect(() => {
        async function updateData(){
            updateRankingInstance(instanceId, diff, narrative, enjoyment)
        }

        if (instanceId != null){
            updateData()
        }
    }, [diff, narrative, enjoyment])


    let updateComment = (type, comment) => {
        updateRankingComment(instanceId, type, comment)
    }

    return (<div className="rankings">
        <h1>Final Survey</h1>
        <p>You have played all the puzzles available. Please answer the following questions. The lists can be re-arranged by dragging and dropping.</p>
        <h2>Rank the puzzles from most to least difficult</h2>
        <DragElements words ={puzzles} items={diff} setItems={setDiff}/>

        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
        onChange={(e) => {
            updateComment("diff", e.target.value)
        }}
      />

        <h2>Rank the puzzles from best to worst narrative</h2>
        <DragElements words ={puzzles} items={narrative} setItems={setNarrative}/>
        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
        onChange={(e) => {
            updateComment("narrative", e.target.value)
        }} 
      />

        <h2>Rank the puzzles from most to least enjoyable</h2>
        <DragElements words ={puzzles} items={enjoyment} setItems={setEnjoyment}/>
        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
        onChange={(e) => {
            updateComment("enjoyment", e.target.value)
        }} 
      />



        
        <button onClick={onSubmit}>Submit</button>
        </div>)
}