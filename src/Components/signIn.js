//login de app
import React, { useState } from 'react'
import {auth} from '../firebase-config/firebaseInit'
import {Link} from 'react-router-dom'

const SignIn = ()=>{
  const[email , setEmail]=useState('');
  const[password , setPassword ]=useState('');

  let sendFirebase =() =>{
    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
      alert("chaolin")
    })
    
    .catch(function(error) {
     
      let errorCode = error.code;
      console.log("primer error " + errorCode);
      let errorMessage = error.message;
      console.log("segundo error " + errorMessage);
      
    });
  }
  return(
    <div>
      <input className="inputSign" type="email" placeholder="Ingresa tu correo" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputSign"type="password"placeholder="Pin" onChange={(event)=>setPassword(event.target.value)}/>
      <Link to="/Feed"><button onClick={sendFirebase}>Ingresar</button></Link>
    </div>
  )
}

export default SignIn;