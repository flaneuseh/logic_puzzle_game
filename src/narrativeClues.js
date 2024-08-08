import axios from 'axios';  
import {useEffect, useState } from 'react';
import "./narrative.css"


let file = "public/narrativePuzzles/trainNarrative.txt" 


ClueViewer = ({clues}) => {
    [selectedClue, selectClue] = useState(0)

    let buttons = clues.map((ele, i) => <button className={i == selectedClue? "selected_n": "unselected_n"} key={ele} onClick={() => selectClue(i)}>Clue {i + 1}</button>)

    return <div>
        <h1>Clues</h1>
        {buttons}
        <div  className='clueBlock' dangerouslySetInnerHTML={{__html: clues[selectedClue]}} ></div>
    </div>
}


export default NarrativeClues = ({clueFile}) => {
    [content, setContent] = useState(<div> Loading </div>)

    useEffect(() => {
        
        axios.get(clueFile).then(response => {
            let clues = response.data.split("//") 

            setContent(<ClueViewer clues={clues}/> )
        }) 
    }, [] )



    return content 
}