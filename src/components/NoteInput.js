import { useState } from 'react'

const NoteEdit = () => {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
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
    const deleteItem2 = (index) => {
        const temp2 = [...list2]
        temp2.splice(index, 1)
        setList2(temp2)
    }

    const deleteArray = () => {
        setList([])
    }
    const deleteArray2 = () => {
        setList2([])
    }

    const validateInput = () => {
        if(input.trim().length !== 0) {
            addItem()
        } else {
            return
        }
    }

    const completeItem = (index) => {
        const temp = [...list];
        const removedItem = temp.splice(index, 1)
        setList(temp);
        const temp2 = [...list2];
        temp2.push(removedItem);
        setList2(temp2)   
    }

    const addItem = (e) => {
        e.preventDefault();
        const temp = [...list];
        temp.push(input);
        setList(temp);
        setInput("");
    }

    return (
        <div id="container">

            <div id="todolist">
                <h2>TO-DO LIST</h2>
                <form onSubmit={addItem}>
                    <input
                    id="inputtoList"
                    type="text"
                    placeholder="Enter your notes here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required/>
                    <button id="addbtn" onClick={validateInput}>ADD</button>
                    <button id="clrbtn" onClick={() => deleteArray()}>CLEAR</button>
                </form>
                {list.map((item, index) => {
                return (
                <p 
                key={item}>
                    <i 
                    onClick={crossOutItem}>
                        • {item}
                    </i>
                    <div>
                        <button id="completeButton" onClick={() => completeItem(index)}>COMPLETE</button>
                        <button id="removeButton" onClick={() => deleteItem(index)}>REMOVE</button>
                    </div>
                </p>
                )
            })}
            </div>

            <div id="donelist">
                <h2>COMPLETE <button id="doneclearlist" onClick={() => deleteArray2()}>CLEAR</button></h2>
                {list2.map((item, index) => {
                    return (
                            <p key={item} onDoubleClick={() => deleteItem2(index)}>• {item}</p>
                    )
                })}
            </div>

        </div>
    )
}

export default NoteEdit