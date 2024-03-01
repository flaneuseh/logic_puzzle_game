
import Board from './src/subgrid';
import Category from './src/categoryModel';
import "./src/style.css"
import Puzzle from './src/puzzle';
import PuzzleModel from './src/puzzleModel';
import axios from 'axios';
import { useState } from 'react';


function createPuzzle(data, setPuzzle){
  console.log(data)
  let categories = []
  for(cat in data.categories){
    cat = data.categories[cat]
    categories.push(new Category(cat.name, cat.entities))
  } 

  setPuzzle(new PuzzleModel(categories, data.hints, data.solution))

}

export default function App() {

  let [puzzle, setPuzzle] = useState(null); 

  if(puzzle == null){
    axios.get("puzzles/trial_2_puzzle_5_6.json")
    .then(response => {
      createPuzzle(response.data, setPuzzle)
    });
  }
 
  let time = new Date()

  if(puzzle == null){
    return (<div>Loading...</div>)
  }else{
    return (
    
      <Puzzle p={puzzle} time={time}/>
        
   
    );
  }
  
  
 
}


