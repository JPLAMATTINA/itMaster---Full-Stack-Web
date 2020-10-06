import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const enlaces = ['Home','Acerca de','Productos','Contacto']

const App = () =>(
  <main>
    <Titulo titulo="Italian Menu"/>
    <ul><Navegacion /></ul>
    <Formu item1="Pizza" item2="Canelones"/>
  </main>
)

const Titulo =(props)=> (
  <header>    
    <h1>{props.titulo}</h1>
  </header>
)

//Recorre el array enlaces utiliza el valor como texto visible y lo usa como href pasandolo a minúsculas y con replace le quita los espacios
const Navegacion = () =>(
  enlaces.map((enlace,i)=><li key={i}><a href={"/" + enlace.replace(' ', '').toLocaleLowerCase()}>{enlace}</a></li>)
  
)

const Formu = (props) =>(
  <form>
     <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
      </input>
          <label className="form-check-label" htmlFor="defaultCheck1">
            {props.item1}
          </label>
      </div>
      <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2">
    </input>
          <label className="form-check-label" htmlFor="defaultCheck2">
            {props.item2}
          </label>
    </div>
  </form>

)

ReactDOM.render(<App />,document.getElementById('root'));