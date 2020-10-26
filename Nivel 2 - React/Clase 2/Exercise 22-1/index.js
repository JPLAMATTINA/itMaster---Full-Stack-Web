import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// 1.	Con React y Hooks
// ■	Crear un formulario que tenga un input text y un botón
// ■	Al tocar un botón mostrar en un div los resultados de las siguientes validaciones respecto a lo que escribió el usuario:
// ●	¿Es número?
// ●	¿Es entero? (solo si es número)
// ●	¿Es par? (solo si es número)
// ●	¿Es positivo? (solo si es número)



const Componente = () => {
  const datoInput = useRef();
  const [dato, setDato] = useState();  
  
  const mostrar = () => {
      setDato(datoInput.current.value)
       }

  return (
    <>
    <form>
      <input name="text" placerholder="Ingrese número" ref={datoInput}/>
      <button onClick={mostrar} type="button">Mostrar</button>
    </form>  
      {
        dato ? <p> el numero es: <strong className={(isNaN(dato))?"permitido" : null}>{dato}</strong></p> : null
      }
      {
        dato ? <p> es un numero entero: <strong className={dato <= "0"?"entero":null}>{dato}</strong></p> : null
      }
      {
        dato ? <p> numero pares: <strong className={(dato % 2 !== 0)?"par":null}>{dato}</strong></p> : null
      }
            {
        dato ? <p> numero positvo: <strong className={(dato < 0)?"positivo":null}>{dato}</strong></p> : null
      }
    </>
  );
}

ReactDOM.render(<Componente />, document.getElementById('root'));


