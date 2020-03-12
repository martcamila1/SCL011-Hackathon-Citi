// // Registro de app
import React, { useState } from 'react'
import {auth} from '../firebase-config/firebaseInit'
import {Link} from 'react-router-dom'
import './registration.css'

const  Registration = ()=>{
  const[email , setEmail]=useState('');
  const[password , setPassword ]=useState('');

  let sendFirebase =() =>{
    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
      alert("hola")
    })
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
    <div className="containerRegistration1">
      <h3 className="title2">Completa tus datos y comienza a pagar tus cuentas de forma rápida, fácil segura</h3>
      <div className="containerInput">
      <input className="inputCreateUser" type="text" placeholder="Nombre y Apellido" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputCreateUser" type="text" placeholder="Rut" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputCreateUser" type="email" placeholder="Ingresa tu correo" onChange={(event)=>setEmail(event.target.value)}/>
      <input className="inputCreateUser" type="password"placeholder="Pin" onChange={(event)=>setPassword(event.target.value)}/>
      <input className="inputCreateUser" type="password"placeholder="Repite Pin" onChange={(event)=>setPassword(event.target.value)}/>
      
      <button onClick={sendFirebase} className="buttonRegistration">Crear Cuenta</button>
      </div>
      <div className="containerButton">
      <Link to="Signin"> <div className="ini">
          <div className="">
         <p className="login">Iniciar sesión</p>
         
          
          </div>
         
        </div>
        </Link>
        <Link to="/"><div className="ini2">
        <div className="">
          <p className="login">Craer Tu Cuenta</p>
          
          
          </div>
          
        </div>
        </Link>
      </div>
      
      
    </div>
  )
}

export default  Registration;


