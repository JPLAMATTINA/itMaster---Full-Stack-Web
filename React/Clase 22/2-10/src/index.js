import React, { useRef,useState } from "react";
import ReactDOM from 'react-dom';
import './index.css'

const Componente = () => {  
  const numeroInput = useRef();
  const [numero, setnumero] = useState();  
  
  const mostrar = () => {    
      setnumero(numeroInput.current.value)
    }

  return (
    <>
    <form>
      <input type="number" placeholder="Numero ..." ref={numeroInput} min="1" max="10" onKeyUp={mostrar} />
      <button onClick={mostrar} type="button">Mostrar</button>
    </form>        
      {
        //className condicional
      numero?<p>Mi numero es: <strong className={numero>10?"error":null}>{numero}</strong></p>:null
    }
    </>
  );
}

ReactDOM.render(<Componente />, document.getElementById('root'));