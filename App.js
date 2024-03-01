
import Board from './src/subgrid';
import Category from './src/categoryModel';
import "./src/style.css"
import Puzzle from './src/puzzle';
import PuzzleModel from './src/puzzleModel';
import axios from 'axios';
import { useState } from 'react';
import PuzzleManager from './src/PuzzleManager';


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

  let files = ["puzzles/trial_2_puzzle_0_0.json", "puzzles/trial_2_puzzle_1_3.json", "puzzles/trial_2_puzzle_2_6.json", "puzzles/trial_2_puzzle_8_4.json", "puzzles/trial_2_puzzle_9_2.json"]
    
      return (<PuzzleManager files={files}/> );
        
   
  
    
  
  
  
 
}


