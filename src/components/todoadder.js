import React, { Component } from 'react'
import Todo from './todo';
class Todoadder extends Component {
    constructor(){
        super();
        this.state={
            items:[],
            text:""
        };
    }
    onChange=(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    addItem=(e)=>{
        e.preventDefault();
        if(this.state.text.length===0){
            return;
        }
        const newitem={
            text: this.state.text,
            id: Date.now()
        }
        this.setState((prev)=>({
            items:prev.items.concat(newitem),
            text:""
        }))
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} value={this.state.text}></input>
                <button onClick={this.addItem} type="submit">add</button>
                <Todo items={this.state.items}/>
            </div>
        )
    }
}
export default Todoadder