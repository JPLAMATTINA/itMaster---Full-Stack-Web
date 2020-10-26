import React, { useRef } from "react";
import ReactDOM from 'react-dom';


const Componente = () => {
  const textInput = useRef();

  const focusTextInput = () => textInput.current.focus();

  return (
    <form>
      <input type="text" placeholder="Nombre" ref={textInput} />
      <button onClick={focusTextInput} type="button">Dar foco al input de nombre</button>
    </form>
  );
}

ReactDOM.render(<Componente />, document.getElementById('root'));