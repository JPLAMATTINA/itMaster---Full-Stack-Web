// Versión by Eze
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import swal from 'sweetalert';


const Style = {
  display: 'block',
  marginTop: '2%'
}

const App =()=>{
const cotizaciones = [{'damicoins':0.1}, {'damicripy':5.2},{'coindamis':88.5}];
const option = ['damicoins','damicripy','coindamis']; 
// Arma el Select a partir de cotizaciones y option
const Select = cotizaciones.map((op,i) => <option key={i} value={i+1}>{option[i]}</option>)
 
// Vinculamos los campos useRef con el input text y el Select
const textNumber = useRef();
const criptoMoneda = useRef();

// Se crean los estados
const [Valor, SetValor]= useState();
const [Resultado, Setvar]= useState();

const Validar = () =>{
  if(textNumber.current.value && !isNaN(textNumber.current.value) && criptoMoneda.current.value>0){
  Setvar(true)
  if(criptoMoneda.current.value==="1"){
    let v=cotizaciones[0].damicoins
    const resultado = (textNumber.current.value/v).toFixed(2)
    SetValor(resultado)}   
  if(criptoMoneda.current.value==="2"){
    let v=cotizaciones[1].damicripy
    const resultado1 = (textNumber.current.value/v).toFixed(2)
    SetValor(resultado1)}   
  
  if(criptoMoneda.current.value==="3"){
    let v=cotizaciones[2].coindamis
    const resultado2 = (textNumber.current.value/v).toFixed(2)
    SetValor(resultado2)}   
}
else{
  const error = "ERROR EN DATOS"
  SetValor(error)
  Setvar(false)
  swal({
    text: "ERROR EN DATOS",
  });
}
}
return (
<>
<form style={Style}>
  <input type="text" style={Style} ref={textNumber} placeholder="Escriba el valor a cotizar..."/>
  <select name="select" style={Style} ref={criptoMoneda}>
  <option value="0">Elegir...</option>
  {Select}
  </select>
  <input type="button" style={Style} value="Calcular" onClick={Validar}/> 
</form>
<br/>
<div id="div" >
    <p><strong className={Resultado===false? 'error':null}>{Resultado?<span>Resultado:</span>:null} {Valor}</strong></p>
</div> 
</>
)}

ReactDOM.render(<App />,document.getElementById('root'));