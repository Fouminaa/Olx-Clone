import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Firebasecontext } from '../../store/Firebasecontext';
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const { firebase } = useContext(Firebasecontext)
  const history=useHistory()
  const handlelogin=(e)=>{
    e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    history.push('/Home')
  }).catch((error)=>{
    alert(error.message)
  })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            id="fname"
            onChange={(e)=>setemail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            name="password"
            onChange={(e)=>setpassword(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button >Login</button>
        </form>
        <a onClick={()=>history.push('/Signup')} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
