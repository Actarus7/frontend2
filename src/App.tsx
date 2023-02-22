import React, { useState } from 'react';
import logo from './logo.svg';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import Accueil from './components/accueil';
import { Login } from './components/users/login';
import Trainings from './components/trainings/trainings';
import { Contact } from './components/contact';
import { Register } from './components/users/register';
import Articles from './components/articles/articles';

function App() {
  const [page, setPage] = useState('accueil');





  return (
    <div className="App">
      <header className="App-header">
        <Navbar setPage={setPage}></Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>


      <main>
        {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}
        {page === 'login' && <Login setPage={setPage}></Login>}
        {page === 'register' && <Register setPage={setPage}></Register>}
        {page === 'trainings' && <Trainings setPage={setPage}></Trainings>}
        {page === 'articles' && <Articles setPage={setPage}></Articles>}

        {page === 'contact' && <Contact setPage={setPage}></Contact>}



      </main>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
