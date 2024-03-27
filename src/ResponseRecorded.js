export default ResponseRecorded = ({goToNextPuzzle, finish, morePuzzles}) => {
    if(morePuzzles()){
        return (<div className="recorded">
            <h1>Thank you!</h1>
            <h2>Your response has been recorded.</h2>
            <button onClick={goToNextPuzzle}>Play another puzzle</button>
            <button onClick={finish}>Finish</button>
            
            </div>)
    }else{
        return (<div className="recorded">
            <h1>Thank you!</h1>
            <h2>Your response has been recorded.</h2>
            <p>There are no more puzzles, you may close this window.</p>
            
            </div>)
    }
   
}