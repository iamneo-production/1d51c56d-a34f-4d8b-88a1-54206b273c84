import React,{useState} from 'react';
import "../CSS/SignupScreen.css";
import { Link } from 'react-router-dom';

const SignupScreen = ()=>{
    const[username,setUname]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirm,setConfirm]=useState('')
    return (<div id="main">
        <div id="header"></div>
        <h1>Sign Up</h1>
        <form>
        <input type="text" value={username} placeholder="Enter Username" onChange={(e)=> setUname(e.target.value)}/>
            <br/>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <input type="password" value={confirm} placeholder="Confirm Password" onChange={(e)=>setConfirm(e.target.value)}/>
            <br/>
            <select>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>
            </select>
            <br/>
            <input type="submit"/>
        </form>
        <h3>Already a User?{' '}
            <Link to={'/LoginScreen'}>
             Login
            </Link>
          </h3>
    </div>
    )
}
export default SignupScreen