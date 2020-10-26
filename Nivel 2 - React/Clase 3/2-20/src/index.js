import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const App = () =>{
  const [posts, setPosts] = useState([]);
  const [postsJson, setPostsJson] = useState([]);
  const [number, setNumber] = useState (10);
  
  useEffect( () => {
    const datos = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then( response => response.json() )
        .catch( err => console.log(err.message) )
        .then( posts => setPostsJson(posts) )
    }
    
    datos();
  }, []);

  const handleChange = (event) => {
    setNumber(event.target.value);
  }

  useEffect( () => {
    const res = postsJson.slice(0, number)
    setPosts(res);
  }, [number, postsJson]);


  return(
    <div id="container">
      <h1>Lista de posts</h1>
      <label>Cantidad de Posts</label>
      <input type="number" min="10" max="100" step="10" value={number} onChange={handleChange}/>
      
      {posts.map( post =>
        <div className="post" key={post.id}>
          <h1><span className="id">{post.id}</span> <span className="title">{post.title}</span></h1>
          <p>{post.body}</p>
        </div>
      )} 
    </div>
  );

}


ReactDOM.render( <App/>, document.getElementById('root') );