import React from 'react';
import ReactDOM from 'react-dom';

const nombres = ["Dami","Pedro","Ana","Juana"];

const nombres2 = ["Eduardo","Oscar","Roberto","Carlos"];

const Lista =()=> nombres.map((nombre,i)=><li key={i}>{i+1} {nombre} ({nombre.length})</li>)

// Filter se combina con map para filtrar con una condición. Ejemplo el length del nombre es mayor que 5. Parecido a cuando hacemos if(nombre.length >5)
const ListaFiltrada =()=> nombres2.filter(nombre => nombre.length >5).map((nombre,i)=><li key={i}>{nombre}</li>)

/*
//Equivalente al filter anterior
function ListaFiltrada(){
  let acumula = ""
  for(let nombre of nombres){
    if(nombre.length >5){
      acumula += `<li>${nombre}</li>`
    }
  }
  return acumula;
}
*/

const Componente =()=> (
  <>
    <ul><Lista/></ul>
    <hr/>
    <ul><ListaFiltrada/></ul>
  </>
)

ReactDOM.render(<Componente />, document.getElementById('root'));