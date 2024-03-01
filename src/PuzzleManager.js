import { useState, useEffect } from "react";
import axios from 'axios';
import Puzzle from "./puzzle";
import Category from "./categoryModel";
import PuzzleModel from "./puzzleModel";

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
  
    return new PuzzleModel(categories, data.hints, data.solution) 
  
  }





export default PuzzleManager = ({files}) => {
    shuffleArray(files);
    let [i, setI] = useState(0);
    let [content, setContent] = useState(<div>loading</div>); 
    let [puzzle, setPuzzle] = useState(null); 
    

    function load(){
            if(i >= files.length){
                setContent(<div>No more puzzles</div>);
            }else{
                axios.get(files[i])
                .then(response => {
                let p = createPuzzle(response.data);
                
                setPuzzle(p); 
                let time = new Date()
                setContent( <Puzzle p={p} time={time} concede = {loadNext} finish = {loadNext}/>);
    
                setI(i + 1);
            });
            }

        }

        function loadNext(){
            setContent(<div>Loading</div>);
            load();
    
            }
        
        

    if(i == 0){
        load();

    }
    

   
    return(content)

}
