import React from 'react';
import './App.css';
import PhotoList from './container/PhotoList/PhotoList'

function App() {
  return (
    <div className="App">
      <header><h1 className="title">Photo Album</h1></header>
      <PhotoList/>
    </div>
  );
}

export default App;
