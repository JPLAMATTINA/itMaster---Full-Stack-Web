import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Formulario = (props) => {
  const [fName, setfName] = useState('---');
  const [fApe, setfApe] = useState('---');
  const [fPais, setfPais] = useState('---');
  const Enviar = () => {    
    setfName(document.getElementById(props.idnombre).value)
    setfApe(document.getElementById(props.idapellido).value)
    setfPais(document.getElementById(props.idpais).value)
  }
  
  return(
  <main>
    <form>
      <input type="text" placeholder="Nombre"  id={props.idnombre} />
      <input type="text" placeholder="Apellido"  id={props.idapellido} />      
      <label>País</label>
      <select  id={props.idpais} onChange={Enviar} >
      <option value="0">Elegir ....</option>
          <option value="1">Argentina</option>
          <option value="2">Brasil</option>
          <option value="3">Chile</option>
      </select>
      <input type="button" onClick={Enviar} value="Enviar" />
    </form>
    <p>Nombre: {fName} - Apellido: {fApe}</p>    
    <p>País: {fPais}</p>   
  </main>
  )
}

  ReactDOM.render(<Formulario idnombre="nom" idapellido="ape" idpais="pais"  />, document.getElementById('root')
);