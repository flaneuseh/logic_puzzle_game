import { useEffect,useState } from "react";
import "./survey.css";


// questions from the video game demand scale  (cognitive) and the GUESS scale (enjoyment)
// "game" is changed to puzzle for clearity 
let questions = ["The puzzle was cognitively demanding.", "I had to think very hard when playing the puzzle.",
    "The puzzle required a lot of mental gymnastics.", "The puzzle stimulated my brain.", "This puzzle doesn’t require a lot of mental effort.", 
    "The puzzle made me draw on all of my mental resources.", "The mental challenges in this puzzle had an impact on how I played.",

    "I think the puzzle is fun.", "I enjoy playing the puzzle.",
    "I feel bored while playing the puzzle.", "I am likely to recommend this puzzle to others.",
    "If given the chance, I want to play this puzzle again."];


let answers = ["1 (Disagree)", "2", "3", "4", "5", "6", "7 (Agree)"];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

let updateResponse = (q, value, responses, setResponses) => {
    let r = { ...responses };
    r[q] = value;
    setResponses(r);
}
let LikertScale = ({ question, answers, responses, setResponses }) => {
    let answerButtons = answers.map(
        (answer, idx) => {
            return (<li key={answer + idx + 1}>
                <input type="radio" name={question} value={idx + 1} onChange={() => updateResponse(question, idx + 1, responses, setResponses)} />
                <label>{answers[idx]}</label>
            </li>)
        })

    return (
        <div>
            <label className="statement">{question}</label>
            <ul className='likert'>
                {answerButtons}
            </ul>
        </div>
    );
}

let postResponse = (responses, puzzle, submit, comment) => {
    let nullResponses = Object.keys(responses).filter((key) => { return responses[key] == -1 });

    if (nullResponses.length > 0) {
        Promise.resolve().then(alert("Please answer all questions."));
    } else {
        //console.log("Puzzle:" + puzzle)
        //console.log(responses);
        submit(responses, comment);
    }

}

export default Survey = ({ puzzleId, submit, questions }) => {

    let [comment, updateComment] = useState("")

    let r = {}
    questions.map((question) => r[question] = -1);
    let [responses, setResponses] = useState(r);
    let qs = questions.map((question) => { return <LikertScale key={question} question={question} answers={answers} responses={responses} setResponses={setResponses} /> });
    return (<div className="wrap">

        <h1 className="likert-header"> Answer these questions about the puzzle you just solved</h1>


        
        <form action="">
            {qs}
            <p>Do you have any comments about the puzzle you just played?</p>
        <textarea
        rows={7} 
        cols={80}
        placeholder={"Type answer here"}
        onChange={(e) => {
            updateComment(e.target.value)
        }}
      />
            <button className="submit" onClick={() => postResponse(responses, puzzleId, submit,comment)} type="button">Submit</button>
        </form>

 
        </div>);
}
