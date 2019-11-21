import React from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';
import './static/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='pollDiv'>
        <Container />
      </div>
    </div>
  );
}

export default App;
