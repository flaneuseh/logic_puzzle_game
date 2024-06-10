import axios from 'axios';
import { useState } from "react";
import ResponseRecorded from "./ResponseRecorded";
import Category from "./categoryModel";
import Puzzle from "./puzzle";
import PuzzleModel from "./puzzleModel";
import Survey from "./survey";
import { createGamePlayInstance } from './Firestore/sendData';

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createPuzzle(data) {
    let categories = []
    for (cat in data.categories) {
        cat = data.categories[cat]
        categories.push(new Category(cat.name, cat.entities))
    }

    return new PuzzleModel(categories, data.hints, data.solution, data.id)

}


function load(i, setI, setContent, files, postSurvey, questions) {
    if (i >= files.length) {
        setContent(<div>No more puzzles</div>);
    } else {
        axios.get(files[i])
            .then(response => {
                //console.log(files[i])
                let p = createPuzzle(response.data);
                let time = new Date()
                setI(i + 1);
                setContent(<Puzzle p={p} time={time} concede={() => {
                    // addUserAction(pid, "concede", null, time)
                    startSurvey(p.num, i, setI, setContent, files, postSurvey, questions)
                }
                } finish={() => {
                    // addUserAction(pid, "finish", null, time)
                    startSurvey(p.num, i, setI, setContent, files, postSurvey, questions)
                }} />);


            });


    }

}
function finish(setContent) {
    setContent(<div>Thank you for your time, you may close this window now</div>)
}

function showRecordedScreen(setContent, i, setI, files, postSurvey, questions) {
    setContent(<ResponseRecorded goToNextPuzzle={() => { load(i + 1, setI, setContent, files, postSurvey, questions) }} finish={() => { finish(setContent) }} morePuzzles={() => { return i + 1 < files.length }} />)
}

function startSurvey(puzzle, i, setI, setContent, files, postSurvey, questions) {
    setContent(<Survey puzzleId={puzzle} questions={questions} submit={(responses) => {
        postSurvey(puzzle, responses)
        showRecordedScreen(setContent, i, setI, files, postSurvey, questions)
    }} />);
    setI(i + 1)

}


export default PuzzleManager = ({ files, i, setI , postSurvey, questions}) => {
    //shuffleArray(files);
    //let [i, setI] = useState(0);
    let [content, setContent] = useState(<div>loading</div>);
    let [puzzle, setPuzzle] = useState(null);
    let [puzzleId, setPuzzleId] = useState(-1);


    if (files){
        if (i == 0) {
            load(i, setI, setContent, files, postSurvey, questions);
    
        }
    
    
    
        return (content)
    }else{
        return <div>Loading files</div>
    }




}
