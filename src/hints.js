import { useState , useEffect} from "react"

let recordHint = (time, hint, strikes, i) =>{
    let newTime = new Date()
    let ms = newTime - time 
    console.log("The hint '" + hint + "' was set to '" + strikes[i] + "' at time '" + ms +"'" )
}


export default HintDisplay = ({hints, time, strikes, setStrikes}) => {

    console.log(strikes)


    let toggleStrike = (idx) => {
        const nextStrikes= strikes.map((c, i) => {
            if (i === idx) {
              // Increment the clicked counter
              return !c;
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setStrikes(nextStrikes);

    }
    
    let makeHint = (hint, setStrikes, idx) =>{

        if(strikes.length <= idx){
            setStrikes([...strikes, false]); 
        }
        

        if (strikes[idx]){
            return ( <li className="strikedText" key={hint} onClick = {() => {recordHint(time, hint, strikes, idx); toggleStrike(idx)}}>{hint}</li>); 
        }else{
            return ( <li key={hint} onClick = {() => { recordHint(time, hint, strikes, idx);toggleStrike(idx)}}>{hint}</li>); 
        }
    }

    
    let hintsList = hints.map((hint, idx) => makeHint(hint, setStrikes, idx))
    hintsList = <ol>{hintsList}</ol>
    return (     
        <div>
        <h1>Hints</h1>
        {hintsList}
    </div>); 
}