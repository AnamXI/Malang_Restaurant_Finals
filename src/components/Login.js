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
        <div className="App-header" style={{backgroundImage: `url("assets/mainbr.png")`, backgroundSize:"cover"}}>
            <Navbar user={user}/>
            <br/>
           
            <div style={{alignItems:'center', justifyContent:'center', display:'flex', flex: '1',display:'flex', flexDirection:'column'}}>
            <h2>Log In</h2>
            <hr/><br/>
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
                <br/><br/>
                <button type="submit"><h1>LOGIN</h1></button>
            
                <br/><br/>

                {/* <h4>{email}</h4>  
                <h4>{password}</h4> DEVTOOL FOR CHECKING*/}

            </form>
            <h4>Don't have an account? <Link to="/signup" style={{textDecoration:'none', color:'#ffde59'}}>Register</Link></h4>
            </div>
            {error && <div className="error-msg">{error}</div>}
            <br />
            

        </div>
  )
}


