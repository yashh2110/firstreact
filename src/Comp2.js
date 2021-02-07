import axios from 'axios';
import React,{useReducer,useEffect} from 'react'
const initial={
    post:[],
    error:"",
    loader:true
}
const reducer = (state, action)=>{
    switch(action.type){
        case "FETCHED":
            return{
                loader:false,
                post: action.payload,
                error:""
            }
        case "ERROR":
            return{
                loader:false,
                post: [],
                error:"somthing went wrong"
            }
        default:
            return state
    }
}

function Comp2() {
    const [state,dispatch]=useReducer(reducer,initial);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                dispatch({type :"FETCHED",payload:response.data})
            })
            .catch(error=>{
                dispatch({type:"ERROR"})
            })
    },[])
    return (
        <div>
            {state.loader ? "LOADING" :state.post.map(e=>{
                return <li key={e.id}>{e.title}</li>
            })}
            {state.error ? state.error : null}
        </div>
    )
}

export default Comp2
