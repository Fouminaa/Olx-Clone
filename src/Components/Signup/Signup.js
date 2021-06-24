import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { Firebasecontext } from '../../store/Firebasecontext'
// import firebase from '../../firebase/Config'


export default function Signup() {
  const history = useHistory()
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const { firebase } = useContext(Firebasecontext)

  const handlesubmit = (e) => {
    console.log(email, password)
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
      response.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: response.user.uid,
          username: username,
          phone: phone
        }).then(() => {
          
          history.push('/login')
        }).catch((error) =>
          console.log(error))
      })
      console.log(response )

    }).catch((error) =>
      console.log(error))
    console.log(firebase)
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            id="fname"
            onChange={(e) => setusername(e.target.value)}
            name="name"

          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            id="fname"
            name="email"

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
            name="phone"

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            name="password"

          />
          <br />
          <br />
          <button onClick={handlesubmit}>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
