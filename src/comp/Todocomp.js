import React from 'react'

function Todocomp({items}) {
    return (
        <div>
            {items.map(item=>(
                <div key={item.id}>{item.text}</div>
            ))}
        </div>
    )
}

export default Todocomp
