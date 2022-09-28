import { useState } from 'react'

const NoteEdit = () => {
    const [list, setList] = useState([])
    const [input, setInput] = useState("")
    const crossOutItem = (event) => {
        if(event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration')
            event.target.style.setProperty('color', 'white')
        } else {
            event.target.style.setProperty('text-decoration', 'line-through')
            event.target.style.setProperty('color', 'yellow')
        }
    }
    const deleteItem = (index) => {
        const temp = [...list]
        temp.splice(index, 1)
        setList(temp)
    }
    const deleteArray = () => {
        setList([])
    }
    const validateInput = () => {
        if(input.trim().length !== 0) {
            addItem()
        } else {
            return
        }
    }
    const addItem = (e) => {
        e.preventDefault();
        const temp = [...list];
        temp.push(input);
        setList(temp);
        setInput("");
      };
    return (
        <div id="cdemo">
            <div>
                <form onSubmit={addItem}>
                    <input id="inputtoList" type="text" placeholder="Enter your notes here..." value={input} onChange={(e) => setInput(e.target.value)} required/>
                    <button id="addbtn" onClick={validateInput}>ADD TO LIST</button>
                    <button onClick={() => deleteArray()}>CLEAR LIST</button>
                </form>
            </div>
            
            {list.map((item, index) => {
                return <p key={item} onClick={crossOutItem}>• {item} <button id ="removeButton" onClick={() => deleteItem(index)}>REMOVE</button></p>
            })}
        </div>
    )
}

export default NoteEdit