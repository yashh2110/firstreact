import React,{useReducer} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/Styles';
import { Button, Container, Typography } from '@material-ui/core';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const initial={
    stage:1,
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    city:"",
    bio:"",
}
const reduce =(state,{key,data})=>{
    switch(key){
        case "firstname":
            return({...state,firstname:data})
        case "lastname":
            return({...state,lastname:data})
        case "email":
            return({...state,email:data})
        case "phone":
            return({...state,phone:data})
        case "city":
            return({...state,city:data})
        case "bio":
            return({...state,bio:data})
        case "stage":
            return({...state,stage:data})
    }
}
const useStyles = makeStyles(theme=>({
    root:{
        '& > *': {
        margin:theme.spacing(2),
        display:"flex",
        flexGrow:"vertical",
        width:"20em",
        marginLeft:"auto",
        marginRight:"auto",
    },
    menuBtn:{
        marginRight:theme.spacing(2)
    }
}
}))
function Reduceform() {
    const [item,dispatch] = useReducer(reduce,initial);
    const classes= useStyles();
    return (
        <div>
                <AppBar color="primary" >
                    <Toolbar >
                    <IconButton edge="start" color="inherit" className={classes.menuBtn} aria-label="menu">
                         <MenuIcon />
                    </IconButton>
                    <Typography varient="h6">
                        Sign up
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                {item.stage===1 ?(
                    <Container className={classes.root}>
                    <TextField type="text" label="First name" placeholder="Enter your name" value={item.firstname} onChange={(e)=>dispatch({key:"firstname",data:e.target.value})} color="primary" variant="outlined" />

                    <TextField type="text" label="Last name"value={item.lastname} onChange={(e)=>dispatch({key:"lastname",data:e.target.value})} variant="outlined" />

                    <TextField type="email" label="Email" value={item.email} onChange={(e)=>dispatch({key:"email",data:e.target.value})} variant="outlined" />
                    
                    <div style={{display:"flex",justifyContent:"center"}} onClick={(e)=>dispatch({key:"stage",data:item.stage+1})} ><Button variant="outlined" color="primary">Next</Button></div>
                    </Container>

                    ) : null}
                {item.stage===2 ? (
                    <Container className={classes.root}>

                        <TextField type="number" label="Phone" value={item.phone} onChange={(e)=>dispatch({key:"phone",data:e.target.value})}  variant="outlined" />

                        <TextField type="text" label="City" value={item.city} onChange={(e)=>dispatch({key:"city",data:e.target.value})}variant="outlined" />

                        <TextField type="text" label="Bio" value={item.bio} onChange={(e)=>dispatch({key:"bio",data:e.target.value})}variant="outlined" />

                        <div style={{display:"flex",justifyContent:"center"}} onClick={(e)=>dispatch({key:"stage",data:item.stage-1})} ><Button variant="outlined" color="primary">back</Button></div>
                    
                    </Container>

                ) : null}


        </div>
    )
}

export default Reduceform
