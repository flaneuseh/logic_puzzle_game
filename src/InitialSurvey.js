import { useState } from "react";
let answers = ["I have never played this type of puzzle", "I rarely play this type of puzzle", "I occasionally play this type of puzzle", "I frequently play this type of puzzle"];
let questions = ["How much have you played any type of logic puzzles, such as Sudoku or nonograms (examples shown below)?",
    "How much have you played any grid logic puzzles, also called Einstein or Zebra puzzles (example shown below)?"]
let images = ["PuzzleExamples/logicPuzzle.png", "PuzzleExamples/gridPuzzleExample.png"]


let updateResponse = (q, value, responses, setResponses) => {
    let r = { ...responses };
    r[q] = value;
    setResponses(r);
}
let ExperienceScale = ({ question, image, answers, responses, setResponses }) => {
    let answerButtons = answers.map(
        (answer, idx) => {
            return (<li key={answer + idx + 1}>
                <input type="radio" name={question} id={question + idx + 1} value={idx + 1} onChange={() => updateResponse(question, idx + 1, responses, setResponses)} />
                <label htmlFor={question + idx + 1}>{answers[idx]}</label>
            </li>)
        })

    return (
        <div className="survey">
            <h1>{question}</h1>
            <img src={image} className="surveyImg" />
            <ul >
                {answerButtons}
            </ul>
        </div>
    );
}



export default InitalSurvey = ({ postAnswers }) => {
    let r = {}
    questions.map((question) => r[question] = -1);
    let [responses, setResponses] = useState(r);

    let onclick = () => {
        let nullResponses = Object.keys(responses).filter((key) => { return responses[key] == -1 });

        if (nullResponses.length > 0){
            Promise.resolve().then(alert("Please answer all questions"));
        }else{
            postAnswers(responses[questions[0]], responses[questions[1]])
        }
    }

    let qs = questions.map((question, idx) => { return <ExperienceScale key={question} question={question} image={images[idx]} answers={answers} responses={responses} setResponses={setResponses} /> });
    return (<div className="wrap">

        <h1> Tell us about your experience with logic puzzles</h1>

        <form action="">
            {qs}

            <button className="submit" onClick={() => onclick()} type="button">Submit</button>
        </form></div>);
}