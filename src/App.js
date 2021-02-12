import React from 'react';
import Nav from "./comp/nav"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from './comp/home';
import Counter from './comp/counter';
import Todo from './comp/todo';
import Reduceform from './comp/Reduceform';
function App(){
    return(<div>
        <Reduceform />
        {/* <Router>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/counter" component={Counter}></Route>
                <Route exact path="/todo" component={Todo}></Route>
            </Switch>
        </Router> */}
    </div>)
}
export default App