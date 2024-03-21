import Popup from 'reactjs-popup';
import { useState } from 'react';
import { addButtonPress } from './Firestore/sendData';


let CorrectPop = ({isCorrect, finish, clearPuzzle, close, instanceId, time}) => {
    let text = ""
    let retry = ""
    let clear = ""
    let newTime = new Date()
    let ms = newTime - time 
    if (isCorrect()) {
        text = "You have correctly solved this puzzle"
    } else {
        text = "At least one answer is incorrect or incomplete"

        clear = (<button onClick={() => {addButtonPress(instanceId, ms,  "clear_reattempt");  clearPuzzle(); close() }}>
            Clear and Re-attempt
        </button>)

        retry = (<button onClick={() => {addButtonPress(instanceId, ms, "reattempt"); clearPuzzle(); close() }}>
         Re-attempt
        </button>)
    }

    return (<div>
        <p>{text}</p>
        <div>
            {retry}
            {clear}
            <button onClick=
                {() => { finish(); close() }}>
                Finish and Go To Survey
            </button>


        </div>
    </div>)
};

export default FinishButtons = ({ giveUp, isCorrect, clearPuzzle, finish,instanceId, time}) => {


    let buttons = (<div>
        <button onClick={giveUp}>Skip Puzzle</button>
        <button onClick = {() => setShowPopup(true)}> Submit my Solution</button>
        <button onClick={clearPuzzle}>Clear Puzzle</button>

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




    return (<div>{showPopup? pop : buttons}</div>)
}