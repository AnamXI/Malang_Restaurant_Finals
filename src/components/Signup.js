import React, { useState } from 'react';
import '../App.css';
import { Navbar } from '../Navbar';
import {auth, db} from '../config/Config';
import { Link, useNavigate } from 'react-router-dom';

export const Signup = ({ user }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

////Standard Firebase Register Authentication
    const Signup = (e) => {
        e.preventDefault();
        // NOTE: EMAIL ENNUMERATION PROTECTION HAS BEEN DISABLED MANUALLY
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
           db.collection('RegisteredUsers').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
           }).then(()=>{
            setName('');
            setEmail('');
            setPassword('');
            setError('');
            navigate('/')
           }).catch(err=>setError(err.message)); 
        }).catch(err=>setError(err.message));
    }

    return (
        <div className="App-header">
            <Navbar user={user}/>
            <br/>
            <h2>Sign Up</h2>
            <hr/>
            <div>
            <form autoComplete="off" className="form-group" onSubmit={Signup}>

                <label htmlFor="Name" >Name</label>
                <br/>
                <input type="text" className="form-control" required
                onChange={(e) => setName(e.target.value)} value={name}/>
                <br/>

                <label htmlFor="Email">Email</label>
                <br/>
                <input type="text" className="form-control" required
                onChange={(e) => setEmail(e.target.value)} value={email}/>
                <br/>

                <label htmlFor="Password">Password</label>
                <br/>
                <input type="text" className="form-control" required
                onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/>
                <button type="submit">REGISTER</button>
            
                <br/><br/>
                <h4>{name}</h4>  
                <h4>{password}</h4>
                <h4>{email}</h4>

                
        

            </form>
            </div>
            {error && <div className="error-msg">{error}</div>}
            <br />
            <span>Already have an account? <Link to="/login">Login</Link></span>

        </div>
  )
}

