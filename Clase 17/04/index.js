import React from 'react';
import ReactDOM from 'react-dom';

const nombres = ["Dami","Pedro","Ana","Juana"];

/*
function Componente () {
  let acumula = ""
  for(let nombre of nombres){
        acumula += nombre + " - "
  }      
return <p>{acumula}</p>;
}

// Las etiquetas quedan visibles
function Componente(){
  let acumula = "";
  for(let nombre of nombres){
    acumula += `<li>${nombre} (${nombre.length})</li>`
  }
  return <ul>{acumula}</ul>;
}
*/

const Componente =()=> nombres.map((nombre,i)=><li key={i}>{i} - {nombre} ({nombre.length})</li>)

ReactDOM.render(<ul><Componente /></ul>,document.getElementById('root'));