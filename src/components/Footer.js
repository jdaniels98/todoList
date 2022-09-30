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
            "Clear List": removes all items from TO-DO list
            <br></br>
            On Click: strike through an item
            <br></br>
            On Double Click: remove a specific item from TO-DO list
            <br></br>
            "Edit": allows for editing the text of that entry
            <br></br>
            "Save": applies any changes made via editing
            <br></br>
            "Complete": moves that entry from the TO-DO list to the COMPLETE list</p>
        </div>
            <p id="footertext2">
            <i id="footertitle">COMPLETE</i>
            <br></br>
            <br></br>
            On Click: remove a specific item from COMPLETE list
            <br></br>
            "Clear List": removes all items from COMPLETE list
            </p>
        </footer>
    )
}

export default Footer