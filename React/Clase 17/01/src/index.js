import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const nombre = "Dami";

// Creación de un componente como arrow function. El nombre de la constante la primera letra con Mayúscula
const App = () => <h1>Soy la App del Mundo de {nombre}</h1>

/*
Equivale a  const App = () =>  ....
function App(){
  return <h1>Soy la App del Mundo de {nombre}</h1>
}
*/


// ReactDOM.render inserta en componente App en el div id root que está en index.html de la carpeta public
ReactDOM.render(<App />,document.getElementById('root'));