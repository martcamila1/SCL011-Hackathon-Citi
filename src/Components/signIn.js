//login de app
import React, { useState } from 'react'
import {auth} from '../firebase-config/firebaseInit'
import './signIn.css'
import {Link} from 'react-router-dom'

const SignIn = ()=>{
  const[email , setEmail]=useState('');
  const[password , setPassword ]=useState('');

  let sendFirebase =() =>{
    auth.signInWithEmailAndPassword(email, password)
    .then(function(){
      alert("chao")
    })
    
    .catch(function(error) {
     
      let errorCode = error.code;
      console.log("primer error " + errorCode);
      let errorMessage = error.message;
      console.log("segundo error " + errorMessage);
      
    });
  }
  return(
    <div className="containerSignIn">
      <div>
        <div className="iniSignIn">
          <div className="">
          <p className="SignIn">Iniciar sesión</p>
          <p className="textSignIn">Accede a tu cuente y paga veloz</p>
          <Link to="/"><button className="buttonSignIn2">Ir a mi cuenta</button></Link>
          </div>
        </div>
        <div className="iniSignIn">
        <div className="">
          <p className="SignIn">Iniciar sesión</p>
          <p className="textSignIn">Accede a tu cuente y paga veloz</p>
          <button className="buttonSignIn2">Ir a mi cuenta</button>
          </div>
          
        </div>
      </div>
      <div className="imgRegistration">

      </div>
      <div className="containerInputSignIn">
      <input id="inputSign1"className="inputSign" type="email" placeholder="Ingresa tu correo" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputSign"type="password"placeholder="Pin" onChange={(event)=>setPassword(event.target.value)}/>
      <Link to="/Feed"><button className="buttonSignIn" onClick={sendFirebase}>Ingresar</button></Link>
    </div>
    </div>
  )
}

export default SignIn;