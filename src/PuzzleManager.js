import axios from 'axios';
import { useState } from "react";
import ResponseRecorded from "./ResponseRecorded";
import Category from "./categoryModel";
import Puzzle from "./puzzle";
import PuzzleModel from "./puzzleModel";
import Survey from "./survey";

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


function load(i, setI, setContent, files, postSurvey, questions, modes) {
    if (i >= files.length) {
        setContent(<div>No more puzzles</div>);
    } else {
        axios.get(files[i])
            .then(response => {
                let p = createPuzzle(response.data);
                let m = modes[i]
                let time = new Date()
                setI(i + 1);
                setContent(<Puzzle mode ={m} name={response.data.inkName} clueFile={response.data.clueFile} lastFile={response.data.lastFile} p={p} time={time} concede={() => {
                    // addUserAction(pid, "concede", null, time)
                    startSurvey(p.num, i, setI, setContent, files, postSurvey, questions, modes)
                }
                } finish={() => {
                    // addUserAction(pid, "finish", null, time)
                    startSurvey(p.num, i, setI, setContent, files, postSurvey, questions, modes)
                }} />);


            });


    }

}
function finish(setContent) {
    setContent(<div>Thank you for your time, you may close this window now</div>)
}

function showRecordedScreen(setContent, i, setI, files, postSurvey, questions, modes) {
    setContent(<ResponseRecorded goToNextPuzzle={() => { load(i + 1, setI, setContent, files, postSurvey, questions, modes) }} finish={() => { finish(setContent) }} morePuzzles={() => { return i + 1 < files.length }} />)
}

function startSurvey(puzzle, i, setI, setContent, files, postSurvey, questions, modes) {
    setContent(<Survey puzzleId={puzzle} questions={questions} submit={(responses) => {
        postSurvey(puzzle, responses)
        showRecordedScreen(setContent, i, setI, files, postSurvey, questions, modes)
    }} />);
    setI(i + 1)

}


export default PuzzleManager = ({ files, i, setI, postSurvey, questions, modes }) => {
    //shuffleArray(files);
    //let [i, setI] = useState(0);
    console.log(files)
    let [content, setContent] = useState(<div>loading</div>);
    let [puzzle, setPuzzle] = useState(null);
    let [puzzleId, setPuzzleId] = useState(-1);


    if (files) {
        if (i == 0) {
            load(i, setI, setContent, files, postSurvey, questions, modes);

        }



        return (content)
    } else {
        return <div>Loading files</div>
    }




}
