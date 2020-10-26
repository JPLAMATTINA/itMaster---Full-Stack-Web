import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


const Fotos = () => {
  const [albums, setAlbums] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesJson, setImagesJson] = useState([]);
  const [album, setAlbum] = useState ([]);
  
  useEffect( () => {
    const datos = () => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then( response => response.json() )
        .catch( error => console.log(error.message) )
        .then( images => {
          setImagesJson(images)
          var albums = [];
          for(let i = 1; i <= parseInt(images[images.length-1].albumId); i++){
            albums.push(i);
          }
          setAlbums(albums)
        })
    }
    
    datos();
  }, []);

  const mostrarAlbum = (event) => {
    setAlbum(event.target.value);
  }

  useEffect( () => {
    const res = imagesJson.filter( img => parseInt(img.albumId) === parseInt(album) );
    setImages(res);
  }, [album, imagesJson]);

  return(
    <div id="container">
      <h1>Album de imagenes</h1>
      <select id="album" onChange={mostrarAlbum}>
        <option value="0">Elegir Album...</option>
        {albums.map( id => (
          <option value={id} key={id}>{id}</option>
        ))}
      </select>
      
      {images.map( img =>
        <div className="imagen" key={img.id}>
          <h1>{img.id} - {img.title}</h1>
          <h2><span className="item">Album id:</span> {img.albumId}</h2>
          <img src={img.thumbnailUrl} alt={img.id} width="100" height="100"/>
        </div>
      )} 
    </div>
  );

}


ReactDOM.render( <Fotos/>, document.getElementById('root') );