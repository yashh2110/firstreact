import React from 'react';
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <div>
            <Link to="/">home  </Link>
            <Link to="/counter">counter  </Link>
            <Link to="/todo">  todo</Link>
        </div>
        
       
    )
}
export default Nav