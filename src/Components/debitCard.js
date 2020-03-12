import React from 'react';
import Sidebar from './sideBar';
import './paymentMethod.css';
import {Link} from 'react-router-dom';

const DebitCard=()=>{
  return(
    <div className="info-container">
    <aside>
      <Sidebar/>
    </aside>
    <div className="payMethod-container">
      <header>
        <svg className="icon" width="43" height="34" viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 45.5357C0 48.5525 2.42622 51 5.41667 51H59.5833C62.5738 51 65 48.5525 65 45.5357V22.3125H0V45.5357ZM21.6667 37.7946C21.6667 37.0433 22.276 36.4286 23.0208 36.4286H38.3681C39.1128 36.4286 39.7222 37.0433 39.7222 37.7946V42.3482C39.7222 43.0996 39.1128 43.7143 38.3681 43.7143H23.0208C22.276 43.7143 21.6667 43.0996 21.6667 42.3482V37.7946ZM7.22222 37.7946C7.22222 37.0433 7.8316 36.4286 8.57639 36.4286H16.7014C17.4462 36.4286 18.0556 37.0433 18.0556 37.7946V42.3482C18.0556 43.0996 17.4462 43.7143 16.7014 43.7143H8.57639C7.8316 43.7143 7.22222 43.0996 7.22222 42.3482V37.7946ZM65 5.46429V10.9286H0V5.46429C0 2.44755 2.42622 0 5.41667 0H59.5833C62.5738 0 65 2.44755 65 5.46429Z" fill="#003B4F"/>
        </svg>
        <h1>Tarjeta de Débito</h1>
      </header>
      <body className="payMethod-body">
        <h3 className="h3">2. Ingresa tus datos</h3>
        <div className="inputs-container">
          <label>
            Banco
            <select className="input">
              <option value="value1">Busca tu banco</option>
              <option value="value2">Banco de Chile</option> 
              <option value="value3">Scotiabank Chile</option>
              <option value="value4">Banco de Crédito e Inversiones</option>
              <option value="value5">Banco BICE</option>
              <option value="value6">Banco Santander Chile</option>
              <option value="value7">Itaú Corpbanca</option>
              <option value="value8">Banco Security</option>
              <option value="value9">Banco Falabella</option>
              <option value="value10">Banco Consorcio</option>
            </select>
          </label>
          <label>
            Nº Tarjeta
            <input className="input" type="text" placeholder="1234-5678-9012-3456"/>
          </label>
        </div>
        <div className="action-btns">
          <Link to="/PaymentMethod"><button className="btn-volver">Volver</button></Link>
          <Link to="/DebitCardResumen"><button className="btn-inscribir">Inscribir</button></Link>
        </div>
      </body>
    </div>
  </div>  
  )
}
export default DebitCard