import { useState, useEffect } from "react"
import Select from "react-select";
import React, { Component } from "react";
import { Draggable } from "react-drag-reorder";
import { createRankingInstance, updateRankingInstance, updateRankingComment } from "./Firestore/sendData";
import { Radio, Grid } from "@nextui-org/react"; 

let DragElements = ({items,  setItems}) => {

  let [order, setOrder] = useState([null, null, null])
  let [words, setWords] = useState(items.slice())


  const options = [
    { value:0, label: '1st' },
    { value: 1, label: '2nd' },
    { value: 2, label: '3rd' }
  ]

  let [all_options, setOptions] = useState(items.map(() => options.slice())) // index of order 

  let get_ranking = (index) => {
    for(let i =0; i < words.length; i ++){
      if( order[i] == index){
        return i 
      }
    }
    return -1 
  }

  let set_option = (option, index) => {
    // options.value = ranking 
    // index = index of genre in words 
    let copy = all_options.slice()

    let orderCopy = order.slice()

    let old_ranking = get_ranking(index)
    // changing from old order
    if (old_ranking != -1){

      for(let i =0; i < 3; i ++){
   
        copy[i][old_ranking]["isDisabled"] = false
      
      }

      orderCopy[old_ranking] = null 

    }
    
    if(option != null){
      for(let i =0; i < 3; i ++){
        if (i != index){
          copy[i][option.value]["isDisabled"] = true
        }
      }
  
      orderCopy[option.value] = index 
    }
    

    setOptions(copy)
    setOrder(orderCopy)
  }


  useEffect(()=>{
    let o = order.map((e, idx) => {
      if (e != null){
        return words[e]
      }else{
        return "null"
      }})

    console.log(order)
    console.log(o)
    setItems(o)
  }, [all_options])


  let selects = words.map((value, idx) => <div key={value}>
    <p className="rankedLabel">{value}</p> <Select  isClearable={true} className="rankedSelect" options={all_options[0]}  onChange={(e) => {set_option(e, idx)}}/>

<br/>
  </div>)


    return (
     <div>
     {selects}
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



let hasNull = (list) => {
  for(i in list){
    if (list[i] == "null"){
      return true
    }
  }

  return false 
}


export default RankPuzzles = ({onSubmit}) => {
    let puzzles = ["Lady Rose's Chrysanthemum Ball", "The Great Chili Competition", "The Wild Rose Train"  ] 

    let [diff, setDiff] = useState(shuffleArray(puzzles))
    let [narrative, setNarrative] = useState(shuffleArray(puzzles))
    let [enjoyment, setEnjoyment] = useState(shuffleArray(puzzles)) 
    let [instanceId, setInstanceId] = useState(null)

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])


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

    let validateSubmit = () => {

      if (hasNull(diff) || hasNull(narrative) || hasNull(enjoyment)){
        alert("Please select a ranking for every puzzle")
      }else{
        onSubmit()
      }

    }

    return (<div className="rankings">
        <h1>Final Survey</h1>
        <p>You have played all the puzzles available. Please answer the following questions.</p>
        <h2>Rank the puzzles from most to least difficult</h2>
        <DragElements  items={diff} setItems={setDiff}/>

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
        <DragElements items={narrative} setItems={setNarrative}/>
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
        <DragElements items={enjoyment} setItems={setEnjoyment}/>
        <p>Why did you decide on this order?</p>
        <textarea
        rows={5} 
        cols={75}
        placeholder={"Type answer here"}
        onChange={(e) => {
            updateComment("enjoyment", e.target.value)
        }} 
      />



        
        <button onClick={validateSubmit}>Submit</button>
        </div>)
}