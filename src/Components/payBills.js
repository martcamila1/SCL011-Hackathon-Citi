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

// import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react'
import db from '../firebase-config/firebaseInit';


// function Pago() {
//   const [jobs, setWorks] = useState([]);
//   useEffect(() => {
//     db
//       .collection('citihack')
//       .onSnapshot((snapshot) => {
//         const newWorkOffers = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setWorks(newWorkOffers);
//       });
//   }, []);
   
 
//   return (
//     <div>
//       <Sidebar></Sidebar>
        
          
//       <div className="pr"> 
//       {jobs.map((Jobs) =>     
//       <div className="containerAdd">
//        <p className="Logo">Logo</p>
//        <p className="accountName" name={Jobs.accountName}>{Jobs.accountName} <br/>
//        <p className="accountNumber" number="Jobs.accountName">{Jobs.accountNumber}</p>
//        </p>
//        <p className="totalPrice">Total a Pagar<br/>
//        <p className="price">$11.000</p>
//        </p>
//        <p className="addPrice">Agregar Pago</p>
       
//        <input onChange={()=>alert("hola")}className="inputCheckbox"type="checkbox"/>
//       </div>
//       )}
//       </div>
                
                
              
          
//       <div className="summary">
//         <h3 className="addedtoPay">Añadidas para pagar </h3>
//       <p>{onchange}</p>
//       </div>
//     </div>
//   );
// }
// export default Pago;

///dhajsdhajksdhajkdhajhdajhdajhdajhdjahdjahdajdhajd

import React, { Component } from 'react'
// import db from '../../firebase'
// import './kitchen.css'

class Pago extends Component{
  constructor(props) {
    super(props); 
        this.state={
            productKitchen:[],
            product:[]
            
        }
      }
      prueba=(products)=>{
        let productState = this.state.product;
    productState.push(products);

    this.setState({
      product: productState
    });
        
      }
        componentDidMount(){
            db.collection('citihack').get().then((snapShots)=>{
                this.setState({
                        productKitchen: snapShots.docs.map(doc=>{
                        console.log(doc.data().dateCollection);  
                        return{id:doc.id, data:doc.data()}
                        
                        
                    })
                })
            })
        }

        
  
       
    render(){
        let {productKitchen}=this.state
   
       return     <div>
         <Sidebar></Sidebar>
           <div className="pr"> 
           {productKitchen.map((element )=>(   
          
            <div className="containerAdd">
       <p className="Logo">Logo</p>
       <p className="accountName" name={element.data} >{element.data.accountName} <br/>
       <p className="accountNumber" price={element.data}>N° {element.data.accountNumber}</p>
       </p>
       <p className="totalPrice">Total a Pagar<br/>
       <p className="price">$11.000</p>
       </p>
       <p className="addPrice">Agregar Pago</p>
       
       <input onChange={this.prueba.bind(this ,element.data)} className="inputCheckbox"type="checkbox"/>
      </div>
          
               
           ))}
           </div>
           <div id="a" className="summary">
   <h3 className="addedtoPay">Añadidas para pagar </h3>
   <div id="pp">
   {this.state.product.map((elementProduct, i) => {
          return <div id="summaryText1" className="summaryText">
            
            <div id="h"className="elementAccountName">{elementProduct.accountName}</div>
            <div className="containerNumber">
            <div className="elementAccountNumber">N°{elementProduct.accountNumber}</div>
            <div className="price2">$ 20000</div>
            </div> 
          </div>
        })}
        
        </div>
        <div id="aproved"></div>
        <select>
             <option value="value1">Selecciona medio de pago</option>
             <option value="value2">Banco estado</option> 
             <option value="value3" >Visa</option>
             
        </select>
       <input id="inputPass"onChange={()=>{
         let inputPass2 =  document.getElementById("inputPass").value;
         if(inputPass2.length >=6){
          document.getElementById("aproved").innerHTML="pago exitoso";
          document.getElementById("pp").innerHTML="";
          
         
        
          
         }
       }} className="inputPassword"type="password"/>  
   </div>
           </div>
           

    }
}
export default Pago