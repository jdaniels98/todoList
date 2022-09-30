import { useState } from 'react'

const NoteEdit = () => {
    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [input, setInput] = useState("")
    const [edit, setEdit] = useState(false);
    const [selected, setSelected] = useState("");
    const [newInput, setNewInput] = useState("");
    
    const crossOutItem = (event) => {
        if(event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration')
            event.target.style.setProperty('color', 'white')
        } else {
            event.target.style.setProperty('text-decoration', 'line-through')
            event.target.style.setProperty('color', 'yellow')
        }
    }

    const editItem = (index) => {
        if (!edit) {
            setEdit(true)
            setSelected(list[index])
        } else {
            setEdit(false)
            if (newInput !== "") {
                const temp = [...list]
                temp[index] = newInput
                setList(temp)
            }
        }
        setNewInput("")
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
                <h2>TO-DO</h2>
                <form onSubmit={addItem}>
                    <input
                    id="inputtoList"
                    type="text"
                    placeholder="Enter your notes here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required/>
                    <button id="addbtn" onClick={validateInput}>ADD ITEM</button>
                    <button id="clrbtn" onClick={() => deleteArray()}>CLEAR LIST</button>
                </form>
                {list.map((item, index) => {
                return (
                <p 
                key={item}>
                    {edit && selected === item ? (
                        <input
                        type="text"
                        defaultValue={item}
                        onChange={(e) => setNewInput(e.target.value)}
                        />
                    ) : (
                        <i 
                        onClick={crossOutItem}
                        onDoubleClick={() => deleteItem(index)}
                        >
                            • {item}
                        </i>
                    )}

                    <div>
                        <button id="removeButton" onClick={() => editItem(index)}>
                            {edit ? "SAVE" : "EDIT"}
                        </button>
                        <button id="completeButton" onClick={() => completeItem(index)}>COMPLETE</button>
                    </div>
                </p>
                )
            })}
            </div>

            <div id="donelist">
                <h2>COMPLETE <button id="doneclearlist" onClick={() => deleteArray2()}>CLEAR LIST</button></h2>
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