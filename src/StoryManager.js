import { Story as inkStory } from "inkjs";
import { useState } from "react";
import Story from "./story/Story.js";
import storyContent from "./story/ballroom/ballroom.json";
export const ink = new inkStory(storyContent);

export default StoryManager = () => {
    let [paragraphs, setParagraphs] = useState([]);
    let [choices, setChoices] = useState([]);
    function makeChoice(idx) {
        ink.ChooseChoiceIndex(idx);
        continueStory();
    }

    function continueStory() {
        while (ink.canContinue) {
            paragraphs.push(ink.Continue());
            setParagraphs(paragraphs)
            setChoices(ink.currentChoices)
        }
    }

    continueStory();
    return <Story paragraphs={paragraphs} choices={choices} makeChoice={makeChoice} />
}
