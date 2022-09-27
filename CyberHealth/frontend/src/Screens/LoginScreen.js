import React,{useState} from 'react';
import "../CSS/LoginScreen.css"
const LoginScreen=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    return(
        <div id="main">
            <div id="header"></div>
            <h1>Login</h1>
            <form>
                <input type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <input type="password" value={password} placeholder="Enter Password" onChnage={(e)=>setPassword(e.target.value)}/>
                <br/>
                <input type="submit"/>
            </form>
            <h3>New User? Sign Up</h3>

        </div>
    )
}
export default LoginScreen;