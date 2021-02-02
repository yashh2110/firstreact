import React from 'react';
let Todo= ({items})=>{
    return(
        <ul>

        {items.map((item)=>(
            <li id={item.id}>{item.text}</li>
        ))}
        </ul>
    )
}
export default Todo