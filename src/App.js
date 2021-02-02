
import React, { Component } from 'react'
import Todoadder from './components/todoadder'
import AddInput from './components/AddInput';
class App extends Component {
   render() {
       return (
           <React.Fragment>
               <Todoadder />
               <AddInput />
           </React.Fragment>
       )
   }
}
export default App;