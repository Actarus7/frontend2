import React from 'react';
import logo from './logo.svg';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';

function App() {





  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

      </header>

      <main>
        <div>
          <p>Test</p>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
