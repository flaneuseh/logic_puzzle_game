import { useEffect, useState } from "react"

let recordHint = (time, hint, striked) => {
    let newTime = new Date()
    let ms = newTime - time
    console.log("The hint '" + hint + "' was set to '" + striked + "' at time '" + ms + "'")
}


export default HintDisplay = ({ hints, time, setStrikes }) => {

    let makeHint = (hint, setStrikes) => {
        let [strike, setStrike] = useState(false)
        setStrikes.push(setStrike)

        useEffect(() => {
            // run something every time name changes
            recordHint(time, hint, strike)
        }, [strike]);

        if (strike) {
            return (<li className="hint strikedText" key={hint} onClick={() => { setStrike(!strike) }}>{hint}</li>);
        } else {
            return (<li className="hint" key={hint} onClick={() => { setStrike(!strike) }}>{hint}</li>);
        }
    }


    let hintsList = hints.map((hint) => makeHint(hint, setStrikes))
    hintsList = <ol>{hintsList}</ol>
    return (
        <div>
            <h1>Hints</h1>
            <p className="smalltext"> (click to cross out/uncross) </p>
            {hintsList}
        </div>);
}