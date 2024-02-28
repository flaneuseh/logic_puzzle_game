import { useState } from "react"

const states = ["*" , "O", "X", "!", "?"]

let toggleState = (s, setState, select) => {
  
    setState(select)
  

}

export default Cell = ({state, setState, mousedown = false, topText = "", leftText = "", select = "*"}) => {

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
                    
                    
                    <div className="cell" onMouseDown={() => {toggleState(state, setState, select)}}  onMouseEnter={() => {if(mousedown) {toggleState(state, setState, select)}}}> 
                   
                        <span className={className}> {text}</span> 
                    
                    </div>
                </div>
                </div> 
              
            
            )}

    else{
        return( <div className="cell" onMouseDown={() => {toggleState(state, setState, select)}} onMouseEnter={() => {if(mousedown) {toggleState(state, setState, select)}}}> 
           
                <span className={className}> {text}</span> 
     
     </div>);
    }
}