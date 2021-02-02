import React from 'react'

function Inputmap({array}) {
    return (
        <React.Fragment>
            {array.map((e)=>(
                <div id={e.id}>{e.element}</div>
            ))}
        </React.Fragment>
    )
}
export default Inputmap