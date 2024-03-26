import { useEffect, useState } from "react"
import { setTutorialInfo } from "./Firestore/sendData";

export default Tutorial = ({imageFolder, numSlides, canSkip, startGame}) => {
    let [idx, setIdx] = useState(1); 
    let [proceed, setProceed] = useState("");
    let [time, setTime] = useState(null); 


    useEffect(() => {setTime(new Date())}, []);

    let sendInfo = () => {
        setTutorialInfo(new Date() - time, idx)
    }

    let increase = () =>{
        if(idx < numSlides){
            setIdx(idx + 1);
        }
        if(idx + 1 == canSkip ){
            setProceed(<button className="startGame" onClick={() => {sendInfo(); startGame()}}>Start game</button>)
        }
        
    }

    let decrease = () =>{
        if(idx > 1){
            setIdx(idx - 1);
        }
    }
    return (<div className="tutorial">
        <div className="slide">
        <img  src = {imageFolder + "/" + idx +".png"}/>
        </div>
     
        <button className="backButton" onClick={decrease} disabled={idx <= 1}>Back</button>
        <button className="nextButton"  onClick={increase}  disabled={idx >= numSlides}>Next</button>
        <div>
        {proceed}
        </div>
       
        
    </div>)
}