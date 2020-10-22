import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Listar = () => {
  const [user, setUser] = useState([])
  //const [user, setUser] = useState( {name:"----",email:"---"} )

  const getUser = () => {
    // Traemos la info de un JSON online
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(user => setUser(user))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getUser()
  }, [])

  return (  
      <section>
        <h1>{user.name}</h1>
        <p>{user.email}</p>        
      </section>    
  )
}

ReactDOM.render(<Listar />, document.getElementById('root'));