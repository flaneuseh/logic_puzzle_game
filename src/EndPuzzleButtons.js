import Popup from 'reactjs-popup';



export default FinishButtons = ({ giveUp, isCorrect, clearPuzzle, finish }) => {

    let CorrectPop = ({ isCorrect, finish, clearPuzzle, close }) => {
        let text = ""
        let retry = ""
        if (isCorrect()) {
            text = "You are correct"
        } else {
            text = "You are not correct"

            retry = (<button onClick={() => { clearPuzzle(); close() }}>
                Retry
            </button>)
        }

        return (<div>{text}
            <div>
                {retry}
                <button onClick=
                    {() => { finish(); close() }}>
                    Finish Puzzle
                </button>


            </div>
        </div>)
    };

    return (<div>
        <button onClick={giveUp}>Give Up</button>
        <Popup trigger=
            {<button> Check Solution </button>}
            modal nested>
            {
                close => (
                    <div className='modal'>
                        <div className='content'>
                            <CorrectPop isCorrect={isCorrect} clearPuzzle={clearPuzzle} finish={finish} close={() => close()} />
                        </div>
                    </div>
                )
            }
        </Popup>
        <button onClick={clearPuzzle}>Restart</button>

    </div>)
}