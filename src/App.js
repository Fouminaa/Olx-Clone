import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from'./Pages/Signup'
import Login from './Components/Login/Login';
import Create from './Components/Create/Create'
import Posts from './Components/Posts/Posts';
import View from './Components/View/View';
import Postcont, { Postcontext } from './store/Postcontext'
import {useEffect,useContext} from 'react'
import {Authcontext, Firebasecontext} from './store/Firebasecontext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setuser}=useContext(Authcontext)
  const {firebase}=useContext(Firebasecontext)
  console.log(useContext(Authcontext))
  useEffect(()=>{
   
        firebase.auth().onAuthStateChanged((user)=>{
          setuser(user)
          console.log(user)
        })
    
  },[])
  return (
    <div>
     <Postcont>
      <Router>
        <Route exact path='/Home'>
        <Home />
        </Route>
        <Route  path='/Signup'>
        <Signup/>
        </Route>
        <Route  path='/login'>
        <Login />
        </Route>
        <Route  path='/create'>
        <Create />
        </Route>
        <Route  path='/post'>
        <Posts/>
        </Route>
        <Route  path='/view'>
        <View/>
        </Route>
      
      
      </Router>
      </Postcont>
    </div>
  );
}

export default App;
