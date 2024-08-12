import { Story as inkStory } from "inkjs";
import { forwardRef, useState, useImperativeHandle } from "react";
import Story from "./story/Story.js";
import trainStoryContent from "./story/train/train.json";
export const trainInk = new inkStory(trainStoryContent);

import ballroomStoryContent from "./story/ballroom/ballroom.json";
export const ballroomInk = new inkStory(ballroomStoryContent);

import chiliStoryContent from "./story/chili/chili.json";
export const chiliInk = new inkStory(chiliStoryContent);

export default StoryManager = forwardRef(({ storyName }, ref) => {
    let ink = null;

    if (storyName == "train") {
        ink = trainInk
    } else if (storyName == "chili") {
        ink = chiliInk
    }
    else {
        ink = ballroomInk
    }

    function jumpTo(knot) {
        if (knot != "") {
            console.log("Jumping to:" + knot)
            ink.ChoosePathString(knot);
            continueStory();
        }
    }

    useImperativeHandle(ref, () => ({
        jumpTo
    }));

    let [paragraphs, setParagraphs] = useState([]);
    let [choices, setChoices] = useState([]);
    function makeChoice(idx) {
        ink.ChooseChoiceIndex(idx);
        continueStory();
    }

    function continueStory() {
        if (ink.canContinue) {
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
})
