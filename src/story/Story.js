export default Story = ({ paragraphs, choices, makeChoice }) => {
    return <div>
        {paragraphs.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
        {choices.map(choice => <li key={choice.index} onClick={() => makeChoice(choice.index)}>
            {choice.text}
        </li>)}
    </div>
}

