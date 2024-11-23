import React, { useState } from 'react';
import '../App.css';
import { Navbar } from '../Navbar';
import {auth} from '../config/Config';
import { Link, useNavigate } from 'react-router-dom';


export const Login = ({ user }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

////Standard Firebase Login Authentication
    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setError('');
            navigate('/');
           }).catch(err=>setError(err.message)); 
        }


    return (
        <div className="App-header">
            <Navbar user={user}/>
            <br/>
            <h2>Log In</h2>
            <hr/>
            <div>
            <form autoComplete="off" className="form-group" onSubmit={Login}>

                <label htmlFor="Name" >Email</label>
                <br/>
                <input type="text" className="form-control" required
                onChange={(e) => setEmail(e.target.value)} value={email}/>
                <br/>

                <label htmlFor="Password">Password</label>
                <br/>
                <input type="password" className="form-control" required
                onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit">LOGIN</button>
            
                <br/><br/>
                <h4>{email}</h4>  
                <h4>{password}</h4>

            </form>
            </div>
            {error && <div className="error-msg">{error}</div>}
            <br />
            <span>Don't have an account? <Link to="/login">Register</Link></span>

        </div>
  )
}


