
import axios from 'axios';
import { useState } from 'react';
import PuzzleManager from './src/PuzzleManager';
import Survey from './src/survey';


function createPuzzle(data, setPuzzle) {
  console.log(data)
  let categories = []
  for (cat in data.categories) {
    cat = data.categories[cat]
    categories.push(new Category(cat.name, cat.entities))
  }

  setPuzzle(new PuzzleModel(categories, data.hints, data.solution))

}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


export default function App() {

  let [puzzle, setPuzzle] = useState(null); 
  let [i, setI] = useState(0)

  //let files = ["puzzles/trial4_puzzle0_0.json","puzzles/trial4_puzzle1_1.json", "puzzles/trial4_puzzle2_2.json", "puzzles/trial4_puzzle3_3.json", "puzzles/trial4_puzzle4_4.json",  "puzzles/trial4_puzzle5_5.json", "puzzles/trial4_puzzle6_6.json", "puzzles/trial4_puzzle7_7.json"] 
  let files = ["puzzles/example.json", "puzzles/trial4_puzzle0_0.json"]
  shuffleArray(files)
      return (<PuzzleManager files={files} i={i} setI={setI}/> );
        
   
  
    
  
  
  
 
}


