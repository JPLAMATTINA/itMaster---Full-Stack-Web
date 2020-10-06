import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logoreact from "./logo.svg";

const nombre = "Dami";
// Fuera del componente puedo usar JavaScript y ES6
const subtitulo = `El mejor subtítulo del Mundo de ${nombre.toUpperCase()}`

const Cabecera = () => <header><h1 id="titulo">Hola soy una App de {nombre}</h1></header>

const Navegacion = () =>(
    <nav>
        <ul>
            <li><a href="/menu1">Menu 1</a></li>
            <li><a href="/menu2">Menu 2</a></li>
            <li><a href="/menu3">Menu 3</a></li>
            <li><a href="/menu4">Menu 4</a></li>
            <li><a href="/menu5">Menu 5</a></li>
        </ul>
    </nav>
  )

// Abro ( ) para multilínea
const App = () => (    
    <>
        <Cabecera/>
        <Navegacion/>
        <img src={logoreact} alt="Logo" width="64" />
        <br/>
        {/* 
            Esto es comentario para React
            img/ está en /public
        */}
        <img src="img/pizza.png" alt="Pizza" />
        <img src="https://via.placeholder.com/150" alt="Imagen online" />
        <h2>{subtitulo}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere ipsa quia veritatis atque ut incidunt quibusdam accusantium eveniet, consectetur harum itaque, inventore similique aperiam? Hic debitis ab obcaecati quia?</p>
        <div className="alert alert-primary" role="alert">
            Un ejemplo de Bootstrap
        </div>
    </>
)

ReactDOM.render(<App/>,document.getElementById('root'));