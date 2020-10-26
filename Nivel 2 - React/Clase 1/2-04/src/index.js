import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

const App = (props) =>{  
  const [codigorandom, setRandom] = useState(); 
  const Random = ()=>{        
    var n = document.getElementById(props.sel).value
    const alfanum = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZabcdefghyjklmnñopqrstuvwxyz0123456789#!*"
    var caracteres = alfanum.length;
     let acumula = ""
      for( let i=0; i <n ;i++){
          acumula+= alfanum[Math.floor(Math.random()*caracteres)]
          }                      
          setRandom(acumula);
          
  }  
  return (
    <>      
      <label>Cantidad</label><br />
      <select id={props.sel}>            
          <option value="6">Seis</option>
          <option value="8">Ocho</option>
          <option value="12">Doce</option>
      </select>
      <br />
      <Button variant="contained" color="primary" onClick={Random}>
        Random
      </Button>
    {codigorandom?<p>{codigorandom}</p>:null}
    </>
  );
}

ReactDOM.render(<App sel="sel" />,document.getElementById('root'));