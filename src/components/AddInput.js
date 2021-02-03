import React, { Component } from 'react'
import Inputmap from './inputmap';
class AddInput extends Component {
    constructor() {
        super();
        this.state={
            array:[],
            element:<input type="text" placeholder="enter somting"></input>,
            count:0
        };
    }
    clickHandler=(e)=>{
        e.preventDefault();
        const vrbl= Array(5).fill({element:this.state.element,id:Date.now()});
            
        console.log(vrbl);
        this.setState((a)=>({
            array:a.array.concat(vrbl)
        }))
    }
    onchange=(e)=>{
        this.setState({
            count:e.target.value
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} type="submit">insert input</button>
                <Inputmap array={this.state.array}/>
                <input type="number" value={this.state.count} onChange={this.onchange} placeholder=""></input>
            </div>
        )
    }
}
export default AddInput
