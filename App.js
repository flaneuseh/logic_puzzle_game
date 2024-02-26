
import Board from './src/subgrid';
import Category from './src/categoryModel';
import "./src/style.css"
import Puzzle from './src/puzzle';
import PuzzleModel from './src/puzzleModel';

export default function App() {


  let cat = new Category("Suspects", ["Ms. Scarlet", "Mrs. White", "Prof. Plum", "Col. Mustard"])
  let cat2 = new Category("Weapon", ["Rope", "Knife", "Candlestick", "Wrench"])
  let cat3 = new Category("Time", ["1:00 PM", "2:00 PM", "3:00PM", "4:00PM"])

  let puzzle = new PuzzleModel([cat, cat2, cat3], hints = ["hint1", "hint2", "hint3"])
  let time = new Date()
  return (
    
    <Puzzle p={puzzle} time={time}/>
      
 
  );
}


