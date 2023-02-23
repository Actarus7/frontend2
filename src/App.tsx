import React, { useState } from 'react';
// import logo from './logo.svg';
import { Navbar } from './components/navbars/navbar';
import { Footer } from './components/footer/footer';
import { Login } from './components/users/login';
import { Contact } from './components/contact/contact';
import { Register } from './components/users/register';
import { NavbarLogged } from './components/navbars/navbarLogged';
import Accueil from './components/accueil/accueil';
import Trainings from './components/trainings/trainings';
import Articles from './components/articles/articles';
import ProfilUser from './components/users/profil-user';

function App() {
  const [page, setPage] = useState('accueil');
  const [isLogged, setIsLogged] = useState(false);


  if (isLogged) {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarLogged setPage={setPage}></NavbarLogged>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>


        <main>
          {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}

          {page === 'mon profil' && <ProfilUser setPage={setPage}></ProfilUser>}
          {page === 'trainings' && <Trainings setPage={setPage}></Trainings>}
          {page === 'articles' && <Articles setPage={setPage}></Articles>}

          {page === 'contact' && <Contact setPage={setPage}></Contact>}



        </main>


        <footer>
          <Footer></Footer>
        </footer>
      </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <Navbar setPage={setPage}></Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>


      <main>
        {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}
        {page === 'login' && <Login setPage={setPage} setIsLogged={setIsLogged}></Login>}
        {page === 'register' && <Register setPage={setPage}></Register>}
        {page === 'trainings' && <Trainings setPage={setPage}></Trainings>}
        {page === 'contact' && <Contact setPage={setPage}></Contact>}



      </main>


      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
