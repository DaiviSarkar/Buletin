import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Title from './components/Title';
import Mainnews from './components/Mainnews';
import News from './components/News';

function App() {
  return (
    <div className="App">
         <div className="container-fluid">
            <Navbar />
            <Title />
            <Mainnews />
            <News />
         </div>
    </div>
  );
}

export default App;
