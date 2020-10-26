import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// el primer titulo de todos
const Titulo = (props) => (
  <header>
    <h1>Clase número 17= {props.tituloUno}</h1>
  </header>
)
//llamo al header?
const Header = () => (
  <Titulo tituloUno = "React learning"/>
)

//primero armo el array
const menus = ["Home", "Contacto","Redes"];

const Navegacion = () => menus.map ((navegando, i) => <li key={i}>{navegando}</li>)

const Nav = () => (
  <ul>
    <Navegacion />
  </ul>
  )
  

const Titulo2 = (props) => <h2>Titulo del Main: {props.tituloDos}</h2>
const Imagen = (props) => <img src={props.imagen} alt={props.alt}/>
const Parrafo = (props) => <strong>{props.parrafo}</strong>

const Main = () => (
  <main>
      <Titulo2 tituloDos ="Entiendo poco de Props, y menos de react" />
      <div id="imagen"><Imagen imagen="https://via.placeholder.com/300x300/0000FF/000000/?text=La%20Imagen%20de%20React" alt="algo" /></div>
      <p>Compruebo que la etiqueta strong funciona en la constante parrafo= <Parrafo parrafo = "PRUEBA"/></p>
  </main>
) 

const Foot = (props) => <small>{props.footer}</small>

const Footer = () => (
  <footer>
  <Foot footer="Earth living 🌱" />
  </footer>
)

// los Tags van con Mayus, al igual que las const de props.
const App = () =>(
  <>
  <Header />
  <nav><Nav /></nav>
  <Main />
  <Footer />
  </>
 ) 
 
 ReactDOM.render(<App />,document.getElementById('root'));