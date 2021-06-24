import React from 'react';

import './View.css';
import { useEffect, useState, useContext } from 'react'
import { Postcontext } from '../../store/Postcontext';
import { Firebasecontext } from '../../store/Firebasecontext';
import { useHistory } from 'react-router-dom'
function View() {
  const [userdetails, setuserdetails] = useState()
  const { postdetails } = useContext(Postcontext)
  const { firebase } = useContext(Firebasecontext)
  const history = useHistory();



  useEffect(() => {
    if (postdetails) {
      let userid = postdetails.userid
      console.log(userid)
      firebase.firestore().collection('users').where('id', '==', userid).get().then((res) => {
        res.forEach(doc => {
          setuserdetails(doc.data())
          console.log(postdetails.url)
          console.log(userdetails)
        });
      })

    }
    else {
      history.push('/Home')
      
    }

  }, [])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails? postdetails.url:""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetails? postdetails.price:""} </p>
          <span>{postdetails? postdetails.name:""}</span>
          <p>{postdetails? postdetails.categ:''}</p>
          <span>{ postdetails? postdetails.date:''}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetails ? userdetails.username :""}</p>
          <p>{userdetails ? userdetails.phone :''}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
