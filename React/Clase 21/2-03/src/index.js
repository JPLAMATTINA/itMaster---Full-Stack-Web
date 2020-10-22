import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Formulario = (props) => {
  const [fName, setfName] = useState();
  const [fApe, setfApe] = useState();
  const [fPais, setfPais] = useState("0");
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
      <select  id={props.idpais} >
          <option value="0">Elegir ....</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brasil</option>
          <option value="CH">Chile</option>
      </select>
      <input type="button" onClick={Enviar} value="Enviar" />
    </form>
    {fName?<p>Nombre: {fName}</p>:null}
    {fApe?<p>Apellido: {fApe}</p>:null}
    {fPais!=="0"?<p>País: {fPais}</p>:null}
  </main>
  )
}

  ReactDOM.render(<Formulario idnombre="nom" idapellido="ape" idpais="pais"  />, document.getElementById('root')
);