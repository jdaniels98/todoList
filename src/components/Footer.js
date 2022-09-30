const Footer = () => {
    return (
        <footer>
        <div id="ft1">
            <p id="footertext1">
            <i id="footertitle">TO-DO LIST</i>
            <br></br>
            <br></br>
            "Add Item" / Enter Key: add inputted text to list
            <br></br>
            "Clear List": removes all items from TO-DO LIST
            <br></br>
            On Click: strike through an item
            <br></br>
            On Double Click: remove a specific item from TO-DO LIST</p>
        </div>
            <p id="footertext2">
            <i id="footertitle">COMPLETE</i>
            <br></br>
            <br></br>
            On Click: remove a specific item from COMPLETE LIST
            <br></br>
            "Clear List": removes all items from COMPLETE LIST
            </p>
        </footer>
    )
}

export default Footer