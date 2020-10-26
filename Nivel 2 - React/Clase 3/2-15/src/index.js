// Versión by Julio - Mod by Dami
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Alert } from 'reactstrap';

const cotizaciones = {"damicoins":0.1, "damicripy":5.2, "coindamis":88.5};
// Extraemos los keys y los dejamos en un array llamado monedas
const monedas = Object.keys(cotizaciones);

const App =()=> {
  const {register, handleSubmit, errors } = useForm();
  const [cotizacion, setCotizacion] = useState();
  
  const miForm = data => {
    const monto = data.monto;
    const moneda = data.selectCripto;
    // Hacemos el cálculo y lo seteamos en el estado
    setCotizacion((monto/cotizaciones[moneda]).toFixed(2));    
  
  }
  const resetear = () =>{document.getElementById("miForm").reset();setCotizacion(null)}
  
  return(
    <div id="contendor">
      <div id="logo"></div>
        <div id="form">
          <form onSubmit={handleSubmit(miForm)} id="miForm">
            <label id="lMonto" htmlFor="usrInput">Ingrese el monto: </label><br/>
            <i className="fas fa-dollar-sign"></i><input name="monto" type="number" ref={register({ min: 0 })} id="usrInput" placeholder="Ingrese el monto"/> <br/>
            {errors.monto && <Alert color="danger">El monto debe ser mayor a 0.</Alert>}
            <label id="lSelect" htmlFor="selectCripto">Seleccione moneda: </label> <br/><i className="fab fa-bitcoin"></i>
            <select ref={register} name="selectCripto" id="selectCripto"> 
            { 
              //Mapeamos el array de las cript y los ponemos dentro del select
              monedas.map((option,i)=><option key={i} value={option}>{option}</option>) 
            
            }
            </select><br/>
            <div id="botones">
              <input id="bCancelar" className="btns" type="button" value="Cancelar" onClick={resetear}/>
              <input id="bCotizar" className="btns" type="submit" value="Cotizar"/>
            </div>
          </form>
        </div>
        <div id="resultado">        
          {cotizacion?<Alert color="info">{cotizacion}</Alert>:null}        
        </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))