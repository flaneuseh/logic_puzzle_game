import "./style.css"
import ScrollToBottom, { useScrollToBottom} from 'react-scroll-to-bottom';


export default Story = ({ paragraphs, choices, makeChoice }) => {

    const scrollToBottom = useScrollToBottom(); 
   

    return <ScrollToBottom className="storyBlock" >
 
            
    
        {paragraphs.map((paragraph, idx) => <p className="text" dangerouslySetInnerHTML={{ __html: paragraph}} key={idx}></p>)}
        {choices.map(choice => <li className="choice" key={choice.index} onClick={() => {makeChoice(choice.index); scrollToBottom()}} dangerouslySetInnerHTML={{ __html: choice.text}}>
        </li>)}
        
        </ScrollToBottom>
}