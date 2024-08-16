import { useEffect, useState } from "react"
import { addHintToggle } from "./Firestore/sendData"
import axios from 'axios';   

let recordHint = (time, hint, strikes, i, instanceId) =>{
    let newTime = new Date()
    let ms = newTime - time 
    // addUserAction("strikeHint", hint, strikes[i], ms)
    //console.log("The hint '" + hint + "' was set to '" + strikes[i] + "' at time '" + ms +"'" )
    addHintToggle(instanceId, ms, hint, strikes[i])
}



export default HintDisplay = ({hints, time, strikes, setStrikes, instanceId, clueFile, name}) => {
    let [story, setStory] = useState("loading")

    useEffect(() => {
        
        axios.get(clueFile).then(response => {
            let clues = response.data.split("//") 
            setStory(clues[0]) 
        }) 
    }, [] )

    let toggleStrike = (idx) => {
        /*const nextStrikes= strikes.map((c, i) => {
            if (i === idx) {
              // toggle strike
              return !c;
            } else {
              // The rest haven't changed
              return c;
            }
          });
          setStrikes(nextStrikes);*/ 

    }
    
    let makeHint = (hint, setStrikes, idx) =>{

        let strike= false; 

        if(strikes.length <= idx){
            setStrikes([...strikes, false]); 
        }else{
            strike=strikes[idx]
        }
        

        if (strike){
            return ( <li className="hint strikedText" key={hint} onClick = {() => {recordHint(time, hint, strikes, idx, instanceId); toggleStrike(idx)}}>{hint}</li>); 
        }else{
            return ( <li className="hint" key={hint} onClick = {() => { recordHint(time, hint, strikes, idx, instanceId);toggleStrike(idx)}}>{hint}</li>); 
        }
    }

    
    let hintsList = hints.map((hint, idx) => makeHint(hint, setStrikes, idx))
    hintsList = <ol>{hintsList}</ol>
    return (
        <div className="hints">
            <h1>{name}</h1>
            <p dangerouslySetInnerHTML={{__html: story}}></p>
            <h1>Hints</h1>
            {hintsList}
        </div>);
}