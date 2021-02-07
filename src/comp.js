import axios from "axios";
import React,{useState,useEffect} from "react";
import Map from "./Map"
function Comp(){
    const [post,setPost]=useState([]);
    const [error,setError]=useState("");
    const [loader,setLoader]=useState(true);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            setLoader(false)
            setError("")
            setPost(response.data)
        })
        .catch(error=>{
            setLoader(false)
            setPost([])
            setError("somthing went wrong")
        })
        
    },[])
    return(
        <div>
            {loader ? "LOADING" : <Map post={post}/>}
            {error ? error :null}
        </div>
    )
}   
export default Comp