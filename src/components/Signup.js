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
        <div className="App-header" style={{backgroundImage: `url("assets/mainbr.png")`, backgroundSize:"cover"}}>
            <Navbar user={user}/>
            <br/>

            <div style={{alignItems:'center', justifyContent:'center', display:'flex', flex: '1',display:'flex', flexDirection:'column'}}>
            <h2>Sign Up</h2>
            <hr/>            
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
                <input type="password" className="form-control" required
                onChange={(e) => setPassword(e.target.value)} value={password}/>
                <br/><br/>
                <button type="submit"><h1>REGISTER</h1></button>
            
                <br/><br/>
                {/* <h4>{name}</h4>  
                <h4>{password}</h4>
                <h4>{email}</h4> */}

                
        

            </form>
            <h4>Already have an account? <Link to="/login" style={{textDecoration:'none', color:'#ffde59'}}>Login</Link></h4>
            </div>
            {error && <div className="error-msg">{error}</div>}
            <br />
           

        </div>
  )
}

