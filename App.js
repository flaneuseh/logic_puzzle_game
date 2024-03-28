
import { useState } from 'react';
import InitialSurvey from './src/InitialSurvey';
import { getCurrentUser } from './src/Firestore/SignIn';
import { addPuzzleSurvey, addSubject } from './src/Firestore/sendData';
import PuzzleManager from './src/PuzzleManager';
import Tutorial from './src/Tutorial';
import InformedConsent from './src/InformedConsent';

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

  //addSubject(4, 3); 

  let [puzzle, setPuzzle] = useState(null);
  let [i, setI] = useState(0)
  let [mode, setMode] = useState("consent")
  let [pid, setPID] = useState(0)
  let [content, setContent] = useState(<Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />);
  //let files = ["puzzles/example.json"]
  let files = ["puzzles/trial4_puzzle0_0.json", "puzzles/trial4_puzzle1_1.json", "puzzles/trial4_puzzle2_2.json", "puzzles/trial4_puzzle3_3.json", "puzzles/trial4_puzzle4_4.json", "puzzles/trial4_puzzle5_5.json", "puzzles/trial4_puzzle6_6.json", "puzzles/trial4_puzzle7_7.json"]

  let consent = <div className='parent'><InformedConsent consent={() => setMode("survey")}/></div>
  let tutorial = <Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />
  let puzzleManager = <PuzzleManager files={files} i={i} setI={setI} pid={pid} postSurvey={addPuzzleSurvey}/>

  let startGame = () => {
    setMode("puzzle")
  }

  //const userPromise = getCurrentUser(); 
  //userPromise.then((user) => {console.log(user)});

  let submitInitalSurvey = (logicPuz, gridPuzz) => {
    setMode("tutorial");
    addSubject(logicPuz, gridPuzz) 
  }
  
 
  shuffleArray(files)

  if (mode == "consent"){
    return (consent)
  }
  else if (mode == "survey") {
    return (
     
      <InitialSurvey postAnswers={submitInitalSurvey} />
    )
  } else if (mode == "tutorial") {
    return (<div className='parent'>{tutorial}</div>)
  } else {
    return (<div className='parent'>
        <div className='codeBanner'>
          <div>
          You completetion code is 4XPAFDSASD <br/> 
              You may enter this at anytime 
          </div>
             
        </div>
      {puzzleManager}</div>)
  }









}

