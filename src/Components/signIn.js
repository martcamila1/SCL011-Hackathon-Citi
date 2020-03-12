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
    <div>
    <div className="containerSignIn">
      
      {/* <div className="imgRegistration">

      </div> */}
       <h3 className="title3">Completa tus datos y comienza a pagar tus cuentas de forma rápida, fácil segura</h3>
      <div className="containerInputSignIn">
      <input id="inputSign1"className="inputSign" type="email" placeholder="Ingresa tu correo" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputSign"type="password"placeholder="Pin" onChange={(event)=>setPassword(event.target.value)}/>
      <Link to="/Feed"><button className="buttonSignIn" onClick={sendFirebase}>Ingresar</button> </Link>
    </div>
    <div className="containerButton2">
      <Link to="/SignIn"><div className="ini3">
          <div className="">
         <p className="login">Iniciar sesión</p>
         
          
          </div>
         
        </div>
        </Link> 
        
        <Link to="/"><div className="ini4">
        <div className="">
          <p className="login">Craer Tu Cuenta</p>
          
          
          </div>
          
        </div>
        </Link>
      </div>
    </div>
    
    </div>
  )
}

export default SignIn;