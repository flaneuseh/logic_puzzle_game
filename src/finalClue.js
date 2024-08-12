import axios from 'axios';  
import {useEffect, useState } from 'react';
import "./narrative.css"


let file = "public/narrativePuzzles/trainNarrative.txt" 


FinalClueViewer = ({clue}) => {
    console.log(clue)

    return <div>
        <h1>Conclusion</h1>

        <div  className='clueBlock' dangerouslySetInnerHTML={{__html: clue}} ></div>
    </div>
}


export default FinalClue = ({clueFile}) => {
    [content, setContent] = useState(<div> Loading </div>)

    useEffect(() => {
        
        axios.get(clueFile).then(response => {
            let clue = response.data
       
            setContent(<FinalClueViewer clue={clue}/> )
        }) 
    }, [] )



    return content 
}