import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

const Contador = () => {
  const [count, setCount] = useState(0)  
  useEffect(() => {
    // Actualiza el title de la página en cada click!
    document.title = `Has hecho clic ${count} veces`
    console.log(count)
  }, [count])

  return (
    <div>
      <span>El contador está a {count}</span> 
      <br/>
      <button onClick={() => setCount(count + 1)}>
        Incrementar contador
      </button>
    </div>
  )
}
// Ver ejemplo completo y explicacion en: https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/

ReactDOM.render(<Contador />, document.getElementById('root'));