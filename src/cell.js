
const states = ["*", "O", "X", "!", "?"]

let toggleState = (s, setState, select) => {

    setState(select)


}

export default Cell = ({ state, setState, mousedown = false, topText = "", leftText = "", select = "*" }) => {

    let className = "";
    let text = ""

    if (state == "X") {
        className = "notlinked"
        text = "X"
    } else if (state == "O") {
        className = "linked"
        text = "O"
    }
    else if (state == "!") {
        className = "linkedUnsure"
        text = "O"
    } else if (state == "?") {
        className = "notlinkedUnsure"
        text = "X"
    }

    return (<div className="cell" onMouseDown={() => { toggleState(state, setState, select) }} onMouseEnter={() => { if (mousedown) { toggleState(state, setState, select) } }}>

        <span className={className}> {text}</span>

    </div>);

}