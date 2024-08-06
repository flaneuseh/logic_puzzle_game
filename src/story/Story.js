import "./style.css"
import { useEffect, useRef } from "react"
import ScrollToBottom from 'react-scroll-to-bottom';

export default Story = ({ paragraphs, choices, makeChoice }) => {

    ref = useRef(null); 
    let scrollToBottom = () =>{
        console.log("Scrolling to bottom")
        console.log(ref)
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }


    return <ScrollToBottom className="storyBlock" >
 
            
    
        {paragraphs.map((paragraph, idx) => <p className="text" dangerouslySetInnerHTML={{ __html: paragraph}} key={idx}></p>)}
        {choices.map(choice => <li className="choice" key={choice.index} onClick={() => {makeChoice(choice.index); scrollToBottom()}} dangerouslySetInnerHTML={{ __html: choice.text}}>
        </li>)}
        
        </ScrollToBottom>
}

