import { useState } from "react";

export default ResponseRecorded = ({goToNextPuzzle, isProlific}) => {
    let [finish, setFinish] = useState(false)
    if(!finish){
        return (<div className="recorded">
            <h1>Thank you!</h1>
            <h2>You have completed the training puzzle. You now have the option of attempting our bonus puzzles.</h2>
            <p>If you found this primer particularly challenging or did not enjoy it, feel free to exit now. Otherwise you are welcome to attempt the other puzzles. {isProlific? "You will be bonus paid $2.50 for each additional puzzle you complete.": ""} </p>
            <button onClick={goToNextPuzzle}>Play bonus puzzles</button>
            <button onClick={() => {setFinish(true)}}>Finish</button>
            
            </div>)
    }else{
        return (<div className="recorded">


                    <div>Thank you for your time, you may close this window now</div>
            
            </div>)
    }
   
}