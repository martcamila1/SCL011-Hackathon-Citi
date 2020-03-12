import React from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = ()=>{
  return(
    
     <aside className="containerAside">
       <p className="welcome">Bienvenido</p>
       <p className="nameUser"> Josefina Carrasco</p>
      <Link className="link" to="Pago"><button className="buttonAside">Pagar cuentas</button></Link><br/>
      <Link className="link"to="AddAccount"><button className="buttonAside">Añadir/Editar Cuenta</button></Link><br/>
      <Link className="link"to="PaymentMethod"><button className="buttonAside">Añadir/Editar medio de pago</button></Link><br/>
      <button className="buttonAside">Configuración de perfil</button>
     </aside>
    
  )

}

export default Sidebar;
