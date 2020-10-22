//Versión by Julio
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
// npm install --save reactstrap
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert } from 'reactstrap';

const App =()=> {    
    const { register, handleSubmit, errors } = useForm();
    const [ dataDelForm, setDataDelForm] = useState();
    const onSubmit = data => 
    {
    swal(`${data.nombre} ${data.apellido} - ${data.pais} - ${data.numero} - ${data.fecha} `);
    const datos = []
    datos.push(data.nombre)
    datos.push(data.apellido)
    setDataDelForm(datos);
    }
  return (
      <>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="nombre">Nombre</Label>
        <Input innerRef={register({ required: true, maxLength: 10 })} name="nombre" id="nombre" placeholder="Nombre" />
        {errors.nombre && <Alert color="danger">Nombre obligatorio (max. 10)</Alert>}
      </FormGroup>
      <FormGroup>
        <Label for="apellido">Apellido</Label>
        <Input  innerRef={register} name="apellido" id="apellido" placeholder="Apellido" />
      </FormGroup>
      <FormGroup>
        <Label for="pais">Seleccionar</Label>
        <Input innerRef={register} type="select" name="pais" id="pais">
            <option value="1">Argentina</option>
            <option value="2">Uruguay</option>
            <option value="3">Brasil</option>
        </Input>
      </FormGroup>
  
      <FormGroup >
      <Label for="numero">Numero preferido</Label>
        <Input
            innerRef={register}
            type="number"
            name="numero"
            id="numero"
            placeholder="Numero preferido"
        />
      </FormGroup>
      <FormGroup>
        <Label for="fecha">Fecha de nacimiento</Label>
        <Input
            innerRef={register}
            type="date"
            name="fecha"
            id="fecha"
            placeholder="Fecha de nacimiento"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    {dataDelForm?<p>Nombre: {dataDelForm[0]} {dataDelForm[1]}</p>:null}

    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))