import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const Listar = () => {
  const [posts, setPosts] = useState( [] )

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch(err => console.log(err.message))
  }

  useEffect(() => {
    getPosts()
  }, [posts])

  return (  
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  )
}

ReactDOM.render(<Listar />, document.getElementById('root'));