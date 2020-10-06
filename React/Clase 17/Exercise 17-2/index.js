import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Titulo = (props) => (
  <h1>{props.titulo}</h1>
)

const Img = (props) => (
  <img src={props.imagen} alt="img"/>
)

const menu = ["Posiciones", "Fixture", "Otras Ligas", "Contacto", "Acerca de.."];

const opciones =  menu.map((item,i)=><li key={i}>{item}</li> );


const Header = () => (
  <header>
  <Titulo titulo = "Equipo Don niembra" />
  <div id="imagenHeader"><Img imagen="https://via.placeholder.com/100x50px" alt="algo"/></div>
  </header>
  )

const equipos = [
    "Sportivo Glorias de Barracas",
    "Deportivo Merlo Unido",
    "Asociacion Buenos Aires",
    "Club Sociedad de Fomento"]

const Sidebar = () => (
  <aside>
      <ul>
        {opciones}
      </ul>
    </aside>
)
const Main = () => (
  
  <main>
    
    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th>Puesto</th>
        <th>Equipo</th>
        <th>Acción</th>
      </tr>
    </thead>
    <tbody>
    <Tabla />
    </tbody>
  </table>
  </main>
)

 // recorre el la const de equupos ( escrit en modo de JAvascript, no de Recat )  y te devuele 
const Tabla = () => (
  equipos.map((equipos, i) => (
  <tr key={i}>
  <td>{i+1}</td>
  <td>{equipos}</td>
  <td><input type="button" value="Ingresar" id="btn" className="btn btn-info"/></td>
  </tr>  
  ))
  )

// los Tags van con Mayus, al igual que las const de props.
const App = () =>(
  <>
  <Header />
  <div>
  <Sidebar />
  </div>
  <Main />
  </>
 ) 
 
 ReactDOM.render(<App />,document.getElementById('root'));