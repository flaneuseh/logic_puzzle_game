import { useState, useEffect } from "react";
import axios from 'axios';
import Puzzle from "./puzzle";
import Category from "./categoryModel";
import PuzzleModel from "./puzzleModel";
import Survey from "./survey";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createPuzzle(data){
    console.log(data)
    let categories = []
    for(cat in data.categories){
      cat = data.categories[cat]
      categories.push(new Category(cat.name, cat.entities))
    } 
  
    return new PuzzleModel(categories, data.hints, data.solution, data.id) 
  
  }


  function load(i, setI, setContent, files){
    if(i >= files.length){
        setContent(<div>No more puzzles</div>);
    }else{
        axios.get(files[i])
        .then(response => {
        let p = createPuzzle(response.data);
        let time = new Date()
        setI(i + 1);
        setContent( <Puzzle p={p} time={time} concede = {()=>{startSurvey(p.num,  i, setI, setContent, files)}} finish = {()=> {startSurvey(p.num, i, setI, setContent, files)}}/>);

        
    });

    
    }

}

function startSurvey(puzzle, i, setI, setContent, files){
    setContent(<Survey puzzleId={puzzle} submit={()=>{load( i + 1, setI, setContent, files)}}/>); 
    setI(i + 1)

    }


export default PuzzleManager = ({files, i, setI}) => {
    //shuffleArray(files);
    //let [i, setI] = useState(0);
    let [content, setContent] = useState(<div>loading</div>); 
    let [puzzle, setPuzzle] = useState(null); 
    let [puzzleId, setPuzzleId] = useState(-1); 
    
        
        

    if(i == 0){
        load(i, setI, setContent, files);

    }
    

   
    return(content)

}
