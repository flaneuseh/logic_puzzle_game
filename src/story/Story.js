import ScrollToBottom, { useScrollToBottom } from 'react-scroll-to-bottom';
import "./style.css";


export default Story = ({ paragraphs, choices, makeChoice }) => {

    const scrollToBottom = useScrollToBottom();


    return <ScrollToBottom className="storyBlock" >
        <div className="storyText">

            {paragraphs.map((paragraph, idx) => <p className="text" dangerouslySetInnerHTML={{ __html: paragraph }} key={idx}></p>)}
            {choices.map(choice => <li className="choice" key={choice.index} onClick={() => { makeChoice(choice.index); scrollToBottom() }} dangerouslySetInnerHTML={{ __html: choice.text }}>
            </li>)}
        </div>
    </ScrollToBottom>
}