import React,{useState} from 'react'
import Todocomp from './Todocomp'
function Todo() {
    const [items,setItems]=useState([]);
    const [text,setText]=useState("");
    const clickHandler=(e)=>{
        e.preventDefault();
        const newitem={
            text,
            id:Date.now()
        };
        setItems([...items,newitem]);
        setText("")
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="enter text"/>
            <button onClick={clickHandler} type="submit">add</button>
            <Todocomp items={items}/>
        </div>
    )
}

export default Todo
