import React, { useState } from 'react'
import Sidebar from './sideBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './addAccount.css'
import db from '../firebase-config/firebaseInit'

 let ComboBox=()=> {
  const[account , setAccount]=useState('');
  const[number , setNumber ]=useState('');

 const sendFirebase=()=>{
    db.collection("citihack").add({
      accountNumber:number,
      accountName:account
  })
}
  
  return (
    <div>
     <Sidebar/>
     <h1 className="titleIncription">Incripción Cuentas de Servicios</h1> 
     <div className="containerIncription"></div>
     <h3 className="intruccion">Comienza escribiendo servicio o empresa</h3>
    <Autocomplete onChange={(event)=>setAccount(event.target.value)}
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={option => option.title}
      style={{  marginLeft:500 ,position: 'absolute',
        width: 560,
        height: 72,
        left: 137,
        top: 347}}
      renderInput={params => <TextField {...params} label="Combo box" variant="outlined" />}
    />
    {/* <p className="text1">Empresa o Servicio</p>
    <input type="text" className="inputEmp"/>
     */}
    <p className="text2">N° de cuenta</p>
    <input type="text" className="inputNumber" onChange={(event)=>setNumber(event.target.value)}/>
    <button className="buttonsend" onClick={sendFirebase}>Inscribir</button>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Entel', year: 1994, value:"banco estado" },
  { title: 'Movistar', year: 1972,value:"Claro" },
  { title: 'Wom', year: 1974 },
  { title: 'Enel', year: 1974 },
  { title: 'Chilectra', year: 2008 },
  { title: 'Aguas Andinas', year: 1957 },
  { title: "Smapa", year: 1993 },
  { title: 'VTr', year: 1994 },
  { title: 'Metrogas', year: 1994 },
  
  
  
];
export default ComboBox