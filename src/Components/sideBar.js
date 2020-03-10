import React from 'react';
import {Link} from 'react-router-dom'
import './sidebar.css'

const Sidebar = ()=>{
  return(
    
     <aside className="containerAside">
       <p className="welcome">Bienvenido</p>
      <Link to="Pago"><button className="buttonAside">Pagar cuentas</button></Link>
      <button className="buttonAside">Añadir/Editar Cuenta</button>
      <button className="buttonAside">Añadir/Editar medio de pago</button>
      <button className="buttonAside">Configuración de perfil</button>
     </aside>
    
  )

}

export default Sidebar;