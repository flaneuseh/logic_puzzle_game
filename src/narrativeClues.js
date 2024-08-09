import axios from 'axios';  
import {useEffect, useState } from 'react';
import "./narrative.css"


let file = "public/narrativePuzzles/trainNarrative.txt" 


ClueViewer = ({clues}) => {
    [selectedClue, selectClue] = useState(0)

    let buttons = clues.map((ele, i) => 
        <button className={i == selectedClue? "selected_n": "unselected_n"} key={ele} onClick={() => selectClue(i)}>
            
           {i == 0? "Story" : "Clue" + i}
            
            </button>)
    
   
  

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
            //let story = " <p>Your 3-month long expedition to the city of Watertown has finally paid off, your research has led to a new medicinal herb that is bound to lead to academic and financial success. All you need to do is travel back to Riverside, to deliver the news to your PhD advisor. With your discovery tucked safely in your briefcase, you take a late night journey on the Wild Rose Train. After a well-deserved night of rest, you wake up to find your briefcase, along with your groundbreaking discoveries, missing! </p> <p>Frantic, you tell the conductor Jim Gallagher. He conducts a thorough search of the train, but unfortunately the briefcase is not to be found. One of the other passengers must have taken it from your room and departed with it early this morning. Jim informs you that there were four other passengers on this train, all of whom got on before you and have already departed: Sir Ethan Owen, Ms. Madeleine Baker, Mr. George Herbert, and Dr. Ava Finch. Each was located in a different car of the train, and departed from a different station. Unfortunately the record of where each passenger’s room was and where they left the train is also missing. If you can figure out where each passenger was located, and where they got off you will be one step closer to retrieving your precious briefcase. </p>"
            //clues.unshift(story)

            setContent(<ClueViewer clues={clues}/> )
        }) 
    }, [] )



    return content 
}