import { useState } from 'react'

const ConditionDemo = () => {
    const [list, setList] = useState(["red", "green"])
    const [input, setInput] = useState("")
    
    const clickHandler = () => {
        const temp = [...list]
        temp.push(input)
        setList(temp)
        setInput("")
    }

    const crossOutItem = (event) => {
        if(event.target.style.textDecoration) {
            event.target.style.removeProperty('text-decoration')
        } else {
            event.target.style.setProperty('text-decoration', 'line-through')
        }
    }

    const deleteItem = (index) => {
        const temp = [...list]
        temp.splice(index, 1)
        setList(temp)
    }
    const deleteItem2 = (event, index) => {
        const temp = [...list]
        if (event.style.textDecoration) {
            temp.splice(index, 1)
            setList(temp)
        } else {}
    }

    return (
        <div id="cdemo">
            <h1>Conditional Rendering Demo</h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={clickHandler}>Add to list</button>
            <button onClick={(index) => deleteItem2(index)}>Remove Complete</button>
            {list.map((item, index) => {
                return <p key={item} onClick={crossOutItem}>{item}</p>
            })}
        </div>
    )
}

export default ConditionDemo