import Popup from 'reactjs-popup';



export default FinishButtons = ({ giveUp, isCorrect, clearBoard, finish }) => {

    let CorrectPop = ({ isCorrect, finish, clearBoard, close }) => {
        let text = ""
        let retry = ""
        if (isCorrect()) {
            text = "You are correct"
        } else {
            text = "You are not correct"

            retry = (<button onClick={() => { clearBoard(); close() }}>
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
                            <CorrectPop isCorrect={isCorrect} clearBoard={clearBoard} finish={finish} close={() => close()} />
                        </div>
                    </div>
                )
            }
        </Popup>
        <button onClick={clearBoard}>Restart</button>

    </div>)
}