import { useState } from "react";
import "./survey.css"

let questions = ["The game was cognitive demanding", "I had to think very hard when playing the game.", 
        "The game required a lot of mental gymnastics.",  "The game stimulated my brain.", "The mental challenges in this game had an impact on how I played.", "The game was fun to play."];


let answers  = ["1 (Strongly Disagree)", "2", "3", "4", "5","6", "7 (Strongly Agree)"];



let updateResponse = (q, value, responses, setResponses) => {
    let r = {... responses}; 
    r[q] = value;
    setResponses(r);
}
let LikertScale = ({question, answers, responses, setResponses}) =>{
    let answerButtons = answers.map(
        (answer, idx) => {return ( <li key={answer + idx+1}>
            <input type="radio" name={question} value={idx+1} onChange={()=> updateResponse(question, idx+1, responses, setResponses)}/>
            <label>{answer}</label>
          </li>) 
    })

    return(
        <div>
             <label className="statement">{question}</label>
             <ul className='likert'>
                {answerButtons}
             </ul>
        </div>
    );
}

let postResponse = (responses, puzzle, submit) => {
    console.log("Puzzle:" + puzzle)
    console.log(responses);
    submit();
}

export default Survey = ({puzzleId, submit})=>{
   
   let r = {}
   questions.map((question) => r[question] = -1);
   let [responses, setResponses] = useState(r); 
   let qs = questions.map((question) => {return <LikertScale key = {question} question={question} answers={answers} responses = {responses} setResponses={setResponses}/>}); 
   return(<div className="wrap"> 

   <h1 className="likert-header"> Answer the question about the puzzle you just solved</h1>
   
   <form action="">
        {qs}

        <button className="submit" onClick={()=> postResponse(responses, puzzleId, submit)} type="button">Submit</button>
    </form></div>); 
}
