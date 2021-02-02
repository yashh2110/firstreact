import React, { Component } from 'react'
import Inputmap from './inputmap';
class AddInput extends Component {
    constructor() {
        super();
        this.state={
            array:[],
            element:<input type="text" placeholder="enter somting"></input>
        };
    }
    clickHandler=(e)=>{
        e.preventDefault();
        const vrbl={
            element:this.state.element,
            id:Date.now()
        }
        this.setState((a)=>({
            array:a.array.concat(vrbl)
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} type="submit">insert input</button>
                <Inputmap array={this.state.array}/>
            </div>
        )
    }
}
export default AddInput
