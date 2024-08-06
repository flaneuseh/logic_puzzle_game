import { Story as inkStory } from "inkjs";
import { useState } from "react";
import Story from "./story/Story.js";
import trainStoryContent from "./story/train/train.json";
export const trainInk = new inkStory(trainStoryContent);

import ballroomStoryContent from "./story/ballroom/ballroom.json";
export const ballroomInk = new inkStory(ballroomStoryContent);

export default StoryManager = ({storyName}) => {
    let ink = null; 

    if( storyName == "train"){
        ink = trainInk 
    }else{
        ink = ballroomInk
    }

    let [paragraphs, setParagraphs] = useState([]);
    let [choices, setChoices] = useState([]);
    function makeChoice(idx) {
        ink.ChooseChoiceIndex(idx);
        continueStory();
    }

    function continueStory() {
        if (ink.canContinue){
            paragraphs.push('<hr color="#776274"/>')
        }
        
        while (ink.canContinue) {
            paragraphs.push(ink.Continue());
            setParagraphs(paragraphs)
            setChoices(ink.currentChoices)
        }
    }

    continueStory();
    return <Story paragraphs={paragraphs} choices={choices} makeChoice={makeChoice} />
}
