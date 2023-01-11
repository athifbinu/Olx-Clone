import React, { Fragment } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState, useContext } from 'react';
import {FirebaseContext,AuthContext} from '../../store/Context'



const Create = () => {
       const {firebase}=useContext(FirebaseContext)
       const {user}=useContext(AuthContext)
       const [name,setName]=useState('')
       const [cateory,setCategory]=useState('');
       const [price,setPrice]=useState('');
       const [image,setImage]=useState('')
       const handleSubmit=()=>{
            firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
                 console.log(ref)
              ref.getDowloadURL().then((url)=>{
                console.log(url)
              })
            })
       }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={cateory}
              onChange={(e)=>{setCategory(e.target.value)}}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price}
              onChange={(e)=>setPrice(e.target.value)}/>
            
            <br />
        
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):''}></img>
        
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
