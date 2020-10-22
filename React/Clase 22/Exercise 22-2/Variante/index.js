import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Alert } from 'reactstrap';
import './index.css';


//Con React y Hooks crear un conversor de dólares a Criptomonedas
// ○	Existe un JSON global:
// ■	const cotizaciones = 
// [{“damicoins”:0.1}, {“damicripy”:5.2},{“coindamis”:88.5}]
// ●	// Comentario: cotizaciones[“damicripy”] para acceder al valor del JSON
// ■	Llenar el select con el array const monedas = [{“damicoins”,“damicripy”,“coindamis”] (opcional)
// ○	Crear un formulario que tenga un input text y un botón y un select
// ○	Cuando el usuario llena los campos y elige la conversión mostrar un un párrafo el resultado (el usuario debe ingresar un número mayor a 0 y elegir una criptomoneda para convertir, de lo contrario dar error)


// La siguiente linea es de una prueba con react-select
// const cotizaciones = [{value: "damicoins", label: "0.1"}, {value:"damicripy", label:"5.2"},{value: "coindamis", label:"88.5"}];

const cotizaciones = [{"damicoins":0.1}, {"damicripy":5.2},{"coindamis":88.5}];
const monedas = ["damicoins","damicripy","coindamis"];

const App =()=> {
  const {register, handleSubmit, errors } = useForm();
  const [cotizacion, setCotizacion] = useState();
  const [cripto, setCripto] = useState();
  
  const miForm = data => {
    const monto = data.monto;
    const moneda = data.selectCripto;

    // Alguna lineas al console.log, solo para ver que hay en las variables. Las dejo comentadas.
    // console.log(data.monto);
    // console.log(moneda)
    // console.log(cotizaciones[0][moneda]);

  // Recorremo con un for of el array de JSON, cotizaciones y usamos object key para obtener el valor
  // y luego compararlo con el valor del option del select
  for(let item of cotizaciones){
    console.log(item)
    if(Object.keys(item)[0] === moneda){
      console.log(item[Object.keys(item)[0]])
      setCotizacion(((item[Object.keys(item)[0]])*monto).toFixed(3));
    }
  }


    // Esta parte de abajo queda comentada, es la primer version con if, antes de usar la seccion de arriba con un for
    // para recorrer y el object.key
    // if(moneda === "damicoins"){
    //   // console.log(cotizaciones[0][moneda]);
    //   setCotizacion((cotizaciones[0][moneda])*monto);
    // }
    // else if (moneda === "damicripy") {
    //   setCotizacion((cotizaciones[1][moneda])*monto);
    // }
    // else if (moneda === "coindamis"){
    //   setCotizacion((cotizaciones[2][moneda])*monto);
    // }
  }
  
  return(
    <div id="contendor">
      <div id="logo"></div>
        <div id="form">
          <form onSubmit={handleSubmit(miForm)} id="miForm">
            <label id="lMonto" htmlFor="usrInput">Ingrese el monto: </label><br/>
            <i class="fas fa-dollar-sign"></i><input name="monto" type="number" ref={register({ min: 0 })} id="usrInput" placeholder="Ingrese el monto"/> <br/>
            {errors.monto && <Alert color="danger">El monto debe ser mayor a 0.</Alert>}
            <label id="lSelect" htmlFor="selectCripto">Seleccione moneda: </label> <br/><i class="fab fa-bitcoin"></i>
            <select ref={register} name="selectCripto" id="selectCripto"> 
            { monedas.map((option,i)=><option key={i}>{option}</option>) }
            </select><br/>
            <div id="botones">
              <input id="bCancelar" className="btns" type="button" value="Cancelar" />
              <input id="bCotizar" className="btns" type="submit" value="Cotizar"/>
            </div>
          </form>

        </div>
        <div id="resultado">
        
          {cotizacion?<Alert color="info">{cotizacion}</Alert>:null}
          {/* <p>{cripto}</p> */}
        </div>
      </div>
    
  )

}

ReactDOM.render(<App />, document.getElementById('root'))