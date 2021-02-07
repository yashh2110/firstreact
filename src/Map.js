import React from 'react'

function Map({post}) {
    return (
        <div>
           {post.map(e=>(
               <div key={e.id}>{e.title}</div>
           ))} 
        </div>
    )
}

export default Map
