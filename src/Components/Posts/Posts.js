import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { Firebasecontext } from '../../store/Firebasecontext';
import { useEffect,useContext,useState } from 'react';
import { Postcontext } from '../../store/Postcontext';
import { useHistory } from 'react-router-dom';



function Posts() {

const {setpostdetails} =useContext(Postcontext)
  const[products,setproducts]=useState([])
  const {firebase}=useContext(Firebasecontext);
  const history=useHistory()
  
  useEffect(()=>{
    firebase.firestore().collection('product').get().then((response)=>{
      const allpost=response.docs.map((productmap)=>{
        return{
          ...productmap.data(),
          id:productmap.id
        }
      })
      setproducts(allpost)
    })
  })


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
         {
           products.map(productmap=>{
             return(
             <div onClick={()=>{
               setpostdetails(productmap)
               history.push('/view')
             }}  className="card">
             <div className="favorite">
               <Heart></Heart>
             </div>
             <div className="image">
               <img src={productmap.url} alt="" />
             </div>
             <div className="content">
               <p className="rate">&#x20B9; {productmap.price}</p>
               <span className="kilometer">{productmap.categ}</span>
               <p className="name"> {productmap.name}</p>
             </div>
             <div className="date">
               <span>{productmap.date}</span>
             </div>
           </div>)
           })
         }
        
        
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
