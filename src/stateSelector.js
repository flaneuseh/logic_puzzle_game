import Cell from "./cell";
import { useState } from "react";

const states = ["*" , "O", "X", "!", "?"]


let innerSelectorEle = (state) => {
    let className = ""; 
    let text = ""

    if (state == "X"){
        className = "notlinked"
        text = "X"
    }else if (state == "O"){
        className = "linked"
        text = "O"
    }
    else if (state == "!"){
        className = "linkedUnsure"
        text = "O"
    }   else if (state == "?"){
        className = "notlinkedUnsure"
        text = "X"
    }
    return(<span className={className}> {text}</span> )
}

export default Selector = ({selected, setSelect}) => {

    let select = (idx) => {
        newToggles = []
        for(let i = 0; i < toggles.length; i ++){
            let state = toggles[i].key
            if(i == idx){
                newToggles.push(<div className="selected" onClick={() => select(i)} key={state}>{innerSelectorEle(state)}</div>); 
                setSelect(state)
            }else{
                newToggles.push(<div className="unselected" onClick={() => select(i)} key={state}>{innerSelectorEle(state)}</div>); 
            }   
        }

        setToggles(newToggles);
    
    
    }

    let newToggles = states.map((state, idx) => {
        let className = state == selected? "selected" : "unselected"
        return(<div className={className} onClick={() => select(idx)} key = {state}>{innerSelectorEle(state)}</div>)
    });
    let [toggles, setToggles] = useState(newToggles);



    return (<div>{toggles}</div>);
}