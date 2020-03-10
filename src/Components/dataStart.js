// primera pantalla feed
import React from 'react' ;
import './dataStart.css'

const DataStart = () =>{
  return(
    <div className="containerDataStart">
      <div className="containerText">
      <h2 className="title">Inscribe tus datos antes de comenzar</h2>
      <p className="intruccion">Es necesario que hagas esto porqué si, yo te lo ordeno dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua.
         </p>
        <p className="intruccionStart">¿Qué quieres hacer primero?</p> 
      </div>
     <div className="containerButtonOptions">
     <button onClick={()=>{alert("sjhajshdajs")}}className="containerOption">
       <p className="titleOption">Métodos de Pago</p>
       <p className="add">Añadi diferentes medios de pago etc.</p>
      
      </button> 

      <button className="containerOption">
       <p className="itleOption">Cuentas</p>
       <p className="add">Inscribe diferentes cuentas a pagar</p>
       
      </button>

      </div> 

    </div>
  )
}
export default DataStart