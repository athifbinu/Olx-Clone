import React, { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import {useHistory} from 'react-router-dom'
import './Signup.css';

export default function Signup() {
    const history=useHistory()
     const [username,setUsername]= useState('') 
     const [email,setEmail]=useState('');
     const [pone,setPone]=useState('')
     const [password,setPassword]=useState('')
     const {firebase} =useContext(FirebaseContext)
  
    

     const handleSubmit=(e)=> {
      e.preventDefault();
         firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
              firebase.firestore().collection('users').add({ 
                id:result.user.uid,
                username:username,
                pone:pone,

              }).then(()=>{
                    history.push('/login')
              })

            })

         })
     }

  return (
    <div>
      <div className="signupParentDiv">
      <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}    //during change in a value
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={pone}
            onChange={(e)=>setPone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
          
        </form>
        <a >Login</a>
      </div>
    </div>
  );
}
