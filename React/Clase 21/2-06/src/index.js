import React, { useRef,useState } from "react";
import ReactDOM from 'react-dom';

const Componente = () => {
  //Defino el useRef para el input de texto
  const textInput = useRef();
  const [fName, setfName] = useState();  
  
  const mostrar = () => {
    //Asigno el valor del input text al estado fName
      setfName(textInput.current.value)
    }
  
  const Nombre =() =>{
    if(fName){
      return <p>Mi nolmbre es: {fName}</p>
    }
    else return null
  }
  return (
    <>
    <form>
      <input type="text" placeholder="Nombre" ref={textInput} />
      <button onClick={mostrar} type="button">Mostrar</button>
    </form>
    <Nombre />
    </>
  );
}

ReactDOM.render(<Componente />, document.getElementById('root'));