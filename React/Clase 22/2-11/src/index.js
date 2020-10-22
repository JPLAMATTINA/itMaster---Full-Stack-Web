//Armar un formulario con useRef y en tiempo real mostrar lo que escribe un usuario hasta que llega a 20 caracteres y ahi mostrar un error en rojo (usar el onKeyUp de React).

import React, { useRef,useState } from "react";
import ReactDOM from 'react-dom';
import './index.css'

const Componente = () => {
  const datoInput = useRef();
  const [dato, setDato] = useState();  
  
  const mostrar = () => {
      setDato(datoInput.current.value)
    }

  return (
    <>
    <form>
      <textarea placeholder="Comentario ..." ref={datoInput} onKeyUp={mostrar}>
      </textarea>
    </form>        
      {
      dato?<p><strong className={dato.length>20?"error":null}>{dato}</strong></p>:null
    }
    </>
  );
}

ReactDOM.render(<Componente />, document.getElementById('root'));