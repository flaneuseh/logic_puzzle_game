import Popup from 'reactjs-popup';
import { useEffect, useState, useMemo } from 'react';
import { addButtonPress } from './Firestore/sendData';


let CorrectPop = ({isCorrect, time}) => {
    let text = ""
    let retry = ""
    let clear = ""
    let newTime = new Date()
    let ms = newTime - time 
    if (isCorrect()) {
        text = "You have correctly solved this puzzle"
    } else {
        text = "At least one answer is incorrect or incomplete"
    }

    return (<div>
        <p>{text}</p>
    </div>)
};

export default FinishButtons = ({ giveUp, isCorrect, clearPuzzle, puzzle, finish,instanceId, time}) => {

    let checkSolution = () => {

        let newTime = new Date()
        let ms = newTime - time 
        addButtonPress(instanceId, ms, "check"); 
        setShowPopup(true)}

    
    let buttons = (<div>
        <button onClick = {checkSolution}> Check my Solution</button>
        <br/> 
        <button onClick={clearPuzzle}>Clear Solution</button>
        <br/> 
        <button onClick={giveUp}>Exit to Survey</button>
       
        <br/> 

    </div>)
        let resetButtons = () => {
            setShowPopup(false)
        }

    //let popup = (<div>{CorrectPop(isCorrect, finish, clearPuzzle, resetButtons)}</div>)
    

    let pop = <div><CorrectPop time={time} isCorrect={isCorrect} finish={finish} clearPuzzle = {clearPuzzle} instanceId={instanceId} close={() => {resetButtons()}}/></div>


    /*let showpop = function(){
        setcontent(pop)
    }*/ 


    let [showPopup, setShowPopup] = useState(false)
    useEffect(() => {
        if(showPopup != false){
            setShowPopup(false)
        }
       }
        , [puzzle]);




    return (<div> <div>{buttons} </div> 
            {showPopup? pop : ""}
        </div>)
}