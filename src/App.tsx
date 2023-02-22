import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import Accueil from './components/accueil';
import { Apropos } from './components/apropos';

function App() {
  const [page, setPage] = useState('accueil');





  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>


      <main>
        <Accueil></Accueil>
        <Apropos></Apropos>
      </main>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
