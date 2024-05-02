
import { useState } from 'react';
import { addPuzzleSurvey, addSubject } from './src/Firestore/sendData';
import InformedConsent from './src/InformedConsent';
import InitialSurvey from './src/InitialSurvey';
import PuzzleManager from './src/PuzzleManager';
import Tutorial from './src/Tutorial';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function createPuzzle(data, setPuzzle) {
  console.log(data)
  let categories = []
  for (cat in data.categories) {
    cat = data.categories[cat]
    categories.push(new Category(cat.name, cat.entities))
  }

  setPuzzle(new PuzzleModel(categories, data.hints, data.solution))

}

function getFiles() {
  let columns = [0, 1, 3, 5]
  let solutions = [12, 199, 352, 444]
  let files = []

  shuffleArray(solutions)

  for (i in columns) {
    files.push("puzzles/puzzle_" + solutions[i] + "_" + columns[i] + ".json")
  }

  return files


}



export default function App() {

  //addSubject(4, 3); 

  let [puzzle, setPuzzle] = useState(null);
  let [i, setI] = useState(0)
  let [mode, setMode] = useState("consent")
  let [pid, setPID] = useState(0)
  let [content, setContent] = useState(<Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />);
  //let [files, setFiles] = useState(); 
  //useEffect(() => {setFiles(getFiles())}, [])
  let files = getFiles()
  //let files = ["puzzles/example.json"]

  let consent = <div className='parent'><InformedConsent consent={() => setMode("survey")} /></div>
  let tutorial = <Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />
  let puzzleManager = <PuzzleManager files={files} i={i} setI={setI} pid={pid} postSurvey={addPuzzleSurvey} />

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

  if (mode == "consent") {
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
          Your completion code is 4XPAFDSASD <br />
          You may enter this at anytime
        </div>

      </div>
      {puzzleManager}</div>)
  }









}

