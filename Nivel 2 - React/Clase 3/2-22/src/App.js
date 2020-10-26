import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,NavLink,useParams } from 'react-router-dom'

const Usuario = () => {
  const [user, setUser] = useState( [] )
  const [direccion, setDire] = useState( [] )
  let params = useParams();
  const getUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users/'+params.id)
      .then(response => response.json())
      .then(user => {setUser(user);setDire(user.address);})
      .catch(err => console.log(err.message))
  }


  useEffect(() => { getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
      return (  
      <section>
        <h1>{ params.id } - {user.name}</h1>
        <p>Email: {user.email}</p> 
        <p>Ciudad: {direccion.city}</p>   
        <p>Calle: {direccion.street}</p>   
        <p><Link to="/">Regresar a la home</Link></p>
      </section>
    
  )
}

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
          {users.map(user => <li key={user.id}><NavLink to={"/usuario/"+user.id}>{user.name}</NavLink></li>)}        
        </ul>
      
    )
  }

  const App = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Titulo del Mundo</h1>
          </header>
          <Switch>
            <Route exact path="/"><Usuarios/></Route>
            <Route exact path="/usuario/:id"><Usuario/></Route>
          </Switch>        
        </div>
      );
export default App;