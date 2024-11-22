import React, {useState} from 'react';
import '../App.css';
import Navbar from '../Navbar';
import {auth, db} from '../config/Config';

const Signup = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const Signup = (e) => {
        e.preventDefault();
        // console.log("form submitted");
        // console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
           db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Password: password,
                Email: email,
           }).then(()=>{
            setName('');
            setEmail('');
            setPassword('');
            setError('');
            props.histoy.push('/login')
           }); 
        })
    }

    return (
        <div className="App-header">
            <Navbar />
            <br/>
            <h2>Sign Up</h2>
            <hr/>
            <div>
            <form autoComplete="off" className="form-group">

                <label htmlFor="Name" onSubmit={Signup}>Name</label>
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
                <br/>
                <button type="submit">REGISTER</button>
            
                <br/><br/>
                <h4>{name}</h4>  
                <h4>{password}</h4>
                <h4>{email}</h4>

                
        

            </form>
            </div>
            {error && <div>{error}</div>}
        </div>
  )
}

export default Signup
