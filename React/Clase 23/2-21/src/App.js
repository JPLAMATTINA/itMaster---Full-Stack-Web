import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'

//Home
const Usuarios = () => {    
    const [users, setUsers] = useState( [] )
    function getUsers() {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(users => setUsers(users))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getUsers()
    }, [])
  
    return (  
        <ul>
          {users.map(user => <li key={user.id}><Link to={"/usuario/"+user.id}>{user.name}</Link></li>)}        
        </ul>    
    )
  }

  const Usuario = () => {
    const [user, setUser] = useState( [] )
    // Parámetros de la url
    let parametros = useParams();
    const getUser = () => {
    // parametros.id es porque la variable se llama parametros y toma id porque en la línea <Route path="/usuario/:id"><Usuario/></Route> es :id
      fetch('https://jsonplaceholder.typicode.com/users/'+parametros.id)
        .then(response => response.json())
        .then(user => {setUser(user)})
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => { getUser();
        // Desactivar exhaustive-deps 
      // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])
        return (  
        <section>
          <h1>{ parametros.id } - {user.name}</h1>
          <p>Email: {user.email}</p>           
          <p><Link to="/">Regresar a la home</Link></p>
        </section>      
    )
  }


const App = () => (
    <div className="App">
      <header className="App-header">          
        <h1 className="App-title">Titulo del Mundo</h1>
      </header>
      <Switch>
        <Route exact path="/"><Usuarios/></Route>
        <Route path="/usuario/:id"><Usuario/></Route>
      </Switch>        
    </div>
  );
  export default App;