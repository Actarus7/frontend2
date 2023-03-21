import React, { useState } from 'react';
import { Navbar } from './components/navbars/navbar';
import { Footer } from './components/footer/footer';
import { Login } from './components/users/login';
import { Contact } from './components/contact/contact';
import { Register } from './components/users/register';
import { NavbarLogged } from './components/navbars/navbarLogged';
import Accueil from './components/accueil/accueil';
import AllTrainings from './components/trainings/allTrainings';
import Articles from './components/articles/articles';
import ProfilUser from './components/users/profil-user';
import { TUser } from './types/TUser.type';
import VisitorTraining from './components/trainings/visitorTraining';

function App() {
  const [page, setPage] = useState('accueil');
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState('');
  const [userLogged, setUserLogged] = useState<TUser | null>(null);

  const [username, setUsername] = useState('');

  const handleLogout = () => {
    setIsLogged(false);
    setToken("");
    setUsername("");
    setPage("login");
  };

  // Affichage de la Navbar "spéciale user connecté" si Login Ok
  if (isLogged) {
    return (
      <div className="App">
        <header className="App-header">
          <NavbarLogged setPage={setPage} logout={handleLogout} /*handleAddFriend={handleAddFriend}*/></NavbarLogged>
          {/* { <img src={logo} className="App-logo" alt="logo" /> } */}
        </header>

        <main>
          {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}
          {page === 'mon profil' && <ProfilUser setPage={setPage} token={token} pseudo={username} ></ProfilUser>}
          {page === 'trainings' && <AllTrainings setPage={setPage} token={token}/>}
          {page === 'articles' && <Articles setPage={setPage} token={token} user={userLogged}></Articles>}

          {page === 'contact' && <Contact setPage={setPage}></Contact>}



        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  };


  // Affichage de la Navbar "classique"
  return (
    <div className="App">
      <header className="App-header">
        <Navbar setPage={setPage}></Navbar>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <main>
        {page === 'accueil' && <Accueil setPage={setPage}></Accueil>}
        {page === 'login' && <Login setPage={setPage} setIsLogged={setIsLogged} setToken={setToken} setUserLogged={setUserLogged} setUsername={setUsername}></Login>}
        {page === 'register' && <Register setPage={setPage}></Register>}
        {page === 'trainings' && <VisitorTraining setPage={setPage}/>}
        {page === 'contact' && <Contact setPage={setPage}></Contact>}



      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
