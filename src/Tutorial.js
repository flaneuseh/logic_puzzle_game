import { useEffect, useState } from "react"
import { setTutorialInfo } from "./Firestore/sendData";

export default Tutorial = ({ imageFolder, numSlides, canSkip, startGame, modes, genres, isProlific }) => {
    let [idx, setIdx] = useState(1);
    let [proceed, setProceed] = useState("");
    let [time, setTime] = useState(null); 

    console.log(modes)
    console.log(genres)

    useEffect(() => {setTime(new Date())}, []);

    let sendInfo = () => {
        setTutorialInfo(new Date() - time, idx,genres, modes)
    }

    let increase = () => {
        if (idx < numSlides) {
            setIdx(idx + 1);
        }
        if(idx + 1 == canSkip ){
            setProceed(<button className="startGame" onClick={() => {sendInfo(); startGame()}}>Start game</button>)
        }

    }

    let decrease = () => {
        if (idx > 1) {
            setIdx(idx - 1);
        }
    }
    let file_name = idx 

    if (idx == 1){
        file_name = isProlific? idx + "-a" : idx + "-b"
    }
    return (<div className="tutorial">
        <div className="slide">
            <img src={imageFolder + "/" + file_name+ ".png"} />
        </div>

        <button className="backButton" onClick={decrease} disabled={idx <= 1}>Back</button>
        <button className="nextButton" onClick={increase} disabled={idx >= numSlides}>Next</button>
        <div>
            {proceed}
        </div>


    </div>)
}