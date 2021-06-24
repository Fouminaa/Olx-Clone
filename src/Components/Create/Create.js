import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {Firebasecontext , Authcontext } from '../../store/Firebasecontext'
import { useHistory } from 'react-router-dom';
const Create = () => {
  const history= useHistory()
  const {firebase}=useContext(Firebasecontext)
  const {user}=useContext(Authcontext) 
  const[name,setname]=useState();
  const[categ,setcateg]=useState();
  const[price,setprice]=useState();
  const[image,setimage]=useState();
  const date=new Date();
  
  const handlesubmit =(e)=>{
    e.preventDefault()
    console.log(image)
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('product').add({
          name,
          categ,
          price,
          url,
          userid:user.uid,
          createdAt:date.toDateString()
        })
         history.push('/Home')
      })
     
    })
   
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e)=>setcateg(e.target.value)}
              value={categ}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" 
            value={price}
            onChange={(e)=>setprice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image? URL.createObjectURL(image):'null'}></img>
          <form>
            <br />
            <input type="file"
             onChange={(e)=>setimage(e.target.files[0])}/>
            <br />
            <button onClick={handlesubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
