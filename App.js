
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { addPuzzleSurvey, addSubject } from './src/Firestore/sendData';
import InformedConsent from './src/InformedConsent';
import PuzzleManager from './src/PuzzleManager';
import StoryManager from './src/StoryManager';
import Tutorial from './src/Tutorial';

let questions = ["The puzzle was cognitively demanding.", "I had to think very hard when playing the puzzle.",
  "The puzzle required a lot of mental gymnastics.", "The puzzle stimulated my brain.", "This puzzle doesn’t require a lot of mental effort.",
  "The puzzle made me draw on all of my mental resources.", "The mental challenges in this puzzle had an impact on how I played.",

  "I think the puzzle is fun.", "I enjoy playing the puzzle.",
  "I feel bored while playing the puzzle.", "I am likely to recommend this puzzle to others.",
  "If given the chance, I want to play this puzzle again."];

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
  return ["public/narrativePuzzles/trainInfo.json"]; 


}





export default function App() {

  //addSubject(4, 3); 

  let [puzzle, setPuzzle] = useState(null);
  let [i, setI] = useState(0)
  let [mode, setMode] = useState("survey")
  let [pid, setPID] = useState(0)
  let [content, setContent] = useState(<Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />);
  //let [files, setFiles] = useState(); 
  //useEffect(() => {setFiles(getFiles())}, [])
  let files = getFiles()
  useEffect(() => {
    shuffleArray(questions)
  }, [])

  //let files = ["puzzles/example.json"]

  let consent = <div className='parent'><InformedConsent consent={() => setMode("survey")} /></div>
  let tutorial = <Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />
  let puzzleManager = <PuzzleManager files={files} i={i} setI={setI} pid={pid} postSurvey={addPuzzleSurvey} questions={questions} />

  let startGame = () => {
    setMode("puzzle")
  }

  //const userPromise = getCurrentUser(); 
  //userPromise.then((user) => {console.log(user)});

  let submitInitalSurvey = (logicPuz, gridPuzz) => {
    console.log("err??")
    setMode("tutorial");
    addSubject(logicPuz, gridPuzz)
  }


  shuffleArray(files)

  const url = Linking.useURL();

  if (url) {
    const { hostname, path, queryParams } = Linking.parse(url);

    console.log(
      `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );

    return (<div className='parent'>
      <div className='codeBanner'>
        <div>
          Your completion code is CKKCGFDC<br />
          You may enter this at anytime
        </div>

      </div>
      {puzzleManager}
    </div>)

    // if (path == "consent") {
    //   if (mode == "survey") {
    //     return (<InitialSurvey postAnswers={submitInitalSurvey} />)
    //   } else if (mode == "tutorial") {
    //     return (<div className='parent'>{tutorial}</div>)
    //   } else {
    //     return (<div className='parent'>
    //       <div className='codeBanner'>
    //         <div>
    //           Your completion code is CKKCGFDC<br />
    //           You may enter this at anytime
    //         </div>

    //       </div>
    //       {puzzleManager}
    //       <p>STORY:</p>
    //       {storyManager}
    //     </div>)
    //   }
    // } else {
    //   return (consent)
    // }







  } else {
    return <div>Loading</div>
  }


}

