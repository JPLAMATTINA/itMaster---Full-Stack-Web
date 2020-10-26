//npm install react-hook-form --save
//npm install sweetalert --save
import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const App =()=> {
  // Hook de useForm
  const { register, handleSubmit } = useForm();
  // Manejamos el evento submit del botón del formulario y recibimos en data los valores como JSON, donde los keys son los names de los elementos del formulario
  const onSubmit = data => swal(`${data.nombre} ${data.apellido} - ${data.genero}`);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="nombre" ref={register} placehoder="Nombre" />
      <input name="apellido" ref={register} placehoder="Apellido" />
      <select name="genero" ref={register}>
        <option value="masculino">masculino</option>
        <option value="femenino">femenino</option>
      </select>
      <input type="submit" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))