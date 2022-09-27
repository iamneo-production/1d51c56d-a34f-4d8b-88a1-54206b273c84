import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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
            <h3>New User?{' '}
                <Link to={'/SignupScreen'}>
                    Register
                </Link>
            </h3>

        </div>
    )
}
export default LoginScreen;