import Puzzle from "./puzzle";
import Survey from "./survey";
import { addPuzzleSurvey} from "./Firestore/sendData";
import { useEffect, useState } from "react";
import axios from 'axios';
import Category from "./categoryModel";
import PuzzleModel from "./puzzleModel";

function createPuzzle(data) {
    let categories = []
    for (cat in data.categories) {
        cat = data.categories[cat]
        categories.push(new Category(cat.name, cat.entities))
    }

    return new PuzzleModel(categories, data.hints, data.solution, data.id)

}


function load(file, setContent, questions, finish) {

        axios.get(file)
            .then(response => {
                let p = createPuzzle(response.data);
                let time = new Date()
                setContent(<Puzzle mode ="primer" inkName={response.data.inkName} name={response.data.name} clueFile={response.data.clueFile} lastFile={response.data.lastFile} p={p} time={time} concede={() => {
                    startSurvey(p.num,setContent,  questions, finish )
                }
                } finish={() => {
                    startSurvey(p.num,setContent,  questions, finish)
                }} />);


            });


    }



function startSurvey(puzzle, setContent, questions, finish ) {
    setContent(<Survey puzzleId={puzzle} questions={questions} submit={(responses, comment) => {
        addPuzzleSurvey(puzzle, "primer", responses, comment)
        finish()
    }} />);

}



export default PrimerPuzzle = ({file, questions, finish, path}) => {


    let [content, setContent] = useState(<div>Loading</div>)

    useEffect(() => {
        load(file, setContent, questions, finish, path)
    }, [])
    
    return (content)
}