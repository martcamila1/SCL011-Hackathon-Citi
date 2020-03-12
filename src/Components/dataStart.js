// primera pantalla feed
import React from 'react' ;
import {Link} from 'react-router-dom'
import './dataStart.css'

const DataStart = () =>{
  return(
    <div className="containerDataStart">
      <div className="containerText">
      <h2 className="title">¿Qué quieres hacer ?</h2>
      <p className="intruccion2">Es necesario que hagas esto porqué si, yo te lo ordeno dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua.
         </p>
        {/* <p className="intruccionStart">¿Qué quieres hacer primero?</p>  */}
      </div>
     <div className="containerButtonOptions">
     <Link to="/AddAccount"><button className="containerOption">
       <p className="titleOption">MEDIO DE PAGO</p>
      
       
      
      </button> 
      </Link>

      <Link to="/PaymentMethod"><button className="containerOption">
       <p className="titleOption">CUENTA DE SERVICIO</p>
       
      
       
      </button>
      </Link>
      </div> 

    </div>
  )
}
export default DataStart