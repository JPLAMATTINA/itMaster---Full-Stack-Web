import React from 'react';
import ReactDOM from 'react-dom';

// Props son parámetros del arrow function. El prop se indica como atributo cuando se llama al componente
const Header = (props) =>(
  <header>
    <h1>{props.th1}</h1>
  </header>
)

const Pelicula = (props) => (
  <div className="card">
      <img src={props.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
          <h5 className="card-title">{props.titulo} <span className="year">({props.year})</span></h5>
          <p className="card-text">{props.director}</p>
          <a href="/" className="btn btn-primary">{props.linktext}</a>
      </div>
  </div>     
)

const Peliculas = (props) =>(
  <main>
      <Header th1="Mis mejores películas favoritas" />
      <section>
        {/* 
            Llamada al componente de React Pelicula
            Los atributos (titulo, year ...) son los props de componente
        */}
        <Pelicula titulo="Back to the Future" year="1985" director="Robert Zemeckis" imagen="https://via.placeholder.com/150/0000FF/808080" linktext={props.textolinkpelis} />
        <Pelicula titulo="Back to the Future II" year="1989" director="Robert Zemeckis" imagen="https://via.placeholder.com/150/f9001F/ff8080" linktext={props.textolinkpelis}/>
        <Pelicula titulo="Back to the Future III" year="1990" director="Robert Zemeckis" imagen="https://via.placeholder.com/150/000EEE/F58080" linktext={props.textolinkpelis}/>
      </section>
  </main>
)


// textolinkpelis es un atributo que hace referencia al props.textolinkpelis del componente películas
ReactDOM.render(<Peliculas textolinkpelis="Ver mas info"/>, document.getElementById('root'));