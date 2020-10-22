import React from 'react'
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


const App = () => {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" placeholder="Nombre" ref={register({ required: true, maxLength: 10 })} />
      {errors.firstName && <strong>Nombre obligatorio (max. 10)</strong>}
      <br/>
      <input name="user" placeholder="Usuario" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      {errors.user && <strong>Formato de usuario no aceptado</strong>}
      <br/>
      <input name="age" type="number" placeholder="Edad" ref={register({ min: 18, max: 99 })} />{errors.age && <strong>Edad no valida</strong>}
      <br/>      
      <input type="submit" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))