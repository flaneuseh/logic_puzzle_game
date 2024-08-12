import Popup from 'reactjs-popup';
import { useEffect, useState, useMemo } from 'react';
import { addButtonPress } from './Firestore/sendData';


let CorrectPop = ({isCorrect, time, close, finish}) => {
    let text = ""
    let retry = ""
    let clear = ""
    let newTime = new Date()
    let ms = newTime - time 
    if (isCorrect()) {
        return (<div className='popup'>
        <h1>Mystery solved!</h1>
        <p>You have successfully completed the puzzle. Click continue to get conclusion of the mystery. </p>
        <div>
            <button onClick=
                {() => {close(); finish()}}>
                    Continue
            </button>
        </div>
    </div>)
    } else {

        return (<div className='popup'>
        <h1>Mystery incomplete!</h1>
        <p>At least one of your answers is not correct or not complete. Look through the clues again to figure out where you went wrong.  </p>
        <div>
            <button onClick=
                {() => close()}>
                    Continue
            </button>
        </div>
    </div>)
        
    }

   
};

export default FinishButtons = ({ giveUp, isCorrect, clearPuzzle, puzzle, finish,instanceId, time}) => {

    let checkSolution = () => {

        /*let newTime = new Date()
        let ms = newTime - time 
        addButtonPress(instanceId, ms, "check"); 
        setShowPopup(true)*/ 
        alert("You are not correct")
    
    }

    
    let buttons = (<div>
       <Popup trigger=
                {<button> I solved it!</button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                             <div><CorrectPop time={time} isCorrect={isCorrect} finish={finish} clearPuzzle = {clearPuzzle} instanceId={instanceId} close={() => {close();resetButtons()}}/></div>
                          
                        </div>
                    )
                }
            </Popup>
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