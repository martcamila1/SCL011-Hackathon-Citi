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
         <input  className="search" placeholder ="Escribe para buscar"type="search"/>
           <div className="pr"> 
           {productKitchen.map((element )=>(   
          
            <div className="containerAdd">
              <div className="containerLogo">
       <p className="Logo">Logo</p>
       </div>
       <p className="accountName" name={element.data} >{element.data.accountName} <br/>
       <p className="accountNumber" price={element.data}>N° {element.data.accountNumber}</p>
       </p>
       <svg className="svgImg"width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.2639 15.5041V16.0753C25.2639 17.1356 24.8226 18.1525 24.0371 18.9023C23.2517 19.652 22.1863 20.0732 21.0755 20.0732H4.32214C3.21132 20.0732 2.14599 19.652 1.36053 18.9023C0.57506 18.1525 0.133789 17.1356 0.133789 16.0753V15.5041C0.690241 16.8692 2.08556 17.6311 4.32214 17.7887H21.0755C23.2654 17.6596 24.6607 16.8977 25.2639 15.5041ZM25.2639 18.931V19.5021C25.2639 20.5624 24.8226 21.5793 24.0371 22.3291C23.2517 23.0789 22.1863 23.5001 21.0755 23.5001H4.32214C3.21132 23.5001 2.14599 23.0789 1.36053 22.3291C0.57506 21.5793 0.133789 20.5624 0.133789 19.5021V18.931C0.690241 20.296 2.08556 21.0579 4.32214 21.2155H21.0755C23.2654 21.0864 24.6607 20.3245 25.2639 18.931ZM4.32214 0.654541H21.0755C22.1863 0.654541 23.2517 1.07575 24.0371 1.82552C24.8226 2.57528 25.2639 3.59218 25.2639 4.65251V12.6484C25.2639 13.7088 24.8226 14.7257 24.0371 15.4754C23.2517 16.2252 22.1863 16.6464 21.0755 16.6464H4.32214C3.21132 16.6464 2.14599 16.2252 1.36053 15.4754C0.57506 14.7257 0.133789 13.7088 0.133789 12.6484V4.65251C0.133789 3.59218 0.57506 2.57528 1.36053 1.82552C2.14599 1.07575 3.21132 0.654541 4.32214 0.654541V0.654541ZM13.2972 5.22365V4.65251C13.2972 4.50103 13.2341 4.35576 13.1219 4.24865C13.0097 4.14154 12.8575 4.08137 12.6988 4.08137C12.5401 4.08137 12.388 4.14154 12.2757 4.24865C12.1635 4.35576 12.1005 4.50103 12.1005 4.65251V5.22365H11.5189C11.0428 5.22365 10.5863 5.40417 10.2497 5.72549C9.91302 6.04682 9.72391 6.48264 9.72391 6.93706V7.5082C9.72391 7.96263 9.91302 8.39844 10.2497 8.71977C10.5863 9.04109 11.0428 9.22161 11.5189 9.22161H13.8955C14.0542 9.22161 14.2064 9.28179 14.3186 9.3889C14.4308 9.49601 14.4938 9.64128 14.4938 9.79275V10.3639C14.4938 10.5154 14.4308 10.6606 14.3186 10.7677C14.2064 10.8749 14.0542 10.935 13.8955 10.935H10.9182C10.9054 10.7898 10.8349 10.6547 10.7212 10.5574C10.6074 10.4601 10.459 10.408 10.3064 10.4118C10.1537 10.4156 10.0083 10.475 9.90003 10.5778C9.79174 10.6806 9.72873 10.819 9.72391 10.9647L9.70715 11.489C9.70475 11.5655 9.71845 11.6416 9.74744 11.7129C9.77643 11.7841 9.82012 11.8491 9.87593 11.904C9.93173 11.9589 9.9985 12.0025 10.0723 12.0323C10.1461 12.062 10.2254 12.0773 10.3055 12.0773H12.1005V12.6382C12.1005 12.7896 12.1635 12.9349 12.2757 13.042C12.388 13.1491 12.5401 13.2093 12.6988 13.2093C12.8575 13.2093 13.0097 13.1491 13.1219 13.042C13.2341 12.9349 13.2972 12.7896 13.2972 12.6382V12.0773H13.8955C14.3716 12.0773 14.8281 11.8968 15.1648 11.5755C15.5014 11.2541 15.6905 10.8183 15.6905 10.3639V9.79275C15.6905 9.33833 15.5014 8.90251 15.1648 8.58119C14.8281 8.25986 14.3716 8.07934 13.8955 8.07934H11.5189C11.3602 8.07934 11.208 8.01917 11.0958 7.91206C10.9836 7.80495 10.9206 7.65968 10.9206 7.5082V6.93706C10.9206 6.78559 10.9836 6.64032 11.0958 6.53321C11.208 6.4261 11.3602 6.36592 11.5189 6.36592H14.5106C14.5451 6.50213 14.6308 6.62149 14.7515 6.70128C14.8722 6.78107 15.0194 6.81573 15.1651 6.79866C15.3108 6.78159 15.4448 6.71399 15.5417 6.60871C15.6386 6.50344 15.6916 6.36783 15.6905 6.22771V5.79479C15.6905 5.64331 15.6275 5.49804 15.5153 5.39093C15.403 5.28382 15.2509 5.22365 15.0922 5.22365H13.2972Z" fill="#003B4F"/>
</svg>
       <p className="price">$11.000</p>
       
       {/* <p className="addPrice">Agregar Pago</p> */}
       
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
        <div id="aproved2"></div>
        <select>
             <option value="value1">Selecciona medio de pago</option>
             <option value="value2">Banco estado</option> 
             <option value="value3" >Visa</option>
             
        </select>
       <input id="inputPass"onChange={()=>{
         let inputPass2 =  document.getElementById("inputPass").value;
         if(inputPass2.length >=6){
          document.getElementById("aproved").innerHTML=`<svg width="90" height="84" viewBox="0 0 90 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 54.6V56.7C90 60.5987 88.4196 64.3377 85.6066 67.0945C82.7935 69.8513 78.9782 71.4 75 71.4H15C11.0218 71.4 7.20644 69.8513 4.3934 67.0945C1.58035 64.3377 0 60.5987 0 56.7V54.6C1.99286 59.619 6.99 62.4204 15 63H75C82.8428 62.5254 87.84 59.724 90 54.6ZM90 67.2V69.3C90 73.1987 88.4196 76.9377 85.6066 79.6945C82.7935 82.4512 78.9782 84 75 84H15C11.0218 84 7.20644 82.4512 4.3934 79.6945C1.58035 76.9377 0 73.1987 0 69.3V67.2C1.99286 72.219 6.99 75.0204 15 75.6H75C82.8428 75.1254 87.84 72.324 90 67.2ZM15 0H75C78.9782 0 82.7935 1.54875 85.6066 4.30553C88.4196 7.06231 90 10.8013 90 14.7V44.1C90 47.9987 88.4196 51.7377 85.6066 54.4945C82.7935 57.2513 78.9782 58.8 75 58.8H15C11.0218 58.8 7.20644 57.2513 4.3934 54.4945C1.58035 51.7377 0 47.9987 0 44.1V14.7C0 10.8013 1.58035 7.06231 4.3934 4.30553C7.20644 1.54875 11.0218 0 15 0ZM47.1429 16.8V14.7C47.1429 14.143 46.9171 13.6089 46.5152 13.2151C46.1134 12.8212 45.5683 12.6 45 12.6C44.4317 12.6 43.8866 12.8212 43.4848 13.2151C43.0829 13.6089 42.8571 14.143 42.8571 14.7V16.8H40.7743C39.0693 16.8 37.4342 17.4637 36.2286 18.6452C35.023 19.8267 34.3457 21.4291 34.3457 23.1V25.2C34.3457 26.8709 35.023 28.4733 36.2286 29.6548C37.4342 30.8363 39.0693 31.5 40.7743 31.5H49.2857C49.854 31.5 50.3991 31.7212 50.8009 32.1151C51.2028 32.5089 51.4286 33.043 51.4286 33.6V35.7C51.4286 36.257 51.2028 36.7911 50.8009 37.1849C50.3991 37.5788 49.854 37.8 49.2857 37.8H38.6229C38.5771 37.2659 38.3247 36.7691 37.9173 36.4114C37.51 36.0538 36.9785 35.8623 36.4317 35.8763C35.8849 35.8902 35.3643 36.1086 34.9765 36.4865C34.5887 36.8645 34.363 37.3735 34.3457 37.9092L34.2857 39.837C34.2771 40.118 34.3262 40.3979 34.43 40.66C34.5338 40.9221 34.6903 41.1611 34.8902 41.3628C35.09 41.5645 35.3291 41.7249 35.5934 41.8343C35.8577 41.9438 36.1417 42.0001 36.4286 42H42.8571V44.0622C42.8571 44.6192 43.0829 45.1533 43.4848 45.5471C43.8866 45.9409 44.4317 46.1622 45 46.1622C45.5683 46.1622 46.1134 45.9409 46.5152 45.5471C46.9171 45.1533 47.1429 44.6192 47.1429 44.0622V42H49.2857C50.9907 42 52.6258 41.3363 53.8314 40.1548C55.037 38.9733 55.7143 37.3709 55.7143 35.7V33.6C55.7143 31.9291 55.037 30.3267 53.8314 29.1452C52.6258 27.9637 50.9907 27.3 49.2857 27.3H40.7743C40.206 27.3 39.6609 27.0788 39.2591 26.6849C38.8572 26.2911 38.6314 25.757 38.6314 25.2V23.1C38.6314 22.543 38.8572 22.0089 39.2591 21.6151C39.6609 21.2212 40.206 21 40.7743 21H51.4886C51.6121 21.5008 51.9191 21.9397 52.3513 22.2331C52.7835 22.5264 53.3107 22.6539 53.8325 22.5911C54.3543 22.5284 54.8344 22.2798 55.1814 21.8927C55.5284 21.5056 55.718 21.007 55.7143 20.4918V18.9C55.7143 18.343 55.4885 17.8089 55.0867 17.4151C54.6848 17.0212 54.1397 16.8 53.5714 16.8H47.1429Z" fill="#4AC91E"/>
          </svg>`;
          document.getElementById("aproved2").innerHTML="Pago Listo";
          document.getElementById("pp").innerHTML="";
          
         
        
          
         }
       }} className="inputPassword"type="password"/>  
   </div>
           </div>
           

    }
}
export default Pago