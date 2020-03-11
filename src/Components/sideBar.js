import React from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = ()=>{
  return(
    
     <aside className="containerAside">
       <p className="welcome">Bienvenido</p>
       <p className="nameUser"> Josefina Carrasco</p>
      <Link to="Pago"><button className="buttonAside">Pagar cuentas</button></Link>
      <Link to="AddAccount"><button className="buttonAside">Añadir/Editar Cuenta</button></Link>
      <Link to="PaymentMethod"><button className="buttonAside">Añadir/Editar medio de pago</button></Link>
      <button className="buttonAside">Configuración de perfil</button>
     </aside>
    
  )

}

export default Sidebar;
