// import React from 'react';
import Sidebar from './sideBar';
import './paybills.css'

// const Pago = ()=>{
//   return(
//     <div>
//       <Sidebar></Sidebar>
//       <div className="containerAdd">
//        <p className="Logo">Logo</p>
//        <p className="accountName">Aguas Andinas <br/>
//        <p className="accountNumber">N°9999999</p>
//        </p>
//        <p className="totalPrice">Total a Pagar<br/>
//        <p className="price">$11.000</p>
//        </p>
//        <p className="addPrice">Agregar Pago</p>
//        <input  className="inputCheckbox"type="checkbox"/>
//       </div>
//       <div className="summary">

//       </div>
//     </div>
//   )
// }

// export default Pago

import React, { useState, useEffect } from 'react';
import db from '../firebase-config/firebaseInit';


function Pago() {
  const [jobs, setWorks] = useState([]);
  useEffect(() => {
    db
      .collection('citihack')
      .onSnapshot((snapshot) => {
        const newWorkOffers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorks(newWorkOffers);
      });
  }, []);
  return (
    <div>
      <Sidebar></Sidebar>
        
          
      <div className="pr"> 
      {jobs.map((Jobs) =>     
      <div className="containerAdd">
       <p className="Logo">Logo</p>
       <p className="accountName">{Jobs.accountName} <br/>
       <p className="accountNumber">{Jobs.accountNumber}</p>
       </p>
       <p className="totalPrice">Total a Pagar<br/>
       <p className="price">$11.000</p>
       </p>
       <p className="addPrice">Agregar Pago</p>
       <input className="inputCheckbox"type="checkbox"/>
      </div>
      )}
      </div>
                
                
              
          
      <div className="summary"></div>
    </div>
  );
}
export default Pago;