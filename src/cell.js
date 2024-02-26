import { useState } from "react"

const states = ["*" , "O", "X"]

let toggleState = (s, setState) => {
    console.log("clicked");
    let i = states.indexOf(s);
    i = (i + 1) % states.length;
    setState(states[i]);
}

export default Cell = ({state, setState, topText = "", leftText = ""}) => {

    let className = ""; 
    let text = ""

    if (state == "X"){
        className = "notlinked"
        text = "X"
    }else if (state == "O"){
        className = "linked"
        text = "O"
    }

    let leftTextEle= <div></div>

    if(leftText.length > 1){
       leftTextEle = <div className="leftCell"><div className="leftEntityText">{leftText}</div></div>
    }

    let topTextEle = <div/>
    if(topText.length > 1){
        topTextEle = <div className="topEntityText">{topText}</div>
     }

    if (topText.length > 0 || leftText.length > 0){

            return (
                <div  className={"cellContainer"}>
                      {leftTextEle}
                     <div className={"innerCellContainer"}>
                    
                           {topTextEle}
                    
                    
                    <div className="cell" onClick={() => toggleState(state, setState)}> 
                   
                        <span className={className}> {text}</span> 
                    
                    </div>
                </div>
                </div> 
              
            
            )}

    else{
        return( <div className="cell" onClick={() => toggleState(state, setState)}> 
           
                <span className={className}> {text}</span> 
     
     </div>);
    }
}