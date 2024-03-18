import Popup from 'reactjs-popup';
import { useState } from 'react';

let CorrectPop = ({isCorrect, finish, clearPuzzle, close}) => {
    let text = ""
    let retry = ""
    let clear = ""
    if (isCorrect()) {
        text = "You have correctly solved this puzzle"
    } else {
        text = "At least one answer is incorrect or incomplete"

        clear = (<button onClick={() => { clearPuzzle(); close() }}>
            Clear and Re-attempt
        </button>)

        retry = (<button onClick={() => { clearPuzzle(); close() }}>
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

export default FinishButtons = ({ giveUp, isCorrect, clearPuzzle, finish, puzzle }) => {


    let buttons = (<div>
        <button onClick={giveUp}>Go to Survey</button>
        <button onClick = {() => setShowPopup(true)}> Submit Puzzle </button>
        <button onClick={clearPuzzle}>Clear Board</button>

    </div>)
        let resetButtons = () => {
            setShowPopup(false)
        }

    //let popup = (<div>{CorrectPop(isCorrect, finish, clearPuzzle, resetButtons)}</div>)
    

    let pop = <div><CorrectPop isCorrect={isCorrect} finish={finish} clearPuzzle = {clearPuzzle} close={() => {resetButtons()}}/></div>


    /*let showpop = function(){
        setcontent(pop)
    }*/ 


    let [showPopup, setShowPopup] = useState(false)




    return (<div>{showPopup? pop : buttons}</div>)
}