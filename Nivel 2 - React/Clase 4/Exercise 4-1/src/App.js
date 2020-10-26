import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./index.css";

// con el primer hook obtengo el Listado de la Home
const Paises = () => {
  const [lista, setLista] = useState([]);

  // ubicar carpeta especifica dentro del json
  const getPaises = () => {
    fetch("https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json")
      .then((response) => response.json())
      .then((paises) => {setLista(paises);})
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getPaises ();
  }, []);

  //uso un Objet.key por no tener un id ?
    const key = Object.keys(lista)

  return (
    <ul>{key.filter(pais => pais[0].toUpperCase ==='A').map((pais,i) => <Link to={'/pais/' + pais} key={i}><li>{pais}</li></Link>)}</ul>
  );
};

//con el segundo hook, obtengo el listado de ciudades del 1er listado obtenido en el 1er hook y lo regreso a la Home
const Pais = () => {
  const [ciudad, setCiudad] = useState([]);
  const params = useParams ();
  const getCiudad = () => {
    fetch("https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json")
      .then((response) => response.json())
      .then((data) => {setCiudad(data);
      })
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    getCiudad();
  }, []);

  //solicito la devolución del contendio del Pais, en este caso. Si params.id contiene Ciudades Dentro Pais
  return (
    <>
        <h2>Ciudad:<ul>{ciudad[params.id] ? ciudad[params.id].map((pais,i) => <li>{pais}</li>):null}</ul></h2><Link to ='/'>Home</Link>
    </>
   );
   };
    
const App = () => (
  <Router>
    <h1>Paises Con A:</h1>
    <Switch>
      <Route exact path="/"><Paises /></Route>
      <Route exact path="/pais/:id"><Pais /></Route>
    </Switch>
  </Router>
);

export default App;
