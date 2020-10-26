//Ejercicio by Eze
import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './index.css'

const App = () =>{
  const valores = ['A','B','C','D','E','F','G','H','Y','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
  //Valor inicial del estado que es un array vacío
  const [paswords, setCount] = useState([]);
  function ObtenerPass () {
  const pasword = []
  do {
  const random = Math.floor(Math.random()*valores.length)
  pasword.push(valores[random])
  } while (pasword.length < 12);
  
  //Seteamos el estado
  setCount(pasword)
}
return (
  <>
  <h1>Random Password!!!</h1>
  { 
    //  Verificamos si está seteado el array con una passwrod y mostramos solo si eso se cumple.
    paswords.length>0?<p>La contraseña obtenida es: <span>{paswords}</span></p>:null
  }
  <div id="contraseña">
  <Button variant="contained" color="primary" onClick={(ObtenerPass)} id="boton">Obtenga su contraseña</Button>
  </div>
  </>
)
}

ReactDOM.render(<App />,document.getElementById('root'));