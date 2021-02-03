import React,{ Component } from 'react';
 const Wrapper = OriginalWrapper =>{
    class Wrapper extends Component {
        constructor(props){
            super(props);
            this.state={
                count:0
            };
        }
        incrementCount=()=>{
            this.setState((prev)=>({
                count: prev.count+1
            }))
        }
        render() {
            const {count} =this.state;
            return <OriginalWrapper onMouseOver={this.incrementCount} name={count}/>
        }
    }
    return Wrapper;
}
export default Wrapper;