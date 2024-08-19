
import axios from 'axios';
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { addPuzzleSurvey, addSubject } from './src/Firestore/sendData';
import InformedConsent from './src/InformedConsent';
import InitialSurvey from './src/InitialSurvey';
import PuzzleManager from './src/PuzzleManager';
import RankPuzzles from './src/RankPuzzles';
import Tutorial from './src/Tutorial';

let MODE = "survey"

let questions = ["The puzzle was cognitively demanding.", "I had to think very hard when playing the puzzle.",
  "The puzzle required a lot of mental gymnastics.", "The puzzle stimulated my brain.", "This puzzle doesn’t require a lot of mental effort.",
  "The puzzle made me draw on all of my mental resources.", "The mental challenges in this puzzle had an impact on how I played.",

  "I think the puzzle is fun.", "I enjoy playing the puzzle.",
  "I feel bored while playing the puzzle.", "I am likely to recommend this puzzle to others.",
  "If given the chance, I want to play this puzzle again.",

  "I think the characters in the game are well developed.",
  "I am captivated by the game’s story from the beginning.",
  "I enjoy the fantasy or story provided by the game.",
  "I can identify with the characters in the game.",
  "I am emotionally moved by the events in the game.",
  "I am very interested in seeing how the events in the game will progress.",
  "I can clearly understand the game’s story"

];

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
  let arr = ["narrativePuzzles/trainInfo.json", "narrativePuzzles/ballroomInfo.json", "narrativePuzzles/chiliInfo.json"];
  shuffleArray(arr)
  return arr
}

function getModes() {
  let arr = ["if", "nar", "hints"]
  shuffleArray(arr)
  return arr
}

async function getPuzzleNames(files) {

  let names = await Promise.all(files.map(async (file) => {
    let response = await axios.get(file)

    return response.data.name
  }))



  return names
}





export default function App() {


 

  //addSubject(4, 3); 

  let [puzzle, setPuzzle] = useState(null);
  let [i, setI] = useState(0)
  let [mode, setMode] = useState(MODE)
  const n = getModes()
  let [narMode, setNarMode] = useState(n)
  let [pid, setPID] = useState(0)
  let [content, setContent] = useState(<Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={11} startGame={() => { startGame() }} />);
  const f = getFiles()
  let [files, setFiles] = useState(f)
  let [names, setNames] = useState([])
  let [numPuzzles, setNumPuzzles] = useState(0)
  let codes = ["code1", "code2", "code3", "code4"]
  let payments = ["$0.50", "$2.50", "$4.50", "$6.50"]
  //let [puzzleManager, setPuzzleManager] = useState(<PuzzleManager files={files} i={i} setI={setI} pid={pid} postSurvey={addPuzzleSurvey} questions={questions} mode="if"/>); 
  //let [files, setFiles] = useState(); 
  //useEffect(() => {setFiles(getFiles())}, [])
  //let files = getFiles()
  useEffect(() => {
    shuffleArray(questions)
  }, [])

  useEffect(() => {
    async function load() {
      let n = await getPuzzleNames(files)
      setNames(n)
      console.log(n)
    }
    load()
  }, [])


  let submitInitalSurvey = (logicPuz, gridPuzz) => {
    setMode("tutorial");
    addSubject(logicPuz, gridPuzz, names, narMode)
  }


  //let files = ["puzzles/example.json"]

  let consent = <div className='parent'><InformedConsent consent={() => setMode("survey")} /></div>
  let tutorial = <Tutorial imageFolder="tutorialSlides" numSlides={29} canSkip={12} startGame={() => { startGame() }} />
  let initalSurvey = <InitialSurvey postAnswers={submitInitalSurvey} />
  let puzzleManager = <PuzzleManager files={files} i={i} setI={setI} pid={pid} postSurvey={addPuzzleSurvey} questions={questions} modes={narMode} numPuzzles={numPuzzles} setNumPuzzles={setNumPuzzles} />

  let startGame = () => {
    setMode("puzzle")
  }

  //const userPromise = getCurrentUser(); 
  //userPromise.then((user) => {console.log(user)});

  let setFilesByName = (name) => {

    if (name == "train") {
      setFiles(["narrativePuzzles/trainInfo.json"])
    } else if (name == "chili") {
      setFiles(["narrativePuzzles/chiliInfo.json"])
    } else {
      setFiles(["narrativePuzzles/ballroomInfo.json"])
    }
  }


  let banner = <div className='codeBanner'>
    <div>
      You have completed {numPuzzles} puzzles. You will be paid {payments[numPuzzles]}. <br />
      Your code is <b>{codes[numPuzzles]}</b> <br />
      You may this code now{numPuzzles < (codes.length - 1) ? ", or continue playing for larger payment." : "."}
    </div>

  </div>

  //shuffleArray(files)

  const url = Linking.useURL();

  if (url) {
    let { hostname, path, queryParams } = Linking.parse(url);


    if (MODE == "debug") {
      path = "consent"
    }

    console.log(
      `Linked to app with hostname: ${hostname}, path: ${path} and data: ${JSON.stringify(
        queryParams
      )}`
    );


    if (path == "consent") {
      if (mode == "survey") {
        return initalSurvey
      }
      if (mode == "tutorial") {
        return (<div className='parent'>
          {banner}
          {tutorial}
        </div>)
      }
      if (mode == "puzzle") {
        return (<div className='parent'>
          {banner}
          {puzzleManager}
        </div>)
      } else {
        return (<div>
          <p>Genre:</p>
          <input onChange={e => setFilesByName(e.target.value)} />
          <p>Narrative Style</p>
          <input onChange={e => setNarMode([e.target.value])} />
          <button onClick={() => setMode("puzzle")}>Submit</button>
        </div>)
      }
    } else {
      return (consent)
    }





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

