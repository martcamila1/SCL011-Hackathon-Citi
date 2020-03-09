// // Registro de app
import React, { useState } from 'react'
import {auth} from '../firebase-config/firebaseInit'



const Registry = ()=>{
  const[email , setEmail]=useState('');
  const[password , setPassword ]=useState('');

  let sendFirebase =() =>{
    auth.createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
    });  
  // console.log(email);
  // console.log(password)
  }
  return(
    <div>
      <input type="email" placeholder="Ingresa tu correo" onChange={(event)=>setEmail(event.target.value)}/>
      <input type="password"placeholder="Ingresa tu Pin" onChange={(event)=>setPassword(event.target.value)}/>
      <button onClick={sendFirebase()}>Enviar</button>
    </div>
  )
}

export default Registry;


