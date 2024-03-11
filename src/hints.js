import { useEffect, useState } from "react"

let recordHint = (time, hint, strikes, i) =>{
    let newTime = new Date()
    let ms = newTime - time 
    console.log("The hint '" + hint + "' was set to '" + strikes[i] + "' at time '" + ms +"'" )
}


export default HintDisplay = ({hints, time, strikes, setStrikes}) => {


    let toggleStrike = (idx) => {
        const nextStrikes= strikes.map((c, i) => {
            if (i === idx) {
              // toggle strike
              return !c;
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setStrikes(nextStrikes);

    }
    
    let makeHint = (hint, setStrikes, idx) =>{

        let strike= false; 

        if(strikes.length <= idx){
            setStrikes([...strikes, false]); 
        }else{
            strike=strikes[idx]
        }
        

        if (strike){
            return ( <li className="hint strikedText" key={hint} onClick = {() => {recordHint(time, hint, strikes, idx); toggleStrike(idx)}}>{hint}</li>); 
        }else{
            return ( <li className="hint" key={hint} onClick = {() => { recordHint(time, hint, strikes, idx);toggleStrike(idx)}}>{hint}</li>); 
        }
    }

    
    let hintsList = hints.map((hint, idx) => makeHint(hint, setStrikes, idx))
    hintsList = <ol>{hintsList}</ol>
    return (
        <div>
            <h1>Hints</h1>
            <p className="smalltext"> (click to cross out/uncross) </p>
            {hintsList}
        </div>);
}