import { Story as inkStory } from "inkjs";
import { useState, useEffect } from "react";
import Story from "./story/Story.js";
import trainStoryContent from "./story/train/train.json";
export const trainInk = new inkStory(trainStoryContent);

import ballroomStoryContent from "./story/ballroom/ballroom.json";
export const ballroomInk = new inkStory(ballroomStoryContent);

import chiliStoryContent from "./story/chili/chili.json";
export const chiliInk = new inkStory(chiliStoryContent);


export default StoryManager = ({storyName, knots, setKnots}) => {
    let ink = null; 

    if( storyName == "train"){
        ink = trainInk 
    }else if (storyName == "chili"){
        ink = chiliInk
    }
    
    else{
        ink = ballroomInk
    }

    useEffect(()=>{
        console.log(knots)
        if(knots.length >= 1){
            let knot = knots.pop()
            jumpTo(knot)
            //setKnots([...knots])
        }
    }, [knots])

    function jumpTo(knot){
        console.log("Jumping to:" + knot)
        inkStory.ChoosePathString(knot); 
        continueStory(); 
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
