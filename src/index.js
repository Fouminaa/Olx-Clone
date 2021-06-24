import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Firebasecontext} from './store/Firebasecontext'
import firebase from './firebase/Config'
import Context from './store/Firebasecontext'

ReactDOM.render(

 <Firebasecontext.Provider value={{firebase}}>
     <Context>
        <App />
    </Context>
</Firebasecontext.Provider> 

,document.getElementById('root')
);
